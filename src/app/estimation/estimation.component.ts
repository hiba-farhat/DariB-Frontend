
import { Component, OnInit } from '@angular/core';
import{MatDialog,MatDialogConfig} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AdsServiceService } from '../service/ads-service.service';

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.css']
})
export class EstimationComponent implements OnInit {
  localisation:any;
  offerType:any;
  roomsNum:number;
  surface:number;
  resulat:any;
  
  test  =false;

  constructor(private estim:AdsServiceService ,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onsubmitt(){

     this.estim.estimatead(this.roomsNum,this.surface,this.offerType,this.localisation).subscribe(data=>{
      this.resulat=data;
      this.test=true;
       console.log(this.resulat)
       
      Swal.fire({
        title:"Hey sir thank you for trusting us your estimate price  In Euros is between",
        text:this.resulat ,
        showCancelButton: true,
        icon:"success"
      })
     
      
     })
     
    
  }
  oncreate(){
    this.dialog.open(EstimationComponent);
  }

}