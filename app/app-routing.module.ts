import { NgModule } from "@angular/core";
import { PreloadAllModules, Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
  {path: "", redirectTo: "/menu", pathMatch: "full"},
  {path: "menu", loadChildren: "./menu.module#MenuModule"}
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
