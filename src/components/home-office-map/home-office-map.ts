import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-office-map',
  templateUrl: './home-office-map.html',
  styleUrls: ['./home-office-map.scss']
})

export class HomeOfficeMap {
  @Input() firstFloor = true;
}