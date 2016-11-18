import {Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { BrewService } from "../../shared/brew/brew.service";

@Component({
    selector: "my-app",
    templateUrl: "pages/brewStage/brewStage.component.html",
    providers: [BrewService]
})
export class BrewStageComponent implements OnInit {
    public stage: string = "Initial Boil";

    constructor(private brewService: BrewService, private router: Router, private route: ActivatedRoute) {}
    
    ngOnInit() {
      this.route.params.forEach((params: Params) => {
        console.log("Params: " + JSON.stringify(params));

        this.stage = params['id'];
      });
    }

    public get stageName(): string {
      return this.stage; 
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
                message: "An error occurred while attemping to cancel the stage.",
                okButtonText: "OK"
              });
            }
          );
    }
}
