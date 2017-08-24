import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FeedbackComponent } from "./feedback.component";

const routes: Routes = [
  {path: "", component: FeedbackComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class FeedbackRoutingModule {
}
