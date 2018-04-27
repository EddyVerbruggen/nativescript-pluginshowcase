import { Component, ViewContainerRef } from "@angular/core";
import {
  trigger,
  query,
  stagger,
  style,
  animate,
  transition
} from "@angular/animations";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { Feedback } from "nativescript-feedback";
import { ToastService } from "../services/toast.service";
import { ToastHelper } from "./helpers/toast-helper";
import { FeedbackHelper } from "./helpers/feedback-helper";
import { FancyalertHelper } from "./helpers/fancyalert-helper";
import { ModalDialogService } from "nativescript-angular";
import { SnackbarHelper } from "./helpers/snackbar-helper";
import { LocalNotificationsHelper } from "./helpers/localnotifications-helper";
import { PluginInfo } from "../shared/plugin-info";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";
import { CFAlertDialogHelper } from "./helpers/cfalertdialog-helper";
import { AppComponent } from "~/app.component";

@Component({
  selector: "page-feedback",
  moduleId: module.id,
  templateUrl: "./feedback.component.html",
  styleUrls: ["feedback-common.css"],
  animations: [
    trigger("listAnimation", [
      transition("* => *", [
        // this hides everything right away
        query(":enter", style({opacity: 0, transform: "translate(10%)"})),

        // starts to animate things with a stagger in between
        query(":enter", stagger(250, [
          animate(1200, style({opacity: 1, transform: "translate(0)"}))
        ]), {delay: 250})
      ])
    ])
  ],
})
export class FeedbackComponent extends AbstractMenuPageComponent {
  fancyAlertHelper: FancyalertHelper;
  cfalertDialogHelper: CFAlertDialogHelper;
  feedbackHelper: FeedbackHelper;
  localNotificationsHelper: LocalNotificationsHelper;
  snackbarHelper: SnackbarHelper;
  toastHelper: ToastHelper;

  constructor(protected appComponent: AppComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService,
              private toastService: ToastService) {
    super(appComponent, vcRef, modalService);

    this.fancyAlertHelper = new FancyalertHelper();
    this.cfalertDialogHelper = new CFAlertDialogHelper();
    this.feedbackHelper = new FeedbackHelper();
    this.localNotificationsHelper = new LocalNotificationsHelper();
    this.snackbarHelper = new SnackbarHelper();
    this.toastHelper = new ToastHelper(this.toastService);
  }

  protected getPluginInfo(): PluginInfoWrapper {
    return new PluginInfoWrapper(
        "Add some 💥 to your app by going beyond the default alert. So here's a couple of alternative ways to feed something back to your users.",
        Array.of(
            new PluginInfo(
                "nativescript-feedback",
                "Feedback",
                "https://github.com/EddyVerbruggen/nativescript-feedback",
                "Non-blocking textual feedback with custom icons and any colors you like. Tap to hide these babies."
            ),

            new PluginInfo(
                "nativescript-toast",
                "Toast",
                "https://github.com/TobiasHennig/nativescript-toast",
                "A sober way of providing non-blocking feedback."
            ),

            new PluginInfo(
                "nativescript-cfalert-dialog",
                "CFAlert Dialog",
                "https://github.com/shiv19/nativescript-cfalert-dialog",
                "Need an Alert, notification, or bottom dialog? Then this one's for you!"
            ),

            new PluginInfo(
                "nativescript-fancyalert",
                "FancyAlert",
                "https://github.com/NathanWalker/nativescript-fancyalert",
                "Want to get in your user's face? Throw a highly customizable alert at them."
            ),

            new PluginInfo(
                "nativescript-snackbar",
                "Snackbar  🍭 🍫",
                "https://github.com/bradmartin/nativescript-snackbar",
                "Use a Material Design Snackbar in your app."
            ),

            new PluginInfo(
                "nativescript-local-notifications",
                "Local Notifications",
                "https://github.com/EddyVerbruggen/nativescript-local-notifications",
                "Show notifications when your app is inactive 😴. Much like push notifications, but without a server."
            )
        )
    );
  }

}
