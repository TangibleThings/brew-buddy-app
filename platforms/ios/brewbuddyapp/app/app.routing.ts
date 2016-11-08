import { MainComponent } from "./pages/main/main.component";
import { OverviewComponent } from "./pages/overview/overview.component";
import { BrewStageComponent } from "./pages/brewStage/brewStage.component";

export const routes = [
  { path: "", component: MainComponent },
  { path: "main", component: MainComponent },
  { path: "overview", component: OverviewComponent },
  { path: "brew_stage", component: BrewStageComponent}
];

export const navigatableComponents = [
  MainComponent,
  OverviewComponent,
  BrewStageComponent
];