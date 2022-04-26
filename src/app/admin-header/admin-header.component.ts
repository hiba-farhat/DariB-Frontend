import { Component, OnInit } from '@angular/core'
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  currentUser: any;

  constructor(private userService: UserService) {
    document.getElementById("app-body")!.className = "maxw1600 m0a dashboard-bd"
  }

  ngOnInit(): void {

    this.currentUser =localStorage.getItem('loggedUser');
    
  }

 

}
