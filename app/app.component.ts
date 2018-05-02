import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import * as application from "tns-core-modules/application";
import { isIOS } from "tns-core-modules/platform";
import { Config } from "~/shared/config";
import { DrawerStateChangingEventArgs } from "nativescript-ui-sidedrawer";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { alert } from "tns-core-modules/ui/dialogs";
import { availableSync } from "nativescript-appavailability";
import { openUrl } from "tns-core-modules/utils/utils";
import { NavigationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

const firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit {
  isIOS: boolean = isIOS;
  isTablet: boolean = Config.isTablet;

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: SideDrawerType;
  private routerSubscription: Subscription;

  private hasIOSSafeAreaInsets = isIOS && application.ios.window.safeAreaInsets && application.ios.window.safeAreaInsets.bottom > 0;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // A few fixes for RadSideDrawer and iPhone X (and other devices later as well, perhaps)
    if (isIOS && application.ios.window.safeAreaInsets && application.ios.window.safeAreaInsets.bottom > 0) {
      application.addCss(`
          GridLayout.menu-safearea-top { margin-top: ${34 + application.ios.window.safeAreaInsets.top} }
          RadSideDrawer { margin-bottom: -${application.ios.window.safeAreaInsets.bottom} }
          .madeby-container Label.madeby-text { padding-bottom: ${2 * application.ios.window.safeAreaInsets.bottom} }
        `);
    } else {
      application.addCss(`
          GridLayout.menu-safearea-top { margin-top: 34 }
          .madeby-container Label.madeby-text { padding-bottom: 14 }
        `);
    }

    this.routerSubscription = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd && this.drawer) {
        this.drawer.closeDrawer();
      }
    });

    firebase.init().then(
        instance => {
          console.log("firebase.init done");
        },
        error => {
          console.log(`firebase.init error: ${error}`);
        }
    );
  }

  ngAfterViewInit(): void {
    // add a nice shadow to the iOS drawer (there already is one on Android)
    this.drawer = this.drawerComponent.sideDrawer;
    if (this.drawer.ios) {
      const sideDrawer: TKSideDrawer = this.drawer.ios.defaultSideDrawer;
      sideDrawer.style.shadowMode = TKSideDrawerShadowMode.Hostview;
      sideDrawer.style.shadowOpacity = 0.75;
      sideDrawer.style.shadowRadius = 5;
      sideDrawer.transitionDuration = 0.25;
    }
  }

  onDrawerClosing(args: DrawerStateChangingEventArgs) {
    if (this.isIOS && !this.hasIOSSafeAreaInsets) {
      UIApplication.sharedApplication.setStatusBarStyleAnimated(UIStatusBarStyle.LightContent, false);
    }
  }

  onDrawerOpening(args: DrawerStateChangingEventArgs) {
    if (this.isIOS && !this.hasIOSSafeAreaInsets) {
      UIApplication.sharedApplication.setStatusBarStyleAnimated(UIStatusBarStyle.Default, false);
    }
  }

  toggleMenu(): void {
    this.drawer.toggleDrawerState();
  }

  getDrawer(): SideDrawerType {
    return this.drawer;
  }

  openTwitter(): void {
    let url, message;
    const urlScheme = this.isIOS ? "twitter://" : "com.twitter.android";

    if (availableSync(urlScheme)) {
      message = "With nativescript-appavailability we determined you have the Twitter app installed, now opening it!";
      url = `${urlScheme}${this.isIOS ? "/user?screen_name=" : "user?user_id="}eddyverbruggen`;
    } else {
      message = "With nativescript-appavailability we determined you don't have the Twitter app installed, so we're now loading Twitter in a browser instead.";
      url = "https://twitter.com/eddyverbruggen";
    }

    alert({
      title: "App Availability plugin FTW!",
      message: message,
      okButtonText: "Honestly I can't wait",
      cancelable: false
    }).then(() => {
      // open in the app
      openUrl(url);
    });
  }
}
