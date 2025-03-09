import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../../account/account.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { TextInputComponent } from '../../shared/text-input/text-input.component';
import { RouterModule } from '@angular/router';

@Component({
  imports:[CommonModule, RouterModule,NgIf,TextInputComponent,ReactiveFormsModule],
  standalone:true,
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrl: './checkout-address.component.scss'
})

export class CheckoutAddressComponent {
  @Input() checkoutForm?: FormGroup;

  constructor(private _AccountService:AccountService, private _ToastrService:ToastrService){}

  saveUserAddress(){
    this._AccountService.updateUserAddress(this.checkoutForm?.get('addressForm')?.value).subscribe({
      next: () => {
        this._ToastrService.success("Address Saved");
        this.checkoutForm?.get('addressForm')?.reset(this.checkoutForm?.get('addressForm')?.value);
      }
    })
  }

}
