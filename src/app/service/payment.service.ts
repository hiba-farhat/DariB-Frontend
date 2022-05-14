import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentIntentDto } from '../entity/PaymentIntentDto';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  
  stripeURL = 'http://localhost:8081/DariTn/stripe/';

  constructor(private httpClient: HttpClient) {}

  public pagar(paymentIntentDto:  PaymentIntentDto): Observable<string> {
    return this.httpClient.post<string>(this.stripeURL +"paymentintent",paymentIntentDto,cabecera);
  }

  public confirmar(id: string): Observable<string> {
    return this.httpClient.post<string>(this.stripeURL +"confirm/${id}", {}, cabecera);
  }

  public cancelar(id: string): Observable<string> {
    return this.httpClient.post<string>(this.stripeURL + `cancel/${id}`, {}, cabecera);
  }
}