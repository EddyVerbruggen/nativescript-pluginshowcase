import {
  ARBase,
  ARAddBoxOptions,
  ARAddModelOptions,
  ARAddSphereOptions,
  ARAddTubeOptions,
  ARDebugLevel,
  ARNode,
  ARPlaneTappedEventData,
  ARPosition
} from "./ar-common";
import { ARMaterial } from "./nodes/ios/armaterial";
import { ARBox } from "./nodes/ios/arbox";
import { ARCommonNode } from "./nodes/ios/arcommon";
import { ARPlane } from "./nodes/ios/arplane";
import { ARModel } from "./nodes/ios/armodel";
import { ARSphere } from "./nodes/ios/arsphere";
import { ARTube } from "./nodes/ios/artube";

export { ARDebugLevel };

const ARState = {
  planes: new Map<string, ARPlane>(),
  shapes: new Map<string, ARCommonNode>(),
};

export class AR extends ARBase {
  sceneView: ARSCNView;
  private configuration: ARWorldTrackingConfiguration;
  private delegate: ARSCNViewDelegateImpl;
  private physicsWorldContactDelegate: SCNPhysicsContactDelegateImpl;
  private sceneTapHandler: SceneTapHandlerImpl;
  private sceneLongPressHandler: SceneLongPressHandlerImpl;

  static isSupported(): boolean {
    try {
      return !!ARSCNView;
    } catch (ignore) {
      return false;
    }
  }

  public setDebugLevel(to: ARDebugLevel): void {
    if (!this.sceneView) {
      return;
    }
    if (to === ARDebugLevel.WORLD_ORIGIN) {
      this.sceneView.debugOptions = ARSCNDebugOptionShowWorldOrigin;
    } else if (to === ARDebugLevel.FEATURE_POINTS) {
      this.sceneView.debugOptions = ARSCNDebugOptionShowFeaturePoints;
    } else if (to === ARDebugLevel.PHYSICS_SHAPES) {
      this.sceneView.debugOptions = SCNDebugOptions.ShowPhysicsShapes;
    } else {
      this.sceneView.debugOptions = SCNDebugOptions.None;
    }
  }

  public toggleStatistics(on: boolean): void {
    if (!this.sceneView) {
      return;
    }
    this.sceneView.showsStatistics = on;
  }

  public togglePlaneDetection(on: boolean): void {
    if (!this.sceneView) {
      return;
    }
    this.configuration.planeDetection = on ? ARPlaneDetection.Horizontal : ARPlaneDetection.None;
    this.sceneView.session.runWithConfiguration(this.configuration);
  }

  public togglePlaneVisibility(on: boolean): void {
    // TODO pass in material
    ARState.planes.forEach(plane => {
      plane.setMaterial(ARMaterial.getMaterial("tron"), !on);
    });
  }

  private initAR() {
    if (!AR.isSupported()) {
      return;
    }

    this.configuration = ARWorldTrackingConfiguration.new();
    this.configuration.lightEstimationEnabled = true;

    this.sceneView = ARSCNView.new();
    this.sceneView.delegate = this.delegate = ARSCNViewDelegateImpl.createWithOwnerResultCallbackAndOptions(
        new WeakRef(this),
        data => {
        },
        {});

    // TODO depends on properties on the <AR> tag
    this.toggleStatistics(true);
    // this.setDebugLevel(ARDebugLevel.FEATURE_POINTS);
    this.togglePlaneDetection(true);

    // enabling these lines often result in an error: 'sensor failed to deliver [..] Make sure that the application has the required privacy settings'
    this.sceneView.autoenablesDefaultLighting = true;
    this.sceneView.automaticallyUpdatesLighting = true;
    this.sceneView.scene.rootNode.name = "root";

    const scene = SCNScene.new();
    this.sceneView.scene = scene;

    // tweak with delegate, see https://github.com/markdaws/arkit-by-example/blob/master/arkit-by-example/ViewController.m
    // const env = UIImage.imageNamed("./Assets.scnassets/Environment/spherical.jpg");
    // scene.lightingEnvironment.contents = env;

    this.addBottomPlane(scene);

    // register a tap handler to add an object to the scene (this will become an 'onTap' callback in the plugin)
    this.sceneTapHandler = SceneTapHandlerImpl.initWithOwner(new WeakRef(this));
    const tapGestureRecognizer = UITapGestureRecognizer.alloc().initWithTargetAction(this.sceneTapHandler, "tap");
    tapGestureRecognizer.numberOfTapsRequired = 1;
    this.sceneView.addGestureRecognizer(tapGestureRecognizer);

    // register a longPress handler to remove an object fromn the scene (this will become an 'onLongPress' callback in the plugin)
    this.sceneLongPressHandler = SceneLongPressHandlerImpl.initWithOwner(new WeakRef(this));
    const longPressGestureRecognizer = UILongPressGestureRecognizer.alloc().initWithTargetAction(this.sceneLongPressHandler, "longpress");
    longPressGestureRecognizer.minimumPressDuration = 0.5;
    this.sceneView.addGestureRecognizer(longPressGestureRecognizer);

    // make things look pretty
    this.sceneView.antialiasingMode = SCNAntialiasingMode.Multisampling4X;

    this.nativeView.addSubview(this.sceneView);

    this.notify({
      eventName: AR.arLoadedEvent,
      object: this, /* AR */
      ios: this.sceneView /* ARSCNView */
    });
  }

