import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule, NativeScriptRouterModule } from "nativescript-angular";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";
import { MenuComponent } from "./menu/menu.component";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routerConfig: Routes = [
  {
    path: "",
    component: MenuComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "feedback",
        loadChildren: "./feedback/feedback.module#FeedbackModule"
      },
    ]
  }
];

//noinspection JSUnusedGlobalSymbols
@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild(routerConfig),
    NativeScriptUIListViewModule,
    NativeScriptUISideDrawerModule,
    TNSFontIconModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  // providers: [
  //   CartService
  // ],
  declarations: [
    MenuComponent,
    // Can't extract these to an articles module because the ActionBar
    // doesn't render upon first entry to the first lazily loaded module
    HomeComponent,
  ]
})

export class MenuModule {
}