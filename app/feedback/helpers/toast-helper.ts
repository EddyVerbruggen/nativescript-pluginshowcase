import { ToastService } from "../../services/toast.service";

export class ToastHelper {

  constructor(private toastService: ToastService) {
  }

  showShort(): void {
    this.toastService.show("This message disappears quickly");
  }

  showLong(): void {
    this.toastService.show("This message sticks a bit longer", true);
  }
}