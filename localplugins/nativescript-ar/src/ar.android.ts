import {
  AR as ARBase, ARAddBoxOptions, ARAddModelOptions, ARAddSphereOptions, ARAddTubeOptions, ARDebugLevel,
  ARNode
} from "./ar-common";

export class AR extends ARBase {
  private _android: any;

  togglePlaneVisibility(on: boolean): void {
  }

  togglePlaneDetection(on: boolean): void {
    throw new Error("Method not implemented.");
  }

  toggleStatistics(on: boolean): void {
    throw new Error("Method not implemented.");
  }

  setDebugLevel(to: ARDebugLevel): void {
    throw new Error("Method not implemented.");
  }

  reset(): void {
    throw new Error("Method not implemented.");
  }

  addModel(options: ARAddModelOptions): Promise<ARNode> {
    throw new Error("Method not implemented.");
  }

  addBox(options: ARAddBoxOptions): Promise<ARNode> {
    throw new Error("Method not implemented.");
  }

  addSphere(options: ARAddSphereOptions): Promise<ARNode> {
    throw new Error("Method not implemented.");
  }

  addTube(options: ARAddTubeOptions): Promise<ARNode> {
    throw new Error("Method not implemented.");
  }
}
