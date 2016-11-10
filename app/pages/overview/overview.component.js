"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var brew_service_1 = require("../../shared/brew/brew.service");
var brew_1 = require("../../shared/brew/brew");
var brewData_provider_1 = require("../../shared/providers/brewData.provider");
var statusEnum_1 = require('../../shared/statusEnum');
var OverviewComponent = (function () {
    function OverviewComponent(brewService, router, brewDataProvider, route) {
        this.brewService = brewService;
        this.router = router;
        this.brewDataProvider = brewDataProvider;
        this.route = route;
        this.stageStarted = false;
        this.brewStages = [
            "Initial Boil",
            "Steeping",
            "Secondary Boil",
            "Hopping",
            "Primary Fermenting",
            "Secondary Fermenting"
        ];
        this.brew = new brew_1.Brew();
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.routeId = params['id'];
            if (_this.routeId) {
                _this.brewService.getBrew(_this.routeId)
                    .subscribe(function (brewRec) {
                    _this.brew.id = _this.routeId;
                    _this.brew.name = brewRec.name;
                    _this.brew.style = brewRec.style;
                    _this.brew.status = brewRec.status;
                    _this.brew.statusString = statusEnum_1.Status[brewRec.status];
                }, function () {
                    alert({
                        message: "An error occurred while attemping to retrieve brew",
                        okButtonText: "OK"
                    });
                });
            }
            else {
                _this.brew = _this.brewDataProvider.BrewData;
            }
        });
    };
    OverviewComponent.prototype.startStage = function () {
        var _this = this;
        this.brewService.start("Initial Boil", this.brew.id)
            .subscribe(function () {
            _this.stageStarted = true;
            _this.router.navigate(["/brew_stage"]);
        }, function () {
            alert({
                message: "An error occurred while starting the brew.",
                okButtonText: "OK"
            });
        });
    };
    OverviewComponent.prototype.home = function () {
        this.router.navigate([""]);
    };
    __decorate([
        core_1.ViewChild("name"), 
        __metadata('design:type', core_1.ElementRef)
    ], OverviewComponent.prototype, "name", void 0);
    OverviewComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/overview/overview.component.html",
            providers: [brew_service_1.BrewService]
        }), 
        __metadata('design:paramtypes', [brew_service_1.BrewService, router_1.Router, brewData_provider_1.BrewDataProvider, router_1.ActivatedRoute])
    ], OverviewComponent);
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=overview.component.js.map