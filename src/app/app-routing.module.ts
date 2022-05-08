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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'annonces', component: AnnonceComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/annonces', component: AdminAnnoncesComponent },
  { path: 'admin/users', component: AdminUsersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'update', component: updatePasswordComponent },
  { path: 'reset', component: ForgotPasswordComponent },
  { path: 'annonces/add', component: AnnonceAddComponent },
  { path: 'annonces/edit/:id', component: AnnonceEditComponent },
  { path: 'annonces/delete/:id', component: AnnonceComponent },
  { path: 'annonces/detail/:id', component: AnnonceDetailComponent },



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
  
  
];