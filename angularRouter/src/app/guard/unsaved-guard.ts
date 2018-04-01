import { Product1Component } from './../product1/product1.component';
import { CanDeactivate } from '@angular/router';
export class UnsavedGuard implements CanDeactivate<Product1Component> {
    canDeactivate(component: Product1Component) {
        return window.confirm('你还没有保存，确定要离开吗？');
    }
}
