import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAnnoncesComponent } from './admin-annonces/admin-annonces.component';
import { AdminComponent } from './admin/admin.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AnnonceAddComponent } from './annonce-add/annonce-add.component';
import { HomeComponent } from './home/home.component';
import { AnnonceEditComponent } from './annonce-edit/annonce-edit.component';
import { AnnonceDetailComponent } from './annonce-detail/annonce-detail.component';
import { ListfavorisComponent } from './components/listfavoris/listfavoris.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ListrechercheComponent } from './components/listrecherche/listrecherche.component';
import { DeleterechercheComponent } from './components/deleterecherche/deleterecherche.component';
import { AddrechercheComponent } from './components/addrecherche/addrecherche.component';
import { UpdaterechercheComponent } from './components/updaterecherche/updaterecherche.component';
import { AdsComponent } from './ads/ads.component';
import { EstimationComponent } from './estimation/estimation.component';

const routes: Routes = [
  { path: 'home' ,component: HomeComponent},
  { path: '' ,component: HomeComponent},
  { path: 'listfavoris' ,component: ListfavorisComponent},
  { path: 'listr' ,component: AddrechercheComponent},
  { path: 'accueil' ,component: AccueilComponent},
  { path: 'list' ,component: ListrechercheComponent},
  { path: 'add' ,component: DeleterechercheComponent},
  { path: 'annonces' ,component: AnnonceComponent},
  { path: 'hometest' ,component:  UpdaterechercheComponent},
  { path: 'annonces/add' ,component: AnnonceAddComponent},
  { path: 'annonces/edit/:id' ,component: AnnonceEditComponent},
  { path: 'annonces/detail/:id' ,component: AnnonceDetailComponent},
  { path: 'admin' ,component: AdminComponent},
  { path: 'admin/annonces' ,component: AdminAnnoncesComponent},
  {path:' Ads',component:AdsComponent},
  {path: '**', component: AdsComponent},
  {path:"estimation",component:EstimationComponent}
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
  AdminComponent,
  UpdaterechercheComponent,
  ListrechercheComponent,
  AdminAnnoncesComponent
];