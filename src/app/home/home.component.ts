import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
import { Annonce } from '../entity/annonce.model';
import { Favoris } from '../entity/favoris';
import { Searchannonce} from '../entity/Searchannonce';
import { AnnonceService } from '../service/annonce.service';
import { FavorisService } from '../service/favoris.service';
import { RechercheService } from '../service/recherche.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() annonceItem!: Annonce ;

  @Input() addedToWishlist!: boolean;
  idannonce:number;
    annonces : Annonce [];
    Favoris: Favoris= new Favoris();
    message:any;
    Search?: Searchannonce;
  
  createForm = this.formBuilder.group({
    idSearchA : [],
    keyword : [],
    location : [],
    propertyType :[],
    status :[],
    bedRoom :[],
    bathroom :[],
    minArea :[],
    maxArea:[],
    minPrice :[],
    maxPrice :[],
  });

  constructor(protected RechercheService:  RechercheService,
    protected services:FavorisService,protected annonceService :AnnonceService,private formBuilder: FormBuilder ) {  this.annonces=[];
      this.annonces=[]
      this.createForm = new FormGroup({
        keyword: new FormControl(),
        propertyType: new FormControl(),
        location: new FormControl(),
        status: new FormControl(),
        bedRoom: new FormControl(),
        bathroom: new FormControl(),
        minArea: new FormControl(),
        maxArea: new FormControl(),
        minPrice: new FormControl(),
        maxPrice: new FormControl(),
       });
        }
  public AddFavoris(){
    let resp=this.services.addFav(this.Favoris);
    resp.subscribe((data: any)=>this.message=data);
      }
      public deleteFav(id:any){
        let resp= this.services.deleteFav(id);
        resp.subscribe((data)=>this.Favoris=data);
       }
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
      handleAddToWishlist() {
        
        this.services.addToWishlist(this.annonceItem.idAnnonce).subscribe(() => {
          this.addedToWishlist = true;
        })
      }
      affecter(id:number)
      {
        this.idannonce=id;
      }
      handleRemoveFromWishlist() {
        this.services.removeFromWishlist(this.annonceItem.idAnnonce).subscribe(() => {
          this.addedToWishlist = false;
        })
      }
  ngOnInit(): void {

    this.annonceService.getAnnonces().subscribe((res: HttpResponse<Annonce[]>) => {
      this.annonces = res.body || [];  
      console.log(res.body);
    });



    
  }
  public searchAnnonce(key: string): void {
    console.log(key);
    const results: Annonce[] = [];
    for (const annonce of this.annonces) {
     // if (annonce.titre.toLowerCase().indexOf(key.toLowerCase()) //!== -1
      //|| user.e_mail.toLowerCase().indexOf(key.toLowerCase()) !== -1
      //|| user.Role.toLowerCase().indexOf(key.toLowerCase()) !== -1)
     // ){
      //  results.push(annonce);
     // }
    }
  this.annonces = results;
    if (results.length === 0 || !key) {
     // this.getAnnonces();
    }
   }

  }
