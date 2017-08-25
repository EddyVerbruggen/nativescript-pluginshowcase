import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";

export class FancyalertHelper {

  constructor() {
  }

  showSuccess(): void {
    TNSFancyAlert.showSuccess("Success!", "You were able to press a button. Impressive stuff mate!", "Thanks :)");
  }

  showInfo(): void {
    TNSFancyAlert.showInfo("Info", "1 + 1 = 2", "Correct!");
  }

  showNotice(): void {
    TNSFancyAlert.showNotice("Notice", "This year Christmas is december 25 & 26.", "Well duh!");
  }

  showWarning(): void {
    TNSFancyAlert.showError("Warning!", "There's something between your teeth.", "Uhm, thanks..");
  }

  showError(): void {
    TNSFancyAlert.showError("Uh oh!", "Somebody made a boo-boo..", "I'll clean it up..");
  }

  // TODO examles here https://github.com/NathanWalker/nativescript-fancyalert
  showSwitch(): void {
    TNSFancyAlert.showSwitch(`Don"t show again`, "#58B136", new TNSFancyAlertButton({
      label: "Save",
      action: (isSelected: boolean) => {
        console.log(`Don"t show again was selected: ${isSelected}`);
      }
      // TODO img
    }), "switch.png", "#B3714F", "Need a switch?", `It can be useful.`, "Got it.");
  }
}