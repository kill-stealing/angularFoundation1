import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {
  sellerId: number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.sellerId = this.routeInfo.snapshot.params['id'];
  }

}
