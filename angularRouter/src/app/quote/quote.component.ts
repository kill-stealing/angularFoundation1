import { Component, OnInit } from '@angular/core';
import { PriceQuote } from '../price-quote/price-quote.component';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  priceQuote: PriceQuote;
  buy: PriceQuote;
  constructor() { }

  ngOnInit() {
  }
  handleLastPrice(e: PriceQuote) {
    this.priceQuote = e;
  }

  buyQuote(e: PriceQuote) {
    this.buy = e;
  }
}
