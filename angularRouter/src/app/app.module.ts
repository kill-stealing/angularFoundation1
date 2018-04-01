import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Code404Component } from './code404/code404.component';
import { Product1Component } from './product1/product1.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ChatComponent } from './chat/chat.component';
import { BindComponent } from './bind/bind.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { PriceQuoteComponent } from './price-quote/price-quote.component';
import { QuoteComponent } from './quote/quote.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { QuoteOrderComponent } from './quote-order/quote-order.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent3Component } from './parentChild/parent3/parent3.component';
import { Child4Component } from './parentChild/child4/child4.component';
import { Parent4Component } from './parentChild/parent4/parent4.component';
import { Child5Component } from './parentChild/child5/child5.component';
import { Parent5Component } from './parentChild/parent5/parent5.component';
import { Child6Component } from './parentChild/child6/child6.component';
import { Child7Component } from './parentChild/child7/child7.component';
import { Parent6Component } from './parentChild/parent6/parent6.component';
import { Child8Component } from './parentChild/child8/child8.component';
import { Parent7Component } from './parentChild/parent7/parent7.component';
import { ReactiveFormComponent } from './parentChild/reactive-form/reactive-form.component';
import { ReactiveRegistComponent } from './parentChild/reactive-regist/reactive-regist.component';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { Parent8Component } from './http/parent8/parent8.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    Code404Component,
    Product1Component,
    ProductDescComponent,
    SellerInfoComponent,
    ChatComponent,
    BindComponent,
    ChildComponent,
    PriceQuoteComponent,
    QuoteComponent,
    ReactiveComponent,
    QuoteOrderComponent,
    ParentComponent,
    Child1Component,
    Parent1Component,
    Child2Component,
    Child3Component,
    Parent2Component,
    Parent3Component,
    Child4Component,
    Parent4Component,
    Child5Component,
    Parent5Component,
    Child6Component,
    Child7Component,
    Parent6Component,
    Child8Component,
    Parent7Component,
    ReactiveFormComponent,
    ReactiveRegistComponent,
    MobileValidatorDirective,
    EqualValidatorDirective,
    Parent8Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
