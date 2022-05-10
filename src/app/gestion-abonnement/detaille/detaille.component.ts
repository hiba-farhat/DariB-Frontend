import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Abonnement } from 'src/app/entity/Abonnement';
import { AbonnementService } from 'src/app/service/abonnement.service';

@Component({
  selector: 'app-detaille',
  templateUrl: './detaille.component.html',
  styleUrls: ['./detaille.component.css']
})
export class DetailleComponent implements OnInit {

 abonnement: Abonnement;

  constructor(
   private abonnementService: AbonnementService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarArticulo();
  }

 cargarArticulo(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.abonnementService.detalle(id).subscribe(
      data => {
        this.abonnement = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
