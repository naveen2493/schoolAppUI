import { Injectable } from '@angular/core';
import { HttpBase } from './httpBase';
import { Endpoint } from './endpoint';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutSchoolService extends HttpBase{

  constructor(public endPoint: Endpoint, public httpClient: HttpClient) {
    super(httpClient);
  }

  get isAuthenticatedEndpoint() {
    return true;
  }

  get endpoint() {
    return this.endPoint.aboutSchool;
  }

  getParams(httparams?) {
    let params = httparams;
    return params;
  }
}



