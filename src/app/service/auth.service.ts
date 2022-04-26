import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { User } from '../entity/user';

const AUTH_API = 'http://localhost:8081:/Dari.tn/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private _service: UserService, private _router: Router) { }
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

  login(){
    this._service.loginUserFormRemote(this.user).subscribe(
    data => {
      console.log("reponse recu");
         this._router.navigate(["/profile"])
      },
    
    error => {console.log("exception occured");
    this.msg="username ou login erroné merci de verifier"
    }
    )
      }

  registerUser() {
    this._service.addUser(this.user).subscribe(
      data => {
        console.log("reponse recu");
        this.msg = " registration succeeded";

      },
      error => {
        console.log("execption occured");
        this.msg = error.error;
      }
    )
    this.alert = true
  }
}