import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { MenuComponent } from "../menu/menu.component";
import { AR, ARDebugLevel, ARNode, ARPlaneTappedEventData, IARPlane, ARPosition } from "nativescript-ar";
import { ModalDialogService } from "nativescript-angular";
import { PluginInfo } from "../shared/plugin-info";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";
import { PropertyChangeData } from "tns-core-modules/data/observable";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";

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
export class ARComponent extends AbstractMenuPageComponent implements OnInit {
  private ar: AR;
  private firstPlaneDetected: boolean = false;

  hint: string;
  planesVisible: boolean = true;
  planeDetectionActive: boolean = true;
  statsEnabled: boolean = true;
  isSupported: boolean;

  models: Array<string> = ["{N} Cube", "Car", "Ball", "Tree"];
  selectedModelIndex = 0;

  private demoObject: "cube" | "model" = "cube";

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
  }

  togglePlaneDetection(args: PropertyChangeData): void {
    if (args.value !== null && args.value !== this.planeDetectionActive) {
      this.planeDetectionActive = args.value;
      this.ar.togglePlaneDetection(this.planeDetectionActive);
      this.ar.setDebugLevel(this.planeDetectionActive ? ARDebugLevel.FEATURE_POINTS : ARDebugLevel.NONE);
    }
  }

  togglePlaneVisibility(args: PropertyChangeData): void {
    if (args.value !== null && args.value !== this.planesVisible) {
      this.planesVisible = args.value;
      this.ar.togglePlaneVisibility(this.planesVisible);
      this.ar.setDebugLevel(this.planesVisible ? ARDebugLevel.FEATURE_POINTS : ARDebugLevel.NONE);
    }
  }

  toggleStats(args: PropertyChangeData): void {
    if (args.value !== null && args.value !== this.statsEnabled) {
      this.statsEnabled = args.value;
      this.ar.toggleStatistics(this.statsEnabled);
    }
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
        )
    );
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
    console.log("Plane detected");
    const plane: IARPlane = args.plane;
    /*
    if (!this.firstPlaneDetected) {
      this.firstPlaneDetected = true;
      this.ar.addModel({
        name: "art.scnassets/Wind.dae",
        position: {x: plane.position.x, y: plane.position.y + 0.1, z: plane.position.z - 0.1},
        scale: {x: 0.12, y: 0.12, z: 0.12},
        onTap: ((model: ARNode) => {
          console.log(">>>> tapped model: " + model);
          // model.remove();
        }),
        onLongPress: ((model: ARNode) => {
          console.log(">>>>>> trying to remove the car..");
          model.remove();
        })
      });
    }
    */
  }

  planeTapped(args: ARPlaneTappedEventData): void {
    this.hint = `${this.demoObject} at ${args.position.x} y ${args.position.y} z ${args.position.z}`;

    if (this.selectedModelIndex === 0) {
      this.addCube(args.position);
    } else if (this.selectedModelIndex === 1) {
      this.addCar(args.position);
    } else if (this.selectedModelIndex === 2) {
      this.addBall(args.position);
    } else if (this.selectedModelIndex === 3) {
      this.addTree(args.position);
    }

    // if (this.demoObject === "cube") {
    //   this.addCube(args.position);
    //   this.demoObject = "model";
    // } else {
    //   this.addCar(args.position);
    //   this.demoObject = "cube";
    // }
  }

  private addCube(position: ARPosition): void {
    this.ar.addCube({
      // TODO 4 different materials, full paths
      material: "tnsgranite",
      position: {x: position.x, y: position.y + 0.7, z: position.z},
      scale: 0.1,
      mass: 1,
      onLongPress: ((model: ARNode) => {
        model.remove();
      })
    });
  }

  private addBall(position: ARPosition): void {
    this.ar.addModel({
      name: "Models.scnassets/Ball.dae",
      position: {x: position.x, y: position.y + 0.7, z: position.z},
      scale: 0.08,
      mass: 0.3,
      onLongPress: ((model: ARNode) => {
        model.remove();
      })
    });
  }

  private addCar(position: ARPosition): void {
    this.ar.addModel({
      name: "Models.scnassets/Car.dae",
      position: {x: position.x, y: position.y + 0.06, z: position.z},
      scale: 0.8,
      mass: 100,
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
      onLongPress: ((model: ARNode) => {
        model.remove();
      })
    });
  }
}
