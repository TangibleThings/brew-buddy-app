import { MainComponent } from "./pages/main/main.component";
import { OverviewComponent } from "./pages/overview/overview.component";

export const routes = [
  { path: "", component: MainComponent },
  { path: "main", component: MainComponent },
  { path: "overview", component: OverviewComponent }
];

export const navigatableComponents = [
  MainComponent,
  OverviewComponent
];