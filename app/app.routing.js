"use strict";
var main_component_1 = require("./pages/main/main.component");
var overview_component_1 = require("./pages/overview/overview.component");
var brewStage_component_1 = require("./pages/brewStage/brewStage.component");
exports.routes = [
    { path: "", component: main_component_1.MainComponent },
    { path: "main", component: main_component_1.MainComponent },
    { path: "overview", component: overview_component_1.OverviewComponent },
    { path: "brew_stage", component: brewStage_component_1.BrewStageComponent }
];
exports.navigatableComponents = [
    main_component_1.MainComponent,
    overview_component_1.OverviewComponent,
    brewStage_component_1.BrewStageComponent
];
//# sourceMappingURL=app.routing.js.map