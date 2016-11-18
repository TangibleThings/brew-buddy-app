import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { BrewService } from "../../shared/brew/brew.service";
import { Brew } from "../../shared/brew/brew";
import { BrewDataProvider } from "../../shared/providers/brewData.provider";

var brewStyleList = [
  "Lager",
  "IPA",
  "Witbeer",
  "Double IPA",
  "Stout",
  "Imperial Stout",
  "Sour",
  "Barleywine"
];

@Component({
    selector: "my-app",
    templateUrl: "pages/newBrew/newBrew.component.html",
    providers: [BrewService]
})
export class NewBrewComponent {
    public brewStyles: Array<string>;
    public brewStarted: boolean = false;
    brew: Brew;

    @ViewChild("name") name: ElementRef;
    @ViewChild("style") style: ElementRef;

    constructor(private brewService: BrewService, private router: Router, private brewDataProvider: BrewDataProvider) {
      this.brew = new Brew();
      this.brew.status = 1;
      this.brew.style = brewStyleList[2];
        
      this.brewStyles = [];

      for (var i = 0; i < brewStyleList.length; i++) {
        this.brewStyles.push(brewStyleList[i]);
      }
    }
    
    public get message(): string {
        if (this.brewStarted) {
            return "Brew Started... Have Fun!";
        }
    }

    public selectedIndexChanged(picker) {
        this.brew.style = this.brewStyles[picker.selectedIndex];
    }
    
    public newBrew() {
        this.brewService.create(this.brew)
        .subscribe(
          () => {
            this.brewStarted = true;

            this.brewDataProvider.BrewData = this.brew;

            this.router.navigate(["/overview"]);
          },
          () => {
            alert({
              message: "An error occurred while starting the brew.",
              okButtonText: "OK"
            });
          }
        );
    }
    
     public cancel() {
      this.router.navigate(["../"]);
    }
}
