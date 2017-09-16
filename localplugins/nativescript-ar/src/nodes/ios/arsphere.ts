import { ARAddSphereOptions } from "../../ar-common";
import { ARCommonNode } from "./arcommon";
import { ARMaterial } from "./armaterial";

export class ARSphere extends ARCommonNode {

  static create(options: ARAddSphereOptions) {
    const sphere = SCNSphere.sphereWithRadius(options.radius);

    // make the sphere look nice (TODO move this to a new superclass that's not super to ARModel)
    if (options.material) {
      const materialArray: NSMutableArray<any> = NSMutableArray.alloc().initWithCapacity(1);
      materialArray.addObject(ARMaterial.getMaterial(options.material));
      sphere.materials = materialArray;
    }

    return new ARSphere(options, SCNNode.nodeWithGeometry(sphere));
  }
}
