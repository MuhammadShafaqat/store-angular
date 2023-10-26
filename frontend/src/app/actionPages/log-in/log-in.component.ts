import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements  OnInit{
  signInForm: FormGroup;
  signInError: string = '';
constructor(private formBuilder: FormBuilder, private api:ApiService, private router: Router){
  this.signInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
}
  ngOnInit(): void {}
  
  onSubmit() {
    if (this.signInForm.valid) {
      const formData = this.signInForm.value;

      this.api.login(formData).subscribe(
        (res) => {
          console.log('Sign-in successful:', res.token,formData);
          // Handle successful sign-in, e.g., navigate to a different page
        if (res.token) {
          localStorage.setItem('token', res.token)
          this.router.navigate(['/forgotpassword']);
        }
        
        },
        (error) => {
          console.error('Sign-in error:', error);
          // Handle sign-in error, e.g., display an error message
          this.signInError = 'Sign-in failed. Please check your credentials.';
        }
      );
    }
  }
}
