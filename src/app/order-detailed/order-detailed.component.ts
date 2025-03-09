import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '@stripe/stripe-js';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { OrdersService } from '../order/order.service';

@Component({
  imports:[CurrencyPipe,NgFor,NgIf],
  standalone:true,
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit {
  order?: Order;
  constructor(private orderService: OrdersService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    id && this.orderService.getOrderDetailed(+id).subscribe({
      next: order => {
        this.order = order;
        console.log(order);
      }
    })
  }
}
