import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AppIconRoutingModule } from "./appicon-routing.module";
import { AppIconComponent } from "./appicon.component";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    AppIconRoutingModule,
    TNSFontIconModule,
  ],
  declarations: [
    AppIconComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppIconModule { }
