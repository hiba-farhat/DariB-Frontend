import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Searchannonce } from 'src/app/entity/Searchannonce';
import { AnnonceService } from 'src/app/service/annonce.service';
import { FavorisService } from 'src/app/service/favoris.service';
import { RechercheService } from 'src/app/service/recherche.service';


@Component({
  selector: 'app-deleterecherche',
  templateUrl: './deleterecherche.component.html',
  styleUrls: ['./deleterecherche.component.css']
})
export class DeleterechercheComponent implements OnInit {
  Search?: Searchannonce;
  constructor(protected RechercheService :  RechercheService ,private services:FavorisService,protected annonceService :AnnonceService,private formBuilder: FormBuilder ) {   }
  createForm = this.formBuilder.group ({
    idSearchA : [],
    keyword : [],
    location : [],
    propertyType :[],
    status :[],
    bedRoom :[],
    bathRoom :[],
   
  });
  createRechercheForm(): Searchannonce {
    return {
      ...new Searchannonce(),
      idSearchA: 0,
      keyword: this.createForm.get(['keyword'])!.value,
      propertyType: this.createForm.get(['propertyType'])!.value,
      location: this.createForm.get(['location'])!.value,
      status: this.createForm.get(['status'])!.value,
      bedRoom: this.createForm.get(['bedRoom'])!.value,
      bathroom: this.createForm.get(['bathroom'])!.value,
    };
  }
  
  Annuler(): void {
    window.history.back();
  }
  save() {
  
    console.log("test1111");
    const newSearch : Searchannonce = this.createRechercheForm();
   
    console.log(newSearch);
   
    window.history.back();
    this.RechercheService.AddRecherche(newSearch).subscribe(
      (res: HttpResponse<string>) => {
        console.log("test");
          console.log(res.body);
          window.history.back();
        
    },
      error => console.log(error)     ); 

  }  
  
  ngOnInit(): void {

  }

}
