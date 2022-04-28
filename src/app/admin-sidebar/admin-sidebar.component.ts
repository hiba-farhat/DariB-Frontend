import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  currentUser: any;
  nom:any;
  prenom:any;

  constructor() { }

  ngOnInit(): void {

    this.currentUser =localStorage.getItem('loggedUser');
    this.nom= localStorage.getItem('nom');
    this.prenom= localStorage.getItem('prenom');
    
  }


}
