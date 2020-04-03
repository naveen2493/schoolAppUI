import { Component, OnInit } from '@angular/core';
import { SchoolFeesService } from '../../services/school-fees.service';

@Component({
  selector: 'app-fees-details',
  templateUrl: './fees-details.page.html',
  styleUrls: ['./fees-details.page.scss'],
})
export class FeesDetailsPage implements OnInit {

  objectKeys = Object.keys;

  total:number = 0;

  feesDetails;

  constructor(public schoolFeesService: SchoolFeesService) { }

  ngOnInit() {
    /* Service response
    this.schoolFeesService.get(this.schoolFeesService.getParams()).subscribe(
      res => {
        this.feesDetails = res[0];
        Object.values(this.feesDetails).forEach(fee => {
          console.log("Fee", fee, this.total);
          this.total += +fee;
        });
      },
      err => {
        console.log("Errors", err);
      }
    );*/

    let res = [{'Registration Fee': 2000, 'Admission Fee': 15000, 'Caution Deposit (Refundable)': 5000, 'Session Fee': 8000}];
    this.feesDetails = res[0];

    Object.values(this.feesDetails).forEach(fee => {
      console.log("Fee", fee, this.total);
      this.total += +fee;
    });
  }
}
