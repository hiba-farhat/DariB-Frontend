import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentifguardserviceService {
  constructor(
    private router: Router,private token: TokenStorageService) { }

  canActivate() {

       if (this.token.getUser()
      || this.token.getUser().stateUser=="false"
     ) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
