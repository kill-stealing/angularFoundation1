import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: number;
  name: string;

  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    // this.productId = this.routerInfo.snapshot.queryParams['id'];
    this.routerInfo.data.subscribe((data: { name: string }) => {
      this.name = data['0'].name;
    });
  }

}
