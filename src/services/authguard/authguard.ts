import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor( private _router: Router ) {}

  canActivate() {
    if (this.isAuthenticated()) {
      return true;
    }

    this._router.navigate(['/login']);
    return false;
  }

  isAuthenticated() {
    let token = localStorage.getItem('access_token');

    if (token) {
      return true;
    }
    
    return false;
  }
}