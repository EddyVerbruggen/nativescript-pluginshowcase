import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "ui/page";
import { Color } from "tns-core-modules/color";
import * as utils from 'utils/utils';
import { PluginInfo } from "../shared/plugin-info";
import { openUrl } from "tns-core-modules/utils/utils";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";
import { Config } from "../shared/config";
import { addTabletCss } from "../utils/tablet-util";

const pageCommon = require("tns-core-modules/ui/page/page-common").PageBase;

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
    this.page.backgroundColor = new Color(50, 0, 0, 0);

    if (page.ios) {

      // iOS by default won't let us have a transparent background on a modal
      // Ugly workaround from: https://github.com/NativeScript/nativescript/issues/2086#issuecomment-221956483
      // this.page.backgroundColor = new Color(50, 0, 0, 0);

      (<any>page)._showNativeModalView = function (parent, context, closeCallback, fullscreen) {
        pageCommon.prototype._showNativeModalView.call(this, parent, context, closeCallback, fullscreen);
        let that = this;

        if (fullscreen) {
          this._ios.modalPresentationStyle = 0;
        } else {
          this._ios.modalPresentationStyle = 2;
          this._UIModalPresentationFormSheet = true;
        }

        pageCommon.prototype._raiseShowingModallyEvent.call(this);

        this._ios.providesPresentationContextTransitionStyle = true;
        this._ios.definesPresentationContext = true;
        this._ios.modalPresentationStyle = UIModalPresentationStyle.OverFullScreen;
        this._ios.modalTransitionStyle = UIModalTransitionStyle.CrossDissolve;
        this._ios.view.backgroundColor = UIColor.clearColor;

        parent.ios.presentViewControllerAnimatedCompletion(this._ios, utils.ios.MajorVersion >= 9, function () {
          that._ios.modalPresentationStyle = UIModalPresentationStyle.CurrentContext;
          that._raiseShownModallyEvent(parent, context, closeCallback);
        });
      };
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