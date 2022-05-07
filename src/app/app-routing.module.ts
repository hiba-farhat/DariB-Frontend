import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAnnoncesComponent } from './admin-annonces/admin-annonces.component';
import { AdminComponent } from './admin/admin.component';


import { AnnonceComponent } from './annonce/annonce.component';
import { AnnonceAddComponent } from './annonce-add/annonce-add.component';

import { HomeComponent } from './home/home.component';
import { AnnonceEditComponent } from './annonce-edit/annonce-edit.component';
import { AnnonceDetailComponent } from './annonce-detail/annonce-detail.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: 'home' ,component: HomeComponent},
  { path: 'annonces' ,component: AnnonceComponent},
 
  { path: 'annonces/add' ,component: AnnonceAddComponent},
  { path: 'annonces/edit/:id' ,component: AnnonceEditComponent},
  { path: 'annonces/delete/:id' ,component: AnnonceComponent},
  { path: 'annonces/detail/:id' ,component: AnnonceDetailComponent},
  { path: 'admin' ,component: AdminComponent},
  { path: 'admin/annonces' ,component: AdminAnnoncesComponent},
  { path: 'admin/annonces/chart' ,component: ChartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [
  HomeComponent,
  AnnonceComponent,
  AnnonceAddComponent,
  AnnonceEditComponent,
  AnnonceDetailComponent,
  ChartComponent,

  AdminComponent,
  AdminAnnoncesComponent
];