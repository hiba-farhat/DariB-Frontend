import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../service/annonce.service';
import { Annonce } from '../entity/annonce.model';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
annonces : Annonce[];
  constructor(protected annonceService :AnnonceService) {  //injection de dep
    this.annonces=[];
   }
//getannonce return observable wich is lazy so we need subscribe=acces ll variable 
  ngOnInit(): void {
    this.annonceService.getAnnonces().subscribe((res: HttpResponse<Annonce[]>) => {
      this.annonces = res.body || [];  //remplir liste jeya ml back ou vide 
      console.log(res.body);
    });
    
  }


}
