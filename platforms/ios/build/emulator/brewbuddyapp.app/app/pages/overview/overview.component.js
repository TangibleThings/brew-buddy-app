"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var brew_service_1 = require("../../shared/brew/brew.service");
var OverviewComponent = (function () {
    function OverviewComponent(brewService, router) {
        this.brewService = brewService;
        this.router = router;
    }
    Object.defineProperty(OverviewComponent.prototype, "stageName", {
        get: function () {
            return "Initial Boil";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverviewComponent.prototype, "temp", {
        get: function () {
            return "79.4 F";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(OverviewComponent.prototype, "elapsedTime", {
        get: function () {
            return "00:12";
        },
        enumerable: true,
        configurable: true
    });
    OverviewComponent.prototype.completeStage = function () {
        this.brewService.completeStage()
            .subscribe(function () {
            //this.brewStarted = true;
        }, function () {
            alert({
                message: "An error occurred while attemping to complete the stage.",
                okButtonText: "OK"
            });
        });
    };
    OverviewComponent.prototype.cancel = function () {
        var _this = this;
        this.brewService.stop()
            .subscribe(function () {
            _this.router.navigate(["../"]);
        }, function () {
            alert({
                message: "An error occurred while attemping to complete the stage.",
                okButtonText: "OK"
            });
        });
    };
    OverviewComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/overview/overview.component.html",
            providers: [brew_service_1.BrewService]
        }), 
        __metadata('design:paramtypes', [brew_service_1.BrewService, router_1.Router])
    ], OverviewComponent);
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=overview.component.js.map