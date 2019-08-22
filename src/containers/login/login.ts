import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})

export class LoginPage {
  constructor ( private _router: Router ) {}
  
  public login() {
    localStorage.setItem('access_token', 'token');
    this._router.navigate(['/']);
  }
}