import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FeedbackRoutingModule } from "./feedback-routing.module";
import { FeedbackComponent } from "./feedback.component";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { ToastService } from "./toast.service";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    FeedbackRoutingModule,
    TNSFontIconModule,
  ],
  declarations: [
    FeedbackComponent
  ],
  providers: [
    ToastService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class FeedbackModule { }
