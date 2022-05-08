import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
import { SpaceValidator } from '../code-activation/space-validator';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class updatePasswordComponent implements OnInit {
  form: any = {};
  msg = '';
  email: string;
  password: string;
  confirmPassword: string;
  constructor(private userservice: UserService) {
    this.email= "";
this.password= "";
this.confirmPassword= "";
   }

  ngOnInit(): void {
  }

  updatePassword() {
    this.email = this.form.emailUser;
    this.password = this.form.password;
    this.confirmPassword = this.form.confirmPasswordUser;
    this.userservice.updatePassword(this.email, this.password, this.confirmPassword).subscribe(
      data => {
        console.log(data);
        this.msg = 'password updated succefully';
        this.form = '';
      },
      error => {
        console.log(error);
        this.msg = 'Password not matched';
      })
  }

}