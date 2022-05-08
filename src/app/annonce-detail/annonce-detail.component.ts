import { HttpResponse, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnnonceComponent } from '../annonce/annonce.component';
import { Annonce } from '../entity/annonce.model';
import { commentAnnonce } from '../entity/commentAnnonce';
import { AnnonceService } from '../service/annonce.service';
import { SignalerAnnonceService } from '../service/signaler-annonce.service';
import {  } from '../service/signaler-annonce.service';
import { CommentAnnonceService } from '../service/comment-annonce.service';
import { SignalerAnnonce } from '../entity/SignalerAnnonce';
import { BackendResponse } from '../entity/backend-response';
//import { stringify } from 'querystring';


@Component({
  selector: 'app-annonce-detail',
  templateUrl: './annonce-detail.component.html',
  styleUrls: ['./annonce-detail.component.css']
})
export class AnnonceDetailComponent implements OnInit {
  annonce: Annonce;
  idAnnonce: number;
  idUser:number;
  commentaires: commentAnnonce[];
  signal?: SignalerAnnonce;

  addCommentaire: commentAnnonce;
  updatedCommentaire: commentAnnonce;
  commentairePosition: number;

  rate: number;
  modify: boolean;

  isReported:boolean; 


  constructor(private toastr: ToastrService, protected annonceService: AnnonceService, protected signalerAnnonceService: SignalerAnnonceService, protected commentaireService: CommentAnnonceService, private route: ActivatedRoute) {
    this.annonce = { idAnnonce: 0 };
    this.idAnnonce = 0;
    this.commentaires = [];

    this.addCommentaire = {};
    this.rate = 0;

    this.updatedCommentaire = {};
    this.commentairePosition = 0
    this.modify = false;
    this.signal = { IdSignaler: 0 };

    this.isReported = false;
    this.idUser = 1;

  }



  ngOnInit(): void {


    this.idAnnonce = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.annonceService.getannonceById(this.idAnnonce).subscribe((res: HttpResponse<Annonce>) => {
      this.annonce = res.body || { idAnnonce: 0 };
      console.log(res.body);
    });


    this.commentaireService.getComments(this.idAnnonce).subscribe((res: HttpResponse<commentAnnonce[]>) => {
      this.commentaires = res.body || [];
    });

    this.signalerAnnonceService.getSignaux(this.idAnnonce).subscribe((res: HttpResponse<commentAnnonce[]>) => {
      const signaux:SignalerAnnonce[] = res.body || [];
      console.log(signaux);
      if(signaux.length !==0){
        this.isReported = true;
      }
    });




  }

  fillStar(id: number): void {
    if (!document.getElementById("stars-container")!.classList.contains("active")) {
      switch (id) {
        case 1:
          document.getElementById("addStar-1")!.innerHTML = "<i class='fa fa-star'></i>"
          break;
        case 2:
          document.getElementById("addStar-1")!.innerHTML = "<i class='fa fa-star'></i>"
          document.getElementById("addStar-2")!.innerHTML = "<i class='fa fa-star'></i>"
          break;
        case 3:
          document.getElementById("addStar-1")!.innerHTML = "<i class='fa fa-star'></i>"
          document.getElementById("addStar-2")!.innerHTML = "<i class='fa fa-star'></i>"
          document.getElementById("addStar-3")!.innerHTML = "<i class='fa fa-star'></i>"
          break;
        case 4:
          document.getElementById("addStar-1")!.innerHTML = "<i class='fa fa-star'></i>"
          document.getElementById("addStar-2")!.innerHTML = "<i class='fa fa-star'></i>"
          document.getElementById("addStar-3")!.innerHTML = "<i class='fa fa-star'></i>"
          document.getElementById("addStar-4")!.innerHTML = "<i class='fa fa-star'></i>"
          break;
        case 5:
          document.getElementById("addStar-1")!.innerHTML = "<i class='fa fa-star'></i>"
          document.getElementById("addStar-2")!.innerHTML = "<i class='fa fa-star'></i>"
          document.getElementById("addStar-3")!.innerHTML = "<i class='fa fa-star'></i>"
          document.getElementById("addStar-4")!.innerHTML = "<i class='fa fa-star'></i>"
          document.getElementById("addStar-5")!.innerHTML = "<i class='fa fa-star'></i>"
          break;
      }
    }

  }

  unfillStar(id: number): void {
    if (!document.getElementById("stars-container")!.classList.contains("active")) {
      document.getElementById("addStar-1")!.innerHTML = "<i class='fa fa-star-o'></i>"
      document.getElementById("addStar-2")!.innerHTML = "<i class='fa fa-star-o'></i>"
      document.getElementById("addStar-3")!.innerHTML = "<i class='fa fa-star-o'></i>"
      document.getElementById("addStar-4")!.innerHTML = "<i class='fa fa-star-o'></i>"
      document.getElementById("addStar-5")!.innerHTML = "<i class='fa fa-star-o'></i>"
    }
  }

