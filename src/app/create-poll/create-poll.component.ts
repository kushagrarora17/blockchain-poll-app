import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss'],
})
export class CreatePollComponent {
  pollForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pollForm = this.fb.group({
      question: this.fb.control('', Validators.required),
      image: this.fb.control(''),
      op1: this.fb.control(''),
      op2: this.fb.control(''),
      op3: this.fb.control(''),
    });
  }

  submitForm() {
    console.log(this.pollForm.value);
  }
}
