import { OnDestroy, ViewContainerRef } from "@angular/core";
import { isAndroid, isIOS } from "platform";
import { MenuComponent } from "./menu/menu.component";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { InfoModalComponent } from "./info-modal/info-modal";
import { PluginInfoWrapper } from "./shared/plugin-info-wrapper";

export abstract class AbstractMenuPageComponent implements OnDestroy {

  isIOS: boolean = isIOS;
  //noinspection JSUnusedGlobalSymbols
  isAndroid: boolean = isAndroid;

  constructor(protected menuComponent: MenuComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService) {
  }

  protected abstract getPluginInfo(): PluginInfoWrapper;

  ngOnDestroy(): void {
    // this.menuComponent = null;
  }

  toggleTheMenu(): void {
    this.menuComponent.toggleMenu();
  }

  closeMenuIfOpen(): void {
    this.menuComponent.closeMenuIfOpen();
  }

  showPluginInfo(): void {
    const info = this.getPluginInfo();
    if (info === null) {
      return;
    }

    const drawer = this.menuComponent.getDrawer();
    // this effectively disables the back gesture
    if (drawer.ios) {
      drawer.ios.detachDrawerFromWindow();
    }

    const options: ModalDialogOptions = {
      viewContainerRef: this.vcRef,
      context: info,
      fullscreen: false,
    };

    this.modalService.showModal(InfoModalComponent, options).then(() => {
      // modal closed, re-enable the back gesture
      if (drawer.ios) {
        drawer.ios.attachDrawerToWindow();
      }
    });
  }
}