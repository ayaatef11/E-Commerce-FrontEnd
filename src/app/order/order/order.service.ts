import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environements/environment';
import { Order } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getOrdersForUser() {
    return this.http.get<Order[]>(this.baseUrl + 'order');
  }
  getOrderDetailed(id: number) {
    return this.http.get<Order>(this.baseUrl + 'order/' + id);
  }
}
