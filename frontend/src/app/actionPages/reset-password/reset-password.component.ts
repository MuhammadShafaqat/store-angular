import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

function passwordMatchValidator(control: FormGroup) {
  const newPassword = control.get('newPassword')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return newPassword === confirmPassword ? null : { passwordMismatch: true };
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  resetForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService,
     private route:ActivatedRoute, private router:Router) {}
     token!: string

  ngOnInit(): void {
this.route.params.subscribe((value)=>{
    this.token = value['token']
    // console.log(this.token)
})

    this.resetForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: passwordMatchValidator });
  }

  resetPassword() {
    if (this.resetForm.valid) {      
      const newPassword = this.resetForm.get('newPassword')!.value;
      const confirmPassword = this.resetForm.get('confirmPassword')!.value;

      if (newPassword === confirmPassword) {
        let resetObj = {
          token: this.token,
          password: newPassword
        }
        this.api.resetPassword(resetObj).subscribe(
          (res) => {
            console.log(this.resetForm)
            console.log(resetObj)
            // Handle success response, e.g., display a success message
            alert(res.message);

            this.router.navigate(['/login'])
          },
          (err) => {
            console.error('Error:', err);
            // Handle error response, e.g., display an error message
            alert(err.error.message)
          }
        );
      } else {
        alert('password do not match')
      }
    }
  }
}

