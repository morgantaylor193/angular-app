import { Component } from '@angular/core';
import { LinkHelper } from 'src/services/link-service/link-helper';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})

export class AppHeader {
  public userLoggedIn = false;
  public homeLink = this._linkHelper.homePage();

  constructor ( 
    private _linkHelper: LinkHelper,
    private _router: Router
  ) {
    if(!this.userLoggedIn) {
      this._router.navigate(['/login']);
    }
  }

  ngOnInit() {
    console.log(this.userLoggedIn);

  }
}