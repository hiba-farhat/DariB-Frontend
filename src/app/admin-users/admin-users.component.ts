import { Component, NgModule, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { UserService } from '../service/user.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { TokenStorageService } from '../service/token-storage.service';
import { Role } from '../entity/role';
//import { runInThisContext } from 'vm';


@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  public users: User[];
  public editUser?: User;
  public deleteUser?: User;
  public lockUser?: User;
  roleType = Role;
  lstRoles: Role[];

  selectedItems: any;

  alert: boolean = false

  constructor(public userservice: UserService, private httpClient: HttpClient, private token: TokenStorageService) {
    this.users = [];
    this.lstRoles=[]
  }
  currentUser: any;


  ngOnInit(): void {
    this.getAllUsers();
    this.currentUser = this.token.getUser();
    this.selectedItems = new Array<any>();

    this.userservice.getRoles().subscribe(
      data => {
        this.lstRoles = data;
      }
    )
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

  public searchUsers(key: string): void {
    const result: User[] = [];
    for (const user of this.users) {
      if (user.username.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || user.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || user.tel.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || user.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1) {

        result.push(user);
      }
    }
    this.users = result;
    if (result.length === 0 || !key) {
      this.getAllUsers();
    }
  }

  public onOpenModal(mode: string,user?: User ): void {
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

  getRoleName(e: any, name: any) {

    if (!e.target.checkbox) {
      console.log(name + ' checked');
      this.selectedItems.push(name);
    } else {
      console.log(name + ' not checked');
      //this.selectedItems=this.selectedItems.filter(m=>m!=name);
      this.selectedItems.push(name);

    }
    console.log(this.selectedItems);

  }


}
