import { Component, OnInit } from '@angular/core';
import { reclamation } from '../models/reclamation';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-admin-reclamation',
  templateUrl: './admin-reclamation.component.html',
  styleUrls: ['./admin-reclamation.component.css']
})
export class AdminReclamationComponent implements OnInit {
  public ListReclamation: any;
  show?: boolean;
  addclaim?: boolean;
  reclamation?: reclamation;

  constructor(protected reclamationService: ReclamationService, private router: Router) { 
     this.reclamationService.retrieveAllClaims().subscribe(res=>{console.log(res);
    this.ListReclamation=res}) 
  }

  ngOnInit(): void {
    this.lister();
  }

  ViewClaim(){
    this.show=true;
    this.addclaim=false;
  }
  /* 
  getClaim(){
    console.log("ok");
    this.reclamationService.retrieveAllClaims().subscribe((res)=>{
      console.log("test"+res);
      this.getClaim=res;
    }, (err)=>{console.log(err+"non"); }
    )
  }
  */
  lister(){
    console.log("test");
    this.reclamationService.retrieveAllClaims().subscribe((res)=>{console.log("ok"+res);
    this.ListReclamation=res;
  },(err)=>{console.log(err+"no");})
  }

  public retrieveAllClaims(): void {
    this.reclamationService.retrieveAllClaims().subscribe(
      (response: reclamation[]) => {
        this.ListReclamation = response;
        console.log(this.reclamation);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  AddClaimshow(){
    this.show=false;
    this.addclaim=true;
  }

  DeleteClaim(id:number){
    this.reclamationService.deleteClaim(id).subscribe(()=>this.reclamationService.retrieveAllClaims().subscribe(res=>{this. ListReclamation=res}));
  }

  editClaim(reclamation: reclamation){
    this.reclamationService.updateClaim(reclamation).subscribe();
  }

}
