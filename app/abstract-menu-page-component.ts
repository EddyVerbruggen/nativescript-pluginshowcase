import { ViewContainerRef } from "@angular/core";
import { isIOS } from "platform";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { InfoModalComponent } from "./info-modal/info-modal";
import { PluginInfoWrapper } from "./shared/plugin-info-wrapper";
import { Config } from "./shared/config";
import { AppComponent } from "~/app.component";

export abstract class AbstractMenuPageComponent {
  isIOS: boolean = isIOS;
  isTablet: boolean = Config.isTablet;

  constructor(protected appComponent: AppComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService) {
  }

  protected abstract getPluginInfo(): PluginInfoWrapper;

  toggleTheMenu(): void {
    this.appComponent.toggleMenu();
  }

  showPluginInfo(): void {
    const info = this.getPluginInfo();
    if (info === null) {
      return;
    }

    const options: ModalDialogOptions = {
      viewContainerRef: this.vcRef,
      context: info,
      fullscreen: false // iPhones will ignore this
    };

    if (!this.isTablet && this.isIOS) {
      UIApplication.sharedApplication.setStatusBarHiddenWithAnimation(true, UIStatusBarAnimation.Fade);
    }

    this.modalService.showModal(InfoModalComponent, options).then(() => {
      if (!this.isTablet && this.isIOS) {
        UIApplication.sharedApplication.setStatusBarHiddenWithAnimation(false, UIStatusBarAnimation.Fade);
      }
    });
  }
}
