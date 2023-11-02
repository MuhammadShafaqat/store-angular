import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {
product = {
   title: '',
    description: '',
    category: '',
    image: '',
    price: 0,
    rating: {
      rate: 0,
      count: 0
}
}

  constructor(private post:PostService){

  }
 onSubmit(){
  this.post.addProperty(this.product).subscribe(
    (response) => {
      // Handle successful response here
      console.log('Product created successfully:', response);
    },
    (error) => {
      // Handle error here
      console.error('Error creating product:', error);
    }
  );
}

}
