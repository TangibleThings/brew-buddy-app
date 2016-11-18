import { MainComponent } from "./pages/main/main.component";
import { NewBrewComponent } from "./pages/newBrew/newBrew.component";
import { OverviewComponent } from "./pages/overview/overview.component";
import { BrewStageComponent } from "./pages/brewStage/brewStage.component";

export const routes = [
  { path: "", component: MainComponent },
  { path: "main", component: MainComponent },
  { path: "new", component: NewBrewComponent },
  { path: "overview/:id", component: OverviewComponent },
  { path: "overview", component: OverviewComponent },
  { path: "brew_stage/:id", component: BrewStageComponent },
  { path: "brew_stage", component: BrewStageComponent}
];

export const navigatableComponents = [
  MainComponent,
  OverviewComponent,
  BrewStageComponent,
  NewBrewComponent
]; 