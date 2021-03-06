import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeworkService } from 'src/app/services/homework.service';
import { Homework } from '../../models/homework';

@Component({
  selector: 'app-homework-details',
  templateUrl: './homework-details.page.html',
  styleUrls: ['./homework-details.page.scss'],
})
export class HomeworkDetailsPage implements OnInit {

  date: any;
  homework = {};
  subjects = [];
  params = {};
  homeworkDetails: Homework;

  constructor(private route: ActivatedRoute, private router: Router, private homeworkService: HomeworkService) {
    // Mock homwork data
    this.homework = {'Tamil':'Write 10 thirukural and give explanation for each kural', 'English': 'Write English caps and small letters. Give a word for each letter. Ex: A for Apple', 'Maths':'Give a examples sums for Addition, Subraction, multiply and Divition', 'Science': 'Give science name for few flowers', 'Social Science': 'Mark all states of India in Map'};
    this.subjects = Object.keys(this.homework);

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.date = this.router.getCurrentNavigation().extras.state.date;
        console.log("this date", this.date);
        this.params = {
          'date': this.date,
          'class': '5',
          'section': 'a'
        }
        this.homework = {};
        this.subjects = [];
        this.fetchHomeWorkDetails(this.params);
      }
    });
    if(Object.keys(this.params).length === 0) {
      this.date = "09/23/2020";
      this.params = {
        'date': this.date,
        'class': '5',
        'section': 'a'
      }
      this.fetchHomeWorkDetails(this.params);
    }
    console.log("Homework", this.homework);
  }

  ngOnInit() {
    console.log("Date");
  }

  fetchHomeWorkDetails(homeworkParams) {
    // Mock homwork data
    this.homework = {'Tamil':'Write 10 thirukural and give explanation for each kural', 'English': 'Write English caps and small letters. Give a word for each letter. Ex: A for Apple', 'Maths':'Give a examples sums for Addition, Subraction, multiply and Divition', 'Science': 'Give science name for few flowers', 'Social Science': 'Mark all states of India in Map'};
    this.subjects = Object.keys(this.homework);

    this.homeworkService.get(this.homeworkService.getParams(homeworkParams)).subscribe((res) => {
      if(res.homeWorksData.length > 0) {
      this.homeworkDetails = new Homework().deserialize(res.homeWorksData[0]);
      this.homeworkDetails.subjects.forEach(subject => {
        this.homework[subject.subject_name] = subject.edition
        this.subjects = Object.keys(this.homework);
        console.log("Test", this.homeworkDetails.date);
      });
    }
    });

  }

  fetchAllDays() {
    this.router.navigate(['homework']);
  }

}
