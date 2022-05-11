import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Searchannonce } from '../entity/Searchannonce';
import { createRequestOption } from '../utils/request-util';
import { SERVER_API_URL } from '../app.constants';

/* type EntityArrayResponseType = HttpResponse<Searchannonce[]>;
 */
@Injectable({
  providedIn: 'root'
})
export class RechercheService {
  readonly API_URL = 'http://localhost:8081/SpringMVC/Recherche';
  resourceUrl = SERVER_API_URL+'Recherche/'; //url

  constructor(private httpClient: HttpClient ){ }

 public AddRecherche(Recherche :Searchannonce):Observable<any>{
   return this.httpClient.post<any>(`${this.API_URL}/add-Recherche`,Recherche)
  }
 Add(Search: Searchannonce): Observable<Object>{
  return this.httpClient.post(`${this.API_URL}/add-Recherche`, Search, {responseType: 'text'} );
}
//public retrieveAllRecherches(): Observable<any>{
 // return this.httpClient.get(`${this.API_URL}/retrieve-All-Recherches`)
//}
retrieveAllRecherches(): Observable<Searchannonce[]>{
  return this.httpClient.get<Searchannonce[]>(`${this.API_URL}/retrieve-All-Recherches`);
}

updateRecherche(id: number, Search: Searchannonce): Observable<Object>{
  return this.httpClient.put(`${this.API_URL}/modify-Recherche/${id}`,Search, {responseType: 'text'});
}
editRechreche(Search: any){
  return this.httpClient.put(`${this.API_URL}/modify-Recherche/`,Search)
}


/* getRech(
  req?: any): Observable<EntityArrayResponseType> {
  const options = createRequestOption(req);
  return this.http
    .get<Searchannonce[]>(this.resourceUrl+"retrieve-All-Recherches", { observe: 'response' })
} */
deleteRecherche(id: any) {
  return this.httpClient.delete(`${this.API_URL}/delete-Recherche/${id}`, {responseType: 'text'})
}

updateReche(Recherches : Object  ): Observable<Object> {
  return this.httpClient.put(`${this.API_URL+"/modify-Recherche"}`, Recherches);
}

}
