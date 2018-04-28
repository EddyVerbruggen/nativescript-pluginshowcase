import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FirebaseComponent } from "./firebase.component";

const routes: Routes = [
  {path: "", component: FirebaseComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class FirebaseRoutingModule {
}
