import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { FirebaseRoutingModule } from "./firebase-routing.module";
import { FirebaseComponent } from "./firebase.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    FirebaseRoutingModule,
    TNSFontIconModule,
    NativeScriptUIListViewModule
  ],
  declarations: [
    FirebaseComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class FirebaseModule { }
