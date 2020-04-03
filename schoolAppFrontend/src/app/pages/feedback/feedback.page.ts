import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  feedbackForm: FormGroup
  title;
  feedback;

  constructor(private formBuilder: FormBuilder, public feedbackService: FeedbackService) {
  }

  ngOnInit() {
    this.title = new FormControl("", Validators.required);
    this.feedback = new FormControl("", Validators.required);
    this.feedbackForm = new FormGroup({
      title: this.title,
      feedback: this.feedback
    });
  }

  feedBackFormData() {
    console.log(this.feedbackForm.value);
    var params = {
      title: this.feedbackForm.value.title,
      feedback: this.feedbackForm.value.feedback
    }

    this.feedbackService.post(params).subscribe(
      res => {
        console.log("Response", res);
      },
      err => {
        console.log("Errors", err);
      }
    )
  }

}
