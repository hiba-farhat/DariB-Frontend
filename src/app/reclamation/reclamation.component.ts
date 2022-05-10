import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReclamationService } from '../service/reclamation.service';
import { reclamation } from '../entity/reclamation';



@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})

export class ReclamationComponent implements OnInit {
  reclamation : reclamation=new reclamation();
  form:any={};
  submitted = false;
  listReclamations: any;
  
  constructor(protected reclamationService: ReclamationService, protected router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllReclamations();;
  }

  getAllReclamations(){
    this.reclamationService.retrieveAllClaims().subscribe(res => this.listReclamations = res)
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


  addReclamation(p: any){
    this.reclamationService.addClaim(p).subscribe(() => {
      this.getAllReclamations();
      this.form = false;
      this.toastr.success('Success!',"Hello, your claim added successfully.");
      window.history.back
    });
  }

  save(){
    window.history.back
  }
  
 
  /*
  save(){
    this.reclamationService.addClaim(this.reclamation).subscribe(() => {
      //this.();
      this.form = false;
    });
  }
  */
  /*
  onSubmit() {
    this.submitted = true;
    this.addReclamation(reclamation);    
  }
  */

  closeForm(){

  }
  cancel(){
    this.form = false;
  }


}
