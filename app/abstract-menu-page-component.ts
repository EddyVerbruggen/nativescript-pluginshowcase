import { isIOS } from "platform";
import { RouterExtensions } from "nativescript-angular";
import { PluginInfoWrapper } from "./shared/plugin-info-wrapper";
import { Config } from "./shared/config";
import { AppComponent } from "~/app.component";
const firebase = require("nativescript-plugin-firebase");
import { LogEventParameter } from"nativescript-plugin-firebase/analytics/analytics";

export abstract class AbstractMenuPageComponent {
  isIOS: boolean = isIOS;
  isTablet: boolean = Config.isTablet;

  constructor(protected appComponent: AppComponent,
              protected routerExtensions: RouterExtensions) {
    this.logScreenName(this.getScreenName());
  }

  private logScreenName(name: string): void {
    firebase.analytics.setScreenName({
      screenName: name
    });
  }

  protected logEvent(key: string, parameters?: Array<LogEventParameter>): void {
    firebase.analytics.logEvent({
      key: key,
      parameters: parameters
    });
  }

  protected abstract getScreenName(): string;

  protected abstract getPluginInfo(): PluginInfoWrapper;

  toggleTheMenu(): void {
    this.appComponent.toggleMenu();
  }

  showPluginInfo(): void {
    const info = this.getPluginInfo();
    if (info === null) {
      return;
    }

    this.routerExtensions.navigate(["/info"], {
      transition: {
        name: this.isIOS ? "curl" : "fade",
        duration: 450
      },
      queryParams: {
        pluginInfo: JSON.stringify(info)
      }
    }).then(() => this.logScreenName(`${this.getScreenName()} > Plugin Info`));
  }
}
