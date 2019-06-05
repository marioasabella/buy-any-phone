import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  
    constructor(
      private router: Router,
      private authenticationService: AuthenticationService
    ){}
      
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.authenticationService.currentUserValue;
      if(currentUser) { 
        // authorised to return false
        this.router.navigate(['/productsList'], { queryParams: {returnUrl: state.url} });
        return false;
      }
      return true;
    }
}
