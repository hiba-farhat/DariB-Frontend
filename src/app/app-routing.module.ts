import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAnnoncesComponent } from './admin-annonces/admin-annonces.component';
import { AdminComponent } from './admin/admin.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { HomeComponent } from './home/home.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AdminReclamationComponent } from './admin-reclamation/admin-reclamation.component';
import { BanqueComponent } from './banque/banque.component';
import { CreditsimulationComponent } from './creditsimulation/creditsimulation.component';
import { PdfComponent } from './pdf/pdf.component';
import { AdminAddbankComponent } from './admin-addbank/admin-addbank.component';


const routes: Routes = [
  { path: 'home' ,component: HomeComponent},
  { path: 'annonces' ,component: AnnonceComponent},
  { path: 'admin' ,component: AdminComponent},
  { path: 'admin/annonces' ,component: AdminAnnoncesComponent},
  { path: 'reclamations', component: ReclamationComponent },
  { path: 'admin/reclamations', component: AdminReclamationComponent},
  { path: 'banques', component: BanqueComponent},
  {path :'simulateur', component: CreditsimulationComponent},
  {path: 'pdf', component: PdfComponent},
  {path:'admin/add-bank', component: AdminAddbankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [
  HomeComponent,
  AnnonceComponent,
  ReclamationComponent,
  BanqueComponent,
  CreditsimulationComponent,
  PdfComponent,
  
  AdminComponent,
  AdminAnnoncesComponent,
  AdminReclamationComponent,
  AdminAddbankComponent
];