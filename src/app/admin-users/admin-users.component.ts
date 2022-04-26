import { Component, NgModule, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { UserService } from '../service/user.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms'


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

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
alert:boolean=false

  constructor(public userservice: UserService,private httpClient: HttpClient) { }
  currentUser: any;


  ngOnInit(): void {
    this.getAllUsers();
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
    this.userservice.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.getAllUsers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
    this.alert=true
  }

  closeAlert(){
    this.alert=false
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

  
/*   public onLockUser(UserId: number,status: boolean): void {
    this.userservice.lockUser(UserId,status).subscribe(
      (response: any) => {
        console.log(response);
        this.getAllUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  } */



  public onOpenModal(user: User  , mode: string): void {
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
      button.setAttribute('data-target', '#lockUserModal');
    }
    container?.appendChild(button);
    button.click();
  }


    
}
