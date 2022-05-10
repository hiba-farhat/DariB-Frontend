import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Annonce } from '../entity/annonce.model';
import { BackendResponse } from '../entity/backend-response';
import { SignalerAnnonceAdmin } from '../entity/SignalerAnnonceAdmin';
import { SignalerAnnonceService } from '../service/signaler-annonce.service';

import { AnnonceService } from '../service/annonce.service';


import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent
} from 'angular-google-charts';

@Component({
  selector: 'app-admin-annonces',
  templateUrl: './admin-annonces.component.html',
  styleUrls: ['./admin-annonces.component.css']
})
export class AdminAnnoncesComponent implements OnInit {

  public pieChart:any = {
    title: 'pie Chart',
    type: ChartType.PieChart,
    data: [],
    columns: ['Element', 'Density'],
    options: {
      animation: {
        duration: 250,
        easing: 'ease-in-out',
        startup: true
      }
    }
  };

  public barChart:any = {
    title: 'bar Chart',
    type: ChartType.BarChart,
    data: [],
    columns: ['Element', 'Density'],
    options: {
      animation: {
        duration: 250,
        easing: 'ease-in-out',
        startup: true
      }
    }
  };

  ReceivedData?: any;
  signaux: SignalerAnnonceAdmin[];




  @ViewChild('chart', { static: true })
  public chart!: GoogleChartComponent;

  constructor(protected signalerAnnonceService: SignalerAnnonceService, protected annonceService: AnnonceService) {
    this.signaux = [];
  }

  ngOnInit(): void {

    this.annonceService.getLinechart().subscribe((res: HttpResponse<any[]>) => {
      console.log("bar chart :", res.body)
      res.body!.forEach(obj => {
        const prix : number = obj[0];
        const region : string = obj[2];
        
        this.barChart.data.push([region, prix]);
      });
    })

    this.annonceService.getPiechart().subscribe((res: HttpResponse<any[]>) => {
      console.log("pie chart :", res.body)
      res.body!.forEach(obj => {
        const region : string = obj[0];
        const value : number = obj[1];
        this.pieChart.data.push([region, value]);
      });
    })

    this.signalerAnnonceService.getSignauxForAdmin().subscribe((res: HttpResponse<any[]>) => {
      if (res.status == 200) {
        this.signaux = this.convertToSignauxList(res.body!)
        console.log(this.signaux);
      }

    })


  }

  convertToSignauxList(result: any[]): SignalerAnnonceAdmin[] {
    const list: SignalerAnnonceAdmin[] = [];
    for (let i = 0; i < result.length; i++) {
      const obj = result[i];
      const signal: SignalerAnnonceAdmin = {
        IdSignaler: obj[0].idSignaler,
        dateCreation: new Date(obj[0].dateCreation),
        description: obj[0].description,
        annonce: obj[0].annonce,
        nbre: obj[1]
      };
      list.push(signal);
    }
    return list;
  }
  deleteAnnonce(id: number, position: number): void {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.annonceService.delete(id).subscribe(
        (res: HttpResponse<BackendResponse>) => {
          if (res.status == 200) {
            console.log(res.body!.message);
            this.signaux.splice(position, 1);

          }
        }
      );
    }

  }



  secondChance(IdSignaler: number, position: number): void {
    this.signalerAnnonceService.delete(IdSignaler).subscribe(
      (res: HttpResponse<BackendResponse>) => {
        if (res.status == 200) {
          console.log(res.body!.message);
          this.signaux.splice(position, 1);
        }
      })
  }


}

