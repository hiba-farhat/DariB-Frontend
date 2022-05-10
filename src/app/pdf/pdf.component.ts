import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { banque } from '../entity/banque';
import { credit } from '../entity/credit';
import { BanqueService } from '../service/banque.service';
import { CreditService } from '../service/credit.service';




@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  credit : credit;
  creditList: any;
  ListBanks: banque[];

  
  constructor(private creditService: CreditService, 
    private banqueService: BanqueService, protected router: Router) { }

  ngOnInit(): void {
    this.getcredits();
    this.banqueService.getBanks().subscribe((res) => {
      console.log(res);
      this.ListBanks = res;
    });
  }
  public getcredits(): void {
    this.creditService.getcredits().subscribe((response: credit[]) => {this.creditList = response;
      console.log(this.creditList);}, (error: HttpErrorResponse) => {alert(error.message);}
    );
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
              ' ok.',
              'This is system generated file.',
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

}
