"use strict";
var main_component_1 = require("./pages/main/main.component");
var overview_component_1 = require("./pages/overview/overview.component");
exports.routes = [
    { path: "", component: main_component_1.MainComponent },
    { path: "main", component: main_component_1.MainComponent },
    { path: "overview", component: overview_component_1.OverviewComponent }
];
exports.navigatableComponents = [
    main_component_1.MainComponent,
    overview_component_1.OverviewComponent
];
//# sourceMappingURL=app.routing.js.map