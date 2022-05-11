import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { User } from '../entity/user';
import { Route, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../service/token-storage.service';


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
  currentUser:any;


  constructor(private token:TokenStorageService) {
  }

  ngOnInit(): void {
    document.getElementById("app-body")!.className = "homepage-9 hp-6 homepage-1"
    this.currentUser = this.token.getUser();

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




}
