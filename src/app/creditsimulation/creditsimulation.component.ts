import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { Options } from '@angular-slider/ngx-slider';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { credit } from '../entity/credit';
import { banque } from '../entity/banque';
import { CreditService } from '../service/credit.service';
import { BanqueService } from '../service/banque.service';






@Component({
  selector: 'app-creditsimulation',
  templateUrl: './creditsimulation.component.html',
  styleUrls: ['./creditsimulation.component.css'],
  
})
export class CreditsimulationComponent implements OnInit {
  idbanque: number;

  credit: credit;
  idBanque: any;
  bankList: any;
  banque: banque;
  form:any={};
  ListCredits: any;
  ListBanks: banque[];


  constructor(
    private creditService: CreditService, 
    private banqueService: BanqueService) { }

  ngOnInit(): void {
    this.credit = new credit();
    this.banqueService.getBanks().subscribe((res) => {
      console.log(res);
      this.ListBanks = res;
    });
   
  }
  value: number = 10000;
  options: Options = {
    floor: 0,
    step: 5000,
    ceil: 400000
  };

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

  calcul() {
    
    this.creditService.simulation(this.credit).subscribe((response: credit) => {this.idBanque = response;},
      (error: HttpErrorResponse) => {alert(error.message);});
  }
  
  simulationCredit(id:number){
    
  //  var b = Number(this.credit.banque);
    console.log("val de id : "+id);
    this.creditService.add(this.credit, id).subscribe(() =>
      this.creditService.getcredits().subscribe((res) => {
        this.ListCredits = res;
        console.log(res);
       // console.log(credit);
      })
    );
    }

    affecter(id:number)
    {
      this.idbanque=id;
      console.log( this.idbanque);
    }

    mensualite(interet: number){
      this.banque.interetBanque=interet;
      console.log(interet)
    }

    generatePDF(action = 'open') {
      let docDefinition = {
        content: [
          {
            text: 'Dari.tn',
            fontSize: 16,
            alignment: 'center',
            color: '#047886'
          },
          {
            text: 'Credit',
            fontSize: 20,
            bold: true,
            alignment: 'center',
            decoration: 'underline',
            color: 'skyblue'
          },
          {
            text: 'Details',
            style: 'sectionHeader'
          },
          {
            columns: [
              [
                {
                  text: this.credit.montant,
                  bold:true
                },
                { text: this.credit.salaire },
                { text: this.credit.duree },
                { text: this.credit.partmensuel },
                
              ],
              [
                {
                  text: `Date: ${new Date().toLocaleString()}`,
                  alignment: 'right'
                },
                
              ]
            ]
          },
          {
            text: 'Order Details',
            style: 'sectionHeader'
          },
          {
            text: 'Additional Details',
            style: 'sectionHeader'
          },
          {
            columns: [
              [{ qr: `${this.credit.idCredit}`, fit: '50' }],
              [{ text: 'Signature', alignment: 'right', italics: true}],
            ]
          },
          {
            text: 'Terms and Conditions',
            style: 'sectionHeader'
          },
          {
              ul: [
                'Le résultat de cette simulation est non contractuel et revêt un caractère strictement informatif. Elle ne prend pas en compte le coût des assurances nécessaires au crédit, la TVA réglementaire et ni les frais de dossier. Il ne s’agit en aucun cas d’un engagement de la part de la banque qui se réserve le droit de modifier à tout moment l’une ou l’autre des données et des conditions de financement de ses offres de crédits..',
                
              ],
          }
        ],
        styles: {
          sectionHeader: {
            bold: true,
            decoration: 'underline',
            fontSize: 14,
            margin: [0, 15,0, 15]          
          }
        }
        
      };
    }

    public openPDF(): void {
      let DATA: any = document.getElementById('htmlData');
      html2canvas(DATA).then((canvas) => {
        let fileWidth = 208;
        let fileHeight = (canvas.height * fileWidth) / canvas.width;
        const FILEURI = canvas.toDataURL('image/png');
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
        PDF.save('angular-credit.pdf');
        PDF.setProperties({title: "Dari.tn"})
      });
    }

 
}
