import { Injectable } from '@angular/core';
import { likeAnnonce } from '../entity/likeAnnonce';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SERVER_API_URL } from '../app.constants';
import { Observable } from 'rxjs';
import { createRequestOption } from '../utils/request-util';
type EntityResponseType = HttpResponse<likeAnnonce>; 
type EntityArrayResponseType = HttpResponse<likeAnnonce[]>;
@Injectable({
  providedIn: 'root'
})
export class LikeAnnonceService {
  resourceUrl = SERVER_API_URL+'LikeAnnonce/'; //url
  constructor(protected http: HttpClient) { }

  getLikeAnnonces(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<likeAnnonce[]>(this.resourceUrl, { observe: 'response' })
  }
  create(likeAnnonce: likeAnnonce): Observable<HttpResponse<string>> {
    return this.http
      .post<string>(this.resourceUrl+"add-LikeAnnonce", likeAnnonce, { observe: 'response' });
  } 
  delete(IdLike?: any): Observable<HttpResponse<string>> {
    return this.http
      .post<string>(this.resourceUrl+"", IdLike, { observe: 'response' });
  }
}
