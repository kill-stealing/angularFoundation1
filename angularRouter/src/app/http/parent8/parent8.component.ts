import { Product } from './../../product1/product1.component';
import { Http, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
@Component({
  selector: 'app-parent8',
  templateUrl: './parent8.component.html',
  styleUrls: ['./parent8.component.css']
})
export class Parent8Component implements OnInit {
  dataSource: Observable<Product[]>;

  constructor(private http: Http) { }

  ngOnInit() {
    const myHeader: Headers = new Headers();
    myHeader.append('BASIC', 'abacc');
    this.dataSource = this.http.get('/api/products/', { headers: myHeader })
      .map((res) => res.json());
  }

  getProducts() {
  }

}
