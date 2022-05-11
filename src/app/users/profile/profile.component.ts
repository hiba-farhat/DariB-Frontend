import { useAnimation } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  active:any;
  nbUsers:any;

  constructor(private token: TokenStorageService,private us:UserService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    
    
    

  }
}
