import { Parent8Component } from './http/parent8/parent8.component';
import { ReactiveRegistComponent } from './parentChild/reactive-regist/reactive-regist.component';
import { ReactiveFormComponent } from './parentChild/reactive-form/reactive-form.component';
import { Child7Component } from './parentChild/child7/child7.component';
import { Child6Component } from './parentChild/child6/child6.component';
import { Parent1Component } from './parent1/parent1.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { QuoteComponent } from './quote/quote.component';
import { ProductResolve } from './guard/product.resolve';
import { UnsavedGuard } from './guard/unsaved-guard';
import { LoginGuard } from './guard/login-guard';
import { ChatComponent } from './chat/chat.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { Code404Component } from './code404/code404.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Product1Component } from './product1/product1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent3Component } from './parentChild/parent3/parent3.component';
import { Parent4Component } from './parentChild/parent4/parent4.component';
import { Parent5Component } from './parentChild/parent5/parent5.component';
import { Parent6Component } from './parentChild/parent6/parent6.component';
import { Parent7Component } from './parentChild/parent7/parent7.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent, outlet: 'aux' },
  { path: 'quote', component: QuoteComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'parent1', component: Parent1Component },
  { path: 'parent2', component: Parent2Component },
  { path: 'parent3', component: Parent3Component },
  { path: 'parent4', component: Parent4Component },
  { path: 'parent6', component: Parent6Component },
  { path: 'parent7', component: Parent7Component },
  { path: 'parent8', component: ReactiveFormComponent },
  { path: 'parent9', component: ReactiveRegistComponent },
  { path: 'parent10', component: Parent8Component },
  {
    path: 'parent5', component: Parent5Component, children: [
      { path: '', component: Child6Component },
      { path: 'child7', component: Child7Component }
    ]
  },
  { path: 'product', component: ProductComponent, data: [{ name: 'hello' }] },
  {
    path: 'product1/:id', component: Product1Component, children: [
      { path: '', component: ProductDescComponent },
      { path: 'sellerInfo/:id', component: SellerInfoComponent }
    ],
    // canActivate: [LoginGuard],
    // canDeactivate: [UnsavedGuard],
    resolve: {
      product: ProductResolve
    }
  },
  { path: '**', component: Code404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard, ProductResolve]
})
export class AppRoutingModule { }
