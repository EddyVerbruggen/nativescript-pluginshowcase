import * as application from "application";
import * as platform from "tns-core-modules/platform";

declare const android: any;
declare const UIStatusBarStyle: any;
declare const UIApplication: any;

export function setStatusBarColors() {
  // Make the iOS status bar transparent with white text
  if (application.ios) {
    application.on("launch", () => UIApplication.sharedApplication.setStatusBarStyleAnimated(UIStatusBarStyle.LightContent, true));
  }

  // Make the Android status bar transparent
  if (application.android) {
    // TODO make sure this works when --uglify'd, otherwise use "activityStarted"
    application.android.on(application.AndroidApplication.activityStartedEvent, (data: application.AndroidActivityEventData) => {
      if (application.android && platform.device.sdkVersion >= "21") {
        let View = android.view.View;
        let window = application.android.startActivity.getWindow();
        window.setStatusBarColor(0x000000);

        let decorView = window.getDecorView();
        decorView.setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            // | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
      }
    });
  }
}
