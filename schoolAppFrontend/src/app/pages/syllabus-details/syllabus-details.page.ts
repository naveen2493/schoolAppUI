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
        'Tamil': 'Lesson 1 to Lesson 3. Tamil Nadu board of education has published all the syllabus for the session 2020 on the official website- www.dge.tn.gov.in. The syllabus is also made available here below for your ease and to download. SSLC syllabus is available in two medium. One in Tamil medium and another in English medium.',
        'English': '3 poetry , 2 stories. Tamil Nadu board of education has published all the syllabus for the session 2020 on the official website- www.dge.tn.gov.in. The syllabus is also made available here below for your ease and to download. SSLC syllabus is available in two medium. One in Tamil medium and another in English medium.',
        'Maths': '5 probelmas from 1 st unit. Tamil Nadu board of education has published all the syllabus for the session 2020 on the official website- www.dge.tn.gov.in. The syllabus is also made available here below for your ease and to download. SSLC syllabus is available in two medium. One in Tamil medium and another in English medium.'
      }
    },
    {
      '2nd Mid-Term':
      {
        'Tamil': 'Lesson 1 to Lesson 3. Tamil Nadu board of education has published all the syllabus for the session 2020 on the official website- www.dge.tn.gov.in. The syllabus is also made available here below for your ease and to download. SSLC syllabus is available in two medium. One in Tamil medium and another in English medium.',
        'English': '3 poetry , 2 stories. Tamil Nadu board of education has published all the syllabus for the session 2020 on the official website- www.dge.tn.gov.in. The syllabus is also made available here below for your ease and to download. SSLC syllabus is available in two medium. One in Tamil medium and another in English medium.',
        'Maths': '5 probelmas from 1 st unit. Tamil Nadu board of education has published all the syllabus for the session 2020 on the official website- www.dge.tn.gov.in. The syllabus is also made available here below for your ease and to download. SSLC syllabus is available in two medium. One in Tamil medium and another in English medium.'
      }
    },
    {
      'Quarterly Exam':
      {
        'Tamil': 'Lesson 1 to Lesson 3. Tamil Nadu board of education has published all the syllabus for the session 2020 on the official website- www.dge.tn.gov.in. The syllabus is also made available here below for your ease and to download. SSLC syllabus is available in two medium. One in Tamil medium and another in English medium.',
        'English': '3 poetry , 2 stories. Tamil Nadu board of education has published all the syllabus for the session 2020 on the official website- www.dge.tn.gov.in. The syllabus is also made available here below for your ease and to download. SSLC syllabus is available in two medium. One in Tamil medium and another in English medium.',
        'Maths': '5 probelmas from 1 st unit. Tamil Nadu board of education has published all the syllabus for the session 2020 on the official website- www.dge.tn.gov.in. The syllabus is also made available here below for your ease and to download. SSLC syllabus is available in two medium. One in Tamil medium and another in English medium.'
      }
    },

    {
      '2nd Mid-Term':
      {
        'Tamil': 'Lesson 1 to Lesson 3. Tamil Nadu board of education has published all the syllabus for the session 2020 on the official website- www.dge.tn.gov.in. The syllabus is also made available here below for your ease and to download. SSLC syllabus is available in two medium. One in Tamil medium and another in English medium.',
        'English': '3 poetry , 2 stories. Tamil Nadu board of education has published all the syllabus for the session 2020 on the official website- www.dge.tn.gov.in. The syllabus is also made available here below for your ease and to download. SSLC syllabus is available in two medium. One in Tamil medium and another in English medium.',
        'Maths': '5 probelmas from 1 st unit. Tamil Nadu board of education has published all the syllabus for the session 2020 on the official website- www.dge.tn.gov.in. The syllabus is also made available here below for your ease and to download. SSLC syllabus is available in two medium. One in Tamil medium and another in English medium.'
      }

    },
    {
      'Half Yearly':
      {
        'Tamil': 'Lesson 1 to Lesson 3. Tamil Nadu board of education has published all the syllabus for the session 2020 on the official website- www.dge.tn.gov.in. The syllabus is also made available here below for your ease and to download. SSLC syllabus is available in two medium. One in Tamil medium and another in English medium.',
        'English': '3 poetry , 2 stories. Tamil Nadu board of education has published all the syllabus for the session 2020 on the official website- www.dge.tn.gov.in. The syllabus is also made available here below for your ease and to download. SSLC syllabus is available in two medium. One in Tamil medium and another in English medium.',
        'Maths': '5 probelmas from 1 st unit. Tamil Nadu board of education has published all the syllabus for the session 2020 on the official website- www.dge.tn.gov.in. The syllabus is also made available here below for your ease and to download. SSLC syllabus is available in two medium. One in Tamil medium and another in English medium.'
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
