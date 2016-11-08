"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var brew_service_1 = require("../../shared/brew/brew.service");
var BrewStageComponent = (function () {
    function BrewStageComponent(brewService, router) {
        this.brewService = brewService;
        this.router = router;
    }
    Object.defineProperty(BrewStageComponent.prototype, "stageName", {
        get: function () {
            return "Initial Boil";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrewStageComponent.prototype, "temp", {
        get: function () {
            return "79.4 F";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(BrewStageComponent.prototype, "elapsedTime", {
        get: function () {
            return "00:12";
        },
        enumerable: true,
        configurable: true
    });
    BrewStageComponent.prototype.completeStage = function () {
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
    BrewStageComponent.prototype.cancel = function () {
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
    BrewStageComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/brewStage/brewStage.component.html",
            providers: [brew_service_1.BrewService]
        }), 
        __metadata('design:paramtypes', [brew_service_1.BrewService, router_1.Router])
    ], BrewStageComponent);
    return BrewStageComponent;
}());
exports.BrewStageComponent = BrewStageComponent;
//# sourceMappingURL=brewStage.component.js.map