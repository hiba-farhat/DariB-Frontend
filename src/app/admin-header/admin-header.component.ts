import { Component, OnInit } from '@angular/core'
import { TokenStorageService } from '../service/token-storage.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  currentUser: any;

  constructor(private userService: UserService,private token: TokenStorageService) {
    document.getElementById("app-body")!.className = "maxw1600 m0a dashboard-bd"
  }


  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

 

}
