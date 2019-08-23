import { Component, Input } from '@angular/core';
import { iRoomData } from 'src/interfaces/room';
import { ActiveRoom } from 'src/services/activeRoom/active-room';

@Component({
  selector: 'room-card',
  templateUrl: './room-card.html',
  styleUrls: ['./room-card.scss']
})

export class RoomCard {
  @Input() roomData: iRoomData;
  public activeCard = false;

  constructor ( private _activeRoom: ActiveRoom ) {}
  
  public setActive(id) {
    this._activeRoom.setActiveRoom(id);
  }
  
  public getActive(id){
    let currentActive = this._activeRoom.getActiveRoom();

    if(currentActive.value === id){
      return true;
    }

    return false;
  }
}