  saveRating(stars: number) {
    this.initStars();
    this.rate = stars;
    switch (stars) {
      case 1:
        document.getElementById("addStar-1")!.innerHTML = "<i class='fa fa-star'></i>"
        break;
      case 2:
        document.getElementById("addStar-1")!.innerHTML = "<i class='fa fa-star'></i>"
        document.getElementById("addStar-2")!.innerHTML = "<i class='fa fa-star'></i>"
        break;
      case 3:
        document.getElementById("addStar-1")!.innerHTML = "<i class='fa fa-star'></i>"
        document.getElementById("addStar-2")!.innerHTML = "<i class='fa fa-star'></i>"
        document.getElementById("addStar-3")!.innerHTML = "<i class='fa fa-star'></i>"
        break;
      case 4:
        document.getElementById("addStar-1")!.innerHTML = "<i class='fa fa-star'></i>"
        document.getElementById("addStar-2")!.innerHTML = "<i class='fa fa-star'></i>"
        document.getElementById("addStar-3")!.innerHTML = "<i class='fa fa-star'></i>"
        document.getElementById("addStar-4")!.innerHTML = "<i class='fa fa-star'></i>"
        break;
      case 5:
        document.getElementById("addStar-1")!.innerHTML = "<i class='fa fa-star'></i>"
        document.getElementById("addStar-2")!.innerHTML = "<i class='fa fa-star'></i>"
        document.getElementById("addStar-3")!.innerHTML = "<i class='fa fa-star'></i>"
        document.getElementById("addStar-4")!.innerHTML = "<i class='fa fa-star'></i>"
        document.getElementById("addStar-5")!.innerHTML = "<i class='fa fa-star'></i>"
        break;
    }
    document.getElementById("stars-container")!.classList.add("active");
  }

  initStars() {
    document.getElementById("addStar-1")!.innerHTML = "<i class='fa fa-star-o'></i>"
    document.getElementById("addStar-2")!.innerHTML = "<i class='fa fa-star-o'></i>"
    document.getElementById("addStar-3")!.innerHTML = "<i class='fa fa-star-o'></i>"
    document.getElementById("addStar-4")!.innerHTML = "<i class='fa fa-star-o'></i>"
    document.getElementById("addStar-5")!.innerHTML = "<i class='fa fa-star-o'></i>"
  }

  saveCommentaire(): void {
    const commentContent: string = (document.getElementById("commentTextarea") as HTMLTextAreaElement).value;

    if (this.rate === 0) {
      this.toastr.error('Error!', "rate manquant"); return;
    }

    const newCommentaire: commentAnnonce = {
      idAnnonce: this.annonce.idAnnonce,
      rate: this.rate,
      createdAt: new Date(),
      commentContent: (commentContent) ? commentContent : "", //if commentContent mawjouda najoutiw el valeur mteeha else chaine vide
    };


    this.commentaireService.create(newCommentaire).subscribe(
      (res: HttpResponse<commentAnnonce>) => {
        console.log("res body", res.body)
        if (res.status == 200) {
          this.toastr.success('Success!', "votre commentaire a ete ajoute avec succes");
          this.commentaires.push(res.body!); //ajouter elmnt à la liste
        }
      }
    )
  }

  prepareUpdateCommentaire(commentaire: commentAnnonce, positionInList: number): void {
    this.rate = commentaire.rate!;
    (document.getElementById("commentTextarea") as HTMLTextAreaElement).value = commentaire.commentContent!;
    this.modify = true;
    this.updatedCommentaire = commentaire;
    this.commentairePosition = positionInList
  }

  updateCommentaire(): void {

    const newCommentaire = {
      ...this.updatedCommentaire,
      rate: this.rate,
      commentContent: (document.getElementById("commentTextarea") as HTMLTextAreaElement).value,
      createdAt: new Date()
    }

    this.commentaireService.update(newCommentaire).subscribe(
      (res: HttpResponse<commentAnnonce>) => {
        console.log("res body", res.body)
        if (res.status == 200) {
          this.toastr.success('Success!', "votre commentaire a ete modifé avec succes");
          this.commentaires[this.commentairePosition] = newCommentaire;
          this.cancelUpdate();
        }
      }
    )
  }

  cancelUpdate(): void {
    this.rate = 0;
    (document.getElementById("commentTextarea") as HTMLTextAreaElement).value = "";
    this.modify = false;
    this.updatedCommentaire = {};
    this.commentairePosition = 0;
  }

  deleteComment(idComment:number): void {

    this.commentaireService.delete(idComment).subscribe(
      (res) => {
        if(res.status==200){
          console.log(res.body!);
        }
      },
      error => console.log(error)
    );

  
  }
  deleteAnnonce(): void {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.annonceService.delete(this.idAnnonce).subscribe(
        (res: HttpResponse<BackendResponse>) => {
          if (res.status == 200) {
            console.log(res.body!.message);
          }
        }
      );
    }
  }

 
  AjoutSignal(raison:string) {
    const newSignal: SignalerAnnonce = {
      idAnnonce: this.idAnnonce,
      description:  raison,
      dateCreation: new Date(),
    };


    this.signalerAnnonceService.create(newSignal).subscribe(
      (res: HttpResponse<BackendResponse>) => {
        
        if (res.status == 200) {
          this.toastr.success('Success!', res.body!.message);
          this.isReported = true;
        }
      }
    )
  }


  removeBadWords() {
    /*let filter = new Filter({ emptyList: true }); 
    let Filter = require('bad-words'),
    filter.clean("some sadist hells word!");
      //filter = new Filter();
   
  //console.log(filter.clean("berk","aaaa" ));
  }*/
  }

  
  
}
