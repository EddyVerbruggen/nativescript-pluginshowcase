import { Component, NgZone, OnInit, ViewContainerRef } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { MenuComponent } from "../menu/menu.component";
import { ModalDialogService } from "nativescript-angular";
import { PluginInfo } from "../shared/plugin-info";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";
import { SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { PropertyChangeData } from "tns-core-modules/data/observable";

@Component({
  selector: "Input",
  moduleId: module.id,
  templateUrl: "./input.component.html",
  styleUrls: ["input-common.css"],
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
  selectedPlugin: string = "DrawingPad";

  constructor(protected menuComponent: MenuComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService,
              private zone: NgZone) {
    super(menuComponent, vcRef, modalService);
  }

  ngOnInit(): void {
    this.addPluginToSegmentedBar("DrawingPad");
    this.addPluginToSegmentedBar("NumKeyboard");
    this.addPluginToSegmentedBar("IQKeyboard");
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

  protected getPluginInfo(): PluginInfoWrapper {
    return new PluginInfoWrapper(
        "Always wanted a fully trained parrot?\n\nRecord your voice in the device language and it will be shown and read back to you.\n\nBe sure to try the tips as well!",
        Array.of(
            new PluginInfo(
                "nativescript-texttospeech",
                "Text to Speech",
                "https://github.com/bradmartin/nativescript-texttospeech",
                "Make your app speak. Might be useful for disabled people 👀. Certainly useful for lazy ones."),

            new PluginInfo(
                "nativescript-speech-recognition",
                "Speech Recognition",
                "https://github.com/EddyVerbruggen/nativescript-speech-recognition",
                "Speak to your app 👄. Useful for voice control and silly demo's."
            )
        )
    );
  }
}
