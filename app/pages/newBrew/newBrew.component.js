"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var brew_service_1 = require("../../shared/brew/brew.service");
var brew_1 = require("../../shared/brew/brew");
var brewData_provider_1 = require("../../shared/providers/brewData.provider");
var brewStyleList = [
    "Lager",
    "IPA",
    "Witbeer",
    "Double IPA",
    "Stout",
    "Imperial Stout",
    "Sour",
    "Barleywine"
];
var NewBrewComponent = (function () {
    function NewBrewComponent(brewService, router, brewDataProvider) {
        this.brewService = brewService;
        this.router = router;
        this.brewDataProvider = brewDataProvider;
        this.brewStarted = false;
        this.brew = new brew_1.Brew();
        this.brew.status = 1;
        this.brew.style = brewStyleList[2];
        this.brewStyles = [];
        for (var i = 0; i < brewStyleList.length; i++) {
            this.brewStyles.push(brewStyleList[i]);
        }
    }
    Object.defineProperty(NewBrewComponent.prototype, "message", {
        get: function () {
            if (this.brewStarted) {
                return "Brew Started... Have Fun!";
            }
        },
        enumerable: true,
        configurable: true
    });
    NewBrewComponent.prototype.selectedIndexChanged = function (picker) {
        this.brew.style = this.brewStyles[picker.selectedIndex];
    };
    NewBrewComponent.prototype.newBrew = function () {
        var _this = this;
        this.brewService.create(this.brew)
            .subscribe(function () {
            _this.brewStarted = true;
            _this.brewDataProvider.BrewData = _this.brew;
            _this.router.navigate(["/overview"]);
        }, function () {
            alert({
                message: "An error occurred while starting the brew.",
                okButtonText: "OK"
            });
        });
    };
    __decorate([
        core_1.ViewChild("name"), 
        __metadata('design:type', core_1.ElementRef)
    ], NewBrewComponent.prototype, "name", void 0);
    __decorate([
        core_1.ViewChild("style"), 
        __metadata('design:type', core_1.ElementRef)
    ], NewBrewComponent.prototype, "style", void 0);
    NewBrewComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/newBrew/newBrew.component.html",
            providers: [brew_service_1.BrewService]
        }), 
        __metadata('design:paramtypes', [brew_service_1.BrewService, router_1.Router, brewData_provider_1.BrewDataProvider])
    ], NewBrewComponent);
    return NewBrewComponent;
}());
exports.NewBrewComponent = NewBrewComponent;
//# sourceMappingURL=newBrew.component.js.map