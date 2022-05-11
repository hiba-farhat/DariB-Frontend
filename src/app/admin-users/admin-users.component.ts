import { Component, NgModule, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { UserService } from '../service/user.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { TokenStorageService } from '../service/token-storage.service';
import { Role } from '../entity/role';
import { Imageuser } from '../entity/imageuser';
import { Observable } from 'rxjs';
//import { runInThisContext } from 'vm';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})


export class AdminUsersComponent implements OnInit {
  public users: User[];
  public editUser: User;
  public deleteUser: User;
  public lockUser: User;
  public idImageUser: any;
  public idUserImage: any;
  selectedItems: any;
  nameImage: any;
  options = ['admin', 'acheteur', 'vendeur'];
  optionsMap = {
    admin: false,
    acheteur: false,
    vendeur: false,
  };
  optionsChecked = [];
  alert: boolean = false
  form: any = {};
  nbUsers: any;
  today: Date;
  maxAge: any;
  minAge: any;
age1:any;
age2:any;
nbDisabled:any;
  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: Imageuser;
  uploadImageURL = "http://localhost:8081/DariTn/imageUser/uploaded";
  affectImageToUserURL = "http://localhost:8081/DariTn/imageUser";
  retreiveAllImageURL = "http://localhost:8081/DariTn/imageUser/retreive-all-images";
  getImageIdURL = "http://localhost:8081/DariTn/imageUser/getIdByImageName/"


  constructor(public userservice: UserService, private httpClient: HttpClient,
    private token: TokenStorageService) {

  }
  currentUser: any;


  ngOnInit(): void {
    this.getAllUsers();
    this.userservice.getMinAgeUser();
    this.userservice.getCountUser();
    this.userservice.getMaxAgeUser();
    this.userservice.getNbDisabledUsers();

    this.currentUser = this.token.getUser();
    this.selectedItems = new Array<any>();
    this.nbUsers = this.userservice.getCountUser().subscribe(
      (response: any) => {
        console.log(response);
        this.nbUsers = response
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    this.minAge = this.userservice.getMinAgeUser().subscribe(
      (response: any) => {
        console.log(response);
        this.minAge = response;
        var timeDiff = Math.abs(Date.now() - this.minAge);
        this.age1 = Math.floor((timeDiff / (1000 * 3600 * 24))/365);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );


     this.maxAge = this.userservice.getMaxAgeUser().subscribe(
      (response: any) => {
        console.log(response);
        this.maxAge = response;
        var timeDiff = Math.abs(Date.now() - this.maxAge);
        this.age2 = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        console.log(this.age2);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    ); 

    this.nbDisabled = this.userservice.getNbDisabledUsers().subscribe(
      (response: any) => {
        console.log(response);
        this.nbDisabled = response;
       
        console.log(this.age2);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    ); 
  }

 /*  public CalculateAge(): void
     {
         if(this.minAge){
            var timeDiff = Math.abs(Date.now() - this.minAge);
            //Used Math.floor instead of Math.ceil
            //so 26 years and 140 days would be considered as 26, not 27.
            console.log()
            this.age1 = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        }
    } */
  updateCheckedOptions(option, event) {
    this.optionsMap[option] = event.target.checked;
  }

  updateOptions() {
    for (var x in this.optionsMap) {
      if (this.optionsMap[x]) {
        this.optionsChecked.push(x);
      }
    }
    this.options = this.optionsChecked;
    this.optionsChecked = [];
  }


  public getAllUsers(): void {
    this.userservice.getAllUsers().subscribe(
      (response: User[]) => {
        this.users = response;

        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public onAddUser(addForm: NgForm): void {
    document.getElementById('add-User-form')?.click();
    console.log(addForm.value);
    this.userservice.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.getAllUsers();
        this.userservice.getMinAgeUser();
        this.userservice.getCountUser();
        this.userservice.getMaxAgeUser();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
    this.alert = true
  }

  closeAlert() {
    this.alert = false
  }

  public onUpdateUser(User: User): void {
    this.userservice.editUser(User).subscribe(
      (response: any) => {
        console.log(response);
        this.getAllUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteUser(UserId: number): void {
    this.userservice.deleteUser(UserId).subscribe(
      (response: any) => {
        console.log(response);
        this.getAllUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onLockUser(User: User): void {
    this.userservice.lockUser(User).subscribe(
      (response: any) => {
        console.log(response);
        this.getAllUsers();
        this.userservice.getNbDisabledUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchUsers(key: string): void {
    const result: User[] = [];
    for (const user of this.users) {
      if (user.username.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || user.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || user.tel.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || user.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || user.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1

        || user.address.toLowerCase().indexOf(key.toLowerCase()) !== -1) {

        result.push(user);
      }
    }
    this.users = result;
    if (result.length === 0 || !key) {
      this.getAllUsers();
    }
  }

  public onOpenModal(user: User, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUserModal');
    }
    if (mode === 'edit') {
      this.editUser = user;
      button.setAttribute('data-target', '#updateUserModal');
    }
    if (mode === 'delete') {
      this.deleteUser = user;
      button.setAttribute('data-target', '#deleteUserModal');
    }
    if (mode === 'lock') {
      this.lockUser = user;
      button.setAttribute('data-target', '#LockUserModal');
    }
    container?.appendChild(button);
    button.click();
  }














}
