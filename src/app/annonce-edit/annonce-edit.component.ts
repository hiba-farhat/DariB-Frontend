import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from '../models/annonce.model';
import { FormBuilder } from '@angular/forms';
import { AnnonceService } from '../services/annonce.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-annonce-edit',
  templateUrl: './annonce-edit.component.html',
  styleUrls: ['./annonce-edit.component.css']
})
export class AnnonceEditComponent implements OnInit {
  //annonces: Annonce[];
  idAnnonce?: number;
  annonce: Annonce = new Annonce;
 
  createForm = this.formBuilder.group({
    idAnnonce: [],
    titre: [],
    surface: [],
    description: [],
    price: [],
    localisation: [],
    parking: [],
    roomsNum: [],
    bathNum: [],
    bedNum: [],
    garagenum: [],
    age: [],
    imageplan: [],
    video: [],
    image: [],
    yearBuilt: [],
    offerType: [],
    typeProp: []
  });
  constructor(private formBuilder: FormBuilder, protected AnnonceService: AnnonceService,private route: ActivatedRoute) {
    this.idAnnonce=0;
    
  }

  ngOnInit(): void { 
    this.idAnnonce = parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log("id :",this.idAnnonce)
    this.AnnonceService.getannonceById(this.idAnnonce).subscribe((res: HttpResponse<Annonce>) => {
      this.annonce = res.body!;
      this.updateForm(this.annonce);
      //(document.getElementById("offerType")! as HTMLInputElement).value=this.annonce.offerType;
    
    })};

    createAnnonceForm(): Annonce {
      return {
        ...new Annonce(),
        idAnnonce: this.idAnnonce!,
        titre: this.createForm.get(['titre'])!.value,
        description: this.createForm.get(['description'])!.value,
        surface: this.createForm.get(['surface'])!.value,
        localisation: this.createForm.get(['localisation'])!.value,
        price: this.createForm.get(['price'])!.value,
        age: this.createForm.get(['age'])!.value,
        imageplan: this.createForm.get(['imageplan'])!.value,
        video: this.createForm.get(['video'])!.value,
        image: this.createForm.get(['image'])!.value,
        parking: this.createForm.get(['parking'])!.value,
        roomsNum: this.createForm.get(['roomsNum'])!.value,
        bathNum: this.createForm.get(['bathNum'])!.value,
        bedNum: this.createForm.get(['bedNum'])!.value,
        garagenum: this.createForm.get(['garagenum'])!.value,
        offerType: this.createForm.get(['offerType'])!.value,
        typeProp: this.createForm.get(['typeProp'])!.value,
        yearBuilt: this.createForm.get(['yearBuilt'])!.value,
  
      };
    }
    
  updateForm(annonce: Annonce): void {
    this.createForm.patchValue({
      idAnnonce:annonce.idAnnonce,
      titre: annonce.titre,
      surface: annonce.surface,
      description: annonce.description,
      price: annonce.price,
      localisation: annonce.localisation,
      parking: annonce.parking,
      roomsNum: annonce.roomsNum,
      bathNum: annonce.bathNum,
      bedNum: annonce.bedNum,
      garagenum: annonce.garagenum,
      age: annonce.age,
      imageplan: annonce.imageplan,
      video: annonce.video,
      image: annonce.image,
      yearBuilt: annonce.yearBuilt,
      offerType: annonce.offerType,
      typeProp: annonce.typeProp });}

  Annuler(): void {
    window.history.back();
  }
  

    save(): void{
     var newannonce = this.createAnnonceForm();
     console.log(newannonce);
     newannonce.image="image.jpg"
     newannonce.imageplan="image.jpg" 
     newannonce.video="image.jpg"
     newannonce.yearBuilt= new Date(newannonce.yearBuilt!.toString());
     
      this.AnnonceService.update(newannonce).subscribe(
        (res) => {
          if(res.status==200){
            console.log(res.body!);
            window.history.back();
          }
        },
        
        error => console.log(error)
      );
      window.history.back();
      
    }
}
