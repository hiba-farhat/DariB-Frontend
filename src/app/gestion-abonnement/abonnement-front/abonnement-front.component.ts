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
  liste:any;
  Abonnements: string[] = ["Silver", "Gold","platinum"];
  constructor(private Ab:AbonnementService) { }

  ngOnInit(): void {
    this.lister();
  }
  lister(){
    console.log("tesst");
    this.Ab.getAllAbonnement().subscribe((res)=>{console.log("yaaaaay"+res);
    this.liste=res;
    console.log(this.liste=res);
    },(err)=>{console.log(err+"nayyyyy");
    })
  }

}
