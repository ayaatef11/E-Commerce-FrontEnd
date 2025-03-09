import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of } from 'rxjs';
import { Address, User } from '../shared/interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environements/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}

  baseUrl = environment.apiUrl;

  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  /** ✅ Load Current User */
  loadCurrentUser(token: string) {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this._HttpClient.get<User>(`${this.baseUrl}account`, { headers }).pipe(
      map(user => {
        this.setUserInLocalStorage(user);
        this.currentUserSource.next(user);
      }),
      catchError(error => {
        console.error('Error loading user:', error);
        return of(null);
      })
    );
  }

  /** ✅ Login */
  login(values: any) {
    return this._HttpClient.post<User>(`${this.baseUrl}account/login`, values).pipe(
      map(user => {
        this.setUserInLocalStorage(user);
        this.currentUserSource.next(user);
      }),
      catchError(error => {
        console.error('Login error:', error);
        return of(null);
      })
    );
  }

  /** ✅ Register */
  register(values: any) {
    return this._HttpClient.post<User>(`${this.baseUrl}account/register`, values).pipe(
      map(user => {
        this.setUserInLocalStorage(user);
        this.currentUserSource.next(user);
      }),
      catchError(error => {
        console.error('Registration error:', error);
        return of(null);
      })
    );
  }

  /** ✅ Logout */
  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    this.currentUserSource.next(null);
    this._Router.navigateByUrl('/');
  }

  /** ✅ Check if Email Exists */
  checkEmailExists(email: string) {
    return this._HttpClient.get<boolean>(`${this.baseUrl}account/emailexists?email=${email}`);
  }

  /** ✅ Get User Address */
  getUserAddress() {
    return this._HttpClient.get<Address>(`${this.baseUrl}account/address`);
  }

  /** ✅ Update User Address */
  updateUserAddress(address: Address) {
    return this._HttpClient.put(`${this.baseUrl}account/address`, address);
  }

  /** ✅ Private Helper: Set User in Local Storage */
  private setUserInLocalStorage(user: User) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', user.token);
    }
  }
}
