import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/service/payment.service';
import { PaymentIntentDto } from 'src/app/entity/PaymentIntentDto';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeleComponent } from '../modele/modele.component';


@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {
  
  @Input() type;
  @Input() prix;
  
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };

  stripeTest: FormGroup;

  constructor(private fb: FormBuilder, private stripeService: StripeService, 
    private paymentService: PaymentService, private router: Router,private modalService: NgbModal) {}

  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  createToken(): void {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          const paymentIntentDto: PaymentIntentDto = {
            token: result.token.id,
            amount: this.prix,
            currency: 'EUR',
           // description: this.descripcion
          };
          this.paymentService.pagar(paymentIntentDto).subscribe(
            data => {
              this.abrirModal(data[`id`], this.type);
              this.router.navigate(['/test']);
            }
          );
        
          console.log(result.token.id);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }
  abrirModal(id: string,  type: string) {
    const modalRef = this.modalService.open(ModeleComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.type= type;
    //modalRef.componentInstance.descripcion = descripcion;
    //modalRef.componentInstance.prix = prix;
  }

}


