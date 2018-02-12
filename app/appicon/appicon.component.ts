import { Component, ViewContainerRef } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { MenuComponent } from "../menu/menu.component";
import { ModalDialogService } from "nativescript-angular";
import { PluginInfo } from "../shared/plugin-info";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";
import { AppIconChanger } from "nativescript-app-icon-changer";
import { ToastService } from "../services/toast.service";
import { AppShortcuts } from "nativescript-app-shortcuts";

@Component({
  selector: "page-appicon",
  moduleId: module.id,
  templateUrl: "./appicon.component.html",
  styleUrls: ["appicon-common.css"],
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
      transition("void => *", [animate("1600ms 700ms ease-out")])
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
export class AppIconComponent extends AbstractMenuPageComponent {
  suppressAppIconChangedNotification: boolean = false;
  supportsAppShortcuts: boolean;
  private appIconChanger: AppIconChanger;
  private appShortcuts: AppShortcuts;

  constructor(protected menuComponent: MenuComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService,
              private toastService: ToastService) {
    super(menuComponent, vcRef, modalService);
    this.appIconChanger = new AppIconChanger();
    this.appShortcuts = new AppShortcuts();
    this.appShortcuts.available().then(avail => this.supportsAppShortcuts = avail);
  }

  addDeeplink(): void {
    this.appShortcuts.configureQuickActions([
      {
        type: "mapping",
        title: "Mapping",
        subtitle: "Deeplink to Mapping",
        iconType: this.isIOS ? UIApplicationShortcutIconType.Location : null,
        iconTemplate: "maps" // refers to App_Resources/Android/drawable-nodpi/maps.png (not used on iOS since 'iconType' was set as well)
      }
    ]).then(() => {
      this.toastService.show("Close the app and press the app icon hard to see the new deeplink!", true);
    }, err => {
      this.toastService.show(`Error: ${err}`);
    });
  }

  removeDeeplink(): void {
    this.appShortcuts.configureQuickActions(
        []
    ).then(() => {
      this.toastService.show("Dynamic deeplink removed");
    }, err => {
      this.toastService.show(`Error: ${err}`);
    });
  }

  changeAppIcon(name: string | null): void {
    this.appIconChanger.changeIcon({
      iconName: name,
      suppressUserNotification: this.suppressAppIconChangedNotification // default true
    }).then(() => {
      // nothing to do as there's already a prompt being shown
    }, (error: any) => {
      this.toastService.show(`Error code: ${error.code}, Error message: ${error.message}`, true);
    });
  }

  protected getPluginInfo(): PluginInfoWrapper {
    return new PluginInfoWrapper(
        "Fiddle with your app's home icon. Currently for iOS only.",
        Array.of(
            new PluginInfo(
                "nativescript-app-shortcuts",
                "App Shortcuts",
                "https://github.com/EddyVerbruggen/nativescript-app-shortcuts",
                "Home Icon Actions for your NativeScript app."),

            new PluginInfo(
                "nativescript-app-icon-changer",
                "App Icon Changer  🏠 🔁",
                "https://github.com/EddyVerbruggen/nativescript-app-icon-changer",
                "Change the homescreen icon of your NativeScript iOS app at runtime!"
            )
        )
    );
  }

}
