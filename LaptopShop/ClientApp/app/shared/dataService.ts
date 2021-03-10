import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { ConfigSelection } from './configSelect';
import { Product } from './product';
import { ProductConfig } from './productConfig';

//this service has other dependencies ie HttpModule
@Injectable()
export class DataService {
    
    public selectedProduct: Product;
    public laptopConfigs: ProductConfig[] = [];
    public basket: ConfigSelection[] = [];
    url: string = "http://localhost:4999/api/products";
    configUrl: string = "http://localhost:4999/api/laptopConfig";

    constructor(private http: HttpClient) {
    }

    getProducts(): Observable<Product[]> {
        //this wont omit values till we subscribe - tap allows us to sneek peek first
        return this.http.get<Product[]>(this.url)
            .pipe(
                tap(data => console.log('All: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }   

    getLaptopConfigs(): Observable<ProductConfig[]> {
        return this.http.get<ProductConfig[]>(this.configUrl)
            .pipe(
                tap(data => console.log('All: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }      

    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
