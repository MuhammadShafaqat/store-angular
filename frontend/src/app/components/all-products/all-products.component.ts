import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  error!: string;

constructor(private post:PostService){}

  ngOnInit(): void {
    this.post.getData().subscribe((data: any)=>{
      this.products = data
      this.products = this.products.filter(product => product.id <= 10)
      console.log(this.products)

    },(error: any)=>{
      this.error = 'An error occurred while fetching data. Please try again later.';
        console.error('Error:', error);
    }
    )
  }
}
