import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authTokenSubject = new BehaviorSubject<boolean>(
    Boolean(localStorage.getItem('authToken'))
  );

  constructor() { }

  getAuthToken(): Observable<boolean> {
    console.log(this.authTokenSubject)
    return this.authTokenSubject.asObservable();
  }

  setAuthToken(value: boolean): void {
    localStorage.setItem('authToken', value.toString());
    this.authTokenSubject.next(value);
  }
}
