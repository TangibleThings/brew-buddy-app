import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { BrewService } from "../../shared/brew/brew.service";
import { Brew } from "../../shared/brew/brew";

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
    templateUrl: "pages/main/main.component.html",
    providers: [BrewService]
})
export class MainComponent {
    public brewStyles: Array<string>;
    public brewStarted: boolean = false;
    brew: Brew;

    @ViewChild("name") name: ElementRef;
    @ViewChild("style") style: ElementRef;

    constructor(private brewService: BrewService, private router: Router) {
      this.brew = new Brew();
      this.brew.status = 0;
        
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
        console.log('picker selection: ' + this.brewStyles[picker.selectedIndex]);

        console.log('Brew: ' + JSON.stringify(this.brew));
    }
    
    public newBrew() {
        this.brewService.create(this.brew)
        .subscribe(
          () => {
            this.brewStarted = true;
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
}
