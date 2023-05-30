import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  @ViewChild('signupForm') signupForm!: NgForm;
  user: User = new User();

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.user);
    }
  }
}
