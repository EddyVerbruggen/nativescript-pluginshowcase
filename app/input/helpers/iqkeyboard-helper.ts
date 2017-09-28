import { PropertyChangeData } from "tns-core-modules/data/observable";

export class IQKeyboardHelper {
  private iqKeyboard: IQKeyboardManager;

  enabled: boolean = true; // useful for the NumKeyboard demo as well
  toolbarEnabled: boolean = false;
  tapOutsideToClose: boolean = false;
  showHintInToolbar: boolean = false;
  doneButtonTextChanged: boolean = false;
  darkAppearance: boolean = false;

  constructor() {
    // see https://github.com/tjvantoll/nativescript-IQKeyboardManager/blob/master/demo/app/main-view-model.ts
    this.iqKeyboard = IQKeyboardManager.sharedManager();
    this.iqKeyboard.enable = this.enabled;
    this.iqKeyboard.enableAutoToolbar = this.toolbarEnabled;
    this.iqKeyboard.shouldResignOnTouchOutside = this.tapOutsideToClose;
    this.iqKeyboard.shouldShowTextFieldPlaceholder = this.showHintInToolbar;
  }

  toggleIQKeyboard(args: PropertyChangeData): void {
    if (args.value !== null && args.value !== this.enabled) {
      this.iqKeyboard.enable = this.enabled = args.value;
    }
  }

  toggleIQKeyboardToolbar(args: PropertyChangeData): void {
    if (args.value !== null && args.value !== this.toolbarEnabled) {
      this.iqKeyboard.enableAutoToolbar = this.toolbarEnabled = args.value;
    }
  }

  toggleTapOutsideToClose(args: PropertyChangeData): void {
    if (args.value !== null && args.value !== this.tapOutsideToClose) {
      this.iqKeyboard.shouldResignOnTouchOutside = this.tapOutsideToClose = args.value;
    }
  }

  toggleShowHintInToolbar(args: PropertyChangeData): void {
    if (args.value !== null && args.value !== this.showHintInToolbar) {
      this.iqKeyboard.shouldShowTextFieldPlaceholder = this.showHintInToolbar = args.value;
    }
  }

  toggleDoneButtonText(args: PropertyChangeData): void {
    if (args.value !== null && args.value !== this.doneButtonTextChanged) {
      this.iqKeyboard.toolbarDoneBarButtonItemText = (this.doneButtonTextChanged = args.value) ? "Ready" : "Done";
    }
  }

  toggleDarkAppearance(args: PropertyChangeData): void {
    if (args.value !== null && args.value !== this.darkAppearance) {
      this.darkAppearance = args.value;
      this.iqKeyboard.overrideKeyboardAppearance = true;
      this.iqKeyboard.keyboardAppearance = this.darkAppearance ? UIKeyboardAppearance.Dark : UIKeyboardAppearance.Default;
    }
  }
}