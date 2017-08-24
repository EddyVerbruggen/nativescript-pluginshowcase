import { Component } from "@angular/core";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: "Feedback",
  moduleId: module.id,
  templateUrl: "./feedback.component.html"
})
export class FeedbackComponent extends AbstractMenuPageComponent {

  constructor(protected menuComponent: MenuComponent) {
    super(menuComponent);
  }
}
