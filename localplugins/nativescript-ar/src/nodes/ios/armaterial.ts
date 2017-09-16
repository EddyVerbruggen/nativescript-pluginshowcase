export class ARMaterial {
  static getMaterial(named): SCNMaterial {
    const mat = SCNMaterial.new(); // I'm sure these can be cached
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
