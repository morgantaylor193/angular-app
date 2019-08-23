import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActiveRoom } from 'src/services/activeRoom/active-room';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'home-office-map',
  templateUrl: './home-office-map.html',
  styleUrls: ['./home-office-map.scss']
})

export class HomeOfficeMap implements OnInit {
  @Input() firstFloor = true;
  public test = true;
  public activeRoom: string;
  private _componentUnsubscribe = new Subject<void>();

  constructor ( 
    private _activeRoom: ActiveRoom,
    private _cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._activeRoom.activeRoom.pipe(takeUntil(this._componentUnsubscribe)).subscribe((activeRoom: string) => {
      this.activeRoom = activeRoom;
      this.isAvailable(this.activeRoom);
      this._cdRef.detectChanges();
    });
  }

  public isAvailable(id){
    // get room status for id. 
    let isAvailable = true;

    if(isAvailable) {
      return false;
    }

    return false;
  }
}