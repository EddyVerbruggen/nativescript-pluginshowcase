import { isIOS } from "platform";
import { RouterExtensions } from "nativescript-angular";
import { PluginInfoWrapper } from "./shared/plugin-info-wrapper";
import { Config } from "./shared/config";
import { AppComponent } from "~/app.component";

export abstract class AbstractMenuPageComponent {
  isIOS: boolean = isIOS;
  isTablet: boolean = Config.isTablet;

  constructor(protected appComponent: AppComponent,
              protected routerExtensions: RouterExtensions) {
  }

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
    });
  }
}
