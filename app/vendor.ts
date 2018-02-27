// Snapshot the ~/app.css and the theme
const application = require("application");
require("ui/styling/style-scope");
const appCssContext = require.context("~/", false, /^\.\/app\.(css|scss|less|sass)$/);
global.registerWebpackModules(appCssContext);
application.loadAppCss();

require("./vendor-platform");

require("reflect-metadata");
require("@angular/platform-browser");
require("@angular/core");
require("@angular/common");
require("@angular/forms");
require("@angular/http");
require("@angular/router");

require("nativescript-angular/platform-static");
require("nativescript-angular/forms");
require("nativescript-angular/router");

// required by nativescript-angular
require("@angular/compiler");

require("nativescript-angular/http");
require("nativescript-angular/dom-adapter");
require("nativescript-angular/schema-registry");
require("nativescript-angular/resource-loader");
require("nativescript-angular/modal-dialog");

// see https://github.com/telerik/nativescript-ui-feedback/issues/195
require("nativescript-ui-sidedrawer");

// move to the vendor chunk as this is required in every individual module
require("nativescript-angular/nativescript.module");

require("nativescript-ngx-fonticon");
