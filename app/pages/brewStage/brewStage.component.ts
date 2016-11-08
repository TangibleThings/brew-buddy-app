import {Component} from "@angular/core";
import { Router } from "@angular/router";
import { BrewService } from "../../shared/brew/brew.service";

@Component({
    selector: "my-app",
    templateUrl: "pages/brewStage/brewStage.component.html",
    providers: [BrewService]
})
export class BrewStageComponent {
    constructor(private brewService: BrewService, private router: Router) {}
    
    public get stageName(): string {
      return "Initial Boil"; 
    }

    public get temp(): string {
      return "79.4 F";
    };

    public get elapsedTime(): string {
      return "00:12";
    }
    
    public completeStage() {
        this.brewService.completeStage()
          .subscribe(
            () => {
              //this.brewStarted = true;
            },
            () => {
              alert({
                message: "An error occurred while attemping to complete the stage.",
                okButtonText: "OK"
              });
            }
          );
    }

    public cancel() {
      this.brewService.stop()
          .subscribe(
            () => {
              this.router.navigate(["../"]);
            },
            () => {
              alert({
                message: "An error occurred while attemping to complete the stage.",
                okButtonText: "OK"
              });
            }
          );
    }
}
