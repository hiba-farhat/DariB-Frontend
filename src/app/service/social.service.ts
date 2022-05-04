import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { concat, map, Observable } from 'rxjs';
import { TokenDto } from '../entity/token-dto';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SocialService {

  private baseUrl = 'http://localhost:8081/DariTn/api/auth/';

  constructor(private http: HttpClient,
              private cook: CookieService) { }

              loginWithGoogle(token): Observable<any>{

                return this.http.post<any>(`${this.baseUrl}google?value=${token}`, httpOptions).pipe(
                  map(
                    response => {
                      sessionStorage.setItem('token', 'Bearer ' + response.token);
                      return response;
                    }
                  )
                );
              }

  
  loginWithFacebook(token): Observable<any>{
    console.log("token social fb "+token);

    return this.http.post<any>(`${this.baseUrl}facebook?value=${token}`, httpOptions).pipe(
      map(
        response => {
          sessionStorage.setItem("email",response.email)
          sessionStorage.setItem("token",`Bearer ${response.token}`)
          this.cook.set("email",response.email)
          this.cook.set("token",`Bearer ${response.token}`)
          return response;
        }
      )
    )
  }
}
