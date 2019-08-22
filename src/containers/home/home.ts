import { Component } from '@angular/core';


@Component({
  selector: 'home-page',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})

export class HomePage {
  public firstFloor = true;

  public displayFloor(floor){
    if(floor === 1){
      this.firstFloor = true;
    }
    else if(floor === 2){
      this.firstFloor = false;
    }
  }
}