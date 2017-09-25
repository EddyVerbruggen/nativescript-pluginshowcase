import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { NavigationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { isIOS } from "tns-core-modules/platform";
import { availableSync } from "nativescript-appavailability";
import { openUrl } from "tns-core-modules/utils/utils";
import { alert } from "tns-core-modules/ui/dialogs";
import { Config } from "../shared/config";

@Component({
  moduleId: module.id,
  selector: 'menu-contents',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.css']
})

export class MenuComponent implements OnInit, AfterViewInit, OnDestroy {
  isIOS: boolean = isIOS;
  isTablet: boolean = Config.isTablet;

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private _drawer: SideDrawerType;
  private routerSubscription: Subscription;

  constructor(private _changeDetectionRef: ChangeDetectorRef,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.routerSubscription = this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd && this._drawer) {
        this._drawer.closeDrawer();
      }
    });
  }

  ngAfterViewInit(): void {
    // add a nice shadow to the iOS drawer (there already is one on Android)
    this._drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
    if (this._drawer.ios) {
      const sideDrawer: TKSideDrawer = this._drawer.ios.defaultSideDrawer;
      sideDrawer.style.shadowMode = TKSideDrawerShadowMode.Hostview;
      sideDrawer.style.shadowOpacity = 0.75;
      sideDrawer.style.shadowRadius = 5;
      sideDrawer.transitionDuration = 0.25;
    }
  }

  ngOnDestroy(): void {
    this._changeDetectionRef.detach();
    this._changeDetectionRef = null;
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    this._drawer = null;
    this.drawerComponent = null;
  }

  toggleMenu(): void {
    this._drawer.toggleDrawerState();
  }

  isMenuOpen(): boolean {
    return this._drawer.getIsOpen();
  }

  closeMenuIfOpen(): void {
    if (this._drawer.getIsOpen()) {
      this._drawer.closeDrawer();
    }
  }

  getDrawer(): SideDrawerType {
    return this._drawer;
  }

  openTwitter(): void {
    let url, message;

    if (availableSync("twitter://")) {
      message = "With nativescript-appavailability we determined you have the Twitter app installed, now opening it!";
      url = "twitter://" + (isIOS ? "/user?screen_name=" : "user?user_id=") + "eddyverbruggen";
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