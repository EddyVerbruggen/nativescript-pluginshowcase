import { ARAddBoxOptions, ARPosition } from "../../ar-common";
import { ARCommonNode } from "./arcommon";
import { ARMaterial } from "./armaterial";

export class ARBox extends ARCommonNode {
  static create(options: ARAddBoxOptions) {
    const scale: ARPosition = options.scale instanceof ARPosition ? options.scale : {
      x: options.scale,
      y: options.scale,
      z: options.scale
    };
    // TODO pass in chamfer (https://developer.apple.com/documentation/scenekit/scnbox?language=objc)
    const box = SCNBox.boxWithWidthHeightLengthChamferRadius(scale.x, scale.y, scale.z, 0.0);

    // make the box look nice
    if (options.material) {
      const materialArray: NSMutableArray<any> = NSMutableArray.alloc().initWithCapacity(1);
      materialArray.addObject(ARMaterial.getMaterial(options.material));
      box.materials = materialArray;
    }

    return new ARBox(options, SCNNode.nodeWithGeometry(box));
  }
}
