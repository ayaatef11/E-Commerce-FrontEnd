import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BasketService } from '../basket.service';
import { BasketItem } from '../../shared/interfaces/Basket';
import { ToastrComponentlessModule } from 'ngx-toastr';
import { ClipboardModule } from 'ngx-clipboard';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports:[CommonModule, RouterModule,ClipboardModule],
  selector: 'app-basket',
  standalone:true,
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class BasketComponent {
  constructor(public _BasketService:BasketService){ }

  incrementQuantity(item: BasketItem){
    this._BasketService.addItemToBasket(item);
  }

  removeItem(event: {id: number, quantity:number}){
    this._BasketService.removeItemFromBasket(event.id, event.quantity);
  }

}
