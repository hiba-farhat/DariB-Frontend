import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AssuranceService {

  api="http://localhost:8081/DariTn/Assurance/";
  constructor(private http:HttpClient) { }

  AddAssurance(assurance: any){
    return this.http.post(this.api+"add-Assurance",assurance);
  }
 getAllAssurance(): Observable<any> 
  {
    return this.http.get(this.api+"retrieveAllAssurances");
  }
  delete(id :any)
  {
    return this.http.delete(this.api+"delete-Assurance/"+id);
  }

  affecte_Assurance_Abonn(idAssu:any ,id_abonnement:any)
 {
  
   return this.http.put(this.api+"affAssAbonn/"+idAssu+"/"+id_abonnement, httpOptions) ;
 
  }


}
