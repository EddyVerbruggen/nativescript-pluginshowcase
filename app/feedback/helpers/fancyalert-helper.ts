import { alert } from "tns-core-modules/ui/dialogs";
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

  showWaiting(): void {
    TNSFancyAlert.showWaiting("Hang on", "This only takes 5 seconds..", "I can't wait!", 5);
  }

  showTimer(): void {
    TNSFancyAlert.showCustomButtonTimer(0, true, undefined, undefined, 'Mission Impossible', `This will self-destruct in 5 seconds.`, 'Ok');
  }

  showTextField(): void {
    let initialValue = null;
    TNSFancyAlert.showTextField('Enter your name', initialValue, new TNSFancyAlertButton({
      label: "Done",
      action: (value: any) => {
        alert({
          title: "User entered:",
          message: value,
          okButtonText: "Correct ;)"
        });
      }
    }), undefined, undefined, "What's you name", ".. if you have one", "Dismiss");
  }

  showSwitch(): void {
    TNSFancyAlert.showSwitch("Don't ask me again", '#58B136', new TNSFancyAlertButton({
      label: "Save",
      action: (isSelected: boolean) => {
        console.log(`Don't ask again was selected? ${isSelected}`);
      }
    }), 'switch.png', '#B3714F', 'Need a switch?', `It can be useful.`, 'Got it.');
  }
}