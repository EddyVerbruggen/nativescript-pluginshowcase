import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { InfoModalComponent } from "~/info-modal/info-modal";
import { InfoRoutingModule } from "~/info-modal/info-routing.module";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    InfoRoutingModule,
    TNSFontIconModule
  ],
  declarations: [
    InfoModalComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class InfoModule {
}
