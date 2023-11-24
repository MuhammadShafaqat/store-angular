import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any[] = [];
  error:any; 
   
  constructor(private post:PostService){

  }

  ngOnInit(): void {
    this.post.getData().subscribe((data:any)=>{
      this.products = data
      this.products = this.products.filter(product => product.id <= 10)
      console.log(this.products);
      
    },(error:any)=>{
          this.error = "An error is occured while fetching data, please try again later."
          console.error('Error', error);
    }

    )
  }

}
