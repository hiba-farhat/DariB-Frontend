import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { GoogleChartsModule } from 'angular-google-charts';





import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { FormsModule } from '@angular/forms';
import { AdminReclamationComponent } from './admin-reclamation/admin-reclamation.component';
import { BanqueComponent } from './banque/banque.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { CreditComponent } from './credit/credit.component';
import { CreditsimulationComponent } from './creditsimulation/creditsimulation.component';
import { PdfComponent } from './pdf/pdf.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminAddbankComponent } from './admin-addbank/admin-addbank.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    AdminReclamationComponent,
    BanqueComponent,
    ReclamationComponent,
    CreditComponent,
    CreditsimulationComponent,
    PdfComponent,
    AdminAddbankComponent
    
  ],
  imports: [
    BrowserModule,
    NgxSliderModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    GoogleChartsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass :'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing'
    })
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

