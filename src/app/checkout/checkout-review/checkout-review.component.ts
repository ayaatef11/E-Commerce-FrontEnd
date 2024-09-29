import { Component, Input } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { ToastrService } from 'ngx-toastr';
import { CdkStepper } from '@angular/cdk/stepper';
//CdkStepper is a part of Angular CDK (Component Dev Kit) that provides a low-level API for creating step-based workflows. It's used for building customizable stepper components, like multi-step forms or wizards, without depending on Material Design (as opposed to Angular Material's MatStepper).
@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrl: './checkout-review.component.scss'
})
export class CheckoutReviewComponent {

  @Input() appStepper?: CdkStepper;

  constructor(private _BasketService:BasketService, private _ToastrService:ToastrService){}

  createPaymentIntent(){
    this._BasketService.createPaymentIntent().subscribe({
      next: () =>{
        this.appStepper?.next();
      },
      error: (err) => {
        this._ToastrService.error(err.message);
      }
    })
  }

}
