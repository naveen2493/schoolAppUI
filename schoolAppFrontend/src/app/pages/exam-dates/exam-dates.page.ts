import { Component, OnInit } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import * as $ from 'jquery';
import { ExamDatesService } from '../../services/exam-dates.service';

@Component({
  selector: 'app-exam-dates',
  templateUrl: './exam-dates.page.html',
  styleUrls: ['./exam-dates.page.scss'],
})
export class ExamDatesPage implements OnInit {

  objectKeys = Object.keys;

  exams = [];

  constructor(public examDatesService: ExamDatesService) { }

  ngOnInit() {

    /*Service Respomse
    this.examDatesService.get(this.examDatesService.getParams()).subscribe(
      res => {
        this.exams = res;
      },
      err => {
        console.log("Errors", err);
      }
    );*/
    
    //Mock Response
    let res =   [{
      '1st Mid-Term':
      {
        'Tamil': ['21-8-2019', '9 A.M'],
        'English': ['22-8-2019', '9 A.M'],
        'Maths': ['23-8-2019', '9 A.M']
      }
    },
    {
      '2nd Mid-Term':
      {
        'Tamil': ['21-8-2019', '9 A.M'],
        'English': ['22-10-2019', '9 A.M'],
        'Maths': ['23-10-2019', '9 A.M']
      }
    }
    ];

    this.exams = res;

    $(document).ready(function () {
      $(".toggle h3").click(function (e) {
        console.log("Gettttttt")
        e.preventDefault();
        if ($(this).closest("div").find("div:first").css("display") == "none") {
          $(this).closest("div").find("div:first").show();
          $(this).closest("div").find(".plus").text("-");
          $(this).closest("div").find(".plus").css("background", "#888888");
          $(this).closest("div").find(".plus").css("color", "#fff");
          $(this).closest("div").find("h3").css("border-top", "2px solid var(--ion-color-primary)");
          $(this).closest("div").find("h3").css("border-left", "2px solid var(--ion-color-primary)");
          $(this).closest("div").find("h3").css("border-right", "2px solid var(--ion-color-primary)");
          $(this).closest("div").find("h3").css("border-bottom", "none");


        }
        else {
          $(this).closest("div").find("div:first").hide();
          $(this).closest("div").find(".plus").text("+");
          $(this).closest("div").find(".plus").css("background", "#888888");
          $(this).closest("div").find(".plus").css("color", "#fff");
          $(this).closest("div").find("h3").css("background", "#f3f3f3");
          $(this).closest("div").find("h3").css("border", "2px solid var(--ion-color-primary)");
        }
      });
    });
  }
}
