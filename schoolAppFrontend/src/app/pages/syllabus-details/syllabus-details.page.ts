import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { ExamSyllabusService } from '../../services/exam-syllabus.service';


@Component({
  selector: 'app-syllabus-details',
  templateUrl: './syllabus-details.page.html',
  styleUrls: ['./syllabus-details.page.scss'],
})
export class SyllabusDetailsPage implements OnInit {

  objectKeys = Object.keys;

  exams = [];
  examList = ["Mid-Term", "Mid-Term"];
  user = { username: "Sadasivam", student_name: "Naveen", class: "10", phone: "9952267549", blood: 'O+ve', address: '28/23 Pandarinathan st, Ammapet, salem-636003.', email: "sadasivam@gmail.com", password: "qwerty123", batch: "2020" }

  syllabusDetails = [];

  constructor(public router: Router, public route: ActivatedRoute, public examSyllabusService: ExamSyllabusService) { }

  ngOnInit() {
  }

  goToDetails(exam) {
    let selectedExam: NavigationExtras = {
      state: {
        data: exam
      }
    };
    this.router.navigate(['/exam-syllabus'], selectedExam);
  }

}
