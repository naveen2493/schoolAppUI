import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Endpoint {

  public baseUrl = 'http://localhost:4500/';

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
    return this.baseUrl + 'event/list';
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

  get aboutSchool() {
    return this.baseUrl + 'about-school';
  }

  get feedback() {
    return this.baseUrl + 'feedback';
  }

  get teachersDetails() {
    return this.baseUrl + 'teachers-details';
  }

  get schoolFees() {
    return this.baseUrl + 'school-fees';
  }

  get userProfile() {
    return this.baseUrl + 'user-profile';
  }


}
