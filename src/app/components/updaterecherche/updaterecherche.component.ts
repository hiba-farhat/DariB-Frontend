import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Favoris } from 'src/app/entity/favoris';
import { Searchannonce } from 'src/app/entity/Searchannonce';
import { Annonce } from 'src/app/models/annonce.model';
import { AnnonceService } from 'src/app/services/annonce.service';
import { FavorisService } from 'src/app/services/favoris.service';
import { RechercheService } from 'src/app/services/recherche.service';


@Component({
  selector: 'app-updaterecherche',
  templateUrl: './updaterecherche.component.html',
  styleUrls: ['./updaterecherche.component.css']
})
export class UpdaterechercheComponent implements OnInit {
  @Input() annonceItem!: Annonce ;

  @Input() addedToWishlist!: boolean;

    annonces : Annonce [];
    Favoris: Favoris= new Favoris();
    message:any;
    Search?: Searchannonce;
    private   Annonce = new Annonce();  
    private data:any;  
  
  createForm = this.formBuilder.group({
    idSearchA : [],
    keyword : [],
    location : [],
    status : [],
    propertyType :[],
    bedRoom :[],
    bathroom :[],
    minArea :[],
    maxArea:[],
    minPrice :[],
    maxPrice :[],
  
  });
  form2 = this.formBuilder.group({
    titre : [],
    surface : [],
    localisation : [],
    status : [],
    bedRoom :[],
    bathroom :[],
    minArea :[],
    maxArea:[],
    minPrice :[],
    maxPrice :[],
  
  });
    
    




  
  constructor(protected RechercheService:  RechercheService,
    protected services:FavorisService,protected annonceService :AnnonceService,
    private formBuilder: FormBuilder,public  form: FormGroup ) 

    
    {  this.annonces=[];
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
      maxPrice: new FormControl()
     });

     
     this.form2 = new FormGroup({
      titre: new FormControl(),
      surface: new FormControl(),
      localisation: new FormControl(),
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
      RechercheForm() {
        this.Annonce.titre = this.Titre?.value; 
        this.Annonce.surface = this.Surface?.value;  
        this.Annonce.localisation = this.Localisation?.value; 
        this.Annonce.bedNum = this.Bedroom?.value; 
        this.Annonce.bathNum = this.Bathroom?.value;  
        this.Annonce.price = this.Price?.value; 
        this.Annonce.typeProp = this.Typeprop?.value; 
        this.Annonce.offerType = this.OfferType?.value;  
      }

      
      get Titre()  
      {  
        return this.form.get('titre');  
      }  
      get Surface()  
      {  
        return this.form.get('surface');  
      }  
      get Localisation()  
      {  
        return this.form.get('localisation');  
      }  
      get Bedroom()  
      {  
        return this.form.get('bedNum');  
      } 
      get Bathroom()  
      {  
        return this.form.get('bedNum');  
      } 
      get Price()  
      {  
        return this.form.get('price');  
      } 
      get Typeprop()  
      {  
        return this.form.get('typeprop');  
      } 
      get OfferType()  
      {  
        return this.form.get('offertype');  
      } 
      getData(Annonce:any)  
      {  
          this.annonceService.filtrer(Annonce).subscribe(  
            response => {  
             // this.data = response.json();  
            },  
            error => {  
              console.log("error while getting Annonce Details");  
            }  
          );  
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
      handleRemoveFromWishlist() {
        this.services.removeFromWishlist(this.annonceItem.idAnnonce).subscribe(() => {
          this.addedToWishlist = false;
        })
      }
  ngOnInit(): void {
    this.getData(this.Annonce);  
    this.annonceService.getAnnonces().subscribe((res: HttpResponse<Annonce[]>) => {
      this.annonces = res.body || [];  
      console.log(res.body);
    });





  }

}
