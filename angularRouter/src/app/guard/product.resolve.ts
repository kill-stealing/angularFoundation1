import { Product1Component, Product } from './../product1/product1.component';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductResolve implements Resolve<Product> {
    constructor(private router: Router) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
        const id: number = route.params['id'];
        // tslint:disable-next-line:radix
        if (id == 1) {
            setTimeout(() => {
                return new Product(id, 'iphone7');
            }, 5000);
        } else {
            this.router.navigate(['/product']);
            return undefined;
        }
    }

}
