import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Searchannonce } from 'src/app/entity/Searchannonce';
import { RechercheService } from 'src/app/services/recherche.service';


@Component({
  selector: 'app-addrecherche',
  templateUrl: './addrecherche.component.html',
  styleUrls: ['./addrecherche.component.css']
})
export class AddrechercheComponent implements OnInit {
  submitted = false;

  Search: Searchannonce= new Searchannonce();


  constructor(private RechercheService: RechercheService,
              private router: Router) { }

  ngOnInit(): void {

  }
  save(){
    this.RechercheService.Add(this. Search).subscribe(data => {
     console.log(data);
     this.goToRechreche();
    });
  }

  goToRechreche(){
    this.router.navigate(['/list']);
  }

    onSubmit(){
    console.log(this.Search);
    this.save();
    }

  
}
