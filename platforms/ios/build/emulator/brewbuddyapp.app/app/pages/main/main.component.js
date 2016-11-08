"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var brew_service_1 = require("../../shared/brew/brew.service");
var brew_1 = require("../../shared/brew/brew");
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
var MainComponent = (function () {
    function MainComponent(brewService, router) {
        this.brewService = brewService;
        this.router = router;
        this.brewStarted = false;
        this.brew = new brew_1.Brew();
        this.brew.status = 0;
        this.brewStyles = [];
        for (var i = 0; i < brewStyleList.length; i++) {
            this.brewStyles.push(brewStyleList[i]);
        }
    }
    Object.defineProperty(MainComponent.prototype, "message", {
        get: function () {
            if (this.brewStarted) {
                return "Brew Started... Have Fun!";
            }
        },
        enumerable: true,
        configurable: true
    });
    MainComponent.prototype.selectedIndexChanged = function (picker) {
        console.log('picker selection: ' + this.brewStyles[picker.selectedIndex]);
        console.log('Brew: ' + JSON.stringify(this.brew));
    };
    MainComponent.prototype.newBrew = function () {
        var _this = this;
        this.brewService.create(this.brew)
            .subscribe(function () {
            _this.brewStarted = true;
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
    ], MainComponent.prototype, "name", void 0);
    __decorate([
        core_1.ViewChild("style"), 
        __metadata('design:type', core_1.ElementRef)
    ], MainComponent.prototype, "style", void 0);
    MainComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/main/main.component.html",
            providers: [brew_service_1.BrewService]
        }), 
        __metadata('design:paramtypes', [brew_service_1.BrewService, router_1.Router])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map