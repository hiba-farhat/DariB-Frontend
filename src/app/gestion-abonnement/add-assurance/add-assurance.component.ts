import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssuranceService } from 'src/app/service/assurance.service';

@Component({
  selector: 'app-add-assurance',
  templateUrl: './add-assurance.component.html',
  styleUrls: ['./add-assurance.component.css']
})
export class AddAssuranceComponent implements OnInit {

  addform:FormGroup;
  ngDropdown = 1;

  constructor(private fb:FormBuilder,private as:AssuranceService,private toastrService:ToastrService,private router: Router) {
    this.addform=fb.group({
      dateDebutAssu: new FormControl('',Validators.required),
      nomAssu: new FormControl('',Validators.required),
      descAssu: new FormControl('',Validators.required),
      dateFintAssu : new FormControl('',Validators.required),
      prixAss: new FormControl('',Validators.required),
      typeAssurence: new FormControl('',Validators.required),
      dureAss: new FormControl('',Validators.required),
    })}


  ngOnInit(): void {
  }
  AddAssurance(){
    let assurance=this.addform.value;
    this.as.AddAssurance(assurance).subscribe((res)=>{
      console.log("test");
     this.toastrService.success("","Assurance ajouté");
     this.router.navigate(['/list-assurance']);
      
    
    },
    error=>{
      this.toastrService.error("","erreur d'ajout");
      console.error(error);

    })
  
  }

}
