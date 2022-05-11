import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuardService implements CanActivate
{

  constructor(
    private router: Router,private token: TokenStorageService) { }

  canActivate() {
    if (this.token.getUser().roles.includes(null)
      || this.token.getUser().roles.includes("ROLE_ACHETEUR")
      || this.token.getUser().roles.includes("ROLE_VENDEUR")
      || this.token.getUser().roles.includes("ROLE_BAILLEUR")) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
