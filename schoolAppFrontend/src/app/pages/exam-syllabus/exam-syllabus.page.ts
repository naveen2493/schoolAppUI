import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exam-syllabus',
  templateUrl: './exam-syllabus.page.html',
  styleUrls: ['./exam-syllabus.page.scss'],
})
export class ExamSyllabusPage implements OnInit {

  objectKeys = Object.keys;

  subjectSyllabus;
  subjects = []
  
  constructor(public router: Router, public route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log("this date first");
      if (this.router.getCurrentNavigation().extras.state) {
        this.subjectSyllabus = this.router.getCurrentNavigation().extras.state.date;
        console.log("this date", this.subjectSyllabus);
        this.subjects = Object.keys(this.subjectSyllabus);
        console.log("this date sub", this.subjects);
        // debugger;
      }
    });
   }

  ngOnInit() {
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

  keys() : Array<string> {
    return Object.keys(this.subjectSyllabus);
  }

}
