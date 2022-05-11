import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.constants';
import { SignalerAnnonce } from '../models/SignalerAnnonce';
import { createRequestOption } from '../utils/request-util';
type EntityResponseType = HttpResponse<SignalerAnnonce>; 
type EntityArrayResponseType = HttpResponse<SignalerAnnonce[]>;
@Injectable({
  providedIn: 'root'
})
export class SignalerAnnonceService {
  resourceUrl = SERVER_API_URL+'SignalerAnnonce/'; //url
  constructor(protected http: HttpClient) { }
  getLikeAnnonces(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<SignalerAnnonce[]>(this.resourceUrl, { observe: 'response' })
  }
  create(signalerAnnonce: SignalerAnnonce): Observable<HttpResponse<string>> {
    return this.http
      .post<string>(this.resourceUrl+"add-SignalerAnnonce", SignalerAnnonce, { observe: 'response' });
  } 
  delete(IdSignaler?: any): Observable<HttpResponse<string>> {
    return this.http
      .post<string>(this.resourceUrl+"delete-SignalerAnnonce", IdSignaler, { observe: 'response' });
  }
}
