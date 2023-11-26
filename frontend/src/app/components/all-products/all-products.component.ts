import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
   searchTerm = '';

  products: any[] = [];
  filterProducts: any[] = [];
  error!: string;

constructor(private post:PostService, private data:DataService){}

  ngOnInit(): void {
// we are getting input header data 
this.data.data$.subscribe(data =>{
  if (data) {
    return this.products =  this.filterProducts.filter((product)=>product.title.toLowerCase().includes(data.toLowerCase()))
  }else{
    return this.products = this.filterProducts
  }
  
})



    // fetch api data 
    this.post.getData().subscribe((data: any)=>{
      this.products = data
      this.filterProducts = data
      this.products = this.products.filter(product => product.id <= 20)
      // console.log(this.products)

    },(error: any)=>{
      this.error = 'An error occurred while fetching data. Please try again later.';
        console.error('Error:', error);
    }
    )
  }
  // filter the products by input coming from header input search 


  // fiters by category
  allProducts(){
  this.products = this.filterProducts.filter((item)=> item)
  }
  electronics(){
 this.products = this.filterProducts.filter((item)=>item.category === 'electronics')
}
fashion(){
  this.products = this.filterProducts.filter((item)=> item.category === "men's clothing" || item.category === "women's clothing")
}
jewelery(){
  this.products = this.filterProducts.filter((item)=> item.category === 'jewelery')
}

}
