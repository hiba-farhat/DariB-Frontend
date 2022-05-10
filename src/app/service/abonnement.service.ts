import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  api="http://localhost:8081/DariTn/abonnement/";
  constructor(private http:HttpClient) { }

  AddAbonnement(abonnement: any){
    return this.http.post(this.api+"add-abonnement",abonnement);
  }
  updateabonnement(abonnement: any){
    return this.http.put(this.api+"update-abonnement/",abonnement)
  }
  
  getAllAbonnement(): Observable<any> 
  {
    return this.http.get(this.api+"retrieveAllAbonnements");
  }
  delete(id :any)
  {
    return this.http.delete(this.api+"delete-abonnement/"+id);
  }

  public detalle(id: number): Observable<any> {
    return this.http.get(this.api + `detalle/${id}`);
  }
}
