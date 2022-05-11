import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/entity/annonce.model';
import { AnnonceService } from 'src/app/service/annonce.service';


@Component({
  selector: 'app-listfavoris',
  templateUrl: './listfavoris.component.html',
  styleUrls: ['./listfavoris.component.css']
})
export class ListfavorisComponent implements OnInit {
  annonce:Annonce;
  idAnnonce?: number;
    constructor(protected annonceService :AnnonceService,private route: ActivatedRoute) { 
      this.annonce={idAnnonce:1};
    }
  
    ngOnInit(): void {
      this.idAnnonce = parseInt(this.route.snapshot.paramMap.get('id')!);
      this.annonceService.getannonceById(this.idAnnonce).subscribe((res: HttpResponse<Annonce>) => {
        this.annonce = res.body || {idAnnonce:1};  //
        console.log(res.body);
      
      });
  
    
    
    
    } 

}
