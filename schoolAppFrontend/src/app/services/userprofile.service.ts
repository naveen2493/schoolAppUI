import { Injectable } from '@angular/core';
import { HttpBase } from './httpBase';
import { Endpoint } from './endpoint';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService extends HttpBase{

  constructor(public endPoint: Endpoint, public httpClient: HttpClient) {
    super(httpClient);
   }

   get isAuthenticatedEndpoint() {
     return true;
   }

   get endpoint() {
     return this.endPoint.fetchUserDetails;
   }

   getParams(httpParams?) {
     var params = new HttpParams();
     params = params.append('user', 'naveen');

     return params;
   }
}
