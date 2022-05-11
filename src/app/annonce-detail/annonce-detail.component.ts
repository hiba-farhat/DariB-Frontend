import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from '../models/annonce.model';
import { AnnonceService } from '../services/annonce.service';


@Component({
  selector: 'app-annonce-detail',
  templateUrl: './annonce-detail.component.html',
  styleUrls: ['./annonce-detail.component.css']
})
export class AnnonceDetailComponent implements OnInit {
annonce:Annonce;
idAnnonce?: number;
  constructor(protected annonceService :AnnonceService,private route: ActivatedRoute) { 
    this.annonce={idAnnonce:0};
  }

  ngOnInit(): void {
    this.idAnnonce = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.annonceService.getannonceById(this.idAnnonce).subscribe((res: HttpResponse<Annonce>) => {
      this.annonce = res.body || {idAnnonce:0};  //
      console.log(res.body);
    
    });

  
  
  
  } 

  }


