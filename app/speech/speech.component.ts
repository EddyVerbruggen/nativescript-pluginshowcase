import { Component, ViewContainerRef } from "@angular/core";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { MenuComponent } from "../menu/menu.component";
import { ModalDialogService } from "nativescript-angular";
import { PluginInfo } from "../shared/plugin-info";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";

@Component({
  selector: "Speech",
  moduleId: module.id,
  templateUrl: "./speech.component.html",
  styleUrls: ["speech-common.css"]
})
export class SpeechComponent extends AbstractMenuPageComponent {

  constructor(protected menuComponent: MenuComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService) {
    super(menuComponent, vcRef, modalService);
  }

  protected getPluginInfo(): PluginInfoWrapper {
    return new PluginInfoWrapper(
        // TODO desc
        "Op deze pagina..",
        Array.of(
            new PluginInfo(
                "nativescript-feedback",
                "Feedback",
                "https://github.com/EddyVerbruggen/nativescript-feedback",
                "bla :)"),

            new PluginInfo(
                "nativescript-snackbar",
                "Snackbar",
                "https://github.com/bradmartin/nativescript-snackbar",
                "bla :))"
            )
        )
    );
  }
}
