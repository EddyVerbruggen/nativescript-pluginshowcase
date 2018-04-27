import { Component, NgZone, OnInit, ViewContainerRef } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { ModalDialogService } from "nativescript-angular";
import { PluginInfo } from "../shared/plugin-info";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";
import { SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { PropertyChangeData } from "tns-core-modules/data/observable";
import { DrawingPad } from "nativescript-drawingpad";
import { IQKeyboardHelper } from "./helpers/iqkeyboard-helper";
import { CheckboxHelper } from "./helpers/checkbox-helper";
import { AppComponent } from "~/app.component";

@Component({
  selector: "page-input",
  moduleId: module.id,
  templateUrl: "./input.component.html",
  styleUrls: [
      "input-common.css",
      "input.css"
  ],
  animations: [
    trigger("from-bottom", [
      state("in", style({
        "opacity": 1,
        transform: "translateY(0)"
      })),
      state("void", style({
        "opacity": 0,
        transform: "translateY(20%)"
      })),
      transition("void => *", [animate("1600ms 700ms ease-out")]),
      transition("* => void", [animate("600ms ease-in")])
    ]),
    trigger("fade-in", [
      state("in", style({
        "opacity": 1
      })),
      state("void", style({
        "opacity": 0
      })),
      transition("void => *", [animate("800ms 2000ms ease-out")])
    ]),
    trigger("scale-in", [
      state("in", style({
        "opacity": 1,
        transform: "scale(1)"
      })),
      state("void", style({
        "opacity": 0,
        transform: "scale(0.9)"
      })),
      transition("void => *", [animate("1100ms ease-out")])
    ])
  ]
})
export class InputComponent extends AbstractMenuPageComponent implements OnInit {
  plugins: Array<SegmentedBarItem> = [];
  selectedPlugin: string = "Drawing";
  drawings: Array<any> = [];
  iqkeyboardHelper: IQKeyboardHelper;
  checkboxHelper: CheckboxHelper;

  constructor(protected appComponent: AppComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService,
              private zone: NgZone) {
    super(appComponent, vcRef, modalService);
  }

  ngOnInit(): void {
    this.addPluginToSegmentedBar("Drawing");
    this.addPluginToSegmentedBar("Checkbox");
    this.checkboxHelper = new CheckboxHelper();

    // this one has a decent fallback on Android..
    this.addPluginToSegmentedBar("Numeric");

    // .. but this one doesn't
    if (this.isIOS) {
      this.addPluginToSegmentedBar("IQKeyboard");
      this.iqkeyboardHelper = new IQKeyboardHelper();
    }
  }

  private addPluginToSegmentedBar(name: string) {
    let drawingPad = new SegmentedBarItem();
    drawingPad.title = name;
    this.plugins.push(drawingPad);
  }

  pluginChanged(args: PropertyChangeData): void {
    if (args.value === null) {
      return;
    }
    this.selectedPlugin = this.plugins[args.value].title;
  }

  getMyDrawing(pad: any) {
    // then get the drawing (Bitmap on Android) of the drawingpad
    pad.getDrawing().then(data => {
      console.log(data);
      this.drawings.push(data);
      this.clearMyDrawing(pad);
    }, err => {
      console.log(err);
    });
  }

  clearMyDrawing(pad: any) {
    pad.clearDrawing();
  }

  protected getPluginInfo(): PluginInfoWrapper {
    let plugins = Array.of(
        new PluginInfo(
            "nativescript-drawingpad",
            "DrawingPad",
            "https://github.com/bradmartin/nativescript-texttospeech",
            "Want to capture a signature, or send doodles from one user to the other? Then this is the plugin for you!"),

        new PluginInfo(
            "nativescript-checkbox",
            "Checkbox",
            "https://github.com/bradmartin/nativescript-checkbox",
            "Add checkboxes and radiobuttons to your app!"),

        new PluginInfo(
            "nativescript-numeric-keyboard",
            "Numeric Keyboard (iOS)  🔢",
            "https://github.com/EddyVerbruggen/nativescript-numeric-keyboard",
            "Replace the meh default number/phone keyboard by this stylish one."
        )
    );

    if (this.isIOS) {
      plugins.push(new PluginInfo(
          "nativescript-IQKeyboardManager",
          "IQKeyboardManager (iOS)",
          "https://github.com/tjvantoll/nativescript-IQKeyboardManager",
          "Tame that wild beast  🐅  of a keyboard  ⌨️  by dropping in this library."
      ));
    }

    return new PluginInfoWrapper(
        "Input is one of the hardest things on mobile to get right. Here are a few plugins that tackle problems you may encounter with your app.",
        plugins
    );
  }
}
