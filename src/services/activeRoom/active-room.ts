import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ActiveRoom {
  public activeRoom = new BehaviorSubject<string>('');

  public getActiveRoom(){
    return this.activeRoom;
  }

  public setActiveRoom(id) {
    this.activeRoom.next(id);
  }
}
