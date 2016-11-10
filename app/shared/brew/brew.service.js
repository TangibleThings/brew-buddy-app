"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../config");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var BrewService = (function () {
    function BrewService(http) {
        this.http = http;
        this.data = "access_token=" + config_1.Config.particleToken;
    }
    BrewService.prototype.getBrews = function () {
        var auth = "?auth=" + config_1.Config.firebaseToken;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.get(config_1.Config.firebaseUrl + "brew.json" + auth, {
            headers: headers
        })
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            return data;
        })
            .catch(this.handleErrors);
    };
    BrewService.prototype.getBrew = function (brewid) {
        var auth = "?auth=" + config_1.Config.firebaseToken;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.get(config_1.Config.firebaseUrl + "brew/" + brewid + ".json" + auth, {
            headers: headers
        })
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            return data;
        })
            .catch(this.handleErrors);
    };
    BrewService.prototype.create = function (brew) {
        var auth = "?auth=" + config_1.Config.firebaseToken;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.firebaseUrl + "brew.json" + auth, brew, {
            headers: headers
        })
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            brew.id = data.name;
            return brew;
        })
            .catch(this.handleErrors);
    };
    BrewService.prototype.start = function (stage, brewId) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        console.log("Sent:" + (this.data + "&args=start," + brewId + "," + stage));
        return this.http.post(config_1.Config.particleUrl + "brew", this.data + "&args=start," + brewId + "," + stage, {
            headers: headers
        })
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            return "Brew Started";
        })
            .catch(this.handleErrors);
    };
    BrewService.prototype.stop = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this.http.post(config_1.Config.particleUrl + "brew", this.data + "&args=stop", {
            headers: headers
        })
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            return "Brew Stopped";
        })
            .catch(this.handleErrors);
    };
    BrewService.prototype.completeStage = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this.http.post(config_1.Config.particleUrl + "nextStage", this.data, {
            headers: headers
        })
            .map(function (res) {
            return res.json();
        })
            .map(function (data) {
            return "Stage Complete";
        })
            .catch(this.handleErrors);
    };
    BrewService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    BrewService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BrewService);
    return BrewService;
}());
exports.BrewService = BrewService;
//# sourceMappingURL=brew.service.js.map