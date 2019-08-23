import { Component } from '@angular/core';
import { LinkHelper } from 'src/services/link-service/link-helper';
import { Router, NavigationEnd } from '@angular/router';
import { isDefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})

export class AppHeader {
  public homeLink = this._linkHelper.homePage();
  public loggedIn = false;

  constructor ( 
    private _router: Router,
    private _linkHelper: LinkHelper,
  ) { 
    _router.events.subscribe((val) => {
      if(val){
        let token = localStorage.getItem('access_token')
        this.loggedIn = isDefined(token) ? true : false;
      }
  });
  }

  public logout() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }
}