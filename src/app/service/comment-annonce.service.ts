import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../app.constants';
import { Observable } from 'rxjs';
import { createRequestOption } from '../utils/request-util';
import { commentAnnonce } from '../entity/commentAnnonce';
type EntityResponseType = HttpResponse<commentAnnonce>;
type EntityArrayResponseType = HttpResponse<commentAnnonce[]>;
@Injectable({
  providedIn: 'root'
})
export class CommentAnnonceService {

  resourceUrl = SERVER_API_URL+'commentsAnnonce';
  constructor(protected http: HttpClient) { }

  getComments(idAnnonce:number): Observable<EntityArrayResponseType> {
    return this.http
      .get<commentAnnonce[]>(`${this.resourceUrl}/${idAnnonce}`, { observe: 'response' })
  }

  create(commentAnnonce: commentAnnonce): Observable<HttpResponse<commentAnnonce>> {
    return this.http
      .post<commentAnnonce>(`${this.resourceUrl}/add`, commentAnnonce, { observe: 'response' });
  }

  update(commentAnnonce: commentAnnonce): Observable<HttpResponse<commentAnnonce>> {
    return this.http
      .put<commentAnnonce>(`${this.resourceUrl}/update`, commentAnnonce, { observe: 'response' });
  }

  delete(idComment: number): Observable<HttpResponse<string>> {
    return this.http
      .delete<string>(`${this.resourceUrl}/delete/${idComment}`, { observe: 'response' });
  }

}
