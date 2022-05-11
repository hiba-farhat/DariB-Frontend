import { Component, NgModule, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Searchannonce } from 'src/app/entity/Searchannonce';
import { RechercheService } from 'src/app/service/recherche.service';
import { Annonce } from 'src/app/entity/annonce.model';

@Component({
  selector: 'app-listrecherche',
  templateUrl: './listrecherche.component.html',
  styleUrls: ['./listrecherche.component.css']
})
export class ListrechercheComponent implements OnInit {
  public Recherches: Searchannonce[];
  public Annonces?: Annonce[];
  public editRecherche: Searchannonce;
  public deleteRecherche: Searchannonce;
    
alert:boolean=false

  constructor(public RechercheService: RechercheService,private httpClient: HttpClient) {
    this.Recherches=[];
    
   }
  ngOnInit(): void {
    this.retrieveAllRecherches();
  }

  
  public retrieveAllRecherches(): void {
    this.RechercheService.retrieveAllRecherches().subscribe(
      (response: Searchannonce[]) => {
        this.Recherches = response;
        console.log(this.Recherches);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  closeAlert(){
    this.alert=false
  }
  
 /*  deleteRecherche(id: number) {
    this.RechercheService.deleteReche(id)
      .subscribe(
        data => {
          console.log(data);
          this.retrieveAllRecherches();
        },
        error => console.log(error));
  } */

  public onDeleteRecherche(id: number): void {
    this.RechercheService.deleteRecherche(id).subscribe(
      (response: any) => {
        console.log(response);
        this.retrieveAllRecherches();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  

  public UpdateRecherche(Recherches: Searchannonce): void {
    this.RechercheService.updateReche(Recherches).subscribe(
      (response: any) => {
        console.log(response);
        this.retrieveAllRecherches();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
 
  //public DeleteRecherche(idSearchA: any): void {
   //// this.RechercheService.deleteReche(idSearchA).subscribe(
      //(response: any) => {
      //  console.log(response);
       // this.retrieveAllRecherches();
      //},
     //// (error: HttpErrorResponse) => {
      //  alert(error.message);
     // }
   // );
  //}

  public OpenModal(Recherches: Searchannonce  , mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editRecherche = Recherches;
      button.setAttribute('data-target', '#updateRechercheModal');
    }
    if (mode === 'delete') {
      this.deleteRecherche = Recherches;
      button.setAttribute('data-target', '#deleteRechercheModal');
    }
   
    container?.appendChild(button);
    button.click();
  } 

  
}