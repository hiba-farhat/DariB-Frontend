import { Injectable } from '@angular/core';
import { LikeAnnonce } from '../entity/likeAnnonce';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SERVER_API_URL } from '../app.constants';
import { Observable } from 'rxjs';
import { createRequestOption } from '../utils/request-util';
import { BackendResponse } from '../entity/backend-response';
type EntityResponseType = HttpResponse<LikeAnnonce>;
type EntityArrayResponseType = HttpResponse<LikeAnnonce[]>;
@Injectable({
  providedIn: 'root'
})
export class LikeAnnonceService {
  resourceUrl = SERVER_API_URL + 'Likes'; //url
  constructor(protected http: HttpClient) { }

  getLikesByAnnonce(annonceId: number): Observable<EntityArrayResponseType> {
    return this.http
      .get<LikeAnnonce[]>(`${this.resourceUrl}/getLikesByAnnonce/${annonceId}`, { observe: 'response' })
  }

  getLikesByUserAndAnnonce(userId: number, annonceId: number): Observable<EntityArrayResponseType> {
    return this.http
      .get<LikeAnnonce[]>(`${this.resourceUrl}/getLikesByUserAndAnnonce/${userId}/${annonceId}`, { observe: 'response' })
  }

  add(likeAnnonce: LikeAnnonce): Observable<EntityResponseType> {
    return this.http
      .post<LikeAnnonce>(`${this.resourceUrl}/add`, likeAnnonce, { observe: 'response' });
  }

  delete(idLike: number): Observable<HttpResponse<BackendResponse>> {
    return this.http
      .delete<BackendResponse>(`${this.resourceUrl}/delete/${idLike}`, { observe: 'response' });
  }

}
