import { Component, OnDestroy, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { Color } from "tns-core-modules/color";
import { PluginInfo } from "~/shared/plugin-info";
import { openUrl } from "tns-core-modules/utils/utils";
import { PluginInfoWrapper } from "~/shared/plugin-info-wrapper";
import { addTabletCss } from "~/utils/tablet-util";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: "./info-modal.html",
  styleUrls: ["./info-modal-common.css"]
})
export class InfoModalComponent implements OnInit, OnDestroy {
  pluginInfo: PluginInfoWrapper;
  private queryParamsSubscription: any;

  constructor(private page: Page,
              private route: ActivatedRoute,
              private routerExtensions: RouterExtensions) {

    // if (page.android) {
    //   this.page.backgroundColor = new Color(50, 0, 0, 0);
    // }

    addTabletCss(this.page, "info-modal");
  }

  ngOnInit(): void {
    this.queryParamsSubscription = this.route
        .queryParams
        .subscribe(params => this.pluginInfo = JSON.parse(params['pluginInfo']));
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
  }

  openPluginUrl(pluginInfo: PluginInfo): void {
    // open in the default browser
    openUrl(pluginInfo.url);
  }

  back() {
    this.routerExtensions.back();
  }
}
