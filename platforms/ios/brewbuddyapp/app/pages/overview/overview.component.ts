import {Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { BrewService } from "../../shared/brew/brew.service";
import { Brew } from "../../shared/brew/brew";
import { BrewDataProvider } from "../../shared/providers/brewData.provider";
import { Status } from '../../shared/statusEnum';

@Component({
    selector: "my-app",
    templateUrl: "pages/overview/overview.component.html",
    providers: [BrewService]
})
export class OverviewComponent implements OnInit {
    public stageStarted: boolean = false;
    public brewStages: Array<String> = [
      "Initial Boil",
      "Steeping",
      "Secondary Boil",
      "Hopping",
      "Primary Fermenting",
      "Secondary Fermenting"
    ];

    public brew: Brew = new Brew();
    routeId: string;
    
    @ViewChild("name") name: ElementRef;

    constructor(private brewService: BrewService, private router: Router, 
      private brewDataProvider: BrewDataProvider, private route: ActivatedRoute) {}

    ngOnInit() {
      this.route.params.forEach((params: Params) => {
        this.routeId = params['id'];

        if (this.routeId) {
          this.brewService.getBrew(this.routeId)
          .subscribe(
            (brewRec: Brew) => {
              this.brew.id = this.routeId;
              this.brew.name = brewRec.name;
              this.brew.style = brewRec.style;
              this.brew.status = brewRec.status;
              this.brew.statusString = Status[brewRec.status];
            },
            () => {
              alert({
                message: "An error occurred while attemping to retrieve brew",
                okButtonText: "OK"
              });
            }
          );
        } else {
          this.brew = this.brewDataProvider.BrewData;
        }
      })
    }
    
    public newBrew() {
        this.brewService.start()
        .subscribe(
          () => {
            this.stageStarted = true;
            this.router.navigate(["/brew_stage"]);
          },
          () => {
            alert({
              message: "An error occurred while starting the brew.",
              okButtonText: "OK"
            });
          }
        );
    }

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

    public home() {
      this.router.navigate([""]);
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
