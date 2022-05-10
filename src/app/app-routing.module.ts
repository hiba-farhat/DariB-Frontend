import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAnnoncesComponent } from './admin-annonces/admin-annonces.component';
import { AdminComponent } from './admin/admin.component';


import { AnnonceComponent } from './annonce/annonce.component';
import { AnnonceAddComponent } from './annonce-add/annonce-add.component';

import { HomeComponent } from './home/home.component';
import { AnnonceEditComponent } from './annonce-edit/annonce-edit.component';
import { AnnonceDetailComponent } from './annonce-detail/annonce-detail.component';


import { AdminUsersComponent } from './admin-users/admin-users.component';
import { ProfileComponent } from './users/profile/profile.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { ChatComponent } from './users/chat/chat.component';
import { updatePasswordComponent } from './users/update-password/update-password.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { ListAbonnementComponent } from './gestion-abonnement/list-abonnement/list-abonnement.component';
import { AddAbonnementComponent } from './gestion-abonnement/add-abonnement/add-abonnement.component';
import { DetailleComponent } from './gestion-abonnement/detaille/detaille.component';
import { ModeleComponent } from './gestion-abonnement/modele/modele.component';
import { AssuranceComponent } from './gestion-abonnement/assurance/assurance.component';
import { AddAssuranceComponent } from './gestion-abonnement/add-assurance/add-assurance.component';
import { AbonnementFrontComponent } from './gestion-abonnement/abonnement-front/abonnement-front.component';

const routes: Routes = [
  { path: 'home' ,component: HomeComponent},
  { path: '' ,component: HomeComponent},
  { path: 'annonces' ,component: AnnonceComponent},
  { path: 'admin' ,component: AdminComponent},
  { path: 'admin/annonces' ,component: AdminAnnoncesComponent},
  { path: 'admin/users' ,component: AdminUsersComponent},
  {path:'profile',component:ProfileComponent},
  {path:'chat',component:ChatComponent},
  {path: 'update', component:updatePasswordComponent},
  {path: 'reset', component:ForgotPasswordComponent},
  { path: 'list-abonnement' ,component:ListAbonnementComponent},
  { path: 'add-abonnement' ,component:AddAbonnementComponent},
  { path: 'add-assurance' ,component:AddAssuranceComponent},
  {path: 'detaille/:id', component: DetailleComponent},
  {path: 'test', component:ModeleComponent  },
  {path: 'front', component:AbonnementFrontComponent  },
  { path: 'list-assurance' ,component:AssuranceComponent},
  { path: 'list-abonnement/:id' ,component:ListAbonnementComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [
  HomeComponent,
  AnnonceComponent,
  AdminComponent,
  AdminAnnoncesComponent,
  AdminUsersComponent,
  ProfileComponent,
  AdminSidebarComponent,
  AdminFooterComponent,
  AdminHeaderComponent,
  updatePasswordComponent,
  ForgotPasswordComponent,
  AnnonceAddComponent,
  AnnonceEditComponent,
  AnnonceDetailComponent,
  VisiteComponent,
  
  
];