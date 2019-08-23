import { Component } from '@angular/core';


@Component({
  selector: 'home-page',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})

export class HomePage {
  public firstFloor = true;
  public isActive = false;
  public rooms = [
    {
      id: 'code',
      name: 'Code',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available Till 3 PM',
      available: true      
    },
    {
      id: 'theLab',
      name: 'The Lab',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available at 11 AM',
      available: false      
    },
    {
      id: 'gravity',
      name: 'Gravity',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available Till 1 PM',
      available: true      
    },
    {
      id: 'revloution',
      name: 'Revolution',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available Till 3:30 PM',
      available: true,      
    },{
      id: 'reaction',
      name: 'Reaction',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available Till 11:30 AM',
      available: true      
    },
    {
      id: 'pi',
      name: 'Pi',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available at 11 AM',
      available: false      
    },
    {
      id: 'think',
      name: 'Think',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available Till 3 PM',
      available: true      
    },
    {
      id: 'rainmaker',
      name: 'Rainmaker',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available Till 3 PM',
      available: true,      
    }
  ];

  public displayFloor(floor){
    if(floor === 1){
      this.firstFloor = true;
    }
    else if(floor === 2){
      this.firstFloor = false;
    }
  }
}