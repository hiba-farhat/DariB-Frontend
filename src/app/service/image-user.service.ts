import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminUsersComponent } from '../admin-users/admin-users.component';
import { Imageuser } from '../entity/imageuser';

@Injectable({
  providedIn: 'root'
})
export class ImageUserService {
  idImageUser:any;
  idUserImage:any;
  nameImage:any;
  uploadImageURL = "http://localhost:8081/DariTn/imageUser/uploaded";
  affectImageToClientURL = "http://localhost:8081/DariTn/imageUser/affect-image-to-user";
  retreiveAllImageURL = "http://localhost:8081/DariTn/imageUser/retreive-all-images";
  getImageIdURL="http://localhost:8081/DariTn/imageUser/getIdByImageName/"
  constructor(private imagehttp: HttpClient, private router: Router) { 

  }

  uploadImage(image: Imageuser): Observable<any> {
    console.log(image.idImageUser);
    return this.imagehttp.post(this.uploadImageURL, image);
  }

  affectImageToClient(image: Imageuser): Observable<any> {
    return this.imagehttp.post(this.affectImageToClientURL, image);
  }

  retreiveAllImage(): Observable<any> {
    return this.imagehttp.get(this.retreiveAllImageURL);
  }
  getImageId(imageName:any ) {
    return this.imagehttp.get(this.getImageIdURL+this.nameImage).subscribe(
      (response: any) => {
        console.log(response);
        this.idImageUser=response
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  idUserForImage( ) {
    return this.imagehttp.get("http://localhost:8081/DariTn/user/idUserForImage").subscribe(
      (response: any) => {
        console.log(response);
        this.idUserImage=response
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
 
}