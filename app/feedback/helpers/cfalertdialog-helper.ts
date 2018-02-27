import {
  CFAlertDialog,
  DialogOptions,
  CFAlertGravity,
  CFAlertActionAlignment,
  CFAlertActionStyle,
  CFAlertStyle
} from "nativescript-cfalert-dialog";

export class CFAlertDialogHelper {
  private cfalertDialog: CFAlertDialog;

  constructor() {
    this.cfalertDialog = new CFAlertDialog();
  }

  showAlert(blur: boolean): void {
    this.cfalertDialog.show({
      dialogStyle: CFAlertStyle.ALERT,
      title: "Alert! Run 4 your life! 😱",
      backgroundBlur: blur,
      onDismiss: () => console.log("showAlert dismissed")
    });
  }

  showNotification(): void {
    const options: DialogOptions = {
      dialogStyle: CFAlertStyle.NOTIFICATION,
      title: "This is a notification!",
      message: "It is shown at the top of the screen, and the background is blurry (on iOS).",
      backgroundBlur: true,
      onDismiss: dialog => console.log("Dialog was dismissed"),
      buttons: [{
        text: "Okay",
        buttonStyle: CFAlertActionStyle.POSITIVE,
        buttonAlignment: CFAlertActionAlignment.END,
        textColor: "#EEE",
        backgroundColor: "#888",
        onClick: response => console.log(`Button pressed: ${response}`)
      }]
    };
    this.cfalertDialog.show(options);
  }

  showBottomSheet(): void {
    const options: DialogOptions = {
      dialogStyle: CFAlertStyle.BOTTOM_SHEET,
      title: "This is a bottom sheet!",
      message: "It is shown at the bottom of the screen",
      buttons: [
        {
          text: "Okay",
          buttonStyle: CFAlertActionStyle.POSITIVE,
          buttonAlignment: CFAlertActionAlignment.JUSTIFIED,
          onClick: response => console.log(`Button pressed: ${response}`)
        },
        {
          text: "Nope",
          buttonStyle: CFAlertActionStyle.NEGATIVE,
          buttonAlignment: CFAlertActionAlignment.JUSTIFIED,
          onClick: response => console.log(`Button pressed: ${response}`)
        }]
    };
    this.cfalertDialog.show(options);
  }

  showSimpleList(): void {
    const options: DialogOptions = {
      dialogStyle: CFAlertStyle.ALERT,
      title: "This is a simple list!",
      simpleList: {
        items: ["Tomato", "Potato", "Carrot", "Spinach"],
        onClick: (dialogInterface, index) => console.log(`dialogInterface: ${dialogInterface}, index: ${index}`)
      }
    };
    this.cfalertDialog.show(options);
  }

  showSingleChoiceList(): void {
    const options: DialogOptions = {
      dialogStyle: CFAlertStyle.ALERT,
      title: "This is a simple list!",
      singleChoiceList: {
        items: ["Tomato", "Potato", "Carrot", "Spinach"],
        selectedItem: 2,
        onClick: (dialogInterface, index) => console.log(`dialogInterface: ${dialogInterface}, index: ${index}`)
      },
      buttons: [
        {
          text: "Okay",
          buttonStyle: CFAlertActionStyle.POSITIVE,
          buttonAlignment: CFAlertActionAlignment.END,
          onClick: response => console.log(`Button pressed: ${response}`)
        }
      ]
    };
    this.cfalertDialog.show(options);
  }

  showMultiChoiceList(): void {
    let itemState: [boolean] = [false, false, false, false];
    let options: DialogOptions = {
      dialogStyle: CFAlertStyle.ALERT,
      title: "This is a simple list!",
      multiChoiceList: {
        items: ["Tomato", "Potato", "Carrot", "Spinach"],
        selectedItems: itemState,
        onClick: (dialogInterface, index, b) => console.log(`dialogInterface: ${dialogInterface}, index: ${index}, b: ${b}`)
      },
      buttons: [
        {
          text: "Okay",
          buttonStyle: CFAlertActionStyle.POSITIVE,
          buttonAlignment: CFAlertActionAlignment.END,
          onClick: response => console.log(`Button pressed: ${response}`)
        }
      ]
    };
    this.cfalertDialog.show(options);
  }
}
