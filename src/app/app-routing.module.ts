import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAnnoncesComponent } from './admin-annonces/admin-annonces.component';
import { AdminComponent } from './admin/admin.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AdminUsersComponent} from './admin-users/admin-users.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './users/profile/profile.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { ChatComponent } from './users/chat/chat.component';
import { updatePasswordComponent } from './users/update-password/update-password.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { AuthorizeGuardService } from './service/AuthorizeGuardService.service';
import { AuthentifguardserviceService } from './service/AuthentifGuard.service';

const routes: Routes = [
  { path: 'home' ,component: HomeComponent},
  { path: '' ,component: HomeComponent},
  { path: 'annonces' ,component: AnnonceComponent},
  { path: 'admin' ,component: AdminComponent},
  { path: 'admin/annonces' ,component: AdminAnnoncesComponent, canActivate: [AuthorizeGuardService] },
  { path: 'admin/users' ,component: AdminUsersComponent},
  {path:'profile',component:ProfileComponent},
  {path:'chat',component:ChatComponent},
  {path: 'update', component:updatePasswordComponent},
  {path: 'reset', component:ForgotPasswordComponent}



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
  ForgotPasswordComponent

];