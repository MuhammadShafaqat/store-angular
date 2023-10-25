import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  resetForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  resetPassword() {
    if (this.resetForm.valid) {
      const newPassword = this.resetForm.get('newPassword')!.value;
      const confirmPassword = this.resetForm.get('confirmPassword')!.value;

      if (newPassword === confirmPassword) {
        this.api.resetPassword(newPassword).subscribe(
          (response) => {
            // Handle success response, e.g., display a success message
          },
          (error) => {
            // Handle error response, e.g., display an error message
          }
        );
      } else {
        // Passwords do not match, handle this case
      }
    }
  }
}

