import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.css']
})
export class ProfileSidebarComponent implements OnInit {

  currentUser: any;
  nom:any;
  prenom:any;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
