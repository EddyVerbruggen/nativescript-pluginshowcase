require("./vendor-platform");

require("@angular/core");
require("@angular/common");
require("@angular/forms");
require("@angular/http");
require("@angular/router");

require("nativescript-angular/platform-static");
require("nativescript-angular/forms");
require("nativescript-angular/router");

// see https://github.com/telerik/nativescript-ui-feedback/issues/195
require("nativescript-telerik-ui/listview");
require("nativescript-telerik-ui/sidedrawer");

// move to the vendor chunk as this is required in every individual module
require("nativescript-angular/nativescript.module");