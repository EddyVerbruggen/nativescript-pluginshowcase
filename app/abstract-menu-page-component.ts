import { OnDestroy } from "@angular/core";
import { isAndroid, isIOS } from "platform";
import { MenuComponent } from "./menu/menu.component";

export abstract class AbstractMenuPageComponent implements OnDestroy {

  isIOS: boolean = isIOS;
  //noinspection JSUnusedGlobalSymbols
  isAndroid: boolean = isAndroid;

  constructor(protected menuComponent: MenuComponent) {
  }

  ngOnDestroy(): void {
    // this.menuComponent = null;
  }

  toggleTheMenu(): void {
    this.menuComponent.toggleMenu();
  }

  closeMenuIfOpen(): void {
    this.menuComponent.closeMenuIfOpen();
  }
}