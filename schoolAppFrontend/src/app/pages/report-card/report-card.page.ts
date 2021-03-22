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
