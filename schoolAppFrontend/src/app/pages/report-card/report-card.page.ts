import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ReportCardService } from '../../services/report-card.service';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.page.html',
  styleUrls: ['./report-card.page.scss'],
})
export class ReportCardPage implements OnInit {
  objectKeys = Object.keys;

  examMarks = [];

  constructor(public reportCardService: ReportCardService) { }

  ngOnInit() {
    /*Service Response
    this.reportCardService.get(this.reportCardService.getParams()).subscribe(
      res => {
        this.examsMarks = res;
      },
      err => {
        console.log("Errors", err);
      }
    );*/

    let res = [
      {
        '1st Mid-Term':
        {
          'Tamil': 80,
          'English': 82,
          'Maths': 99,
          'Total': 261,
          'Rank': 15
        },

      },
      {
        '2nd Mid-Term':
        {
          'Tamil': 33,
          'English': 99,
          'Maths': 52,
          'Total': 184,
          'Rank': 16
        }
      },
      {
        'Quarterly Exam':
        {
          'Tamil': 71,
          'English': 41,
          'Maths': 66,
          'Total': 178,
          'Rank': 19
        }
      },

      {
        '2nd Mid-Term':
        {
          'Tamil': 60,
          'English': 82,
          'Maths': 99,
          'Total': 241,
          'Rank': 18
        }

      },
      {
        'Half Yearly':
        {
          'Tamil': 50,
          'English': 42,
          'Maths': 79,
          'Total': 171,
          'Rank': 20
        }
      }
    ];
    this.examMarks = res;

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
