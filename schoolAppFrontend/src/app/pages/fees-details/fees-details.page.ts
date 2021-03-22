import { HttpParams } from '@angular/common/http';
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
  user = { username: "Sadasivam", student_name: "Naveen", class: "11", phone: "9952267549", blood: 'O+ve', address: '28/23 Pandarinathan st, Ammapet, salem-636003.', email: "sadasivam@gmail.com", password: "qwerty123", batch: "2020" }


  constructor(public schoolFeesService: SchoolFeesService) { }

  ngOnInit() {
    this.getFeesDetails();
  }

  getFeesDetails() {
    this.feesDetails = []
    let params = new HttpParams();
    params = params.append("class", this.user.class);
    params = params.append("year", this.user.batch);

    this.schoolFeesService.addedEndPoint = 'one';
    this.schoolFeesService.get(params).subscribe(
      data => {
        this.feesDetails = data.schoolFeesData[0]
      }
    )

  }
}