  private addBottomPlane(scene): void {
    // For our physics interactions, we place a large node a couple of meters below the world
    // origin, after an explosion, if the geometry we added has fallen onto this surface which
    // is place way below all of the surfaces we would have detected via ARKit then we consider
    // this geometry to have fallen out of the world and remove it.
    const bottomPlane = SCNBox.boxWithWidthHeightLengthChamferRadius(1000, 0.5, 1000, 0);

    const bottomMaterial = SCNMaterial.new();
    bottomMaterial.diffuse.contents = UIColor.colorWithWhiteAlpha(1.0, 0.0);
    const materialArray: NSMutableArray<any> = NSMutableArray.alloc().initWithCapacity(6);
    materialArray.addObject(bottomMaterial);
    bottomPlane.materials = materialArray;

    const bottomNode = SCNNode.nodeWithGeometry(bottomPlane);
    // position the plane 25 meters below our plane
    bottomNode.position = new ARPosition(0, -25, 0);
    bottomNode.physicsBody = SCNPhysicsBody.bodyWithTypeShape(SCNPhysicsBodyType.Kinematic, null);
    bottomNode.physicsBody.categoryBitMask = 0; // CollisionCategoryBottom;
    bottomNode.physicsBody.contactTestBitMask = 1; // CollisionCategoryCube;
    scene.rootNode.addChildNode(bottomNode);
    scene.physicsWorld.contactDelegate = this.physicsWorldContactDelegate = SCNPhysicsContactDelegateImpl.createWithOwner(new WeakRef(this));
  }

  public createNativeView(): Object {
    let v = super.createNativeView();
    this.initAR();
    return v;
  }

  public onLayout(left: number, top: number, right: number, bottom: number): void {
    super.onLayout(left, top, right, bottom);
    if (this.sceneView) {
      this.sceneView.layer.frame = this.ios.layer.bounds;
    }
  }

  public sceneLongPressed(recognizer: UITapGestureRecognizer): void {
    if (recognizer.state !== UIGestureRecognizerState.Began) {
      return;
    }

    // Perform a hit test using the screen coordinates to see if the user pressed any 3D geometry.
    const hitTestResults: NSArray<SCNHitTestResult> =
        this.sceneView.hitTestOptions(
            recognizer.locationInView(this.sceneView),
            <any>{
              SCNHitTestBoundingBoxOnlyKey: true,
              SCNHitTestFirstFoundOnlyKey: true
            });

    if (hitTestResults.count === 0) {
      return;
    }

    const hitResult: SCNHitTestResult = hitTestResults.firstObject;
    const savedModel = ARState.shapes.get(hitResult.node.name);

    if (savedModel) {
      savedModel.onLongPress();
    }
  }

  public sceneTapped(recognizer: UITapGestureRecognizer): void {
    const tapPoint = recognizer.locationInView(this.sceneView);
    const hitTestResults: NSArray<ARHitTestResult> = this.sceneView.hitTestTypes(tapPoint, ARHitTestResultType.ExistingPlaneUsingExtent);
    if (hitTestResults.count === 0) {
      return;
    }

    const hitResult: ARHitTestResult = hitTestResults.firstObject;

    // Currently, in {N} hitResult.worldTransform is undefined so let's hack around it :(
    const hitResultStr = "" + hitResult;
    const transformStart = hitResultStr.indexOf("worldTransform=<translation=(") + "worldTransform=<translation=(".length;
    const transformStr = hitResultStr.substring(transformStart, hitResultStr.indexOf(")", transformStart));
    const transformParts = transformStr.split(" ");

    // also figure out if an object was tapped:
    let node: SCNNode = this.sceneView.nodeForAnchor(hitResult.anchor);

    // only send a 'plane tapped' event if no object (on that plane) was tapped
    let existingItemTapped = false;

    if (node !== undefined) {
      const parentNode = node.parentNode;
      const savedModel = ARState.shapes.get(parentNode.name);
      if (savedModel) {
        savedModel.onTap();
        existingItemTapped = true;
      }
    }

    if (!existingItemTapped) {
      const eventData: ARPlaneTappedEventData = {
        eventName: ARBase.planeTappedEvent,
        object: this,
        position: {
          x: +transformParts[0],
          y: +transformParts[1],
          z: +transformParts[2]
        }
      };
      this.notify(eventData);
    }
  }

