import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.constants';
import { BackendResponse } from '../entity/backend-response';
import { SignalerAnnonce } from '../entity/SignalerAnnonce';
import { createRequestOption } from '../utils/request-util';
type EntityResponseType = HttpResponse<SignalerAnnonce>; 
type EntityArrayResponseType = HttpResponse<SignalerAnnonce[]>;
@Injectable({
  providedIn: 'root'
})
export class SignalerAnnonceService {
  resourceUrl = SERVER_API_URL+'SignalerAnnonce'; //url
  constructor(protected http: HttpClient) { }
  get(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<SignalerAnnonce[]>(this.resourceUrl, { observe: 'response' })
  }

  create(signalerAnnonce: SignalerAnnonce): Observable<HttpResponse<BackendResponse>> {
    return this.http
      .post<BackendResponse>(this.resourceUrl+"/add", signalerAnnonce, { observe: 'response' });
  } 
  delete(IdSignaler?: number): Observable<HttpResponse<BackendResponse>> {
    return this.http
      .delete<BackendResponse>(this.resourceUrl+"/delete/"+IdSignaler, { observe: 'response' });
  }
  
  getSignaux(idAnnonce:number): Observable<EntityArrayResponseType> {
    return this.http
      .get<SignalerAnnonce[]>(`${this.resourceUrl}/${idAnnonce}`, { observe: 'response' })
  }

  getSignauxForAdmin(): Observable<HttpResponse<any[]>> {
    return this.http
      .get<any[]>(`${this.resourceUrl}/getSignauxForAdmin`, { observe: 'response' })
  }

  

}
