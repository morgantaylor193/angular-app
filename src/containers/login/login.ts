import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})

export class LoginPage {
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }


  public async login(): Promise<void>  {
    await this._authService.signIn();
    localStorage.setItem('access_token', 'token');
    this._router.navigate(['/']);
  }
}