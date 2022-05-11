
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup ,FormControl} from '@angular/forms';
import { adsModel } from '../entity/adsModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AdsServiceService {
  readonly API_URL = 'http://localhost:8081/SpringMVC/Ads';
    private searche="http://localhost:8081/SpringMVC/Ads/search/";
    private e ="http://localhost:8081/SpringMVC/Estimate/";
  constructor(private httpclient : HttpClient) {}
  public dataForm :FormGroup;

  getAdslist() : Observable<adsModel[]>{
    return this.httpclient.get<adsModel[]>(`${this.API_URL}/all`);
  }

    


     getchercher(title: string,category: any,city: any,type_ads: any): Observable<adsModel[]>{
      return this.httpclient.get<adsModel[]>(`${this.searche}${title}/${category}/${city}/${type_ads}`,httpOptions)
   }
   
   estimatead(roomsNum:number,surface:number,typeProp: any,localisation: any): Observable<number[]>{
    return this.httpclient.get<number[]>(`${this.e}${roomsNum}/${surface}/${typeProp}/${localisation}`)
  }


}