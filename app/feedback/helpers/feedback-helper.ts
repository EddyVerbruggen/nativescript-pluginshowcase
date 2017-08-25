import { Feedback, FeedbackPosition, FeedbackType } from "nativescript-feedback";
import { Color } from "tns-core-modules/color";

export class FeedbackHelper {
  private feedback: Feedback;

  constructor() {
    this.feedback = new Feedback();
  }

  showSuccess(): void {
    this.feedback.success({
      title: "Peek-a-boo!",
      message: "Sorry. I will dismiss myself after 2.5 seconds.",
      duration: 2500,
      // type: FeedbackType.Success, // no need to specify when using 'success' instead of 'show'
      onTap: () => {
        console.log("showSuccess tapped");
      }
    });
  }

  showSuccessAltColors(): void {
    this.feedback.show({
      title: "Custom colors :)",
      titleColor: new Color("black"),
      message: "Custom text colors and background color.",
      messageColor: new Color("#e5f5f8"),
      duration: 2500,
      type: FeedbackType.Success,
      backgroundColor: new Color("lightskyblue"),
      onTap: () => {
        console.log("showSuccessAltColor tapped");
      }
    });
  }

  showInfo(): void {
    this.feedback.show({
      title: "Public Service Announcement",
      message: "{N}ativeScript ROCKS!",
      duration: 2500,
      type: FeedbackType.Info,
      onTap: () => {
        console.log("showInfo tapped");
      }
    });
  }

  showWarning(): void {
    this.feedback.show({
      // title: "The warning title",
      message: "This one doesn't have a title, but a very long message so this baby will wrap. Showing off multi-line feedback. Woohoo!",
      duration: 4000,
      position: FeedbackPosition.Top,
      type: FeedbackType.Warning,
      onTap: () => {
        console.log("showWarning tapped");
      }
    });
  }

  showTitleOnly(): void {
    this.feedback.show({
      title: "Title only, not even an icon. Sad.",
      duration: 2000,
      onTap: () => {
        console.log("showMessageOnly tapped");
      }
    });
  }

  showCustomIcon(): void {
    this.feedback.show({
      title: "Thumbs up!",
      message: "Custom colors and icon. Loaded from the App_Resources folder. And this one has a lot of text as well, so the duration needs to be a bit longer and stuff.",
      duration: 6000,
      backgroundColor: new Color("yellowgreen"),
      icon: "thumbsup", // in App_Resources/platform folders
      onTap: () => {
        console.log("showCustomIcon tapped");
      }
    });
  }

  showError(): void {
    this.feedback.show({
      title: "The error title",
      message: "Not too long a text here. But it could be..",
      duration: 1000,
      type: FeedbackType.Error,
      onTap: () => {
        console.log("showError tapped");
      }
    });
  }

  showErrorBottom(): void {
    this.feedback.show({
      title: "The title",
      message: "A very long message so this baby will wrap. Showing off multi-line feedback. Woohoo!",
      duration: 5000,
      position: FeedbackPosition.Bottom,
      type: FeedbackType.Error,
      onTap: () => {
        console.log("showErrorBottom tapped");
      }
    });
  }

  dismiss(): void {
    this.feedback.hide();
  }
}