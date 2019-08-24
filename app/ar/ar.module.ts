import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ARRoutingModule } from "./ar-routing.module";
import { ARComponent } from "./ar.component";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { DropDownModule } from "nativescript-drop-down/angular";

import { registerElement } from "nativescript-angular/element-registry";

registerElement("AR", () => require("nativescript-ar").AR);

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ARRoutingModule,
    TNSFontIconModule,
    DropDownModule
  ],
  declarations: [
    ARComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ARModule {
}
