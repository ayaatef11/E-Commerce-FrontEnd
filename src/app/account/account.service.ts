import { Injectable } from '@angular/core';
//import { environment } from '../../environments/environment';
import { BehaviorSubject, map } from 'rxjs';
//import { Address, User } from '../shared/interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private _HttpClient:HttpClient, private _Router:Router) { }
  baseUrl = environment.apiUrl;
/*A BehaviorSubject in Angular is a special type of Subject from RxJS
(Reactive Extensions for JavaScript) that allows you to manage and share state
between different parts of your application. It is particularly useful for scenarios
where you want to emit and observe state changes, as it maintains the current value
and emits it to new subscribers.
Key Features of BehaviorSubject
Initial Value: A BehaviorSubject requires an initial value when it is created.
 This initial value will be emitted immediately to any subscriber that subscribes
  to the BehaviorSubject.
Current Value: BehaviorSubject stores the current value and can be accessed using the
 getValue() method. This is different from a regular Subject, which does not hold any value.
Multicasting: Like other Subjects, BehaviorSubjects are multicast, meaning that
subscribers will share the same execution context, and all subscribers will receive the same emitted values.
State Management: BehaviorSubjects are commonly used in state management scenarios
 where you want to keep track of the state across various components. */
   // Creating a BehaviorSubject with an initial value of null

  private currentUserSourse = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSourse.asObservable();
//This function takes a token (a string) as an argument, which is typically a JWT (JSON Web Token).
// The token is used to authenticate the user when making a request to the backend.
//http get user
loadCurrentUser(token:string){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this._HttpClient.get<User>(this.baseUrl + 'account', {headers}).pipe(
      map(user => {
        localStorage.setItem('token', user.token);
        this.currentUserSourse.next(user);
      })
    );
  }

  login(values:any){
    return this._HttpClient.post<User>(this.baseUrl + 'account/login', values).pipe(
      map(user => {
        localStorage.setItem('token', user.token);
        this.currentUserSourse.next(user);
      })
    );
  }

  register(values:any){
    return this._HttpClient.post<User>(this.baseUrl + 'account/register', values).pipe(
      map(user => {
        localStorage.setItem('token', user.token);
        this.currentUserSourse.next(user);
      })
    );
  }
/*important  */
  logout(){
    localStorage.removeItem('token');
    this.currentUserSourse.next(null);
    this._Router.navigateByUrl('/');
  }

  checkEmailExists(email:string){
    return this._HttpClient.get<boolean>(this.baseUrl + 'account/emailexists?email=' + email);
  }

  getUserAddress(){
    return this._HttpClient.get<Address>(this.baseUrl + 'account/address');
  }

  updateUserAddress(address: Address){
    return this._HttpClient.put(this.baseUrl + 'account/address', address);
  }

}
