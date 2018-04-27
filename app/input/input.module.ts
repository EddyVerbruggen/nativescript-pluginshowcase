import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { InputRoutingModule } from "./input-routing.module";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { InputComponent } from "./input.component";
import { TNSCheckBoxModule } from "nativescript-checkbox/angular";

import { registerElement } from "nativescript-angular/element-registry";
import { NativeScriptFormsModule } from "nativescript-angular";

registerElement("DrawingPad", () => require("nativescript-drawingpad").DrawingPad);
registerElement("NumericKeyboard", () => require("nativescript-numeric-keyboard").NumericKeyboardView);

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    TNSCheckBoxModule,
    InputRoutingModule,
    TNSFontIconModule,
  ],
  declarations: [
    InputComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class InputModule {
}
