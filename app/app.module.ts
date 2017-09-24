import { NgModule, NgModuleFactoryLoader, NgZone, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { setStatusBarColors } from "./utils/status-bar-util";
import { Config } from "./shared/config";
import { NativeScriptFormsModule, registerElement, RouterExtensions } from "nativescript-angular";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { NativeScriptAnimationsModule } from "nativescript-angular/animations";
import { AppShortcuts } from "nativescript-app-shortcuts";
import { device, isIOS } from "tns-core-modules/platform";
import { DeviceType } from "tns-core-modules/ui/enums";
import * as application from "application";
import { ToastService } from "./services/toast.service";

const fs = require("file-system");

registerElement("Gradient", () => require("nativescript-gradient").Gradient);

setStatusBarColors();

Config.isTablet = device.deviceType === DeviceType.Tablet;

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptAnimationsModule,
    AppRoutingModule,
    TNSFontIconModule.forRoot({
      'mdi': 'fonts/materialdesignicons.css'
    }),
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ToastService,
    {
      provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader
    }
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
  constructor(private routerExtensions: RouterExtensions,
              private zone: NgZone) {

    if (Config.isTablet) {
      let cssFileName = fs.path.join(fs.knownFolders.currentApp().path, "app.tablet.css");
      fs.File.fromPath(cssFileName).readText().then((result: string) => {
        application.addCss(result);
      });
    }

    // This is for nativescript-app-shortcuts
    new AppShortcuts().setQuickActionCallback(shortcutItem => {
      console.log(`The app was launched by shortcut type '${shortcutItem.type}'`);

      // this is where you handle any specific case for the shortcut, based on its type
      if (shortcutItem.type === "feedback") {
        this.deeplink("/menu/feedback");
      } else if (shortcutItem.type === "appicon") {
        this.deeplink("/menu/appicon");
      } else if (shortcutItem.type === "mapping") {
        this.deeplink("/menu/mapping");
      }
    });
  }

  private deeplink(to: string): void {
    // a timeout is required for Android (not sure how long the delay should be yet)
    setTimeout(() => {
      this.zone.run(() => {
        this.routerExtensions.navigate([to], {
          animated: true,
          clearHistory: true
        });
      });
    }, isIOS ? 0 : 1000);
  }
}
