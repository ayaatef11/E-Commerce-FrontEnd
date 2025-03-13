import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { BasketComponent } from './basket/basket/basket.component';
import { LoginComponent } from './account/login/login.component';
import { register } from 'module';
import { RegisterComponent } from './account/register/register.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { CheckoutAddressComponent } from './checkout/checkout-address/checkout-address.component';
import { CheckoutDeliveryComponent } from './checkout/checkout-delivery/checkout-delivery.component';
import { CheckoutPaymentComponent } from './checkout/checkout-payment/checkout-payment.component';
import { CheckoutReviewComponent } from './checkout/checkout-review/checkout-review.component';
import { CheckoutSuccessComponent } from './checkout/checkout-success/checkout-success.component';
import { ProductDetailsComponent } from './shop/product-details/product-detaills.component';
import { ProductItemComponent } from './shop/product-item/product-item.component';
export const routes: Routes = [
   {path:'', component:HomeComponent},
  {path:'test-error', component:TestErrorComponent},
  {path:'not-found', component:NotFoundComponent},
  {path:'server-error', component:ServerErrorComponent},
  {path:'shop', component:ShopComponent},
{path:'home', component:HomeComponent},
{path:'orders',component:OrderComponent},
{path:'order-detailed',component:OrderDetailedComponent},
{path:'basket',component:BasketComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'checkout',component:CheckoutComponent},
{path:'checkout-address',component:CheckoutAddressComponent},
{path:'checkout-delivery',component:CheckoutDeliveryComponent},
{path:'checkout-payment',component:CheckoutPaymentComponent},
{path:'checkout-address',component:CheckoutAddressComponent},
{path:'checkout-review',component:CheckoutReviewComponent},
{path:'checkout-success',component:CheckoutSuccessComponent},
{path:'product-details',component:ProductDetailsComponent},
{path:'product-item',component:ProductItemComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];
