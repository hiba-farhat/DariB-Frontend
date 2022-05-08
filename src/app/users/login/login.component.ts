import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { SocialService } from 'src/app/service/social.service';
import { TokenDto } from 'src/app/entity/token-dto';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  currentUser: any;
  accessToken: any;
  alert: boolean = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  socialUser?: SocialUser;
  userLogged?: SocialUser;
  isLogged?: boolean;
  roles: string[] = [];
  isLogin?: boolean;


  constructor(private _service: UserService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private _router: Router,
    private authSocialService: SocialAuthService,
    private social: SocialService
  ) { }





  ngOnInit(): void {
    document.getElementById("app-body")!.className = "homepage-9 hp-6 homepage-1"

  /*   if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    } */
    /*   this.authSocialService.authState.subscribe(
        data => {
          this.isLoggedIn = (data != null);
        }
      ) */
   /*  this.authSocialService.authState.subscribe(
      data => {
        this.userLogged = data;
        this.isLogged = (this.userLogged != null && this.tokenStorage.getToken() != null);
      }
    ); */
    this.authSocialService.authState.subscribe(
      data => {
        this.isLogin = (data !=null);
      }
    );
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

  loginUser(): void {

    this._service.loginUserFormRemote(this.user).subscribe(


      data => {

        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log("reponse recu");

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this._router.navigate(["/profile"]);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log("reponse failed");

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

  /* signInWithGoogle(): void {
    this.authSocialService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {

        this.social.loginWithGoogle(data.idToken).subscribe(
          res =>{
            console.log("hedhi reeeees"+res);
          }
        );
       /*  this.currentUser = data;
        this._router.navigate(["/profile"]); 
      
    ); 
  } */

  signInWithGoogle(): void {
    this.authSocialService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data=> {
        console.log(data);
        this.social.loginWithGoogle(data.idToken).subscribe(
          res =>{
            console.log(res);
          }
        );
        this.currentUser=data;
        this._router.navigate(["/profile"]);
      }

    );
  }

  signInWithFB(): void {
    this.authSocialService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        this.social.loginWithFacebook(data.authToken).subscribe(
          res => {
            console.log(res);

          }
        );
        this.currentUser = data;
        this._router.navigate(["/profile"]);

      }
    );
  }

  signOut(): void {
    this.authSocialService.signOut();
  }
  refreshToken(): void {
    this.authSocialService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }



}
