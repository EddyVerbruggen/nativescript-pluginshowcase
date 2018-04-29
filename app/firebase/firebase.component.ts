import { Component, NgZone, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { AbstractMenuPageComponent } from "~/abstract-menu-page-component";
import { ModalDialogService } from "nativescript-angular";
import { PluginInfo } from "~/shared/plugin-info";
import { PluginInfoWrapper } from "~/shared/plugin-info-wrapper";
import { AppIconChanger } from "nativescript-app-icon-changer";
import { AppShortcuts } from "nativescript-app-shortcuts";
import { AppComponent } from "~/app.component";
import {
  firestore,
  LoginType,
  login as firebaseLogin,
  logout as firebaseLogout,
  User as firebaseUser
} from "nativescript-plugin-firebase";
import { ListViewEventData } from "nativescript-ui-listview";
import { Color } from "tns-core-modules/color";
import * as appSettings from "tns-core-modules/application-settings";
import { View } from "tns-core-modules/ui/core/view";
import { ad, layout } from "tns-core-modules/utils/utils";
import { prompt, PromptResult } from "tns-core-modules/ui/dialogs";
import { RadListViewComponent } from "nativescript-ui-listview/angular";

const firebase = require("nativescript-plugin-firebase/app");

interface City {
  name: string;
  population: number;
  author: string;
  // set in the app
  id?: string;
}

// Note that firebase.init runs in app.component.ts
@Component({
  selector: "page-firebase",
  moduleId: module.id,
  templateUrl: "./firebase.component.html",
  styleUrls: ["firebase-common.css"],
  animations: [
    trigger("from-bottom", [
      state("in", style({
        "opacity": 1,
        transform: "translateY(0)"
      })),
      state("void", style({
        "opacity": 0,
        transform: "translateY(20%)"
      })),
      transition("void => *", [animate("1600ms 700ms ease-out")])
    ]),
    trigger("fade-in", [
      state("in", style({
        "opacity": 1
      })),
      state("void", style({
        "opacity": 0
      })),
      transition("void => *", [animate("800ms 2000ms ease-out")])
    ]),
    trigger("scale-in", [
      state("in", style({
        "opacity": 1,
        transform: "scale(1)"
      })),
      state("void", style({
        "opacity": 0,
        transform: "scale(0.9)"
      })),
      transition("void => *", [animate("1100ms ease-out")])
    ]),
    trigger("from-right", [
      state("in", style({
        "opacity": 1,
        transform: "translate(0)"
      })),
      state("void", style({
        "opacity": 0,
        transform: "translate(20%)"
      })),
      transition("void => *", [animate("600ms 1500ms ease-out")])
    ])
  ]
})
export class FirebaseComponent extends AbstractMenuPageComponent implements OnInit {
  private static APP_SETTINGS_KEY_HAS_LOGGED_IN_WITH_GOOGLE = "HAS_LOGGED_IN_WITH_GOOGLE";
  suppressAppIconChangedNotification: boolean = false;
  private appIconChanger: AppIconChanger;
  private appShortcuts: AppShortcuts;
  private citiesCollectionRef: firestore.CollectionReference;

  private animationApplied = false;
  private leftItem: View;
  private rightItem: View;
  private mainView: View;

  loadingUser: boolean = true;
  user: firebaseUser;
  cities: Array<City>;

  @ViewChild("citiesListView") listViewComponent: RadListViewComponent;

  constructor(protected appComponent: AppComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService,
              private zone: NgZone) {
    super(appComponent, vcRef, modalService);
  }

  private getCity(cityDoc: firestore.DocumentSnapshot): City {
    const city = <City>cityDoc.data();
    // set the id, so we can update and delete the item more easily later on
    city.id = cityDoc.id;
    return city;
  }

  ngOnInit(): void {
    this.citiesCollectionRef = firebase.firestore().collection("cities");
    this.citiesCollectionRef.onSnapshot((snapshot: firestore.QuerySnapshot) => {
      this.zone.run(() => {
        const cities: Array<City> = [];
        snapshot.forEach(docSnap => cities.push(this.getCity(docSnap)));
        // sort alphabetically by city.name
        this.cities = cities.sort((cityA, cityB) => cityA.name > cityB.name ? 1 : -1);
      });
    });

    // if the user previously logged in with Google, try again now
    if (appSettings.getBoolean(FirebaseComponent.APP_SETTINGS_KEY_HAS_LOGGED_IN_WITH_GOOGLE, false)) {
      this.loginWithGoogle();
    } else {
      this.loadingUser = false;
    }
  }

  getAuthor(city: City): string {
    if (this.user && city.author && city.author.indexOf("@gmail.com") > -1) {
      return city.author === this.user.email ? "You 😍" : "A Google User";
    } else {
      return "Anonymous";
    }
  }

  loginWithGoogle(): void {
    this.loadingUser = true;
    firebaseLogin({type: LoginType.GOOGLE})
        .then(result => {
          this.user = result;
          this.loadingUser = false;
          appSettings.setBoolean(FirebaseComponent.APP_SETTINGS_KEY_HAS_LOGGED_IN_WITH_GOOGLE, true);
        })
        .catch(err => this.loadingUser = false);
  }

  logout(): void {
    firebaseLogout()
        .then(() => {
          this.user = null;
          appSettings.setBoolean(FirebaseComponent.APP_SETTINGS_KEY_HAS_LOGGED_IN_WITH_GOOGLE, false);
        })
        .catch(err => console.log("Logout error: " + err));
  }

  fabTapped(): void {
    prompt({
      title: "What's the name of the city?",
      okButtonText: "Confirm",
      cancelButtonText: "Cancel",
      cancelable: true
    }).then((result: PromptResult) => {
      if (result.result && result.text) {
        let name = result.text.trim().length === 0 ? undefined : result.text.trim();
        this.citiesCollectionRef.add(
            {
              name: name,
              author: this.user ? this.user.email : "Anonymous"
            })
            .then(() => ad && ad.dismissSoftInput())
            .catch(err => console.log(`Create err: ${err}`));
      }
    });
  }

  onItemLoading(args: ListViewEventData) {
    args.view.backgroundColor = new Color(args.index % 2 === 0 ? "#ffa539" : "#f39c38");
  }

  onSwipeCellFinished(args: ListViewEventData) {
    if (args.data.x > 200) {
      console.log("Perform left action");
    } else if (args.data.x < -200) {
      console.log("Perform right action");
    }
    this.animationApplied = false;
  }

  onSwipeCellStarted(args: ListViewEventData) {
    const swipeLimits = args.data.swipeLimits;
    swipeLimits.threshold = args['mainView'].getMeasuredWidth() * 0.2; // 20% of whole width
    swipeLimits.left = args['mainView'].getMeasuredWidth() * 0.65; // 65% of whole width
    swipeLimits.right = args['mainView'].getMeasuredWidth() * 0.35; // 35% of whole width
  }

  onCellSwiping(args: ListViewEventData) {
    const swipeView = args['swipeView'];
    this.mainView = args['mainView'];
    this.leftItem = swipeView.getViewById('left-stack');
    this.rightItem = swipeView.getViewById('right-stack');

    if (args.data.x > 0) {
      const leftDimensions = View.measureChild(
          <View>this.leftItem.parent,
          this.leftItem,
          layout.makeMeasureSpec(Math.abs(args.data.x), layout.EXACTLY),
          layout.makeMeasureSpec(this.mainView.getMeasuredHeight(), layout.EXACTLY));
      View.layoutChild(<View>this.leftItem.parent, this.leftItem, 0, 0, leftDimensions.measuredWidth, leftDimensions.measuredHeight);
      this.hideOtherSwipeTemplateView("left");
    } else {
      const rightDimensions = View.measureChild(
          <View>this.rightItem.parent,
          this.rightItem,
          layout.makeMeasureSpec(Math.abs(args.data.x), layout.EXACTLY),
          layout.makeMeasureSpec(this.mainView.getMeasuredHeight(), layout.EXACTLY));

      View.layoutChild(<View>this.rightItem.parent, this.rightItem, this.mainView.getMeasuredWidth() - rightDimensions.measuredWidth, 0, this.mainView.getMeasuredWidth(), rightDimensions.measuredHeight);
      this.hideOtherSwipeTemplateView("right");
    }
  }

  onLeftSwipeClick(args: ListViewEventData) {
    const city = <City>args.object.bindingContext;
    this.listViewComponent.listView.notifySwipeToExecuteFinished();

    if (args.object.id === "btnName") {
      prompt({
        title: "City name",
        defaultText: city.name ? city.name : "",
        okButtonText: "Confirm",
        cancelButtonText: "Cancel",
        cancelable: true
      }).then((result: PromptResult) => {
        if (result.result) {
          city.name = result.text.trim().length === 0 ? undefined : result.text.trim();
          this.citiesCollectionRef.doc(city.id).update(
              {
                name: city.name,
                author: this.user ? this.user.email : "Anonymous"
              })
              .then(() => ad && ad.dismissSoftInput())
              .catch(err => console.log(`Update err: ${err}`));
        }
      });

    } else if (args.object.id === "btnPopulation") {
      prompt({
        title: "City population",
        defaultText: city.population ? "" + city.population : "",
        okButtonText: "Confirm",
        cancelButtonText: "Cancel",
        cancelable: true
      }).then((result: PromptResult) => {
        if (result.result) {
          city.population = +(result.text.trim().length === 0 ? undefined : result.text.trim());
          this.citiesCollectionRef.doc(city.id).update(
              {
                population: city.population,
                author: this.user ? this.user.email : "Anonymous"
              })
              .then(() => ad && ad.dismissSoftInput())
              .catch(err => console.log(`Update err: ${err}`));
        }
      });
    }
  }

  onRightSwipeClick(args) {
    const city = <City>args.object.bindingContext;
    this.listViewComponent.listView.notifySwipeToExecuteFinished();

    this.citiesCollectionRef.doc(city.id).delete()
        .then(() => console.log(`Delete city '${city.name}'`))
        .catch(err => console.log(`Delete err: ${err}`));
  }

  hideOtherSwipeTemplateView(currentSwipeView: string) {
    switch (currentSwipeView) {
      case "left":
        if (this.rightItem.getActualSize().width !== 0) {
          View.layoutChild(<View>this.rightItem.parent, this.rightItem, this.mainView.getMeasuredWidth(), 0, this.mainView.getMeasuredWidth(), 0);
        }
        break;
      case "right":
        if (this.leftItem.getActualSize().width !== 0) {
          View.layoutChild(<View>this.leftItem.parent, this.leftItem, 0, 0, 0, 0);
        }
        break;
      default:
        break;
    }
  }

  protected getPluginInfo(): PluginInfoWrapper {
    return new PluginInfoWrapper(
        "Google's cloud storage product, but it can do a whole lot more! This app includes 3 of those sub modules.",
        Array.of(
            new PluginInfo(
                "nativescript-ui-listview",
                "NativeScript UI ListView",
                "https://www.npmjs.com/package/nativescript-ui-listview",
                "The ListView is one of the components that used to be part of Progress NativeScript UI, but now lives on its own. For other components see https://www.npmjs.com/package/nativescript-pro-ui."
            ),

            new PluginInfo(
                "nativescript-plugin-firebase",
                "Firebase",
                "https://github.com/EddyVerbruggen/nativescript-plugin-firebase",
                `CLOUD FIRESTORE: A flexible, scalable database which keeps your data in sync across client apps through realtime listeners and offers offline support so you can build responsive apps that work regardless of network latency or Internet connectivity.

GOOGLE AUTH: You can let your users authenticate with Firebase using their Google Accounts. This is just one of the support authentication methods Firebase offers.

ANALYTICS: Google Analytics for Firebase is a free app measurement solution that provides insight on app usage and user engagement.

CRASHLYTICS: Get clear, actionable insight into app issues with this powerful crash reporting solution.`),

            new PluginInfo(
                "nativescript-floatingactionbutton",
                "FAB",
                "https://github.com/bradmartin/nativescript-floatingactionbutton",
                "Add a Material Design Floating Action Button to your page, at a corner of your liking."
            )
        )
    );
  }
}
