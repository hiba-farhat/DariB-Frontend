import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { credit } from '../models/credit';
import { CreditService } from '../services/credit.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  creditList: credit[];
  credit: credit;
  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
    this.getcredits();
  }

  public getcredits(): void {
    this.creditService.getcredits().subscribe((response: credit[]) => {this.creditList = response;
      console.log(this.creditList);}, (error: HttpErrorResponse) => {alert(error.message);}
    );
  }

  delete(i: number){
    this.creditService.deletecredit(this.creditList[i].idCredit).subscribe((response: void ) => {this.getcredits();},
      (error: HttpErrorResponse) => {alert(error.message);});
  }

}
