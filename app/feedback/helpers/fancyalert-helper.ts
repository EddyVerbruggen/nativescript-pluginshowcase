import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";

export class FancyalertHelper {

  constructor() {
  }

  showSuccess(): void {
    TNSFancyAlert.showSuccess("Success!", "Fancy alerts are nice.", "Yes they are!");
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