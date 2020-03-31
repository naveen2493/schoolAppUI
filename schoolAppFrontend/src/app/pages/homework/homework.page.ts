import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';


@Component({
  selector: 'app-homework',
  templateUrl: 'homework.page.html',
  styleUrls: ['homework.page.scss']
})
export class HomeworkPage implements OnInit {

  @ViewChild('ejCalendar', {static: false}) calendarObj: CalendarComponent;

  constructor(private router: Router) {}

  ngOnInit() {}

  onChange(args) {
    var date = args.value.toLocaleDateString();
    let selectedDate: NavigationExtras = {
      state: {
        date: date
      }
    };
    this.router.navigate(['/homework-details'], selectedDate);
    this.calendarObj.value = null;
  }

}
