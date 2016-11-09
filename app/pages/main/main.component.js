"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var brew_service_1 = require("../../shared/brew/brew.service");
var brew_1 = require("../../shared/brew/brew");
var brewData_provider_1 = require("../../shared/providers/brewData.provider");
var statusEnum_1 = require('../../shared/statusEnum');
var MainComponent = (function () {
    function MainComponent(brewService, router, brewDataProvider) {
        var _this = this;
        this.brewService = brewService;
        this.router = router;
        this.brewDataProvider = brewDataProvider;
        this.brewList = [];
        this.brewService.getBrews()
            .subscribe(function (brewsJson) {
            for (var key in brewsJson) {
                if (brewsJson.hasOwnProperty(key)) {
                    var obj = brewsJson[key];
                    var brew = new brew_1.Brew();
                    brew.id = key;
                    brew.name = obj.name;
                    brew.status = obj.status;
                    brew.statusString = statusEnum_1.Status[obj.status];
                    brew.style = obj.style;
                    _this.brewList.push(brew);
                }
            }
        }, function () {
            alert({
                message: "An error occurred while retrieving your brew list",
                okButtonText: "OK"
            });
        });
    }
    MainComponent.prototype.addBrew = function () {
        this.router.navigate(["/new"]);
    };
    MainComponent.prototype.brewTap = function (args) {
        this.router.navigate(['/overview/', this.brewList[args.index].id]);
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/main/main.component.html",
            providers: [brew_service_1.BrewService]
        }), 
        __metadata('design:paramtypes', [brew_service_1.BrewService, router_1.Router, brewData_provider_1.BrewDataProvider])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map