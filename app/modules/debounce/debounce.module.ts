import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { DebounceDirective } from "./debounce.directive";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [DebounceDirective],
  exports: [DebounceDirective]
})

export class DebounceModule {
}