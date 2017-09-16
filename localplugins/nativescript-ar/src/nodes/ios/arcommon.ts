import { ARAddOptions, ARNode, ARPosition } from "../../ar-common";

export abstract class ARCommonNode implements ARNode {
  id: string;
  ios: SCNNode;
  position: ARPosition;
  onTapHandler?: (model: ARNode) => void;
  onLongPressHandler?: (model: ARNode) => void;

  constructor(options: ARAddOptions, node: SCNNode) {
    this.onTapHandler = options.onTap;
    this.onLongPressHandler = options.onLongPress;
    node.position = this.position = options.position;

    // generate a unique name, used for later reference
    node.name = this.id = (JSON.stringify(options.position) + "_" + new Date().getTime());

    node.physicsBody = SCNPhysicsBody.bodyWithTypeShape(SCNPhysicsBodyType.Dynamic, null);
    node.physicsBody.mass = options.mass || 0;
    node.physicsBody.categoryBitMask = 1; // CollisionCategoryCube

    this.ios = node;
  }

  onTap(): void {
    this.onTapHandler && this.onTapHandler(this);
  }

  onLongPress(): void {
    this.onLongPressHandler && this.onLongPressHandler(this);
  }

  remove(): void {
    // TODO would be nice if we could delete it from the cache.. perhaps move it to this common class as a static prop?
    // ARState.shapes.delete(this.id);
    this.ios.removeFromParentNode();
  }
}

