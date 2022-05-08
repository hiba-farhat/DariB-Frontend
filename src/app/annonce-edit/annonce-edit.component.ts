import { Component, AfterViewInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { AnnonceService } from '../service/annonce.service';
import { Annonce } from '../entity/annonce.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { BackendResponse } from '../entity/backend-response';

import { ToastrService } from 'ngx-toastr';

import * as $ from 'jquery';
import * as L from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = iconDefault;



@Component({
  selector: 'app-annonce-edit',
  templateUrl: './annonce-edit.component.html',
  styleUrls: ['./annonce-edit.component.css']
})


export class AnnonceEditComponent implements AfterViewInit {


  private map?: L.Map;


  idAnnonce: number;
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

  constructor(private route: ActivatedRoute,private toastr: ToastrService, private formBuilder: FormBuilder, protected AnnonceService: AnnonceService, protected http: HttpClient, private _router: Router) {
    this.idAnnonce = 0;
  }



  private initMap(): void {
    this.map = L.map('map', {
      center: [36.89613993117552, 10.187244146051112], //latitude w longitude
      zoom: 12 //nbre zoom
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });



    tiles.addTo(this.map);
    const marker = L.marker([36.89613993117552, 10.187244146051112]);
    marker.addTo(this.map);




  }

  ngAfterViewInit(): void {
    this.initMap()

    this.idAnnonce = parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log("id :", this.idAnnonce)
    this.AnnonceService.getannonceById(this.idAnnonce).subscribe((res: HttpResponse<Annonce>) => {
      this.annonce = res.body!;
      (document.getElementById("idOfferType") as HTMLSelectElement).value = res.body!.offerType!;
      (document.getElementById("idTypeProp") as HTMLSelectElement).value = res.body!.typeProp!;

      (document.getElementById("YearBuilt") as HTMLInputElement).value = new Date(res.body!.yearBuilt!).toISOString().split('T')[0];
      this.updateForm(this.annonce);
      //(document.getElementById("offerType")! as HTMLInputElement).value=this.annonce.offerType;

    })
  }

  createAnnonceForm(): Annonce { //thot les valeurs mtaa les inputs fi annonce 
    return {
      ...new Annonce(),
      idAnnonce: 0,
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

  updateForm(annonce: Annonce): void {  //thot les valeurs mtaa el annonce fi les unputs 
    this.createForm.patchValue({
      idAnnonce: annonce.idAnnonce,
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
      typeProp: annonce.typeProp
    });
  }




  save() {

    if (this.isValidLastForm() === "success") {
      const newAnnonce: Annonce = this.createAnnonceForm();
      newAnnonce.image = "image.jpg"
      newAnnonce.imageplan = "image.jpg"
      newAnnonce.video = "image.jpg"
      newAnnonce.yearBuilt = new Date(newAnnonce.yearBuilt!.toString());
      console.log(newAnnonce);
      this.AnnonceService.update(newAnnonce).subscribe((res: HttpResponse<BackendResponse>) => {
        if (res.body!.statusCode == 200) {
          this.toastr.success('Success!', res.body!.message);
        } else {
          this.toastr.error('Error!', res.body!.message);
        }

      });
    }



  }

  toFirstPart() {

    $("#secondPart").hide(300)
    $("#firstPart").show(300)
  }

  toSecondPart() {
    if (this.isValidFirstForm() === "success") {
      $("#firstPart").hide(300)
      $("#lastPart").hide(300)
      $("#secondPart").show(300)
    }

  }

  toLastPart() {
    if (this.isValidSecondForm() === "success") {
      $("#secondPart").hide(300)
      $("#lastPart").show(300)
    }

  }

  isValidFirstForm(): string {
    const firstAnnonce: Annonce = this.createAnnonceForm();
    firstAnnonce.offerType = (document.getElementById("idOfferType") as HTMLSelectElement).value;
    firstAnnonce.typeProp = (document.getElementById("idTypeProp") as HTMLSelectElement).value;
    firstAnnonce.yearBuilt = new Date((document.getElementById("YearBuilt") as HTMLInputElement).value) ;
    if (!firstAnnonce.offerType) {
      this.toastr.error('Error!', "offerType manquant");
      return "offerType";
    }
    if (!firstAnnonce.titre) {
      this.toastr.error('Error!', "titre manquant");
      return "titre";
    }
    if (!firstAnnonce.typeProp) {
      this.toastr.error('Error!', "typeProp manquant");
      return "typeProp";
    }
    if (!firstAnnonce.description) {
      this.toastr.error('Error!', "description manquant");
      return "description";
    }
    if (!firstAnnonce.surface) {
      this.toastr.error('Error!', "surface manquant");
      return "surface";
    }
    if (!firstAnnonce.price) {
      this.toastr.error('Error!', "price manquant");
      return "price";
    }
    if (!firstAnnonce.age) {
      this.toastr.error('Error!', "age manquant");
      return "age";
    }
    if (!firstAnnonce.yearBuilt) {
      this.toastr.error('Error!', "yearBuilt manquant");
      return "yearBuilt";
    }
    return "success";
  }

  isValidLastForm(): string {
    return "success";
  }

  isValidSecondForm(): string {
    const secondAnnonce: Annonce = this.createAnnonceForm();


    if (!secondAnnonce.roomsNum) {
      this.toastr.error('Error!', "roomsNum manquant");
      return "roomsNum";
    }
    if (!secondAnnonce.bedNum) {
      this.toastr.error('Error!', "bedNum manquant");
      return "bedNum";
    }
    if (!secondAnnonce.bathNum) {
      this.toastr.error('Error!', "bathNum manquant");
      return "bathNum";
    }

    if (!secondAnnonce.garagenum) {
      this.toastr.error('Error!', "garagenum manquant");
      return "garagenum";
    }
    if (!secondAnnonce.localisation) {
      this.toastr.error('Error!', "localisation manquant");
      return "localisation";
    }
    return "success";
  }





}


