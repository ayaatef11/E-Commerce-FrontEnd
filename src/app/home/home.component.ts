
import { Component, NgModule, OnInit } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import {  CurrencyPipe, NgFor, NgIf, SlicePipe } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShopService } from '../shop/shop.service';
import { BasketService } from '../basket/basket.service';
import { Brand } from '../shared/interfaces/Brand';
import { Product } from '../shared/interfaces/Product';
import { SearchPipe } from '../core/pipes/search.pipe';
import { ShopParams } from '../shared/interfaces/ShopParams';

@Component({
  imports:[NgIf,NgFor,RouterLink,SearchPipe,SlicePipe
    ,CurrencyPipe,FormsModule,CarouselModule
  ],
  standalone:true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit{
  constructor(private _ShopService:ShopService, private _ToastrService:ToastrService,
    private _BasketService:BasketService){}
  brands?:Brand[];
  productsData: Product[] = [];
  shopParams = new ShopParams();
  searchValue:string = '';

  ngOnInit(): void {
    this.shopParams.pageSize = 20;
    // this.loadProducts();
    // this.loadBrands();
  }

  loadProducts(){
    this._ShopService.getProducts(this.shopParams).subscribe({
      next:(response) => {
        this.productsData = response.data;
      },
      error:() => {
        this._ToastrService.error('has error occured.', 'Error');
      }
    });
  }

  addItemToBasekt(product: Product){
    product && this._BasketService.addItemToBasket(product);
  }


  mainSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    items: 1,
    nav: false
  }

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

  loadBrands(){
    this._ShopService.getBrands().subscribe({
      next: (response) => {
        this.brands = response;
      }
    });
  }

}
