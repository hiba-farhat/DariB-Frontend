import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AbonnementService } from 'src/app/service/abonnement.service';

@Component({
  selector: 'app-add-abonnement',
  templateUrl: './add-abonnement.component.html',
  styleUrls: ['./add-abonnement.component.css']
})
export class AddAbonnementComponent implements OnInit {

  addform:FormGroup;
  ngDropdown = 1;
  submitted = false;
  constructor(private fb:FormBuilder,private ab:AbonnementService,private toastrService:ToastrService,private router: Router) {
    this.addform=fb.group({
      date_debut: new FormControl('',Validators.required),
      date_fin: new FormControl('',Validators.required),
      prix: new FormControl('',Validators.required),
      type: new FormControl('',Validators.required),
    })
   }

  ngOnInit(): void {
  }

  Add()
  {
    let abonnement=this.addform.value;
    this.ab.AddAbonnement(abonnement).subscribe((res)=>{
      console.log("test");
     this.toastrService.success("","Abonnement ajouté");
     this.router.navigate(['/list-abonnement']);
      
    
    },
    error=>{
      this.toastrService.error("","erreur d'ajout");
      console.error(error);

    })
  
  }

}
