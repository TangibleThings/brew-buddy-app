"use strict";
var core_1 = require("@angular/core");
var status_bar_util_1 = require("./utils/status-bar-util");
var AppComponent = (function () {
    function AppComponent() {
        status_bar_util_1.setStatusBarColors();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            template: "<page-router-outlet></page-router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map