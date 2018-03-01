import { alert } from "tns-core-modules/ui/dialogs";
import * as LocalNotifications from "nativescript-local-notifications";

export class LocalNotificationsHelper {

  constructor() {
  }

  showWithSound(): void {
    LocalNotifications.schedule([{
      id: 1,
      title: 'Sound & Badge',
      body: 'Who needs a push service anyway?',
      badge: 1,
      at: new Date(new Date().getTime() + (5 * 1000)) // 5 seconds from now
    }]);

    // adding a handler, so we can do something with the received notification.. in this case an alert
    LocalNotifications.addOnMessageReceivedCallback(data => {
      alert({
        title: "Local Notification received",
        message: `id: '${data.id}', title: '${data.title}'.`,
        okButtonText: "Roger that"
      });
    });
  }

  continuous(): void {
    LocalNotifications.schedule([{
      id: 2,
      title: 'Cancel me, quickly!',
      body: 'Who thought this would be a good idea!?',
      interval: 'minute',
      sound: null,
      at: new Date(new Date().getTime() + (5 * 1000)), // 5 seconds from now
    }]);
  }

  cancelAll(): void {
    LocalNotifications.cancelAll();
  }
}
