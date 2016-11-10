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

  getBrews() {
    let auth = `?auth=${Config.firebaseToken}`;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.get(`${Config.firebaseUrl}brew.json${auth}`, {
      headers: headers
    })
    .map(res => {
      return res.json()
    })
    .map(data => {
      return data;
    })
    .catch(this.handleErrors);
  }

  getBrew(brewid) {
    let auth = `?auth=${Config.firebaseToken}`;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.get(`${Config.firebaseUrl}brew/${brewid}.json${auth}`, {
      headers: headers
    })
    .map(res => {
      return res.json()
    })
    .map(data => {
      return data;
    })
    .catch(this.handleErrors);
  }

  create(brew: Brew) {
    let auth = `?auth=${Config.firebaseToken}`;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(`${Config.firebaseUrl}brew.json${auth}`, brew, {
      headers: headers
    })
    .map(res => {
      return res.json()
    })
    .map(data => {
      brew.id = data.name;
      return brew;
    })
    .catch(this.handleErrors);
  }

  start(stage: string, brewId: string) {
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    
    console.log("Sent:" + `${this.data}&args=start,${brewId},${stage}`);

    return this.http.post(Config.particleUrl + "brew", `${this.data}&args=start,${brewId},${stage}`, {
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