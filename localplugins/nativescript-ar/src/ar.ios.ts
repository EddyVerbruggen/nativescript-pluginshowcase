import { Color } from "tns-core-modules/color";
import {
  AR as ARBase, ARAddCubeOptions, ARAddModelOptions, ARDebugLevel, ARNode, ARNodePrivate, ARPlaneTappedEventData,
  ARPosition, IARPlane
} from "./ar-common";

export { ARDebugLevel };

const ARState = {
  planes: new Map<string, ARPlane>(),
  models: new Map<string, ARModel>(),
  // models: new Array<ARModel>(),
  cubes: new Array<ARCube>()
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
    this.setDebugLevel(ARDebugLevel.FEATURE_POINTS);
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
    bottomNode.position = new ARPosition(0, -10, 0);
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
    const savedModel = ARState.models.get(hitResult.node.name);

    if (savedModel) {
      savedModel.onLongPress();
    } else if (hitResult.node.parentNode instanceof ARCube) {
      (<ARCube>hitResult.node.parentNode).onLongPress();
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
      const savedModel = ARState.models.get(parentNode.name);
      if (savedModel) {
        savedModel.onTap();
        existingItemTapped = true;
      } else if (parentNode instanceof ARCube) {
        const parent: ARCube = <ARCube>parentNode;
        parent.onTap();
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

  // TODO promise makes more sense (so we can reject it in case of trouble, etc)
  addModel(options: ARAddModelOptions): Promise<ARNode> {
    return new Promise((resolve, reject) => {
      const model: ARModel = ARModel.create(
          options.position,
          options.scale instanceof ARPosition ? options.scale : {x: options.scale, y: options.scale, z: options.scale},
          options.mass || 0,
          options.name,
          options.childNodeName);
      model.onTapHandler = options.onTap;
      model.onLongPressHandler = options.onLongPress;
      ARState.models.set(model.name, model);
      this.sceneView.scene.rootNode.addChildNode(model.ios);
      resolve(model);
    });
  }

  addCube(options: ARAddCubeOptions): Promise<ARNode> {
    return new Promise((resolve, reject) => {
      const cube: ARCube = ARCube.create(
          options.position,
          options.scale instanceof ARPosition ? options.scale : {x: options.scale, y: options.scale, z: options.scale},
          options.mass || 0,
          options.material ? ARMaterial.getMaterial(options.material) : null);
      cube.onTapHandler = options.onTap;
      cube.onLongPressHandler = options.onLongPress;
      ARState.cubes.push(cube);
      this.sceneView.scene.rootNode.addChildNode(cube);
      resolve(cube);
    });
  }

  public reset(): void {
    ARState.planes.forEach(plane => plane.remove());
    ARState.planes.clear();
    ARState.cubes.forEach(cube => cube.remove());
    ARState.cubes = [];
    ARState.models.forEach(model => model.remove());
    // ARState.models = [];
    ARState.models.clear();
    // I think we need to reset more in order for plane detection to work again..
  }

  protected updateBorderRadius(radius: number) {
    if (radius) {
      // this._gradientLayer.cornerRadius = radius;
    }
  }

  protected updateColors(colors?: Color[]): void {
  }

  protected updateDirection(direction?: string): void {
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

// TODO don't extend SCNNode
export class ARCube extends SCNNode implements ARNodePrivate {
  onTapHandler?: (model: ARNode) => void;
  onLongPressHandler?: (model: ARNode) => void;

  static create(position: ARPosition, scale: ARPosition, mass: number, material: SCNMaterial) {
    const instance = <ARCube>super.new();

    const cube = SCNBox.boxWithWidthHeightLengthChamferRadius(scale.x, scale.y, scale.z, 0.0);

    // make the box look nice
    const materialArray: NSMutableArray<any> = NSMutableArray.alloc().initWithCapacity(1);
    materialArray.addObject(material);
    cube.materials = materialArray;

    // The node that wraps the geometry so we can add it to the scene
    const boxNode = SCNNode.nodeWithGeometry(cube);

    // The physicsBody tells SceneKit this geometry should be manipulated by the physics engine
    boxNode.physicsBody = SCNPhysicsBody.bodyWithTypeShape(SCNPhysicsBodyType.Dynamic, null);
    boxNode.physicsBody.mass = mass;
    boxNode.physicsBody.categoryBitMask = 1; // CollisionCategoryCube

    boxNode.position = position;
    instance.addChildNode(boxNode);
    return instance;
  }

  onTap(): void {
    this.onTapHandler && this.onTapHandler(this);
  }

  onLongPress(): void {
    this.onLongPressHandler && this.onLongPressHandler(this);
  }

  remove(): void {
    const storedIndex = ARState.cubes.indexOf(this);
    if (storedIndex > -1) {
      ARState.cubes.splice(storedIndex, 1);
    }
    this.removeFromParentNode();
  }
}

export class ARModel implements ARNodePrivate {
  public name: string;
  public ios: SCNNode;
  onTapHandler?: (model: ARNode) => void;
  onLongPressHandler?: (model: ARNode) => void;

  // note that these babies can be cloned, look for 'clone' at http://jamesonquave.com/blog/arkit-tutorial-in-swift-4-for-xcode-9-using-scenekit/
  static create(position: ARPosition, scale: ARPosition, mass: number, name: string, childNodeName?: string) {
    const instance = new ARModel();

    let modelScene = SCNScene.sceneNamed(name);
    let nodeModel = childNodeName ? modelScene.rootNode.childNodeWithNameRecursively(childNodeName, true) : modelScene.rootNode;
    nodeModel.position = position;
    nodeModel.scale = scale;
    // "generate" a name so we can easily correlate these
    nodeModel.name = instance.name = (name + "_" + new Date().getTime());
    nodeModel.physicsBody = SCNPhysicsBody.bodyWithTypeShape(SCNPhysicsBodyType.Dynamic, null);
    nodeModel.physicsBody.mass = mass;
    nodeModel.physicsBody.categoryBitMask = 1; // CollisionCategoryCube

    instance.ios = nodeModel;
    return instance;
  }

  onTap(): void {
    this.onTapHandler && this.onTapHandler(this);
  }

  onLongPress(): void {
    this.onLongPressHandler && this.onLongPressHandler(this);
  }

  remove(): void {
    ARState.models.delete(this.name);
    this.ios.removeFromParentNode();
  }
}

export class ARPlane implements IARPlane {
  private planeGeometry: SCNBox;
  private anchor: ARAnchor;

  id: string;
  position: ARPosition;
  ios: SCNNode;

  static create(anchor: ARAnchor, hidden: boolean, material: SCNMaterial) {
    const instance = new ARPlane();
    instance.ios = SCNNode.new();
    instance.anchor = anchor;

    // anchor.extent is undefined so we need to hack to extract it :(
    const anchorstr = "" + anchor;
    console.log(anchorstr);

    const extentStart = anchorstr.indexOf("extent=(") + "extent=(".length;
    const extentStr = anchorstr.substring(extentStart, anchorstr.indexOf(")", extentStart));
    const extendParts = extentStr.split(" ");
    const planeHeight = 0.01;
    instance.planeGeometry = SCNBox.boxWithWidthHeightLengthChamferRadius(+extendParts[0], planeHeight, +extendParts[2], 0);

    const translationStart = anchorstr.indexOf("<translation=(") + "<translation=(".length;
    const translationStr = anchorstr.substring(translationStart, anchorstr.indexOf(")", translationStart));
    const translationParts = translationStr.split(" ");
    instance.position = new ARPosition(+translationParts[0], +translationParts[1], +translationParts[2]);

    instance.setMaterial(material, false);

    const planeNode = SCNNode.nodeWithGeometry(instance.planeGeometry);
    planeNode.position = {x: 0, y: -planeHeight / 2, z: 0};
    planeNode.physicsBody = SCNPhysicsBody.bodyWithTypeShape(
        SCNPhysicsBodyType.Kinematic,
        SCNPhysicsShape.shapeWithGeometryOptions(instance.planeGeometry, null));

    ARPlane.setTextureScale(instance.planeGeometry);

    instance.ios.addChildNode(planeNode);
    instance.id = instance.anchor.identifier.UUIDString;
    return instance;
  }

  setMaterial(material: SCNMaterial, hidden: boolean): void {
    const transparentMaterial = SCNMaterial.new();
    transparentMaterial.diffuse.contents = UIColor.colorWithWhiteAlpha(1.0, 0.0);

    const materialArray: NSMutableArray<any> = NSMutableArray.alloc().initWithCapacity(6);
    materialArray.addObject(transparentMaterial);
    materialArray.addObject(transparentMaterial);
    materialArray.addObject(transparentMaterial);
    materialArray.addObject(transparentMaterial);
    if (hidden) {
      materialArray.addObject(transparentMaterial);
      materialArray.addObject(transparentMaterial);
      this.planeGeometry.materials = materialArray;
    } else {
      // make the plane not stand out too much
      material.transparency = 0.4;
      materialArray.addObject(material);
      materialArray.addObject(transparentMaterial);
      this.planeGeometry.materials = materialArray;
    }
  }

  update(anchor: any) {
    // anchor.extent is undefined so we need to hack to extract it
    const anchorstr = "" + anchor;
    const extentStart = anchorstr.indexOf("extent=(") + "extent=(".length;
    const extentStr = anchorstr.substring(extentStart, anchorstr.indexOf(")", extentStart));
    const extendParts = extentStr.split(" ");

    // if this was a wrapper class we can have a 'planeGeometry' property there without using 'plany: any'
    this.planeGeometry.width = +extendParts[0];
    this.planeGeometry.length = +extendParts[2];

    const centerStart = anchorstr.indexOf("center=(") + "center=(".length;
    const centerStr = anchorstr.substring(centerStart, anchorstr.indexOf(")", centerStart));
    const centerParts = centerStr.split(" ");

    this.ios.position = {x: +centerParts[0], y: 0, z: +centerParts[2]};

    const childNode = this.ios.childNodes.firstObject;
    childNode.physicsBody = SCNPhysicsBody.bodyWithTypeShape(
        SCNPhysicsBodyType.Kinematic,
        SCNPhysicsShape.shapeWithGeometryOptions(this.planeGeometry, null));

    ARPlane.setTextureScale(this.planeGeometry);
  }

  remove() {
    this.ios.removeFromParentNode();
    // removal from the global 'planes' property is done at 'rendererDidRemoveNodeForAnchor'
  }

  private static setTextureScale(planeGeometry: SCNBox): void {
    const width = planeGeometry.width;
    const height = planeGeometry.length;
    const material = planeGeometry.materials[4];
    const scaleFactor = 1;

    // because this commented line is not possible, we do it differently:
    // const m = {sx: width * scaleFactor, sy: height * scaleFactor, sz: 1};
    const m = new SCNMatrix4();
    m.m11 = width * scaleFactor;
    m.m22 = height * scaleFactor;
    m.m33 = 1;

    material.diffuse.contentsTransform = m;
    material.roughness.contentsTransform = m;
    material.metalness.contentsTransform = m;
    material.normal.contentsTransform = m;
  }
}

export class ARMaterial {
  static getMaterial(named): SCNMaterial {
    const mat = SCNMaterial.new();
    mat.lightingModelName = SCNLightingModelPhysicallyBased;
    mat.diffuse.contents = UIImage.imageNamed(`./Assets.scnassets/Materials/${named}/${named}-albedo.png`);
    mat.roughness.contents = UIImage.imageNamed(`./Assets.scnassets/Materials/${named}/${named}-roughness.png`);
    mat.metalness.contents = UIImage.imageNamed(`./Assets.scnassets/Materials/${named}/${named}-metal.png`);
    mat.normal.contents = UIImage.imageNamed(`./Assets.scnassets/Materials/${named}/${named}-normal.png`);
    mat.diffuse.wrapS = SCNWrapMode.Repeat;
    mat.diffuse.wrapT = SCNWrapMode.Repeat;
    mat.roughness.wrapS = SCNWrapMode.Repeat;
    mat.roughness.wrapT = SCNWrapMode.Repeat;
    mat.metalness.wrapS = SCNWrapMode.Repeat;
    mat.metalness.wrapT = SCNWrapMode.Repeat;
    mat.normal.wrapS = SCNWrapMode.Repeat;
    mat.normal.wrapT = SCNWrapMode.Repeat;
    return mat;
  }
}
