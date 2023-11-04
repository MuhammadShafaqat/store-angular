import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private post:PostService, private formBuilder: FormBuilder,){
    this.registrationForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      image: [''],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }
  ngOnInit() {
   
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      this.post.addProduct(this.registrationForm.value).subscribe(
        (response) => {
          // Handle successful response, e.g., redirect or show a success message.
          console.log('Product added successfully:', response);
        },
        (error) => {
          // Handle error, e.g., display an error message.
          console.error('Error adding product:', error);
        }
      );
    }
  }
}
