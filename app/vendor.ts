require("./vendor-platform");

require("reflect-metadata");
require("@angular/platform-browser");
require("@angular/core");
require("@angular/common");
require("@angular/forms");
require("@angular/http");
require("@angular/router");

// required by nativescript-angular
require("@angular/compiler");

require("nativescript-angular/platform-static");
require("nativescript-angular/forms");
require("nativescript-angular/http");
require("nativescript-angular/router");
require("nativescript-angular/dom-adapter");
require("nativescript-angular/schema-registry");
// require("nativescript-angular/platform");
require("nativescript-angular/resource-loader");
require("nativescript-angular/modal-dialog");

// see https://github.com/telerik/nativescript-ui-feedback/issues/195
require("nativescript-telerik-ui/listview");
require("nativescript-telerik-ui/sidedrawer");

// move to the vendor chunk as this is required in every individual module
require("nativescript-angular/nativescript.module");

require("nativescript-ngx-fonticon");