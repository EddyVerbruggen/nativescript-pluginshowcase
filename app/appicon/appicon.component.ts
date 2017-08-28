import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { MenuComponent } from "../menu/menu.component";
import { ModalDialogService } from "nativescript-angular";
import { PluginInfo } from "../shared/plugin-info";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";
import { AppIconChanger } from "nativescript-app-icon-changer";
import { ToastService } from "../feedback/toast.service";

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
  showAppIconChangedNotification: boolean = true;
  private appIconChanger;

  @ViewChild("recordButton") recordButton: ElementRef;

  constructor(protected menuComponent: MenuComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService,
              private toastService: ToastService) {
    super(menuComponent, vcRef, modalService);
    this.appIconChanger = new AppIconChanger();
  }

  ngOnInit(): void {
  }

  changeIcon(name: string): void {
    console.log(">> this.showAppIconChangedNotification: " + this.showAppIconChangedNotification);
    this.appIconChanger.changeIcon({
      iconName: name,
      suppressUserNotification: !this.showAppIconChangedNotification // default true
    }).then(() => {
      this.toastService.show(`Press the Home button to view the change :)`);
    }, (error: any) => {
      this.toastService.show(`Error code: ${error.code}, Error message: ${error.message}`, true);
    });
  }

  protected getPluginInfo(): PluginInfoWrapper {
    return new PluginInfoWrapper(
        "Fiddle with your app's home icon.\niOS only - for now.",
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
