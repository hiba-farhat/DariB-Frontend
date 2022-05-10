import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.constants';
import { banque } from '../models/banque';
import { reclamation } from '../models/reclamation';
import { createRequestOption } from '../utils/request-util';


type EntityResponseType = HttpResponse<banque>;
type EntityArrayResponseType = HttpResponse<banque[]>;
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})

export class BanqueService {

  ressourceUrl = SERVER_API_URL+'banques';
  addURL= "http://localhost:8081/DariTn/banques/"
  retreiveAllBanksURL="http://localhost:8081/DariTn/banques/retrieve-all-banques";
  deleteURL="http://localhost:8081/DariTn/banques/"



  constructor(protected http: HttpClient, protected router: Router) { }

  getBanks(): Observable<any>{
    //const options = createRequestOption(req);
    return this.http.get<banque[]>(this.retreiveAllBanksURL)
  }

  getBankById(id?: any): Observable<EntityResponseType> {  
    const options = createRequestOption(id);
    return this.http
      .post<banque>(this.ressourceUrl+"retrieve-bank/", id ,{ observe: 'response' })
  }

  public addBank(banque: banque): Observable<banque> {
    return this.http.post<banque>(this.addURL+"add-bank", banque, httpOptions);
  } 
 

  updateBank(banque: any){
    return this.http.put(this.deleteURL+"updateBanque/", banque, httpOptions);
  }

  /*
  delete(idBanque: any): Observable<HttpResponse<string>> {
    return this.http
      .post<string>(this.ressourceUrl+"delete-bank/", idBanque, { observe: 'response' });
  }
  */

  deleteBank(id: number): Observable<any> {
    return this.http.delete(`${this.deleteURL}delete-bank/${id}`, { responseType: 'text' });
  }


}
