import { Component, OnInit } from '@angular/core';
import { AboutSchoolService } from '../../services/about-school.service';

@Component({
  selector: 'app-about-school',
  templateUrl: './about-school.page.html',
  styleUrls: ['./about-school.page.scss'],
})
export class AboutSchoolPage implements OnInit {

  constructor(public aboutSchoolService: AboutSchoolService) { }

  schoolDetails = [];

  ngOnInit() {
    /* Service response
    this.aboutSchoolService.get(this.aboutSchoolService.getParams()).subscribe(
      res => {
        this.schoolDetails = res;
      },
      err => {
        console.log("Errors", err);
      }
    );*/

    // Mock Response
    let res = [
      {
        'title': 'What is an About Us page?',
        'images': ['../../assets/gettyimages-1000887536-2048x2048.jpg'],
        'details': ["The About Us page of your site is the page where you get to talk about yourself and present how awesome of a person you are. It’s the place that gives you the opportunity to talk about what you do and why it matters. Every successful entrepreneur knows that a well-designed About Us page brings ‘all the boys and gals in the yard’ which means that it acts as the first point of contact between the ‘creator’ and the ‘receiver’ or else in marketing terms, the ‘seller’ and the ‘buyer’."]
      },
      {
        'title': 'Why is it important?',
        'images': [],
        'details': [
          'A recent survey from KoMarketing, revealed that the first thing 52 percent of participants want to see on a website’s home page is the About Us/Company Information section. On a comparison table the ‘About Us’ page comes at third place following the Product/Services (top priority) and Contact Information (second place).', 'What’s great about this discovery is that all three company elements can be combined into one page constituting all the content you should care most about and need to present. By making the best use of the space (on the site) and the time visitors stay on your page, it provides all the information they need to decide if they want to engage with you or not.']
      }];

    this.schoolDetails = res;
  }

}
