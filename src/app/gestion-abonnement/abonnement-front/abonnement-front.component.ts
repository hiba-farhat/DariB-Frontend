import { Component, OnInit } from '@angular/core';
import { Abonnement } from 'src/app/entity/Abonnement';
import { AbonnementService } from 'src/app/service/abonnement.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-abonnement-front',
  templateUrl: './abonnement-front.component.html',
  styleUrls: ['./abonnement-front.component.css']
})
export class AbonnementFrontComponent implements OnInit {
  abonnement: Abonnement ;
  message: any;
  Abonnements: string[] = ["Silver", "Gold","platinum"];
  constructor(private ab:AbonnementService) { }

  ngOnInit(): void {
    let resp = this.ab.getAllAbonnement();

    resp.subscribe((data) => this.message = data);
  }

}
