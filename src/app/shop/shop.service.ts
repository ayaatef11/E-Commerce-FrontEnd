import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../shared/interfaces/Product';
import { Category } from '../shared/interfaces/Category';
import { Pagination } from '../shared/interfaces/pagination';
import { Brand } from '../shared/interfaces/Brand';
import { ShopParams } from '../shared/interfaces/ShopParams';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string = 'https://localhost:5001/api/';

  getProducts(shopParams: ShopParams){
    let params = new HttpParams();

    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageIndex);
    params = params.append('pageSize', shopParams.pageSize);
    params = params.append('search', shopParams.search)
    if(shopParams.brandId > 0)
      params = params.append('brandId', shopParams.brandId);
    if(shopParams.categoryId > 0)
      params = params.append('categoryId', shopParams.categoryId);

    return this._HttpClient.get<Pagination<Product>>(this.baseUrl + 'product', {params});
  }

  getBrands(){
    return this._HttpClient.get<Brand[]>(this.baseUrl + 'product/brands')
  }

  getCategories(){
    return this._HttpClient.get<Category[]>(this.baseUrl + 'product/categories')
  }

  getProduct(id:number){
    return this._HttpClient.get<Product>(this.baseUrl + 'product/' + id);
  }

}
