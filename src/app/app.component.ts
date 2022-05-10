import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'dari';
   constructor(private httpClient: HttpClient) { }
  
  ngOnInit(){

  }
}
