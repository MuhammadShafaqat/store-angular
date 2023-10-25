import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgetForm!: FormGroup; 

  constructor(private formBuilder: FormBuilder,private api:ApiService){

  }
  ngOnInit(): void {
    this.forgetForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    })
  }
  submit() {
    if (this.forgetForm.valid) {
      const forgotData = this.forgetForm.value;
      this.api.forgotPassword(forgotData).subscribe(
        (response) => {
          // Success response handling
          if (response && response.success) {
            // You can display a success message to the user if needed
            console.log('Password reset email sent successfully.');
          } else {
            // Handle other success cases, if applicable
          }
        },
        (error) => {
          // Error response handling
          if (error.status === 404) {
            // Handle the case where the email was not found
            console.error('Email not found. Please check the email address.');
          } else if (error.status === 500) {
            // Handle other server-side errors, if needed
            console.error('Internal server error. Please try again later.');
          } else {
            // Handle other error cases or provide a generic error message
            console.error('An error occurred. Please try again.');
          }
        }
      );
    }
  }
  
}
