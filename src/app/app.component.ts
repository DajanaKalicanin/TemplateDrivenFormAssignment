import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultPrescription = 'pro';
  submitted = false;
  user = {
    email: '',
    prescription: '',
    password: ''
  };

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;

    this.user.email = this.signupForm.value.userData.email;
    this.user.prescription = this.signupForm.value.userData.prescription;
    this.user.password = this.signupForm.value.userData.password;

    this.signupForm.reset();
  }
}
