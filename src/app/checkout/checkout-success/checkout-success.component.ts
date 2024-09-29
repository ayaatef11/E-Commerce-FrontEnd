import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '@stripe/stripe-js';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrl: './checkout-success.component.scss'
})
export class CheckoutSuccessComponent {
  order?: Order;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.order = navigation?.extras?.state as Order
  }
}
