import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
  readonly API_URL = 'http://localhost:8081/SpringMVC/favoris';
  constructor(private http: HttpClient) { }

  public addFav(favoris :any):Observable<any>{
    return this.http.post<any>("http://localhost:8081/SpringMVC/favoris/Addfavoris/1/3",favoris)
  
  }
  deleteFav(id: any){
    return this.http.delete(`${this.API_URL}/delete-favoris/${id}`)
  }
  
  public retrieveAllfavoris(){
    return this.http.get("http://localhost:8081/SpringMVC/favoris/retrieve-all-favoris");
  }
  
 

  addToWishlist(idAnnonce :number) {
    return this.http.post(this.API_URL, {idAnnonce})
  }

  removeFromWishlist(idAnnonce : number) {
    return this.http.delete(this.API_URL+ '/' + idAnnonce);
  }
}
