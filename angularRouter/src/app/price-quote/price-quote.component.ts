import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  stockCode = 'IBM';
  price: number;
  // tslint:disable-next-line:no-output-rename
  @Output('lastPrice1')
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter();

  @Output() buy: EventEmitter<PriceQuote> = new EventEmitter();

  constructor() {
    setInterval(() => {
      const priceQuote: PriceQuote = new PriceQuote(this.stockCode, Math.random() * 100);
      this.price = priceQuote.lastPrice;
      this.lastPrice.emit(priceQuote);
    }, 1000);
  }

  ngOnInit() {

  }

  buyQuote(event) {
    this.buy.emit(new PriceQuote(this.stockCode, this.price));
  }

}

export class PriceQuote {
  constructor(public stockCode: string, public lastPrice: number) { }
}
