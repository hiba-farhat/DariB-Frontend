import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor() {
    document.getElementById("app-body")!.className = "maxw1600 m0a dashboard-bd";
  }

  ngOnInit(): void {
  }

}
