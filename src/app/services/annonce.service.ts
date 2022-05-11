import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SERVER_API_URL } from '../app.constants';
import { Observable } from 'rxjs';
import { createRequestOption } from '../utils/request-util';
import { Annonce } from '../models/annonce.model';


type EntityResponseType = HttpResponse<Annonce>; 
type EntityArrayResponseType = HttpResponse<Annonce[]>;
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  resourceUrl = SERVER_API_URL+'Annonce/'; //url
  

  constructor(protected http: HttpClient) {}

  getAnnonces(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<Annonce[]>(this.resourceUrl+"retrieve-All-Annonces", { observe: 'response' })
  }
  getannonceById(id: number): Observable<EntityResponseType> {  //mazlt makhdmthch fl back 
   
    return this.http
      .get<Annonce>(this.resourceUrl+"retrieveAnnonce/"+ id,{ observe: 'response' })
  }
  
  create(annonce: Annonce): Observable<HttpResponse<string>> {
    return this.http
      .post<string>(this.resourceUrl+"add-Annonce", annonce, { observe: 'response' });
  } 
  
  update(annonce: Annonce): Observable<HttpResponse<string>> {
    return this.http
      .put<string>(this.resourceUrl+"modify-Annonce", annonce, { observe: 'response' });
  } 

  delete(id: number): Observable<HttpResponse<string>> {
    return this.http
      .delete<string>(this.resourceUrl+"delete-Annonce/" + id, { observe: 'response' });
  }

 //filtrer(): Observable<any>{
   // return this.http.get(`${this.resourceUrl}/findByCriteria`)
  //}
  filtrer(annonce : Annonce)  
  {  
    let url = this.resourceUrl + "findByCriteria";  
    return  this.http.post(url , annonce);  
  } 
  
}
