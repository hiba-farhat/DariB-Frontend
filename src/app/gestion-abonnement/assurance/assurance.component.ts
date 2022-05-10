import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssuranceService } from 'src/app/service/assurance.service';

@Component({
  selector: 'app-assurance',
  templateUrl: './assurance.component.html',
  styleUrls: ['./assurance.component.css']
})
export class AssuranceComponent implements OnInit {

  liste:any; 
  id: any;
  constructor(private Assurance:AssuranceService  ,  private route: Router,
    private toastrService:ToastrService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.lister();
    this.lister();
     // this.id=this.route.snapshot.params.id
  }
  affecter(id1 :any)
  {
    const id = this.activatedRoute.snapshot.params['id'];
    id1=this.liste.id;
    console.log(id);
    console.log(id1);
      this. Assurance.affecte_Assurance_Abonn(id,id1).subscribe((res)=>{ 
        console.log(id);
        this.toastrService.success("","affectation avec succées  "); 
        
       }
      ,(err)=>{console.dir(err+"erreur")
      this.toastrService.error("","erreur d'affectation")
    }) ;
  
  
  }

  lister(){
    console.log("tesst");
    this.Assurance.getAllAssurance().subscribe((res)=>{console.log("yaaaaay"+res);
    this.liste=res;
    console.log(this.liste=res);
    },(err)=>{console.log(err+"nayyyyy");
    })
  }
  deleteG(list:any)
  {
    
    let index=this.liste.indexOf(list)
    this.Assurance.delete(list.idAssu).subscribe((res)=>{console.log(res);
    this.liste.splice(index,1);
    this.toastrService.success(""," assurance supprimé");
   
    },(err)=>{console.log(err);
    })
  }


}
