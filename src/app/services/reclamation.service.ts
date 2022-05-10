import { Injectable } from '@angular/core';
import { reclamation } from 'src/app/models/reclamation';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../utils/request-util';
import { Router } from '@angular/router';


type EntityResponseType = HttpResponse<reclamation>;
type EntityArrayResponseType = HttpResponse<reclamation[]>;


@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  addClaimURL="http://localhost:8081/DariTn/reclamation/add-reclamation";
  retreiveAllClaimsURL="http://localhost:8081/DariTn/reclamation/retrieve-all-reclamations";
  retreiveClaimURL="http://localhost:8081/DariTn/reclamation/retrieveReclamation/{id}";
  updateClaimURL="http://localhost:8081/DariTn/reclamation/update";
  DeleteClaimURL="http://localhost:8081/DariTn/reclamation";


  constructor(protected claimhttp: HttpClient, private router: Router) { }

  addClaim(reclamation: reclamation): Observable<HttpResponse<string>>{
    return this.claimhttp.post<string>(this.addClaimURL, reclamation, { observe: 'response' });
  }

  retrieveAllClaims(): Observable<any>{
    //const options = createRequestOption(reclamation);
    return this.claimhttp.get(this.retreiveAllClaimsURL);
  }
  

  updateClaim(reclamation: any) {
    return this.claimhttp.put(this.updateClaimURL, reclamation);
  }

  deleteClaim(id: number): Observable<any> {
    return this.claimhttp.delete(`${this.DeleteClaimURL}/delete-reclamation/${id}`, { responseType: 'text' });
  }

  retreiveClaimById(id:number):Observable<any>{
    const options = createRequestOption(reclamation);
    return this.claimhttp.get(this.retreiveClaimURL);
  }

  
  

}
