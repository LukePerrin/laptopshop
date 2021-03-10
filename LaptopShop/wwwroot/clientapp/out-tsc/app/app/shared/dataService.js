import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
//this service has other dependencies ie HttpModule
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.laptopConfigs = [];
        this.basket = [];
        this.url = "http://localhost:4999/api/products";
        this.configUrl = "http://localhost:4999/api/laptopConfig";
    }
    DataService.prototype.getProducts = function () {
        //this wont omit values till we subscribe - tap allows us to sneek peek first
        return this.http.get(this.url)
            .pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    DataService.prototype.getLaptopConfigs = function () {
        return this.http.get(this.configUrl)
            .pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    DataService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    };
    DataService = __decorate([
        Injectable()
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=dataService.js.map