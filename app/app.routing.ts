import { PreloadAllModules, Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "~/home/home.component";

const APP_ROUTES: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "info",
    loadChildren: "./info-modal/info.module#InfoModule"
  },
  {
    path: "feedback",
    loadChildren: "./feedback/feedback.module#FeedbackModule"
  },
  {
    path: "mapping",
    loadChildren: "./mapping/mapping.module#MappingModule"
  },
  {
    path: "speech",
    loadChildren: "./speech/speech.module#SpeechModule"
  },
  {
    path: "input",
    loadChildren: "./input/input.module#InputModule"
  },
  {
    path: "appicon",
    loadChildren: "./appicon/appicon.module#AppIconModule"
  },
  {
    path: "firebase",
    loadChildren: "./firebase/firebase.module#FirebaseModule"
  },
  {
    path: "ar",
    loadChildren: "./ar/ar.module#ARModule"
  }
];

export const routing = NativeScriptRouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules});
