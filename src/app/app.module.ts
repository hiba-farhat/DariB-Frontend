import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import {  ProfileComponent } from './users/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileSidebarComponent } from './users/profile-sidebar/profile-sidebar.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './users/login/login.component';
import { ChatComponent } from './users/chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { updatePasswordComponent } from './users/update-password/update-password.component';
import { CodeActivationComponent } from './users/code-activation/code-activation.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { ToastrModule } from 'ngx-toastr';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import { ChangepasswordComponent } from './changepassword/changepassword.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    ProfileComponent,
    ProfileSidebarComponent,
    AdminUsersComponent,
    LoginComponent,
    ChatComponent,
    updatePasswordComponent,
    CodeActivationComponent,
    ForgotPasswordComponent,
    ChangepasswordComponent,
    
  ],
  imports: [
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    SocialLoginModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '947770575510-d7tlf1akkns5h1gairb5e6r2i2csn72u.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('3000859393558507')
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
