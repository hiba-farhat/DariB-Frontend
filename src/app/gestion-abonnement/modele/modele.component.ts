import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-modele',
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.css']
})
export class ModeleComponent implements OnInit {

  @Input() id:any;
  @Input() type:any;
  @Input() prix:any;
  constructor(
    public activeModal: NgbActiveModal,
    private paymentService: PaymentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  confirmar(id: string): void {
    this.paymentService.confirmar(id).subscribe(
      data => {
        this.toastrService.success
        ('paiement confirmé', 'le paiement a été confirmé' , {positionClass: 'toast-top-center', timeOut: 3000});
       this.activeModal.close();
      },
      err => {
        console.log(err);
        this.activeModal.close();
      }
    );
  }

  cancelar(id: string): void {
    this.paymentService.cancelar(id).subscribe(
      data => {
        this.toastrService.success
        ('paiement annulé', 'le paiement  a été annulé', {positionClass: 'toast-top-center', timeOut: 3000});
        this.activeModal.close();
      },
      err => {
        console.log(err);
      this.activeModal.close();
      }
    );
  }

}
