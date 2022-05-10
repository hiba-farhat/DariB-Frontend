import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ignoreElements } from 'rxjs';
import { RendezVous } from '../entity/rendez-vous';
import { RendezVousServiceService } from '../service/rendez-vous-service.service';
//import { RendezVous } from '../rendez-vous';
//import { RendezVousServiceService } from '../rendez-vous-service.service';

@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.css']
})
export class VisiteComponent implements OnInit {
  p:number =1;
  public rendezvous!: RendezVous;
public editRdv!: RendezVous;
public deleteRdv!: RendezVous;
listrdv : any;

constructor(private rendezVousService: RendezVousServiceService) {}
ngOnInit() {
  this.getRendezVous();
  this.rendezvous = {
    idRdv : null,
dateRdv : null,
duree : null,
description : null
  }


  
}
public getRendezVous(): void {
  this.rendezVousService.getRdv().subscribe(
    (response:RendezVous[])=>
    {this.listrdv=response;
  
  },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
    );
}

public onOpenModal(rendezvous: any, mode: string) :void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle','modal');
  if(mode === 'add') {
    button.setAttribute('data-target','#addrdvModel');
  }
if(mode === 'edit') {
  this.editRdv = rendezvous;
  button.setAttribute('data-target','#updaterdvModel');
}
if(mode === 'delete') {
  this.deleteRdv = rendezvous;
  button.setAttribute('data-target','#deleterdvModel');
}

 container!.appendChild(button);
button.click();
}

public onAddRdv(addForm: NgForm): void {
  //@ts-ignore
  document.getElementById('add-rdv-form').click();
  this.rendezVousService.addRdv(addForm.value).subscribe(
    (response: RendezVous) => {
      console.log(response);
      this.getRendezVous();
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
  );
}

public onUpdaterdv(rendezvous: any): void {
  this.rendezVousService.accept(rendezvous).subscribe(() => this.getRendezVous())
}

public onDeleterdv(idRdv: any): void {
  this.rendezVousService.deleteRdv(idRdv).subscribe(
    (response: void) => {
      console.log(response);
      this.getRendezVous();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public searchRdv(key: any): void {
  console.log(key);
  const results: RendezVous[] = [];
  for (const rdv of this.listrdv) {
    if (
     // rdv.dateRdv.toLowerCase().indexOf(key.toLowerCase()) !== -1) ||
     //  rdv.duree.toLowerCase().indexOf(key.toLowerCase()) !== -1) ||
       rdv.description.toLowerCase().indexOf(key.toLowerCase()) !== -1) 
      results.push(rdv);
    
  }
  this.listrdv = results;
  if (results.length === 0 || !key) {
    this.getRendezVous();
  }
}


}
