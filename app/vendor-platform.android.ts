require("application");
require("ui/frame");
require("ui/frame/activity");

if (global.TNS_WEBPACK) {
  global.__requireOverride = function (name, dir) {
    if (name === "./tns_modules/application/application.js") {
      return require("application");
    } else if (name === "./tns_modules/ui/frame/frame.js") {
      return require("ui/frame");
    } else if (name === "./tns_modules/ui/frame/activity.js") {
      return require("ui/frame/activity");
    }
  };
}