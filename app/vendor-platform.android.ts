require("application");
if (!global["__snapshot"]) {
  // In case snapshot generation is enabled these modules will get into the bundle
  // but will not be required/evaluated.
  // The snapshot webpack plugin will add them to the tns-java-classes.js bundle file.
  // This way, they will be evaluated on app start as early as possible.

  require("ui/frame");
  require("ui/frame/activity");
}

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