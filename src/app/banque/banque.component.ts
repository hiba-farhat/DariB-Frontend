import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { banque } from '../models/banque';
import { BanqueService } from '../services/banque.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ChartType} from 'chart.js';
//import {Label, MultiDataSet} from 'ng2-charts';




@Component({
  selector: 'app-banque',
  templateUrl: './banque.component.html',
  styleUrls: ['./banque.component.css']
})
export class BanqueComponent implements OnInit {

  bankList: any;
  bank: banque;
  form:any={};
  //banque : banque=new banque();
  public updateBank: banque;



  constructor(protected banqueService: BanqueService, protected router: Router, private _http:HttpClient) { }

  ngOnInit(): void {
    //this.getAllBanks();
   this.lister();
    
  }

  lister(){
    
    this.banqueService.getBanks().subscribe((res)=>{console.log("ok"+res);
    this.bankList=res;
  },(err)=>{console.log(err+"no");})
  }

  public getAllBanks(): void {
    this.banqueService.getBanks().subscribe(
      (response: banque[]) => {this.bankList = response;console.log(this.bankList);},
      (error: HttpErrorResponse) => {alert(error.message);});
  }

  deleteBank(idBanque: any){
    this.banqueService.deleteBank(idBanque).subscribe(()=>this.lister);
  }

  addBank(p: any){
    this.banqueService.addBank(p).subscribe(() => {
      this.getAllBanks();
      this.form = false;
      window.history.back
    });
  }

 

  
  public onOpenModal(banque: banque  , mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    
    if (mode === 'edit') {
      this.updateBank = banque;
      button.setAttribute('data-target', '#updateModal');
    }
    
    container?.appendChild(button);
    button.click();
  }
  public onUpdate(bank: banque): void {
    console.log(bank);
    this.banqueService.updateBank(bank).subscribe(
      (response: any) => {
        console.log(response);
        this.lister();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  Stats: Map<string, number>;
  v1: number;
  //doughnutChartLabels: Label[] = ['BT', 'BH', 'Attijari Bank', 'Amen Bank', 'Banque Zitouna', 'STB', 'BNA', 'UIB', 'BFPME'];
  //doughnutChartData: MultiDataSet = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  //doughnutChartType: ChartType = 'doughnut';
  

  public getBankByName(nombanque: string){
    const url = 'http://localhost:8081/DariTn/banques/getBankByName';
    return this._http.get<banque>(url+nombanque);
  }

}
