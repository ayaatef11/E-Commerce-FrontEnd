import { Component } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { AsyncPipe, CurrencyPipe, NgIf } from '@angular/common';

@Component({
  imports:[CurrencyPipe,NgIf,AsyncPipe],
  standalone:true,
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrl: './order-totals.component.scss'
})
export class OrderTotalsComponent {
  constructor(public _BasketService:BasketService){}


}
