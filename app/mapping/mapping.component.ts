import { Component, ViewContainerRef } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { MenuComponent } from "../menu/menu.component";
import { MapboxViewApi, Viewport as MapboxViewport } from "nativescript-mapbox";
import { AddressOptions, Directions } from "nativescript-directions";
import { ModalDialogService } from "nativescript-angular";
import { PluginInfo } from "../shared/plugin-info";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";

@Component({
  selector: "Mapping",
  moduleId: module.id,
  templateUrl: "./mapping.component.html",
  styleUrls: ["mapping-common.css"],
  animations: [
    trigger("flyInOut", [
      state("in", style({transform: "scale(1)", opacity: 1})),
      transition("void => *", [
        style({transform: "scale(0.9)", opacity: 0}),
        animate("1000ms 100ms ease-out")
      ])
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
export class MappingComponent extends AbstractMenuPageComponent {

  private directions: Directions;
  private map: MapboxViewApi;

  constructor(protected menuComponent: MenuComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService) {
    super(menuComponent, vcRef, modalService);
    this.directions = new Directions();
  }

  protected getPluginInfo(): PluginInfoWrapper {
    return new PluginInfoWrapper(
        "Try a few one- and two-finger gestures. Alos, press the FAB to drop a marker at the center of the viewport.\n\nThen, when you're bored playing with the map, scroll to the center of The Netherlands and tap the Home icon. Then follow its instructions to trigger the Directions plugin!",
        Array.of(
            new PluginInfo(
                "nativescript-mapbox",
                "Mapbox  🗽 🗼 🗻",
                "https://github.com/EddyVerbruggen/nativescript-mapbox",
                "Native OpenGL powered Maps. Crazy performance and feature-rich! Use custom markers and show the user's location. Here we use the map style 'traffic_day' to show live traffic!"
            ),

            new PluginInfo(
                "nativescript-directions",
                "Directions  👆 👉 👇 👈",
                "https://github.com/EddyVerbruggen/nativescript-directions",
                "Open the native Maps app to show directions to anywhere on 🌏 you like. Even with (multiple) waypoints in between!"
            ),

            new PluginInfo(
                "nativescript-floatingactionbutton",
                "FAB",
                "https://github.com/bradmartin/nativescript-floatingactionbutton",
                "Add a Material Design Floating Action Button to your page, at a corner of your liking."
            )
        )
    );
  }

  onMapReady(args): void {
    this.map = args.map;
    this.map.addMarkers([
      {
        id: 1,
        lat: 51.9280572,
        lng: 4.4201952,
        title: '{N] Developer day EU',
        subtitle: 'Such an awesome little conference',
        icon: 'res://tnsmarker',
        onTap: () => {
          console.log("{N] Developer day EU was tapped");
        },
        onCalloutTap: () => {
          console.log("{N] Developer day EU FTW Callout tapped");
        }
      }, {
        id: 2,
        lat: 42.624189,
        lng: 23.372106,
        title: 'DevReach 2017',
        subtitle: 'Tap to show directions',
        onTap: () => {
          console.log("DevReach 2017 was tapped");
        },
        onCalloutTap: () => {
          this.showDirectionsTo({
            lat: 42.624189,
            lng: 23.372106,
          });
        }
      },
      {
        id: 3,
        lat: 52.1851585,
        lng: 5.3974241,
        title: "Eddy's home",
        subtitle: "Tap to show directions",
        iconPath: "images/mapmarkers/home_marker.png",
        onTap: () => {
          console.log("Eddy's home was tapped");
        },
        onCalloutTap: () => {
          this.showDirectionsTo({
            lat: 52.1851585,
            lng: 5.3974241
          });
        }
      }]
    );
  }

  fabTapped(): void {
    // add a marker at the center of the viewport
    this.map.getViewport().then((viewport: MapboxViewport) => {
      const lat = (viewport.bounds.north + viewport.bounds.south) / 2;
      const lng = (viewport.bounds.east + viewport.bounds.west) / 2;
      const markerId = new Date().getTime();

      this.map.addMarkers([{
        id: new Date().getTime(),
        lat: lat,
        lng: lng,
        title: "FAB marker",
        subtitle: "Tap to remove",
        onCalloutTap: () => {
          this.map.removeMarkers([markerId]);
        }
      }]);
    });
  }

  private showDirectionsTo(address: AddressOptions): void {
    this.directions.navigate({
      to: address,
      ios: {
        preferGoogleMaps: false
      }
    }).then(() => {
      console.log("Maps app launched.");
    }, error => {
      console.log(error);
    });
  }
}
