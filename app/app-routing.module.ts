import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
  {path: "", redirectTo: "/menu", pathMatch: "full"},
  // {path: "home", loadChildren: "./home/home.module#HomeModule"},
  {path: "menu", loadChildren: "./menu.module#MenuModule"}
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
