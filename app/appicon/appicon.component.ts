import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { MenuComponent } from "../menu/menu.component";
import { ModalDialogService } from "nativescript-angular";
import { PluginInfo } from "../shared/plugin-info";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";
import { AppIconChanger } from "nativescript-app-icon-changer";
import { ToastService } from "../services/toast.service";
import { ThreeDeeTouch } from "nativescript-3dtouch";

@Component({
  selector: "AppIcon",
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
export class AppIconComponent extends AbstractMenuPageComponent implements OnInit {
  suppressAppIconChangedNotification: boolean = false;
  private appIconChanger: AppIconChanger;
  private threeDeeTouch: ThreeDeeTouch;

  constructor(protected menuComponent: MenuComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService,
              private toastService: ToastService) {
    super(menuComponent, vcRef, modalService);
    this.appIconChanger = new AppIconChanger();
    this.threeDeeTouch = new ThreeDeeTouch();
  }

  ngOnInit(): void {
  }

  addDeeplink(): void {
    this.threeDeeTouch.configureQuickActions([
      {
        type: "mapping",
        title: "Mapping",
        subtitle: "Deeplink to Mapping",
        iconType: UIApplicationShortcutIconType.Location
      }
    ]).then(() => {
      this.toastService.show("Close the app and press the app icon hard to see the new deeplink!", true);
    }, err => {
      this.toastService.show(`Error: ${err}`);
    });
  }

  removeDeeplink(): void {
    this.threeDeeTouch.configureQuickActions(
        []
    ).then(() => {
      this.toastService.show("Dynamic deeplink removed");
    }, err => {
      this.toastService.show(`Error: ${err}`);
    });
  }

  // TODO this resets the icon - also add to doc of plugin: UIApplication.shared.setAlternateIconName(nil)

  // After using nativescript-toast this will crash!
  changeAppIcon(name: string): void {
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
                "nativescript-3dtouch",
                "3D Touch",
                "https://github.com/EddyVerbruggen/nativescript-3dtouch",
                "Quick Home Icon Actions for your app."),

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
