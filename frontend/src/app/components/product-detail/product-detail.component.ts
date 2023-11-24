import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  productId!: number;

  constructor(private post: PostService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
     
      this.getProductDetails(this.productId);
    });
  }

  getProductDetails(productId: number): void {
    this.post.getData().subscribe((items: any) => {
      this.product = items.find((item: any) => item.id === productId);
      console.log(this.product.id)
    });
  }
}
