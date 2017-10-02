import { alert } from "tns-core-modules/ui/dialogs";
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";

export class SnackbarHelper {
  private snackbar: SnackBar;

  constructor() {
    this.snackbar = new SnackBar();
  }

  showMessage(): void {
    this.snackbar.simple("Have a snack(bar)!");
  }

  showAction() {
    let options: SnackBarOptions = {
      actionText: "OK",
      actionTextColor: "#ff4081", // Android only
      snackText: "Press 'OK' to show a plain old alert",
      hideDelay: 5000
    };

    this.snackbar.action(options).then(args => {
      if (args.command === "Action") {
        alert({
          title: "Well hello there!",
          message: "That Snackbar seems useful, right?",
          okButtonText: "Uhm, I guess..",
          cancelable: true
        });
      }
    });
  }

  dismiss() {
    this.snackbar.dismiss().then(() => {
      console.log("Snackbar dimissed");
    });
  }
}