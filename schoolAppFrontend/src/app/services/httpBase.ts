import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

export abstract class HttpBase {

    constructor(public httpClient: HttpClient) {

    }

    abstract get isAuthenticatedEndpoint(): boolean;

    abstract get endpoint(): string;

    get header() {
        let headers = {
            "Content-type": "application/json",
            Accept: "application/json",
        };
        return headers;
    }

    /**
     * @httpParams - httpParam
     * Append the header with the get request in httpclient
     */
    get(httpParams?): Observable<any> {
        console.log("Http base", httpParams);
        if (httpParams) {
            return this.httpClient.get(this.endpoint, {
                headers: this.header,
                params: httpParams

            });
        }

        return this.httpClient.get(this.endpoint, 
           { headers: this.header }
            );
    }

    /**
     * @param data  - body to post
     * Appends header to the post request in http Client
     * returns observeral of respoense
     */
    post(data, httpParams?): Observable<any> {
        if (httpParams) {
            return this.httpClient.post(this.endpoint, data, {
                headers: this.header,
                params: httpParams
            });
        }
        return this.httpClient.post(this.endpoint, data, {
           headers: this.header
        });
    }


  put(data,httpParams?):Observable<any>{
    let head = new HttpHeaders();
    // if (this.isAuthenticatedEndpoint) {
    //   head = head.set("Authorization", `Token ${this.token}`);
    // }
    return this.httpClient.put(this.endpoint, data, {
      headers: head
    });
  }

}