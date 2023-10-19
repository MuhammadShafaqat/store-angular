import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgetForm!: FormGroup; 

  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.forgetForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    })
  }

  submit(){
console.log(this.forgetForm.value)
  }
}
