import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environements/environment';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-test-error',
  standalone:true,
  imports:[NgFor,NgIf],
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.scss'
})
export class TestErrorComponent {

  baseUrl = environment.apiUrl;
  validationErrors:string[] = []

  constructor(private _HttpClient:HttpClient){}

  get404Error(){
    this._HttpClient.get(this.baseUrl + 'product/1000').subscribe({///***make it flexible */
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  get500Error(){
    this._HttpClient.get(this.baseUrl + 'buggy/servererror').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  get400Error(){
    this._HttpClient.get(this.baseUrl + 'buggy/badrequest').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  get400ValidationError(){
    this._HttpClient.get(this.baseUrl + 'product/one').subscribe({//**** make it flexible */
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
        this.validationErrors = err.errors;
      }
    })
  }

}
