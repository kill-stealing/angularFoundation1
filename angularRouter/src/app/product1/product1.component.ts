import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  productId: number;
  productName: string;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // this.productId = this.routeInfo.snapshot.params['id'];
    // this.routeInfo.params.subscribe((params: Params) => { this.productId = params['id']; });
    this.routeInfo.data.subscribe((data: { product: Product }) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
  }

}

export class Product {
  constructor(public id: number, public name: string) { }
}
