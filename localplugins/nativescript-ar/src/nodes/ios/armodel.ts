import { ARAddModelOptions, ARPosition } from "../../ar-common";
import { ARCommonNode } from "./arcommon";

export class ARModel extends ARCommonNode {

  // note that these babies can be cloned, look for 'clone' at http://jamesonquave.com/blog/arkit-tutorial-in-swift-4-for-xcode-9-using-scenekit/
  static create(options: ARAddModelOptions) {
    let modelScene = SCNScene.sceneNamed(options.name);
    let nodeModel = options.childNodeName ? modelScene.rootNode.childNodeWithNameRecursively(options.childNodeName, true) : modelScene.rootNode;
    nodeModel.scale = options.scale instanceof ARPosition ? options.scale : {
      x: options.scale,
      y: options.scale,
      z: options.scale
    };
    return new ARModel(options, nodeModel);
  }
}
