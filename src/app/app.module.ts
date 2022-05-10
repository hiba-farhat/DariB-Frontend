import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';





import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';



import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './users/profile/profile.component';
import { ProfileSidebarComponent } from './users/profile-sidebar/profile-sidebar.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { LoginComponent } from './users/login/login.component';
import { ChatComponent } from './users/chat/chat.component';
import { updatePasswordComponent } from './users/update-password/update-password.component';
import { CodeActivationComponent } from './users/code-activation/code-activation.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';

import { GoogleChartsModule } from 'angular-google-charts';


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
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule,
    MatCheckboxModule,
    MatFormFieldModule,
    SocialLoginModule,
    MatInputModule,
    MatSlideToggleModule,
    GoogleChartsModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
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
      onError: (err: any) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
