import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { banque } from '../entity/banque';
import { credit } from '../entity/credit';


@Injectable({
  providedIn: 'root'
})

export class CreditService {
  private creditUrl: string;
  credit = credit;
  banque = banque
  constructor(private http: HttpClient) { 
    this.creditUrl = 'http://localhost:8081/DariTn';

  }

  public getcredits(): Observable<credit[]> {
    return this.http.get<credit[]>(`${this.creditUrl}/credit/retrieve-all-credits`);
  }

  public addcredit(credit: credit): Observable<credit> {
    return this.http.post<credit>(`${this.creditUrl}/credit/add-credit`, credit);
  }

  public updatecredit(credit: credit): Observable<credit> {
    return this.http.put<credit>(`${this.creditUrl}/credit/updatecredit`, credit);
  }

  public deletecredit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.creditUrl}/credit/delete-credit/${id}`);
  }

  public simulation(credit: credit){
    let idBanque = 1;
    return this.http.post<credit>(`${this.creditUrl}/credit/simulationcredit/${idBanque}`, credit, {});
  }

  public add(credit: credit, idBanque: number){
    //idBanque = 1;
    //idBanque= this.credit.idBank;
   return this.http.post(`${this.creditUrl}/credit/simulationcredit/${idBanque}`, credit, {});
  

  }

}
