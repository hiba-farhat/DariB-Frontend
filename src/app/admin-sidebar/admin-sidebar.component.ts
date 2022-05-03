import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  currentUser: any;
  nom:any;
  prenom:any;

  constructor(private token: TokenStorageService ) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();


    
  }


}
