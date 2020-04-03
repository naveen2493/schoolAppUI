import { Component, OnInit } from '@angular/core';
import { TeachersDetailsService } from '../../services/teachers-detail.services';

@Component({
  selector: 'app-teachers-details',
  templateUrl: './teachers-details.page.html',
  styleUrls: ['./teachers-details.page.scss'],
})
export class TeachersDetailsPage implements OnInit {

  teachersDetails = [];

  constructor(public teachersDetailsService: TeachersDetailsService) { }

  ngOnInit() {
    /* Service response
    this.teachersDetailsService.get(this.teachersDetailService.getParams()).subscribe(
      res => {
        this.teachersDetails = res;
      },
      err => {
        console.log("Errors", err);
      }
    );*/

    // Mock response

    let res = [
      {'name': 'Naveen', 'subject': 'Tamil', 'qualification': 'B.E (ECE)', 'mail': 'naveendsadasivam93@gmail.com'},
      {'name': 'Naveen', 'subject': 'English', 'qualification': 'B.E (ECE)', 'mail': 'naveendsadasivam93@gmail.com'},
      {'name': 'Naveen', 'subject': 'Maths', 'qualification': 'B.E (ECE)', 'mail': 'naveendsadasivam93@gmail.com'}
    ];

    this.teachersDetails= res;
  }

}
