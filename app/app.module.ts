import { enableProdMode, NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { setStatusBarColors } from "./utils/status-bar-util";
import { Config } from "./shared/config";
import { NativeScriptFormsModule, RouterExtensions } from "nativescript-angular";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { registerElement } from "nativescript-angular";
import { NativeScriptAnimationsModule } from "nativescript-angular/animations";

// import * as application from "tns-core-modules/application";
import { ThreeDeeTouch } from "nativescript-3dtouch";
import { isIOS } from "tns-core-modules/platform";

registerElement("Gradient", () => require("nativescript-gradient").Gradient);

setStatusBarColors();

if (Config.isProdMode) {
  enableProdMode();
}

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
    {provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader}
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
  constructor(private routerExtensions: RouterExtensions) {

    // This is for nativescript-3dtouch
    if (isIOS) {
      new ThreeDeeTouch().setQuickActionCallback(shortcutItem => {
        console.log("app was launched by shortcut type '" + shortcutItem.type + "' with title '" + shortcutItem.localizedTitle + "'");
        // this is where you handle any specific case for the shortcut
        if (shortcutItem.type === "feedback") {
          this.routerExtensions.navigate(['/menu/feedback'], {
            animated: false
          });
        } else if (shortcutItem.type === "mapping") {
          // this one could be better (nav to today?)
          this.routerExtensions.navigate(['/menu/mapping'], {
            animated: false
          });
        }
      });
    }
  }
}
