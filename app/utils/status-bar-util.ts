import * as application from "application";
import * as platform from "platform";
import * as utils from "utils/utils";
import { AndroidActivityEventData, AndroidApplication } from "tns-core-modules/application";

declare const android: any;
declare const UIStatusBarStyle: any;
declare const UIApplication: any;

export function setStatusBarColors() {
  // Make the iOS status bar transparent with white text.
  if (application.ios) {
    application.on("launch", () => {
      console.log(">>> set statusbar light")
      utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarStyle = UIStatusBarStyle.LightContent;
    });
  }

  // Make the Android status bar transparent.
  // See http://bradmartin.net/2016/03/10/fullscreen-and-navigation-bar-color-in-a-nativescript-android-app/
  // for details on the technique used.
  if (application.android) {
    // TODO make sure this works when --uglify'd, otherwise use "activityStarted"
    application.android.on(AndroidApplication.activityStartedEvent, (data: AndroidActivityEventData) => {
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
