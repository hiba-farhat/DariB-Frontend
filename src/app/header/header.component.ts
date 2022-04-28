import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { User } from '../entity/user';
import { Route, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  public landingPage:string = "/home/dashboard/order";
  

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
 
  constructor(private _service: UserService, private _router: Router

    ) {
  }

  ngOnInit(): void {
    document.getElementById("app-body")!.className = "homepage-9 hp-6 homepage-1"

  }

  showLoginForm(): void {
    document.getElementById('login-li')?.classList.add('current')
    document.getElementById('register-li')?.classList.remove('current')

    $("#tab-1").show(300)
    $("#tab-2").hide(300)

  }
  showRegisterForm(): void {
    document.getElementById('login-li')?.classList.remove('current')
    document.getElementById('register-li')?.classList.add('current')

    $("#tab-1").hide(300)
    $("#tab-2").show(300)
  }




  /* loginUser() {
    this._service.loginUserFormRemote(this.user).subscribe(
      data => {
        console.log(data);
        let validUser: Boolean = false;
        console.log("reponse recu");
        validUser = true;
        this.loggedUser = this.user.username;
        this.isloggedIn = true;
        localStorage.setItem('loggedUser', this.loggedUser);
        /* localStorage.setItem('nom', String(this.nom));
        localStorage.setItem('prenom', String(this.prenom));
        localStorage.setItem('email', String(this.email));
        localStorage.setItem('id', String(this.id)); 

        console.log("loggedUser" + this.loggedUser);

        this.accessToken = data.headers.get('Authorization');

        this._service.saveToken(this.accessToken);
        console.log("tokeen : " + this.accessToken); 
         localStorage.setItem('token',jwt);
 
      },

      error => {
        console.log("exception occured");
        this.msg = "username ou login erroné merci de verifier"
      }
    )
  }




  onSubmit(): void {
    const { username, password } = this.form;

    this._service.loginUserFormRemote(this.user).subscribe(
      data => {
        this._router.navigate(["/profile"]);
      },

      error => {
        console.log("exception occured");
        this.msg = "username ou login erroné merci de verifier";
        this.isLoginFailed = true;

      }
    );
  }

  reloadPage(): void {
    window.location.reload();
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
  closeAlert() {
    this.alert = false
  }

 */

}
