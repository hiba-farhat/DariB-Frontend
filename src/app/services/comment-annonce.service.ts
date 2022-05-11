import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../app.constants';
import { Observable } from 'rxjs';
import { createRequestOption } from '../utils/request-util';
import { commentAnnonce } from '../models/CommentAnnonce';
type EntityResponseType = HttpResponse<commentAnnonce>; 
type EntityArrayResponseType = HttpResponse<commentAnnonce[]>;
@Injectable({
  providedIn: 'root'
})
export class CommentAnnonceService {

  resourceUrl = SERVER_API_URL+'commentAnnonce/'; //url
  constructor(protected http: HttpClient) {}

    getComments(req?: any): Observable<EntityArrayResponseType> {
      const options = createRequestOption(req);
      return this.http
      .get<commentAnnonce[]>(this.resourceUrl, { observe: 'response' })
    }

create(commentAnnonce: commentAnnonce): Observable<HttpResponse<string>> {
    return this.http
      .post<string>(this.resourceUrl+"add-commentAnnonce", commentAnnonce, { observe: 'response' });
  } 
  delete(IdComment?: any): Observable<HttpResponse<string>> {
    return this.http
      .post<string>(this.resourceUrl+"delete-commentAnnonce", IdComment, { observe: 'response' });
  }
  
}
