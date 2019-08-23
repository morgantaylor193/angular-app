import { Component, Input } from '@angular/core';
import { iRoomData } from 'src/interfaces/room';

@Component({
  selector: 'room-card',
  templateUrl: './room-card.html',
  styleUrls: ['./room-card.scss']
})

export class RoomCard {
  @Input() roomData: iRoomData;
}