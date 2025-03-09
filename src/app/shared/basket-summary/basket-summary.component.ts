import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BasketItem } from '../interfaces/Basket';
import { BasketService } from '../../basket/basket.service';
import { CommonModule, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { asyncScheduler } from 'rxjs';

@Component({
  imports:[RouterLink,NgIf,NgFor,CurrencyPipe,CommonModule, RouterModule],
  standalone:true,
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrl: './basket-summary.component.scss'
})
export class BasketSummaryComponent {
  @Output() addItem = new EventEmitter<BasketItem>();
  @Output() removeItem = new EventEmitter<{id: number, quantity: number}>();
  @Input() isBasket = true;

  constructor(public _BasketService:BasketService){}

  addBasketItem(item: BasketItem){
    this.addItem.emit(item);
  }

  removeBasketItem(id: number, quantity = 1){
    this.removeItem.emit({id,quantity});
  }

}
