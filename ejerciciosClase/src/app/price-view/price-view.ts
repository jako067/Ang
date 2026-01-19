import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-price-view',
  
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './price-view.html',
  styleUrl: './price-view.css',
})
export class PriceView {

  price=49.99;
  today=new Date();


}
