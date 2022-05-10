import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AbonnementService } from 'src/app/service/abonnement.service';
import { AssuranceService } from 'src/app/service/assurance.service';

@Component({
  selector: 'app-list-abonnement',
  templateUrl: './list-abonnement.component.html',
  styleUrls: ['./list-abonnement.component.css']
})
export class ListAbonnementComponent implements OnInit {
  liste:any; 
  ngDropdown = 1;
 editUser: any;
  constructor(private Ab:AbonnementService,private Assurance:AssuranceService 
     ,  private router: Router,private toastrService:ToastrService , private activatedRoute: ActivatedRoute) { }


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
  affecter(id1 :any)
{
   const id = this.activatedRoute.snapshot.params['id'];
  
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
deleteG(list:any)
{
  
  let index=this.liste.indexOf(list)
  this.Ab.delete(list.id).subscribe((res)=>{console.log(res);
  this.liste.splice(index,1);
  this.toastrService.success("","abonnement supprimé");
 
  },(err)=>{console.log(err);
  })
}
Update(ab: any){
  this.Ab.updateabonnement(ab).subscribe(
    (res)=>{console.log("yaaaaay"+res);
    this. lister();
    this.toastrService.success("","modification avec succées  "); 
    
    },(err)=>{console.log(err+"nayyyyy");
    this.toastrService.error("","erreur")
    })
    /*(response: any) => {
      console.log(response);
      this.getAllUsers();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );*/
}
public onOpenModal(user:any, mode: string): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');

  if (mode === 'edit') {
    this.editUser = user;
    button.setAttribute('data-target', '#updateUserModal');
  }
  
  container?.appendChild(button);
  button.click();
}
}
