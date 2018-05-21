import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import {map} from "rxjs/internal/operators";
import {throwError} from "rxjs";

@Injectable()
export class ApiService {

    constructor(private httpClient: HttpClient) { }

  public static readonly baseUrl = "http://fakerestapi.azurewebsites.net";

    static getFinalUrl(url: string): string {
        return ApiService.baseUrl + url;
    }
    static getUrl(url: string): string {
        return url;
    }

    private  static  handleError(error: HttpErrorResponse): any {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            if (error.status === 401) {
                window.location.href = "#/login";
            }
            if (error.status === 403) {
                alert("Access is denied");
            }
            if (error.status === 504 || error.status === 0) {
                alert("Server is down. Please try again later.");
            }
        }
        // return an ErrorObservable with a user-facing error message
        // Something bad happened; please try again later.
        return throwError(error.error);
    }

    get<T>(url: string): Observable<T> {
        return this.httpClient.get<T>(ApiService.getFinalUrl(url))
            .pipe(
              map((response: any) => response),
              catchError(ApiService.handleError));
    }

    delete(url: string): Observable<any> {
        return this.httpClient.delete(ApiService.getFinalUrl(url))
            .pipe(
              map((response: any) => response),
              catchError(ApiService.handleError));
    }

    put<T>(url: string, body: any): Observable<T> {
        return this.httpClient.put<T>(ApiService.getFinalUrl(url), body)
            .pipe(
              map((response: any) => response),
              catchError(ApiService.handleError));
    }

    post<T>(url: string, body: any): Observable<T> {
        return this.httpClient.post<T>(ApiService.getFinalUrl(url), body)
            .pipe(
              map((response: any) => response),
              catchError(ApiService.handleError));
    }

}
