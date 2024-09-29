import { Component } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { AccountService } from '../../account/account.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(public _BasketService:BasketService, public _AccountService:AccountService){}

}
