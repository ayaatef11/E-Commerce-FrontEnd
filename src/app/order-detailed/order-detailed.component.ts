import { Component, OnInit } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';
import { CommonModule, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { OrdersService } from '../order/order.service';
import { Order } from '../shared/interfaces/Order';

@Component({
  imports:[CommonModule, RouterModule,NgFor,NgIf,CurrencyPipe],
  standalone:true,
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit {
  order?: Order;
  constructor(private orderService: OrdersService, private route: Router) {}

  ngOnInit(): void {
    const id = this.route.routerState.snapshot.root.firstChild?.paramMap.get('id');
    id && this.orderService.getOrderDetailed(+id).subscribe({
      next: order => {
        this.order = order;
        console.log(order);
      }
    })
  }
}
