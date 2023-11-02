import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  category = {
    name: '',
    icon: '',
    color: ''
  };

  constructor(private post:PostService){
  }
  onSubmit() {
    this.post.addCategory(this.category).subscribe(
      (response) => {
        // Handle successful response here
        console.log('Category added successfully:', response);
      },
      (error) => {
        // Handle error here
        console.error('Error adding category:', error);
      }
    );
  }

}
