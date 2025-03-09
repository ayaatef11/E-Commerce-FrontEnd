import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';
import { FooterComponent } from './core/footer/footer.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { NgxSpinner, NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  imports:[FooterComponent,NavBarComponent,RouterOutlet,NgxSpinnerComponent],
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private _BasketService:BasketService, private _AccountService:AccountService){}
  title = 'SereneShop';

  ngOnInit(): void {
    this.loadBasket();
    this.loadCureentUser();
  }

  loadBasket() {
    if (typeof localStorage !== 'undefined') {  
      const basketId = localStorage.getItem('basket_id');
      if (basketId) {
        this._BasketService.getBasket(basketId);
      }
    } else {
      console.warn('localStorage is not available');
    }
  }


  loadCureentUser(){
    const token = localStorage.getItem('token');
    token && this._AccountService.loadCurrentUser(token).subscribe();
  }
}
