import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})

export class AppFooter implements OnInit {
  public copywriteYear = '';
  public currentYear = (new Date()).getFullYear();

  ngOnInit() {
    this.copywriteYear = this.currentYear != 2019 ? `2019 - ${this.currentYear}` : '2019';
  }
}