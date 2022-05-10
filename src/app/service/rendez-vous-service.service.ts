import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RendezVous } from '../entity/rendez-vous';
//import { RendezVous } from './entity/rendez-vous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousServiceService {

  //private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getRdv(): Observable<RendezVous[]> {
    return  this.http.get<RendezVous[]>('http://localhost:8081/DariTn/rendezvous/retrieveRdv');
  }

  public addRdv(rendezVous : RendezVous): Observable<RendezVous> {
    return  this.http.post<RendezVous>('http://localhost:8081/DariTn/rendezvous/addRdv/1', rendezVous);
  }

  public updateRdv(rendezVous: any){
    console.log("rendezVous : " +rendezVous.idRdv);
    return  this.http.put(`http://localhost:8081/DariTn/rendezvous/updateRdv`, rendezVous);
  }

  public deleteRdv(idRdv : number): Observable<void> {
    return  this.http.delete<void>(`http://localhost:8081/DariTn/rendezvous/deleteRdv/${idRdv}`);
  }

  public accept(rendezVous: any){
    console.log("rendezVous : " +rendezVous.idRdv);
    return  this.http.put(`http://localhost:8081/DariTn/rendezvous/acceptRdv`, rendezVous);
  }

}
