import { Component } from '@angular/core';
import { LinkHelper } from 'src/services/link-service/link-helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})

export class AppHeader {
  public homeLink = this._linkHelper.homePage();

  constructor ( 
    private _linkHelper: LinkHelper,
  ) { }
}