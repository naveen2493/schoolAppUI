import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { ExamSyllabusService } from 'src/app/services/exam-syllabus.service';

@Component({
  selector: 'app-exam-syllabus',
  templateUrl: './exam-syllabus.page.html',
  styleUrls: ['./exam-syllabus.page.scss'],
})
export class ExamSyllabusPage implements OnInit {

  objectKeys = Object.keys;

  selectedExam;
  user = { username: "Sadasivam", student_name: "Naveen", class: "11", phone: "9952267549", blood: 'O+ve', address: '28/23 Pandarinathan st, Ammapet, salem-636003.', email: "sadasivam@gmail.com", password: "qwerty123", batch: "2020" }

  examSyllabusDetails = [];
  subjects = []

  constructor(public router: Router, public route: ActivatedRoute, public syllabusService: ExamSyllabusService) {
    console.log("working")
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.selectedExam = this.router.getCurrentNavigation().extras.state.data;
      }
    });
  }

  ngOnInit() {
    this.getExamDetails();
  }

  getExamDetails() {
    let params = new HttpParams();
    params = params.append("year", this.user.batch + "");
    params = params.append("term", this.selectedExam);
    params = params.append("class", this.user.class);

    this.syllabusService.addedEndPoint = 'one';
    this.syllabusService.get(params).subscribe(
      res => {
        this.examSyllabusDetails = res.examSyllabussData[0].subjects;
      },
      err => {
        console.log("this.examDatesService.get(params)", err);
      }
    );
  }

  toggle(index) {
    if (document.getElementById('exam-details-' + index).style.display == "none") {
      document.getElementById('term' + index).style.borderTop = "2px solid var(--ion-color-primary)";
      document.getElementById('term' + index).style.borderLeft = "2px solid var(--ion-color-primary)";
      document.getElementById('term' + index).style.borderRight = "2px solid var(--ion-color-primary)";
      document.getElementById('term' + index).style.borderBottom = "none";
      document.getElementById('plus' + index).innerText = '-';
      document.getElementById('exam-details-' + index).style.display = "block";
    }
    else {
      document.getElementById('plus' + index).innerText = '+';
      document.getElementById('exam-details-' + index).style.display = "none";
      document.getElementById('term' + index).style.borderBottom = "2px solid var(--ion-color-primary)";

    }
  }
}
