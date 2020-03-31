import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-syllabus-details',
  templateUrl: './syllabus-details.page.html',
  styleUrls: ['./syllabus-details.page.scss'],
})
export class SyllabusDetailsPage implements OnInit {

  objectKeys = Object.keys;

  syllabusDetails = [
    {
      '1st Mid-Term':
      {
        'Tamil': 'Lesson 1 to Lesson 3',
        'English': '3 poetry , 2 stories',
        'Maths': '5 probelmas from 1 st unit'
      }
    },
    {
      '2nd Mid-Term':
      {
        'Tamil': 'Lesson 1 to Lesson 3',
        'English': '3 poetry , 2 stories',
        'Maths': '5 probelmas from 1 st unit'
      }
    },
    {
      'Quarterly Exam':
      {
        'Tamil': 'Lesson 1 to Lesson 3',
        'English': '3 poetry , 2 stories',
        'Maths': '5 probelmas from 1 st unit'
      }
    },

    {
      '2nd Mid-Term':
      {
        'Tamil': 'Lesson 1 to Lesson 3',
        'English': '3 poetry , 2 stories',
        'Maths': '5 probelmas from 1 st unit'
      }

    },
    {
      'Half Yearly':
      {
        'Tamil': 'Lesson 1 to Lesson 3',
        'English': '3 poetry , 2 stories',
        'Maths': '5 probelmas from 1 st unit'
      }
    }
  ];

  constructor(public router: Router, public route: ActivatedRoute) {}

  ngOnInit() {
  }

  goToDetails(exam) {
    this.syllabusDetails.forEach(syllabusDetail => {
      if (Object.keys(syllabusDetail)[0] === exam) {
        let selectedExam: NavigationExtras = {
          state: {
            date: syllabusDetail[exam]
          }
        };
        this.router.navigate(['/exam-syllabus'], selectedExam);
      }
    });
  }

}
