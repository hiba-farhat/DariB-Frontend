import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { User } from '../entity/user';
import { CookieService } from 'ngx-cookie-service';

const AUTH_API = 'http://localhost:8081:/Dari.tn/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private _service: UserService, private _router: Router
    , private cook: CookieService) { }
  private baseUrl = 'http://localhost:8081/DariTn/';
  user = new User();
  msg = '';
  currentUser: any;
  accessToken: any;
  alert: boolean = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  public loggedUser: string;
  public isloggedIn: Boolean = false;
  public roles: string[];
  form: any = {
    username: null,
    password: null
  }


  activeAccount(mail, code): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}activated`, { mail, code }).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  checkEmail(email): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}checkEmail`, { email }).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  resetPassword(email, code, password): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}resetPassword`, { email, code, password }).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  getAuthentication() {
    return sessionStorage.getItem("email");
  }

  getToken(): any {
    if (this.getAuthentication()) {
      return sessionStorage.getItem('token')
    }
  } 

  isLogin(): boolean {
    return !(sessionStorage.getItem('email') == null ||
      sessionStorage.getItem('token') == null);
  }
  logOut() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
    this.cook.delete('email');
    this.cook.delete('token');
  }

  

}