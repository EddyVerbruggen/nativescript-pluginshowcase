import { Component, OnInit } from "@angular/core";
import * as application from "tns-core-modules/application";
import { isIOS } from "tns-core-modules/platform";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Only 1 thingy needs an iPhone X (and other devices later as well, perhaps) tweak, so doing it quick & dirty here
    if (isIOS && application.ios.window.safeAreaInsets) {
      const bottomSafeArea: number = application.ios.window.safeAreaInsets.bottom;
      if (bottomSafeArea > 0) {
        application.addCss(`
            .madeby-container Label.madeby-text { padding-bottom: ${bottomSafeArea} }
          `);
      }
    } else {
      application.addCss(`
            .madeby-container Label.madeby-text { padding-bottom: 14 }
          `);
    }
  }
}
