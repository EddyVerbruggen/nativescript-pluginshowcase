import { Property } from "tns-core-modules/ui/core/view";
import { ContentView } from "tns-core-modules/ui/content-view";
import { EventData } from "tns-core-modules/data/observable";

export enum ARDebugLevel {
  NONE = <any>"NONE",
  WORLD_ORIGIN = <any>"WORLD_ORIGIN",
  FEATURE_POINTS = <any>"FEATURE_POINTS",
  PHYSICS_SHAPES = <any>"PHYSICS_SHAPES"
}

const debugLevelProperty = new Property<AR, ARDebugLevel>({
  name: "debugLevel",
  defaultValue: ARDebugLevel.NONE
});

export interface IARPlane {
  id: string;
  position: ARPosition;
  ios?: any;
  android?: any;
  remove(): void;
}

export interface ARNode {
  ios?: any; /**/
  android?: any; /**/
  remove(): void;
}

export interface ARAddOptions {
  position: ARPosition;
  mass?: number;
  onTap?: (model: ARNode) => void;
  onLongPress?: (model: ARNode) => void;
}

export interface ARAddGeometryOptions extends ARAddOptions {
  material?: string;
}

export interface ARAddModelOptions extends ARAddOptions {
  name: string;
  childNodeName?: string;
  scale: number | ARPosition;
}

export interface ARAddBoxOptions extends ARAddGeometryOptions {
  scale: number | ARPosition;
}

export interface ARAddSphereOptions extends ARAddGeometryOptions {
  radius: number;
}

export interface ARAddTubeOptions extends ARAddGeometryOptions {
  innerRadius: number;
  outerRadius: number;
  height: number;
  radialSegmentCount?: number;
  heightSegmentCount?: number;
}

export interface ARPlaneTappedEventData extends EventData {
  position: ARPosition;
}

export class ARPosition {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

export abstract class AR extends ContentView {

  static arLoadedEvent: string = "arLoaded";
  static planeDetectedEvent: string = "planeDetected";
  static planeTappedEvent: string = "planeTapped";

  static isSupported(): boolean {
    return false;
  }

  abstract reset(): void;

  abstract addModel(options: ARAddModelOptions): Promise<ARNode>;

  abstract addBox(options: ARAddBoxOptions): Promise<ARNode>;

  abstract addSphere(options: ARAddSphereOptions): Promise<ARNode>;

  abstract addTube(options: ARAddTubeOptions): Promise<ARNode>;

  abstract togglePlaneDetection(on: boolean): void;

  abstract toggleStatistics(on: boolean): void;

  abstract togglePlaneVisibility(on: boolean): void;

  abstract setDebugLevel(to: ARDebugLevel): void;

  [debugLevelProperty.setNative](value?: string | ARDebugLevel) {
    if (value) {
      if (typeof value === "string") {
        this.setDebugLevel(ARDebugLevel[value]);
      } else {
        this.setDebugLevel(<ARDebugLevel>value);
      }
    }
  }
}

debugLevelProperty.register(AR);
