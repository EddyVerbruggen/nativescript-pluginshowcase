import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { AppIconRoutingModule } from "./appicon-routing.module";
import { AppIconComponent } from "./appicon.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
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
export class AppIconModule {
}
