import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import { RouterExtensions } from "nativescript-angular";
import { NavigationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { isIOS } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";
import { available } from "nativescript-appavailability";
import { openUrl } from "tns-core-modules/utils/utils";

@Component({
  moduleId: module.id,
  selector: 'menu-contents',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu-common.css', 'menu.css']
})

export class MenuComponent implements OnInit, AfterViewInit, OnDestroy {
  public isIOS: boolean = isIOS;

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private _drawer: SideDrawerType;
  private routerSubscription: Subscription;

  constructor(private _changeDetectionRef: ChangeDetectorRef,
              private _page: Page,
              private _router: Router,
              private _routerExtensions: RouterExtensions) {
    console.log(">> ios: " + this.isIOS);
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

  openTwitter(): void {
    const twitterScheme = "twitter://";
    available(twitterScheme).then((avail: boolean) => {
      if (avail) {
        // open in the app
        openUrl(twitterScheme + (isIOS ? "/user?screen_name=" : "user?user_id=") + "eddyverbruggen");
      } else {
        // open in the default browser
        openUrl("https://twitter.com/eddyverbruggen");
      }
    })
  }
}