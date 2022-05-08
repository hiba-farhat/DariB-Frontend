import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { SocialAuthService,SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.css']
})
export class ProfileSidebarComponent implements OnInit {
  isLoggedIn:any;
  currentUser: any;
  user: any;

  nom:any;
  prenom:any;

  constructor(private token: TokenStorageService,
    private authSocialService: SocialAuthService) { }

  ngOnInit(): void {
    
    this.currentUser = this.token.getUser();
    this.authSocialService.authState.subscribe(
      data =>{
        this.isLoggedIn=(data!=null);
        this.currentUser=data;
      }
    )
  }

}
