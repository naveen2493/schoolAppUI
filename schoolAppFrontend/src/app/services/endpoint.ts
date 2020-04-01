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

  get attendenceDetails() {
    return this.baseUrl + 'attendence';
  }

  get eventsNewsDetails() {
    return this.baseUrl + 'event-news';
  }

  get examSyllabus() {
    return this.baseUrl + 'examSyllabus';
  }

  get examDates() {
    return this.baseUrl + 'examDates';
  }

  get timeTable() {
    return this.baseUrl + 'timetable';
  }

  get reportCardDetails() {
    return this.baseUrl + 'reportCard';
  }


}
