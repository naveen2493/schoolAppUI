import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Endpoint {

  public baseUrl = 'http://localhost:5001/';

  constructor() { }

  get fetchHomeWorkDetails() {
    return this.baseUrl + 'homeWork/one';
  }

  get fetchUserDetails() {
    return this.baseUrl + '';
  }


}
