import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Config } from "../config";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Brew } from "./brew";

@Injectable()
export class BrewService {
  data = `access_token=${Config.particleToken}`;

  constructor(private http: Http) {}

  create(brew: Brew) {
    let auth = `?auth=${Config.firebaseToken}`;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    console.log("URL: " + `${Config.firebaseUrl}brew.json${auth}`);

    return this.http.post(`${Config.firebaseUrl}brew.json${auth}`, brew, {
      headers: headers
    })
    .map(res => {
      return res.json()
    })
    .map(data => {
      brew.id = data.name;

      console.log(JSON.stringify(brew));
      return brew;
    })
    .catch(this.handleErrors);
  }

  start() {
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    
    return this.http.post(Config.particleUrl + "brew", `${this.data}&args=start`, {
      headers: headers
    })
    .map(res => {
      return res.json()
    })
    .map(data => {
      return "Brew Started";
    })
    .catch(this.handleErrors);
  }

  stop() {
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    
    return this.http.post(Config.particleUrl + "brew", `${this.data}&args=stop`, {
      headers: headers
    })
    .map(res => {
      return res.json()
    })
    .map(data => {
      return "Brew Stopped";
    })
    .catch(this.handleErrors);
  }

  completeStage() {
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    
    return this.http.post(Config.particleUrl + "nextStage", this.data, {
      headers: headers
    })
    .map(res => {
      return res.json()
    })
    .map(data => {
      return "Stage Complete";
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}