import { AdsServiceService } from './../ads-service.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EstimationComponent } from '../estimation/estimation.component';
import { adsModel } from '../models/adsModel';


@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
adslist:adsModel[];
  constructor(private adservice :AdsServiceService ,private router:Router,private dialog: MatDialog) { }
ad : adsModel =new adsModel();
a:any;
retrievedImage: any;
          base64Data: any;
    retrieveResonse: any;
    i:number;
    num:number;
  idad:number;
  title:string;
  category:any;
  city:any;
  type_ads:any;
  test=false;
  totalLength:any;
  page:number=1;
  show: boolean = false;
  cherche:adsModel[];
  recherche: adsModel =new adsModel();


  ngOnInit(): void {
    this.getads();
  }

getads(){
  this.adservice.getAdslist().subscribe((data:adsModel[])=>{
    this.adslist=data; 
  this.totalLength=data.length;
  
  
  })
}
   

    public getchercher() {
      this.adservice.getchercher(this.title,this.category,this.city,this.type_ads).subscribe((data)=>{
       
        this.adslist=data;
       console.log(this.adslist)
     
      }); 
 
     
    }
    onsubmitt(){
      
      this.getchercher();
    }
    onretour(){
      // this.adservice.getAdslist().subscribe(data=>{
      //   this.adslist=data;
      //   console.log(this.adslist)
      
      // });  
      this.getads();
    }

    moredetails(i:any){
      this.show=true;
this.num=i;
    }
    oncreateestimation(){
     let dialogRef= this.dialog.open(EstimationComponent);
     dialogRef.afterClosed().subscribe(data=>{
       
     })
    }



    


}