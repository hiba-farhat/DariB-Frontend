import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { BackendResponse } from '../models/backend-response';
import { SignalerAnnonceAdmin } from '../models/SignalerAnnonceAdmin';
import { SignalerAnnonceService } from '../services/signaler-annonce.service';
import {  } from '../services/signaler-annonce.service';
import { AnnonceService } from '../services/annonce.service';


@Component({
  selector: 'app-admin-annonces',
  templateUrl: './admin-annonces.component.html',
  styleUrls: ['./admin-annonces.component.css']
})
export class AdminAnnoncesComponent implements OnInit {
  Linechart=[];
  ReceivedData?:any;
  signaux:SignalerAnnonceAdmin[];
  id?: number;
  LabelsData?:any;
  chart: any;
  constructor(protected signalerAnnonceService: SignalerAnnonceService , protected annonceService:AnnonceService ) {
    this.signaux = [];
   }

  ngOnInit(): void {
    this.signalerAnnonceService.getSignauxForAdmin().subscribe((res: HttpResponse<any[]>) => {
      if(res.status == 200){
        this.signaux = this.convertToSignauxList(res.body!)
        console.log(this.signaux);
      }
     
    })
    
    
  }

  convertToSignauxList(result:any[]) :SignalerAnnonceAdmin[]{
    const list:SignalerAnnonceAdmin[] = [];
    for (let i = 0; i < result.length; i++) {
      const obj = result[i];
      const signal:SignalerAnnonceAdmin = {
        IdSignaler:obj[0].idSignaler,
        dateCreation:new Date(obj[0].dateCreation),
        description:obj[0].description,
        annonce:obj[0].annonce,
        nbre:obj[1]
      };
      list.push(signal);
    } 
    return list;
  }
  deleteAnnonce(id: number,position:number): void {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.annonceService.delete(id).subscribe(
        (res: HttpResponse<BackendResponse>) => {
          if (res.status == 200) {
            console.log(res.body!.message);
            this.signaux.splice(position,1);

          }
        }
      );
    }

  }

        
  
  secondChance(IdSignaler:number,position:number): void {
    this.signalerAnnonceService.delete(IdSignaler).subscribe(
      (res: HttpResponse<BackendResponse>) => {
        if (res.status == 200) {
          console.log(res.body!.message);
          this.signaux.splice(position,1);
        }})}


}

