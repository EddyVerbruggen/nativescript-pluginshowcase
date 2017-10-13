import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { MenuComponent } from "../menu/menu.component";
import { AR, ARDebugLevel, ARMaterial, ARNode, ARPlaneTappedEventData, ARPosition } from "nativescript-ar";
import { ModalDialogService } from "nativescript-angular";
import { PluginInfo } from "../shared/plugin-info";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";
import { PropertyChangeData } from "tns-core-modules/data/observable";
import { DropDown } from "nativescript-drop-down";
import { Color } from "tns-core-modules/color";

const insomnia = require("nativescript-insomnia");

@Component({
  selector: "page-ar",
  moduleId: module.id,
  templateUrl: "./ar.component.html",
  styleUrls: ["ar-common.css"],
  animations: [
    trigger("flyInOut", [
      state("in", style({transform: "scale(1)", opacity: 1})),
      transition("void => *", [
        style({transform: "scale(0.9)", opacity: 0}),
        animate("1000ms 100ms ease-out")
      ])
    ]),
    trigger("from-right", [
      state("in", style({
        "opacity": 1,
        transform: "translate(0)"
      })),
      state("void", style({
        "opacity": 0,
        transform: "translate(20%)"
      })),
      transition("void => *", [animate("600ms 1500ms ease-out")])
    ])
  ]
})
export class ARComponent extends AbstractMenuPageComponent implements OnInit, OnDestroy {
  private ar: AR;
  private firstPlaneDetected: boolean = false;

  hint: string;
  planesVisible: boolean = true;
  planeDetectionActive: boolean = true;
  statsEnabled: boolean = true;
  isSupported: boolean;
  debugLevel: ARDebugLevel = ARDebugLevel.FEATURE_POINTS;

  models: Array<string> = ["Box", "Sphere", "Tube", "Car", "Ball", "Tree"];
  selectedModelIndex = 0;

  // All these are valid plane materials:
  // planeMaterial = "Assets.scnassets/Materials/tron/tron-diffuse.png";
  // planeMaterial = new Color("red");
  planeMaterial = <ARMaterial>{
    diffuse: new Color("white"),
    transparency: 0.2
  };

  @ViewChild("dropDown") dropDown: ElementRef;

  constructor(protected menuComponent: MenuComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService) {
    super(menuComponent, vcRef, modalService);
    this.hint = "Search for planes by pointing at a surface";
  }

  ngOnInit(): void {
    this.isSupported = AR.isSupported();
    // if this is false on a modern iOS 11 device, rebuild in Xcode
    if (!this.isSupported) {
      this.hint = "THIS DEVICE DOESN'T SUPPORT AR ☹️";
    }

    // modify the background color of the DropDown picker
    const drop: any = this.dropDown.nativeElement;
    if (this.dropDown.nativeElement.ios) {
      const pickerView: UIPickerView = drop._listPicker;
      pickerView.backgroundColor = new Color("#444").ios;
    }

    insomnia.keepAwake().then(() => console.log("Insomnia is now ON"));
  }

  ngOnDestroy(): void {
    insomnia.allowSleepAgain().then(() => console.log("Insomnia is now OFF"));
  }

  togglePlaneDetection(args: PropertyChangeData): void {
    if (args.value !== null && args.value !== this.planeDetectionActive) {
      this.planeDetectionActive = args.value;
      this.ar.togglePlaneDetection(this.planeDetectionActive);
      this.debugLevel = this.planeDetectionActive ? ARDebugLevel.FEATURE_POINTS : ARDebugLevel.NONE;
    }
  }

  togglePlaneVisibility(args: PropertyChangeData): void {
    if (args.value !== null && args.value !== this.planesVisible) {
      this.planesVisible = args.value;
      this.ar.togglePlaneVisibility(this.planesVisible);
      this.debugLevel = this.planesVisible ? ARDebugLevel.FEATURE_POINTS : ARDebugLevel.NONE;
    }
  }

  toggleStats(args: PropertyChangeData): void {
    if (args.value !== null && args.value !== this.statsEnabled) {
      this.statsEnabled = args.value;
      this.ar.toggleStatistics(this.statsEnabled);
    }
  }

  reset(): void {
    if (this.ar) {
      this.ar.reset();
    }
    this.firstPlaneDetected = false;
    this.hint = "Search for planes by scanning a surface";
  }

  arLoaded(args): void {
    this.ar = args.object;
  }

  planeDetected(args): void {
    console.log("Plane detected @ " + new Date().getTime());
  }

  planeTapped(args: ARPlaneTappedEventData): void {
    this.hint = `Tapped at ${args.position.x} y ${args.position.y} z ${args.position.z}`;

    if (this.selectedModelIndex === 0) {
      this.addBox(args.position);
    } else if (this.selectedModelIndex === 1) {
      this.addSphere(args.position);
    } else if (this.selectedModelIndex === 2) {
      this.addTube(args.position);
    } else if (this.selectedModelIndex === 3) {
      this.addCar(args.position);
    } else if (this.selectedModelIndex === 4) {
      this.addBall(args.position);
    } else if (this.selectedModelIndex === 5) {
      this.addTree(args.position);
    }
  }

