import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SERVER_API_URL } from '../app.constants';
import { Observable } from 'rxjs';
import { createRequestOption } from '../utils/request-util';
import { Annonce } from '../entity/annonce.model';
import { BackendResponse } from '../entity/backend-response';


type EntityResponseType = HttpResponse<Annonce>;
type EntityArrayResponseType = HttpResponse<Annonce[]>;
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  resourceUrl = SERVER_API_URL + 'Annonces'; //url

  constructor(protected http: HttpClient) { }

  getAnnonces(): Observable<EntityArrayResponseType> {
    return this.http
      .get<Annonce[]>(`${this.resourceUrl}/`, { observe: 'response' })
  }
  getannonceById(id: number): Observable<EntityResponseType> {

    return this.http
      .get<Annonce>(`${this.resourceUrl}/annonce/${id}`, { observe: 'response' })
  }

  create(annonce: Annonce): Observable<HttpResponse<BackendResponse>> {
    return this.http
      .post<BackendResponse>(`${this.resourceUrl}/add`, annonce, { observe: 'response' });
  }
  update(annonce: Annonce): Observable<HttpResponse<BackendResponse>> {
    return this.http
      .put<BackendResponse>(`${this.resourceUrl}/update`, annonce, { observe: 'response' });
  }
  delete(id: number): Observable<HttpResponse<BackendResponse>> {
    return this.http
      .delete<BackendResponse>(`${this.resourceUrl}/delete/${id}`, { observe: 'response' });
  }

  getPiechart(): Observable<HttpResponse<any[]>> {
    return this.http
      .get<any[]>(`${this.resourceUrl}/getPiechart`, { observe: 'response' })
  }

  getLinechart(): Observable<HttpResponse<any[]>> {
    return this.http
      .get<any[]>(`${this.resourceUrl}/getLinechart`, { observe: 'response' })
  }



}
