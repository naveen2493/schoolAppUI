import { HttpParams } from '@angular/common/http';
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
  examList = ["Mid-Term", "Mid-Term"];
  user = { username: "Sadasivam", student_name: "Naveen", class: "10", phone: "9952267549", blood: 'O+ve', address: '28/23 Pandarinathan st, Ammapet, salem-636003.', email: "sadasivam@gmail.com", password: "qwerty123", batch: "2020" }

  constructor(public examDatesService: ExamDatesService) { }

  ngOnInit() {
    this.examDatesService.addedEndPoint = 'one';

    this.examList.forEach(exam => {
      let params = new HttpParams();
      params = params.append("year", this.user.batch);
      params = params.append("term", exam);
      params = params.append("class", this.user.class);

      this.examDatesService.get(params).subscribe(
        res => {
          this.exams.push(res.examDateData[0]
          )
          console.log("this.exams", this.exams);
        },
        err => {
          console.log("Errors", err);
        }
      );
    });
  }

  getTime(time) {
    let splittedTime = time.split(':');
    return splittedTime[0] + ":" + splittedTime[1] + splittedTime[2].substring(2);
  }

  toggle(index) {
    console.log("Gettttttt2", index, document.getElementById('term' + index));
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
