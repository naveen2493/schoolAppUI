import { Component, OnInit, ViewChild } from '@angular/core';
import { mobiscroll } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { CalendarComponent, Calendar } from '@syncfusion/ej2-angular-calendars';


mobiscroll.settings = {
  theme: 'ios',
  themeVariant: 'light'
};

const now = new Date();

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.page.html',
  styleUrls: ['./attendence.page.scss'],
})
export class AttendencePage implements OnInit {

  @ViewChild('calendarObj', {static: false}) calendarObj: CalendarComponent;

  constructor(private http: HttpClient, private alertCtrl: AlertController) {
  }


  colorDay: Date;

  holidays = [];

  working_days = 0;
  no_of_leaves = 0;
  percentage = 0;

  govt_holidays = {
    '1/1/2020': "New Year's Day",
    '1/15/2020': 'Pongal',
    '1/16/2020': 'Thiruvalluvar Day',
    '1/17/2020': 'Uzhavar Thirunal',
    '1/26/2020': 'Republic Day',
    '4/10/2020': 'Good Friday',
    '4/14/2020': 'Tamil New Year',
    '5/1/2020': 'May Day',
    '8/1/2020': 'Bakrid / Eid al Adha',
    '8/15/2020': 'Independence Day',
    '8/22/2020': 'Ganesh Chaturthi',
    '8/30/2020': 'Muharram',
    '10/2/2020': 'Gandhi Jayanti',
    '10/25/2020': 'Ayutha Poojai',
    '10/26/2020': 'Vijaya Dashami',
    '10/30/2020': 'Eid e Milad',
    '11/14/2020': 'Deepavali',
    '12/25/2020': '	Christmas Day'
  }

  leaves = {
    "1/24/2020": 'Feeling not well leave',
    "1/28/2020": 'Feeling not well leave',
    "2/24/2020": 'Feeling not well leave',
    "3/24/2020": 'Feeling not well leave',
    "4/24/2020": 'Feeling not well leave',
    "5/24/2020": 'Feeling not well leave',
    "6/24/2020": 'Feeling not well leave',
    "7/24/2020": 'Feeling not well leave',
    "8/24/2020": 'Feeling not well leave',
    "9/24/2020": 'Feeling not well leave',
    "10/24/2020": 'Feeling not well leave',
    "11/24/2020": 'Feeling not well leave',
    "12/24/2020": 'Feeling not well leave',
    "1/23/2020": 'Feeling not well leave',
    "1/29/2020": 'Feeling not well leave'
  }

  partialLeaves = {
    "1/20/2020": 'Feeling not well leave',
    "1/11/2020": 'Feeling not well leave',
    "2/20/2020": 'Feeling not well leave',
    "3/20/2020": 'Feeling not well leave',
    "4/20/2020": 'Feeling not well leave',
    "5/20/2020": 'Feeling not well leave',
    "6/20/2020": 'Feeling not well leave',
    "7/20/2020": 'Feeling not well leave',
    "8/20/2020": 'Feeling not well leave',
    "9/20/2020": 'Feeling not well leave',
    "10/04/2020": 'Feeling not well leave',
    "11/20/2020": 'Feeling not well leave',
    "12/20/2020": 'Feeling not well leave'
  }

  govtHolidayDates;
  leaveDates;
  partialLeavesDates;

  ngOnInit() {
    this.govtHolidayDates = Object.keys(this.govt_holidays);
    this.leaveDates = Object.keys(this.leaves);
    this.partialLeavesDates = Object.keys(this.partialLeaves)
    this.no_of_leaves = this.leaveDates.length+(this.partialLeavesDates.length/2);

    for (var d = new Date(2019, 5, 1); d <= now; d.setDate(d.getDate() + 1)) {

      if (d.getDay() !== 6 && d.getDay() !== 0) {
        this.working_days++;
      }
    }

    this.percentage = Math.round(((this.working_days - this.no_of_leaves) / this.working_days) * 100)

    console.log("no of working days:", this.working_days);
  }

  customDates(args): void {
    console.log("DARTE", args.date.toLocaleDateString());
    this.govtHolidayDates.forEach((date) => {
      if(date == args.date.toLocaleDateString()) {
        args.element.classList.add('holiday');
      } 
    });

    this.leaveDates.forEach((date) => {
      if(date == args.date.toLocaleDateString()) {
        args.element.classList.add('leave');
      } 
    });

    this.partialLeavesDates.forEach((date) => {
      if(date == args.date.toLocaleDateString()) {
        args.element.classList.add('partial');
      }
    });
    // if (+args.date.getDate() === 7 && +args.date.getMonth() == 3) {
    //   args.element.className ='holiday';
    // }
    // if (+args.date.getDate() === 21 && +args.date.getMonth() == 2) {
    //   args.element.className = 'leave';
    // }
  }

  onChange(args) {

    var date = args.value.toLocaleDateString();

    if (date in this.govt_holidays) {
      this.presentAlert('Holiday', date, this.govt_holidays[date], 'govt-holiday');
    }
    else if (date in this.leaves) {
      this.presentAlert('Leave', date, this.leaves[date], 'leave-day');
    }
    else if (date in this.partialLeaves) {
      this.presentAlert('Half-day Leave', date, this.partialLeaves[date], 'partial-day');
    }
    else {
      this.presentAlert('Working Day', date, 'a working day', 'working-day');
    }

    this.calendarObj.value = null;
  }

  async presentAlert(title, date, reason, style) {
    const alert = await this.alertCtrl.create({
      message: date + " is " + reason,
      cssClass: style,
      subHeader: title,
      buttons: ['Ok']
    });
    await alert.present();
  }

}
