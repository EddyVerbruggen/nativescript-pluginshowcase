import { enableProdMode, NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { setStatusBarColors } from "./utils/status-bar-util";
import { Config } from "./shared/config";
import { NativeScriptFormsModule } from "nativescript-angular";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { registerElement } from "nativescript-angular";

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
}
