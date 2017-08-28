import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { InputRoutingModule } from "./input-routing.module";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { InputComponent } from "./input.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
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
