import { AR as ARBase, ARAddCubeOptions, ARAddModelOptions, ARDebugLevel, ARNode } from "./ar-common";
import { Color } from "tns-core-modules/color";

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

  addCube(options: ARAddCubeOptions): Promise<ARNode> {
    throw new Error("Method not implemented.");
  }

  protected updateColors(colors: Color[]) {
  }

  protected updateBorderRadius(radius: number) {
  }

  protected updateDirection(direction: string) {
  }
}
