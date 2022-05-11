import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ListfavorisComponent } from './components/listfavoris/listfavoris.component';
import { ListrechercheComponent } from './components/listrecherche/listrecherche.component';
import { AddRechComponent } from './components/add-rech/add-rech.component';
import { EstimationComponent } from './estimation/estimation.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AdsComponent } from './ads/ads.component';

import {NgxPaginationModule} from 'ngx-pagination';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    HomeComponent,
    ListfavorisComponent,
    ListrechercheComponent,
    AddRechComponent,
    EstimationComponent,
    AdsComponent
    
  
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    BrowserAnimationsModule ,
    MatButtonModule,
    NgxPaginationModule
    
    
    
  ],
  providers: [ReactiveFormsModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