  addModel(options: ARAddModelOptions): Promise<ARNode> {
    return new Promise((resolve, reject) => {
      const model: ARModel = ARModel.create(options);
      ARState.shapes.set(model.id, model);
      this.sceneView.scene.rootNode.addChildNode(model.ios);
      resolve(model);
    });
  }

  addBox(options: ARAddBoxOptions): Promise<ARNode> {
    return new Promise((resolve, reject) => {
      const box: ARBox = ARBox.create(options);
      ARState.shapes.set(box.id, box);
      this.sceneView.scene.rootNode.addChildNode(box.ios);
      resolve(box);
    });
  }

  addSphere(options: ARAddSphereOptions): Promise<ARNode> {
    return new Promise((resolve, reject) => {
      const sphere: ARSphere = ARSphere.create(options);
      ARState.shapes.set(sphere.id, sphere);
      this.sceneView.scene.rootNode.addChildNode(sphere.ios);
      resolve(sphere);
    });
  }

  addTube(options: ARAddTubeOptions): Promise<ARNode> {
    return new Promise((resolve, reject) => {
      const tube: ARTube = ARTube.create(options);
      ARState.shapes.set(tube.id, tube);
      this.sceneView.scene.rootNode.addChildNode(tube.ios);
      resolve(tube);
    });
  }

  public reset(): void {
    ARState.planes.forEach(plane => plane.remove());
    ARState.planes.clear();
    ARState.shapes.forEach(node => node.remove());
    ARState.shapes.clear();
    // I think we need to reset more in order for plane detection to work again..
  }
}

class SceneTapHandlerImpl extends NSObject {
  private _owner: WeakRef<AR>;

  public static initWithOwner(owner: WeakRef<AR>): SceneTapHandlerImpl {
    let handler = <SceneTapHandlerImpl>SceneTapHandlerImpl.new();
    handler._owner = owner;
    return handler;
  }

  public tap(args: UITapGestureRecognizer): void {
    this._owner.get().sceneTapped(args);
  }

  public static ObjCExposedMethods = {
    "tap": {returns: interop.types.void, params: [interop.types.id]}
  };
}

class SceneLongPressHandlerImpl extends NSObject {
  private _owner: WeakRef<AR>;

  public static initWithOwner(owner: WeakRef<AR>): SceneLongPressHandlerImpl {
    let handler = <SceneLongPressHandlerImpl>SceneLongPressHandlerImpl.new();
    handler._owner = owner;
    return handler;
  }

  public longpress(args: UITapGestureRecognizer): void {
    this._owner.get().sceneLongPressed(args);
  }

  public static ObjCExposedMethods = {
    "longpress": {returns: interop.types.void, params: [interop.types.id]}
  };
}

class ARSCNViewDelegateImpl extends NSObject implements ARSCNViewDelegate {
  public static ObjCProtocols = [];

  private owner: WeakRef<AR>;
  private resultCallback: (message: any) => void;
  private options?: any;
  private currentTrackingState = ARTrackingState.Normal;

  public static new(): ARSCNViewDelegateImpl {
    try {
      ARSCNViewDelegateImpl.ObjCProtocols.push(ARSCNViewDelegate);
    } catch (ignore) {
    }
    return <ARSCNViewDelegateImpl>super.new();
  }

  public static createWithOwnerResultCallbackAndOptions(owner: WeakRef<AR>, callback: (message: any) => void, options?: any): ARSCNViewDelegateImpl {
    let delegate = <ARSCNViewDelegateImpl>ARSCNViewDelegateImpl.new();
    delegate.owner = owner;
    delegate.options = options;
    delegate.resultCallback = callback;
    return delegate;
  }

  /*
  rendererUpdateAtTime(): void {
    const ar: AR = this.owner.get();
    if (!ar.sceneView.session.currentFrame) {
      return;
    }
    const lightEstimate = ar.sceneView.session.currentFrame.lightEstimate;
    if (!lightEstimate) {
      return;
    }

    // A value of 1000 is considered neutral, lighting environment intensity normalizes
    // 1.0 to neutral so we need to scale the ambientIntensity value.
    const intensity = lightEstimate.ambientIntensity / 1000.0;
    ar.sceneView.scene.lightingEnvironment.intensity = intensity;
  }
  */

