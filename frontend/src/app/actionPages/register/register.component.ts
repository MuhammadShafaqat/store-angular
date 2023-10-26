import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements  OnInit{
  registrationForm: FormGroup;

constructor(private api:ApiService, private formBuilder: FormBuilder, private router: Router){
  this.registrationForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });
}

ngOnInit(){  
}
onSubmit() {
  if (this.registrationForm.valid) {
    const formData = this.registrationForm.value;

    this.api.signUp(formData).subscribe(
      (response) => {
        console.log('Registration successful:', response, formData);
        this.router.navigate(['/login'])
        // Handle success, e.g., show a success message or redirect
      },
      (error) => {
        console.error('Registration error:', error);
        // Handle error, e.g., show an error message
      }
    );
  }
}

}
