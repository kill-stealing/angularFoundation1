import { Component, OnInit, Input } from '@angular/core';
import { PriceQuote } from '../price-quote/price-quote.component';

@Component({
  selector: 'app-quote-order',
  templateUrl: './quote-order.component.html',
  styleUrls: ['./quote-order.component.css']
})
export class QuoteOrderComponent implements OnInit {

  @Input() quote: PriceQuote;

  constructor() { }

  ngOnInit() {
  }

}
