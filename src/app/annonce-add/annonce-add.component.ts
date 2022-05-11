import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Searchannonce } from 'src/app/entity/Searchannonce';
import { AnnonceService } from 'src/app/services/annonce.service';
import { FavorisService } from 'src/app/services/favoris.service';
import { RechercheService } from 'src/app/services/recherche.service';





@Component({
  selector: 'app-annonce-add',
  templateUrl: './annonce-add.component.html',
  styleUrls: ['./annonce-add.component.css']
})
export class AnnonceAddComponent implements OnInit {
  Search?: Searchannonce;
  constructor(protected RechercheService :  RechercheService ,private services:FavorisService,protected annonceService :AnnonceService,private formBuilder: FormBuilder ) {   }
  createForm = this.formBuilder.group ({
    idSearchA : [],
    keyword : [],
    propertyType :[],
    location : [],
    status :[],
    bedRoom :[],
    bathroom :[],
    minArea :[],
    maxArea:[],
    minPrice :[],
    maxPrice :[],
   
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
      minArea: this.createForm.get(['minArea'])!.value,
      maxArea: this.createForm.get(['maxArea'])!.value,
      minPrice: this.createForm.get(['minPrice'])!.value,
      maxPrice: this.createForm.get(['maxPrice'])!.value,
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
