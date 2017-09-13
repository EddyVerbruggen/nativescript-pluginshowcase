import { Color } from "tns-core-modules/color";
import { Property } from "tns-core-modules/ui/core/view";
import { ContentView } from "tns-core-modules/ui/content-view";
import { EventData } from "tns-core-modules/data/observable";

const directionProperty = new Property<AR, string>({
  name: "direction",
  defaultValue: "to bottom"
});

const borderRadiusProperty = new Property<AR, number>({
  name: "borderRadius",
  defaultValue: 0
});

const colorsProperty = new Property<AR, string>({
  name: "colors"
});

export interface IARPlane {
  id: string;
  position: ARPosition;
  ios: any; /* ARPlane */
  remove(): void;
}

export interface ARNode {
  remove(): void;
}

export interface ARNodePrivate extends ARNode {
  onTap: () => void;
  onLongPress: () => void;
}

export interface ARAddOptions {
  position: ARPosition;
  scale: number | ARPosition;
  mass?: number;
  onTap?: (model: ARNode) => void;
  onLongPress?: (model: ARNode) => void;
}

export interface ARAddModelOptions extends ARAddOptions {
  name: string;
  childNodeName?: string;
}

export interface ARAddCubeOptions extends ARAddOptions {
  material?: string;
}

export interface ARPlaneTappedEventData extends EventData {
  position: ARPosition;
}

export enum ARDebugLevel {
  NONE = <any>"NONE",
  WORLD_ORIGIN = <any>"WORLD_ORIGIN",
  FEATURE_POINTS = <any>"FEATURE_POINTS",
  PHYSICS_SHAPES = <any>"PHYSICS_SHAPES"
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

  abstract addCube(options: ARAddCubeOptions): Promise<ARNode>;

  abstract togglePlaneDetection(on: boolean): void;

  abstract toggleStatistics(on: boolean): void;

  abstract togglePlaneVisibility(on: boolean): void;

  abstract setDebugLevel(to: ARDebugLevel): void;

  [directionProperty.setNative](value?: string) {
    if (value) {
      const sanitizedValue = value.toLowerCase().trim();
      if (AR.isValidDirection(sanitizedValue)) {
        this.updateDirection(sanitizedValue);
      }
    }
  }

  [borderRadiusProperty.setNative](value: number) {
    if (value) {
      this.updateBorderRadius(value);
    }
  }

  [colorsProperty.setNative](value?: string) {
    if (value) {
      const _colors: Color[] = [];
      // split color codes separated with a comma. Skip commas within parenthesis -> rgba(255,0,0,1) is a color code
      const _colorsCodes = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

      for (let _colorCode of _colorsCodes) {
        if (Color.isValid(_colorCode.trim())) {
          _colors.push(new Color(_colorCode.trim()));
        }
      }
      this.updateColors(_colors);
    }
  }

  private static isValidDirection(value: string): boolean {
    return GradientDirection.TO_BOTTOM === value
        || GradientDirection.TO_TOP === value
        || GradientDirection.TO_LEFT === value
        || GradientDirection.TO_RIGHT === value
        || GradientDirection.TO_BOTTOM_LEFT === value
        || GradientDirection.TO_TOP_LEFT === value
        || GradientDirection.TO_BOTTOM_RIGHT === value
        || GradientDirection.TO_TOP_RIGHT === value;
  }

  // TODO remove these (but they're nice examples for now)
  protected abstract updateColors(colors: Color[]);

  protected abstract updateBorderRadius(radius: number);

  protected abstract updateDirection(direction: string);
}

directionProperty.register(AR);
borderRadiusProperty.register(AR);
colorsProperty.register(AR);

export namespace GradientDirection {
  export const TO_BOTTOM = "to bottom";
  export const TO_TOP = "to top";
  export const TO_RIGHT = "to right";
  export const TO_LEFT = "to left";
  export const TO_BOTTOM_LEFT = "to bottom left";
  export const TO_TOP_LEFT = "to top left";
  export const TO_BOTTOM_RIGHT = "to bottom right";
  export const TO_TOP_RIGHT = "to top right";
}
