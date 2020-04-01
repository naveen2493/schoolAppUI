import { Component } from '@angular/core';
import * as $ from 'jquery';
import { TimeTableService } from '../../services/time-table.service';

@Component({
  selector: 'app-timetable',
  templateUrl: 'timetable.page.html',
  styleUrls: ['timetable.page.scss']
})
export class TimetablePage {
  dateNow: Date = new Date();
  objectKeys = Object.keys;
  days = [];
  periods = [];

  // console.log(date);
  timeTable = [];

  periodTimings = [];
  // timeTableData = [
  //   ["Days","MON","TUE","WED","THU","FRI"],
  //   ["P1","Eng","Soc","Tam","P.E.T","Mat"],
  //   ["P2","Soc","Phy","Soc","Che","Che"],
  //   ["P3","Sci","Eng","Geo","Mat","Sci"],
  //   ["P4","P.E.T","Sci","Che","Sci","Tam"],
  //   ["P5","Mat","Sci","Eco","Phy","Geo"],
  //   ["P6","Bot","Bot","Mat","Eng","Bot"],
  //   ["P7","Bot","Mat","Eng","Geo","Phy"],
  //   ["P8","Phy","Tam","Art","Tam","Sci"]
  // ]
  constructor(public timeTableService: TimeTableService) { }

  // weekday = this.dateNow.getDay();
  // hour = this.dateNow.getTime();
  // log(){
  //  console.log(this.weekday)
  // }

  ngOnInit() {
    /*Service response
    this.timeTableService.get(this.timeTableService.getParams()).subscribe(
      res => {
        this.timeTable = res[0];
        this.periodTimings = res[1];
        this.timeTable.forEach(daysDetail => {
          this.objectKeys(daysDetail).forEach(day => {
            this.days.push(day);
            debugger;
          });
          this.periods.push(daysDetail[this.objectKeys(daysDetail)[0]]);
        });
      },
      err => {
        console.log("Errors", err);
      }
    );*/

    //Mock Response
    let res = [[
      { 'Mon': ['Tam', 'Eng', 'Mat', 'Sci', 'S.S', 'PET', 'M.I', "Tam"] },
      { 'Tue': ['Tam', 'Eng', 'Mat', 'Sci', 'S.S', 'PET', 'M.I', "Tam"] },
      { 'Wed': ['Tam', 'Eng', 'Mat', 'Sci', 'S.S', 'PET', 'M.I', "Tam"] },
      { 'Thr': ['Tam', 'Eng', 'Mat', 'Sci', 'S.S', 'PET', 'M.I', "Tam"] },
      { 'Fri': ['Tam', 'Eng', 'Mat', 'Sci', 'S.S', 'PET', 'M.I', "Tam"] },
      { 'Sat': ['Tam', 'Eng', 'Mat', 'Sci', 'S.S', 'PET', 'M.I', "Tam"] }
    ],
    ['9.30-10.15', '10.15-11.00', '11.10-11.55', '11.55-12.40', '1.30-2.15', '2.15-3.00', '3.10-3.55', '3.55-4.30']
    ];
    
    this.timeTable = res[0];
    this.periodTimings = res[1];
    this.timeTable.forEach(daysDetail => {
      this.objectKeys(daysDetail).forEach(day => {
        this.days.push(day);
      });
      this.periods.push(daysDetail[this.objectKeys(daysDetail)[0]]);
    });

    $(document).ready(function () {
      var day = parseInt($(".weekday").text());
      var hour = (parseInt($(".hour").text()) - 8)
      $(".timetable-bg .headerCol").eq(hour).find('div').eq(day).addClass("highlightClass");
    });
  }
}
