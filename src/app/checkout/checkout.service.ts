import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { DeliveryMethod } from '../shared/interfaces/deliveryMethod';
import { environment } from '../environements/environment';
import { Order, OrderToCreate } from '../shared/interfaces/order';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  baseUrl = environment.apiUrl;

  constructor(private _HttpClient:HttpClient) { }

  getDeliveryMethods(){
    return this._HttpClient.get<DeliveryMethod[]>(this.baseUrl + 'order/deliverymethod').pipe(
      map(dm => {
        return dm.sort((a,b) => b.cost - a.cost)
      })
    );
  }

  createOrder(order: OrderToCreate){
    return this._HttpClient.post<Order>(this.baseUrl + 'order', order)
  }


}
