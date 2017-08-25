import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { MenuComponent } from "../menu/menu.component";
import { Config } from "../shared/config";
import { ModalDialogService, RouterExtensions } from "nativescript-angular";
import { PluginInfo } from "../shared/plugin-info";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";

@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ["home-common.css"]
})
export class HomeComponent extends AbstractMenuPageComponent implements OnInit {
  constructor(protected menuComponent: MenuComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService,
              protected routerExtensions: RouterExtensions) {
    super(menuComponent, vcRef, modalService);
  }

  ngOnInit(): void {
    // for quick dev-nav
    if (!Config.isProdMode && Config.DEBUG_MODE.firstPage !== "/menu")
      setTimeout(() => {
        this.routerExtensions.navigate([Config.DEBUG_MODE.firstPage], {
          animated: false
        });
      }, 300);
  }

  protected getPluginInfo(): PluginInfoWrapper {
    return new PluginInfoWrapper(
        "This app showcases a bunch of plugins for the NativeScript framework. Every page has an info-icon showing which plugins are used on the page. The plugins listed below are used app-wide.\n\nAll plugins are free and open source, just like this app: https://github.com/EddyVerbruggen/pluginshowcase.",
        Array.of(
            new PluginInfo(
                "nativescript-gradient",
                "Gradient",
                "https://github.com/EddyVerbruggen/nativescript-gradient",
                "All pages (including the menu) have a nice top-to-bottom gradient. You obviously need to have this to be taken seriously as an app. 🤔"),

            new PluginInfo(
                "nativescript-appavailability",
                "App Availability",
                "https://github.com/EddyVerbruggen/nativescript-appavailability",
                "Used at the bottom ↙️ of the menu to determine whether or not you have the Twitter app installed."
            ),

            new PluginInfo(
                "nativescript-ngx-fonticon",
                "Font icon",
                "https://github.com/NathanWalker/nativescript-ngx-fonticon",
                "Makes it easy to use any font icon with NativeScript. This app uses https://materialdesignicons.com."
            )
        )
    );
  }
}
