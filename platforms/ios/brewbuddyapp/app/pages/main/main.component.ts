import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { BrewService } from "../../shared/brew/brew.service";
import { Brew } from "../../shared/brew/brew";
import { BrewDataProvider } from "../../shared/providers/brewData.provider";
import { Status } from '../../shared/statusEnum';

@Component({
    selector: "my-app",
    templateUrl: "pages/main/main.component.html",
    providers: [BrewService]
})
export class MainComponent {
    public brewList: Array<Brew>;
    
    constructor(private brewService: BrewService, private router: Router, private brewDataProvider: BrewDataProvider) {
      this.brewList = [];
      
      this.brewService.getBrews()
      .subscribe(
        (brewsJson) => {
          for (var key in brewsJson) {
            if (brewsJson.hasOwnProperty(key)) {
              let obj = brewsJson[key];
              let brew = new Brew();

              brew.id = key;
              brew.name = obj.name;
              brew.status = obj.status;
              brew.statusString = Status[obj.status];
              brew.style = obj.style;
              
              this.brewList.push(brew);
            }
          }
        },
        () => {
            alert({
              message: "An error occurred while retrieving your brew list",
              okButtonText: "OK"
            });
          }
      );
    }
    
    public addBrew() {
      this.router.navigate(["/new"]);
    }

    public brewTap(args) {
      this.router.navigate([ '/overview/', this.brewList[args.index].id ]);
    }
}
