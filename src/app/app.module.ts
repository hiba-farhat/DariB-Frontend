import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MatButtonModule } from '@angular/material/button';


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
//import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './users/login/login.component';
import { ChatComponent } from './users/chat/chat.component';
import { updatePasswordComponent } from './users/update-password/update-password.component';
import { CodeActivationComponent } from './users/code-activation/code-activation.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';



import { GoogleChartsModule } from 'angular-google-charts';
import { RendezVousServiceService } from './service/rendez-vous-service.service';
import { ListAbonnementComponent } from './gestion-abonnement/list-abonnement/list-abonnement.component';
import { AssuranceComponent } from './gestion-abonnement/assurance/assurance.component';
import { AddAbonnementComponent } from './gestion-abonnement/add-abonnement/add-abonnement.component';
import { PayementComponent } from './gestion-abonnement/payement/payement.component';
import { ModeleComponent } from './gestion-abonnement/modele/modele.component';
import { DetailleComponent } from './gestion-abonnement/detaille/detaille.component';
import { AddAssuranceComponent } from './gestion-abonnement/add-assurance/add-assurance.component';
import { AbonnementFrontComponent } from './gestion-abonnement/abonnement-front/abonnement-front.component';
import { NgxStripeModule } from 'ngx-stripe';
import { VisiteFrontComponent } from './visite-front/visite-front.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import {NgxPaginationModule} from 'ngx-pagination';

import { AdminReclamationComponent } from './admin-reclamation/admin-reclamation.component';
import { BanqueComponent } from './banque/banque.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { CreditComponent } from './credit/credit.component';
import { CreditsimulationComponent } from './creditsimulation/creditsimulation.component';
import { PdfComponent } from './pdf/pdf.component';

import { AdminAddbankComponent } from './admin-addbank/admin-addbank.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    VisiteFrontComponent,
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
    ListAbonnementComponent,
    AssuranceComponent,
    AddAbonnementComponent,
    PayementComponent,
    ModeleComponent,
    DetailleComponent,
    AddAssuranceComponent,
    AbonnementFrontComponent,
    AdminReclamationComponent,
    BanqueComponent,
    ReclamationComponent,
    CreditComponent,
    CreditsimulationComponent,
    PdfComponent,
    AdminAddbankComponent
   
    
  ],
  imports: [
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatCheckboxModule,
    MatFormFieldModule,
    SocialLoginModule,
    MatInputModule,
    MatSlideToggleModule,
    NgxPaginationModule,
    NgxStripeModule.forRoot('pk_test_51KsxypJ41Eoj1C0hmwkcIFqSraigdCpltjKzJCkWUah4bvT09FwP5a8uw7OSnigeMSzltOnd3tI9kyKK5WuJv8Gy00GOOw5RMM'),
    MatButtonModule
    
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [RendezVousServiceService,{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
       // NgbActiveModal,
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
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
