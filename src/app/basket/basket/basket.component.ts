import { Component } from '@angular/core';
import { BasketService } from '../basket.service';
import { BasketItem } from '../../shared/interfaces/basket';
import { ToastrComponentlessModule } from 'ngx-toastr';
import { ClipboardModule } from 'ngx-clipboard';

@Component({
  imports:[ClipboardModule],
  selector: 'app-basket',
  standalone:true,
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
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
