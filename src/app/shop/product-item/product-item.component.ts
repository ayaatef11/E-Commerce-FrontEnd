import { Component, Input } from '@angular/core';
import { Product } from '../../shared/interfaces/product';
import { BasketService } from '../../basket/basket.service';
import { CurrencyPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports:[CurrencyPipe,RouterLink,NgIf],
  standalone:true,
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product?: Product;

  constructor(private _BasketService:BasketService){}

  addItemToBasekt(){
    this.product && this._BasketService.addItemToBasket(this.product);
  }


}