  private addBox(position: ARPosition): void {
    this.ar.addBox({
      materials: [{
        diffuse: {
          contents: "Assets.scnassets/Materials/tnsgranite/tnsgranite-diffuse.png",
          wrapMode: "ClampToBorder"
        }
      }],
      position: {x: position.x, y: position.y + 0.8, z: position.z},
      dimensions: 0.15,
      mass: 1,
      onTap: ((model: ARNode) => {
        console.log("Box was tapped");
      }),
      onLongPress: ((model: ARNode) => {
        model.remove();
      })
    }).then(arNode => {
      console.log("Box successfully added");
      if (arNode.ios) {
        // do something iOS specific here if you like
      }
    });
  }

  private addSphere(position: ARPosition): void {
    this.ar.addSphere({
      materials: [{
        diffuse: new Color("red"),
        normal: new Color("blue"),
        roughness: new Color("green"),
        specular: new Color("yellow"),
        metalness: new Color("purple"),
        transparency: 0.9
      }],
      position: {x: position.x, y: position.y + 1.3, z: position.z},
      radius: 0.2,
      mass: 0.01,
      onTap: ((model: ARNode) => {
        console.log("Sphere was tapped");
      }),
      onLongPress: ((model: ARNode) => {
        model.remove();
      })
    }).then(arNode => {
      console.log("Sphere successfully added at " + JSON.stringify(arNode.position));
    });
  }

  private addTube(position: ARPosition): void {
    this.ar.addTube({
      // TODO a tube also has 4 surfaces we can use different materials for (https://developer.apple.com/documentation/scenekit/scntube?language=objc)
      // TODO a youtube texture :P
      materials: [{
        diffuse: {
          contents: "Assets.scnassets/Materials/tnsgranite/tnsgranite-diffuse.png",
          wrapMode: "Repeat" // which is the default
        },
        roughness: "Assets.scnassets/Materials/tnsgranite/tnsgranite-roughness.png",
        transparency: 1 // solid (which is the default)
      }],
      position: {x: position.x, y: position.y + 0.3, z: position.z},
      innerRadius: 0.2,
      outerRadius: 0.35,
      radialSegmentCount: 1000,
      height: 0.7,
      mass: 8,
      onTap: ((model: ARNode) => {
        console.log("Tube was tapped");
      }),
      onLongPress: ((model: ARNode) => {
        model.remove();
      })
    }).then(arNode => {
      console.log("Tube successfully added");
    });
  }

  private addBall(position: ARPosition): void {
    this.ar.addModel({
      name: "Models.scnassets/Ball.dae",
      position: {x: position.x, y: position.y + 1.3, z: position.z},
      scale: 0.08,
      mass: 0.2,
      onTap: ((model: ARNode) => {
        console.log("Ball was tapped");
      }),
      onLongPress: ((model: ARNode) => {
        model.remove();
      })
    }).then(arNode => {
      // to remove balls after a few seconds you can do this:
      setTimeout(() => {
        arNode.remove();
      }, 2000);
    });
  }

  private addCar(position: ARPosition): void {
    this.ar.addModel({
      name: "Models.scnassets/Car.dae",
      position: {x: position.x, y: position.y + 0.06, z: position.z},
      scale: 0.75,
      mass: 100,
      onTap: ((model: ARNode) => {
        console.log("Car was tapped");
      }),
      onLongPress: ((model: ARNode) => {
        model.remove();
      })
    });
  }

  private addTree(position: ARPosition): void {
    this.ar.addModel({
      name: "Models.scnassets/Tree.dae",
      childNodeName: "Tree_lp_11",
      position: position,
      scale: 0.01,
      mass: 0.0002,
      onTap: ((model: ARNode) => {
        console.log("Tree was tapped");
      }),
      onLongPress: ((model: ARNode) => {
        model.remove();
      })
    });
  }

  protected getPluginInfo(): PluginInfoWrapper {
    return new PluginInfoWrapper(
        "Is normal reality too dull for you? Augment it with the experimental plugin!",
        Array.of(
            new PluginInfo(
                "nativescript-ar",
                "AR  👀",
                "https://github.com/EddyVerbruggen/nativescript-ar",
                "Proof of Concept of an AR plugin. Currently supporting ARKit (iOS), and in the future ARCore (Android) as well."
            ),
            new PluginInfo(
                "nativescript-drop-down",
                "DropDown",
                "https://github.com/PeterStaev/NativeScript-Drop-Down",
                "The DropDown displays items from which the user can select one. If the built-in ActionSheet is not to your liking, give this one a try!"
            ),
            new PluginInfo(
                "nativescript-insomnia",
                "Insomnia  😪",
                "https://github.com/EddyVerbruggen/nativescript-insomnia",
                "Keep the device awake (not dim the screen, lock, etc). Useful if the user needs to see stuff on the device but doesn't touch it."
            )
        )
    );
  }
}
