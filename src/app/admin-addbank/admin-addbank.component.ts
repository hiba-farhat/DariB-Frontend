import { Component, OnInit } from '@angular/core';
import { banque } from '../models/banque';
import { Router } from '@angular/router';
import { BanqueService } from '../services/banque.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-admin-addbank',
  templateUrl: './admin-addbank.component.html',
  styleUrls: ['./admin-addbank.component.css']
})
export class AdminAddbankComponent implements OnInit {
  bankList: any;
  banque: banque;
  form:any={};

  constructor(protected banqueService: BanqueService, protected router: Router) { 
  
  }

  ngOnInit(): void {
    this.banque = new banque();
    this.lister();
  }

  addbank(){
    this.banqueService.addBank(this.banque).subscribe((response: banque) => {console.log(response);},
      (error: HttpErrorResponse) => {alert(error.message);});
  }

  lister(){
    console.log("test");
    this.banqueService.getBanks().subscribe((res)=>{console.log("ok"+res);
    this.bankList=res;
  },(err)=>{console.log(err+"no");})
  }


}
