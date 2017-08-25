import { Component, ViewContainerRef } from "@angular/core";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { MenuComponent } from "../menu/menu.component";
import { MapboxViewApi } from "nativescript-mapbox";
import { AddressOptions, Directions } from "nativescript-directions";
import { ModalDialogService } from "nativescript-angular";
import { PluginInfo } from "../shared/plugin-info";
import { PluginInfoWrapper } from "../shared/plugin-info-wrapper";

@Component({
  selector: "Mapping",
  moduleId: module.id,
  templateUrl: "./mapping.component.html",
  styleUrls: ["mapping-common.css"]
})
export class MappingComponent extends AbstractMenuPageComponent {

  private directions: Directions;

  constructor(protected menuComponent: MenuComponent,
              protected vcRef: ViewContainerRef,
              protected modalService: ModalDialogService) {
    super(menuComponent, vcRef, modalService);
    this.directions = new Directions();
  }

  protected getPluginInfo(): PluginInfoWrapper {
    return new PluginInfoWrapper(
        "Try a few one- and two-finger gestures. Then, when you're bored playing with the map, scroll to the center of The Netherlands and tap the Home icon. Then follow its instructions to trigger the Directions plugin!",
        Array.of(
            new PluginInfo(
                "nativescript-mapbox",
                "Mapbox 🗽 🗼 🗻",
                "https://github.com/EddyVerbruggen/nativescript-mapbox",
                "Native OpenGL powered Maps. Blazing performance and feature-rich! Use custom markers and show the user's location on the map. In this example we're using the 'traffic_day' map style which shows live traffic."
            ),

            new PluginInfo(
                "nativescript-directions",
                "Directions 👆 👉 👇 👈 ",
                "https://github.com/EddyVerbruggen/nativescript-directions",
                "Open the native Maps app to show directions to anywhere you like. Even with waypoints in between!"
            )
        )
    );
  }

  onMapReady(args): void {
    let map: MapboxViewApi = args.map;
    map.addMarkers([
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
