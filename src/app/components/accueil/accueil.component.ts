import { Component, OnInit } from '@angular/core';
import { Favoris } from 'src/app/entity/favoris';
import { FavorisService } from 'src/app/services/favoris.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  Favoris: Favoris= new Favoris();
  message:any;

  constructor(private services:FavorisService ) { }
  ngOnInit(): void {
  }
  public AddFavoris(){
    let resp=this.services.addFav(this.Favoris);
    resp.subscribe((data: any)=>this.message=data);
      }
}

