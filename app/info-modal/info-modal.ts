import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "ui/page";
import { Color } from "tns-core-modules/color";
import { PluginInfo } from "../shared/plugin-info";
import { openUrl } from "tns-core-modules/utils/utils";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";
import { Config } from "../shared/config";
import { addTabletCss } from "../utils/tablet-util";

@Component({
  moduleId: module.id,
  templateUrl: "./info-modal.html",
  styleUrls: [
    "./info-modal-common.css",
    "./info-modal.css"
  ]
})
export class InfoModalComponent {
  pluginInfo: PluginInfoWrapper;
  isTablet: boolean = Config.isTablet;

  constructor(private params: ModalDialogParams,
              private page: Page) {
    this.pluginInfo = params.context;

    this.page.on("unloaded", () => {
      this.params.closeCallback();
    });

    if (page.android) {
      this.page.backgroundColor = new Color(50, 0, 0, 0);
    }

    addTabletCss(this.page, "info-modal");
  }

  openPluginUrl(pluginInfo: PluginInfo): void {
    // open in the default browser
    openUrl(pluginInfo.url);
  }

  close() {
    this.params.closeCallback();
  }
}
