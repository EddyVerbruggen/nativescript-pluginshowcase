import { Config } from "../shared/config";
import { Page } from "tns-core-modules/ui/page";

export function addTabletCss(page: Page, pagesPath: string): void {
  if (!Config.isTablet) {
    return;
  }

  page.className = "tablet";

  let fileName: string = `~/${pagesPath}/${pagesPath}.tablet.css`;
  page.addCssFile(fileName);
}