import { Injectable } from '@angular/core';
import { HttpBase } from './httpBase';
import { Endpoint } from './endpoint';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService extends HttpBase{

  constructor(public endPoint: Endpoint, public httdClient: HttpClient) { 
    super(httdClient);
  }

  get isAuthenticatedEndpoint() {
    return true;
  }

  get endpoint() {
    return this.endPoint.fetchHomeWorkDetails;
  }

  getParams(homeworkParams?) {
    // let params = {
    //   'date': '03/14/2020',
    //   'class': '5',
    //   'section': 'a'
    // }

    let params = homeworkParams;

    return params;
  }
}
