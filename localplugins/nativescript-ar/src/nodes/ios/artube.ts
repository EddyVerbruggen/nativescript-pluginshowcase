import { ARAddTubeOptions } from "../../ar-common";
import { ARMaterial } from "./armaterial";
import { ARCommonNode } from "./arcommon";

export class ARTube extends ARCommonNode {
  static create(options: ARAddTubeOptions) {
    const tube = SCNTube.tubeWithInnerRadiusOuterRadiusHeight(options.innerRadius, options.outerRadius, options.height);

    // make the sphere look nice (TODO move this to a new superclass that's not super to ARModel)
    if (options.material) {
      const materialArray: NSMutableArray<any> = NSMutableArray.alloc().initWithCapacity(1);
      materialArray.addObject(ARMaterial.getMaterial(options.material));
      tube.materials = materialArray;
    }

    return new ARTube(options, SCNNode.nodeWithGeometry(tube));
  }
}
