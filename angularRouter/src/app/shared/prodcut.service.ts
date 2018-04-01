import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class ProdcutService {
  dataSource: Observable<any>;

  constructor(private http: Http) { }

  getProducts() {
    this.dataSource = this.http.get('/api/products/')
      .map((res) => res.json());
  }

}
