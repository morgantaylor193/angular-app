import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-office-map',
  templateUrl: './home-office-map.html'
})

export class HomeOfficeMap {
  @Input() firstFloor = true;
}