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
      name: 'Code',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available Till 3 PM',
      available: true,
      active: false
    },
    {
      name: 'The Lab',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available Till 3 PM',
      available: false,
      active: false
    },
    {
      name: 'Gravity',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available Till 3 PM',
      available: true,
      active: false
    },
    {
      name: 'Revolution',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available Till 3 PM',
      available: true, 
      active: false
    },{
      name: 'Reaction',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available Till 3 PM',
      available: true,
      active: false
    },
    {
      name: 'Pi',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available Till 3 PM',
      available: false,
      active: false
    },
    {
      name: 'Think',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available Till 3 PM',
      available: true,
      active: false
    },
    {
      name: 'Rainmaker',
      capacity: 6,
      location: 'First Floor',
      statusMessage: 'Available Till 3 PM',
      available: true, 
      active: false
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

  public makeActive(roomName) {
    let activeRoom = this.rooms.findIndex(room => room.name == roomName);

    if(this.rooms[activeRoom].active){
      this.rooms[activeRoom].active = false;
    }
    else {
      for(let i = 0; i < this.rooms.length; i++) {
        this.rooms[i].active = false;
        if(i === activeRoom) {
          this.rooms[i].active = true;
        }
      }
    }
  }
}