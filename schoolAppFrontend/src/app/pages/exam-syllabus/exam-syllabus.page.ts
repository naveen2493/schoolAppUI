import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-exam-syllabus',
  templateUrl: './exam-syllabus.page.html',
  styleUrls: ['./exam-syllabus.page.scss'],
})
export class ExamSyllabusPage implements OnInit {

  objectKeys = Object.keys;

  exams = [
    { '1st Mid-Term': 
          { 
            'Tamil': ['Lesson 1 to Lesson 3'], 
            'English': ['3 poetry , 2 stories'], 
            'Maths': ['5 probelmas from 1 st unit'] }
          },
  { '2nd Mid-Term': 
            {  'Tamil': ['Lesson 1 to Lesson 3'], 
            'English': ['3 poetry , 2 stories'], 
            'Maths': ['5 probelmas from 1 st unit']
            }
  },
  { 'Quarterly Exam': 
  { 
    'Tamil': ['Lesson 1 to Lesson 3'], 
    'English': ['3 poetry , 2 stories'], 
    'Maths': ['5 probelmas from 1 st unit'] }
  },

{ '2nd Mid-Term': 
    {  'Tamil': ['Lesson 1 to Lesson 3'], 
    'English': ['3 poetry , 2 stories'], 
    'Maths': ['5 probelmas from 1 st unit']
    }
   
},
{ 'Half Yearly': 
    {  'Tamil': ['Lesson 1 to Lesson 3'], 
    'English': ['3 poetry , 2 stories'], 
    'Maths': ['5 probelmas from 1 st unit']
    }
  }
];
  constructor() { }

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

}