  sessionDidFailWithError(session: ARSession, error: NSError): void {
    // TODO inform the user
    console.log(">>> sessionDidFailWithError: " + error);
  }

  sessionWasInterrupted(session: ARSession): void {
    // TODO inform the user that the session has been interrupted because of fi. an overlay, or being put in to the background).
    console.log(">>> sessionWasInterrupted: The tracking session has been interrupted. The session will be reset once the interruption has completed");
  }

  sessionInterruptionEnded(session: ARSession): void {
    console.log(">>> sessionInterruptionEnded, calling reset");
    // Reset tracking and/or remove existing anchors if consistent tracking is required
    this.owner.get().reset();
  }

  sessionCameraDidChangeTrackingState(session: ARSession, camera: ARCamera): void {
    const trackingState = camera.trackingState;
    console.log(">>> sessionCameraDidChangeTrackingState: " + trackingState);
    if (this.currentTrackingState === trackingState) {
      return;
    }

    this.currentTrackingState = trackingState;
    if (trackingState === ARTrackingState.NotAvailable) {

    } else if (trackingState === ARTrackingState.Limited) {
      const reason = camera.trackingStateReason;
      console.log(">>> sessionCameraDidChangeTrackingState, reason: " + reason);
      if (reason === ARTrackingStateReason.ExcessiveMotion) {

      } else if (reason === ARTrackingStateReason.InsufficientFeatures) {

      } else if (reason === ARTrackingStateReason.Initializing) {

      } else if (reason === ARTrackingStateReason.None) {

      }

    } else if (trackingState === ARTrackingState.Normal) {

    }
  }

  rendererDidAddNodeForAnchor(renderer: SCNSceneRenderer, node: SCNNode, anchor: ARAnchor): void {
    if (anchor instanceof ARPlaneAnchor) {
      const owner = this.owner.get();
      // When a new plane is detected we create a new SceneKit plane to visualize it in 3D
      const plane: ARPlane = ARPlane.create(anchor, false, ARMaterial.getMaterial("tron"));
      ARState.planes.set(anchor.identifier.UUIDString, plane);
      node.addChildNode(plane.ios);

      owner.notify({
        eventName: AR.planeDetectedEvent,
        object: owner, /* AR */
        plane: plane /* ARPlane */
      });
    }
  }

  rendererDidUpdateNodeForAnchor(renderer: SCNSceneRenderer, node: SCNNode, anchor: ARAnchor): void {
    const plane: ARPlane = ARState.planes.get(anchor.identifier.UUIDString);
    if (plane) {
      plane.update(anchor);
    }
  }

  rendererDidRemoveNodeForAnchor(renderer: SCNSceneRenderer, node: SCNNode, anchor: ARAnchor): void {
    ARState.planes.delete(anchor.identifier.UUIDString);
  }
}

class SCNPhysicsContactDelegateImpl extends NSObject implements SCNPhysicsContactDelegate {
  public static ObjCProtocols = [SCNPhysicsContactDelegate];

  private owner: WeakRef<AR>;

  public static new(): SCNPhysicsContactDelegateImpl {
    return <SCNPhysicsContactDelegateImpl>super.new();
  }

  public static createWithOwner(owner: WeakRef<AR>): SCNPhysicsContactDelegateImpl {
    let delegate = <SCNPhysicsContactDelegateImpl>SCNPhysicsContactDelegateImpl.new();
    delegate.owner = owner;
    return delegate;
  }

  physicsWorldDidBeginContact(world: SCNPhysicsWorld, contact: SCNPhysicsContact): void {
    // Here we detect a collision between pieces of geometry in the world, if one of the pieces
    // of geometry is the bottom plane it means the geometry has fallen out of the world. Then just remove it.
    const contactMask = contact.nodeA.physicsBody.categoryBitMask | contact.nodeB.physicsBody.categoryBitMask;
    // Avoid removing the bottom plane, so figure out which it is
    if (contactMask === (0 /* CollisionCategoryBottom */ | 1 /* CollisionCategoryCube */)) {
      if (contact.nodeA.physicsBody.categoryBitMask === 0 /* CollisionCategoryBottom */) {
        contact.nodeB.removeFromParentNode();
      } else {
        contact.nodeA.removeFromParentNode();
      }
    }
  }

  physicsWorldDidEndContact(world: SCNPhysicsWorld, contact: SCNPhysicsContact): void {
    // console.log(">>> SCNPhysicsContactDelegateImpl.physicsWorldDidEndContact");
  }

  physicsWorldDidUpdateContact(world: SCNPhysicsWorld, contact: SCNPhysicsContact): void {
    // console.log(">>> SCNPhysicsContactDelegateImpl.physicsWorldDidUpdateContact");
  }
}


