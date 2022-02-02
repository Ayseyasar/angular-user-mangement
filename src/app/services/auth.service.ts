import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { UserModel } from '../modules/home/components/user-list/user-list.model';
import { ApiService } from '../modules/home/shared/api.service';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private router: Router, private http: HttpClient, private api: ApiService) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  setUserData(userData: any) : void {
    localStorage.setItem('userData', userData);
  }

  getUserData(): any | null {
    return localStorage.getItem('userData');
  }
  

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): void {
    this.api.getUser().subscribe(res => {
    res.forEach((element: { Email: any; Password:any }) => {
      if (email === element.Email && password === element.Password) {
            this.setToken('abcdefghijklmnopqrstuvwxyz');
            this.setUserData(element);
          }
        });
    });
  }
}
