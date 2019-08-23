import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GraphService } from 'src/services/graph.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public firstFloor = true;
  public isActive = false;
  // Mock Data
  // public rooms = [
  //   {
  //     id: 'code',
  //     name: 'Code',
  //     capacity: 6,
  //     location: 'First Floor',
  //     statusMessage: 'Available Till 3 PM',
  //     available: true      
  //   },
  //   {
  //     id: 'theLab',
  //     name: 'The Lab',
  //     capacity: 6,
  //     location: 'First Floor',
  //     statusMessage: 'Available at 11 AM',
  //     available: false      
  //   },
  //   {
  //     id: 'gravity',
  //     name: 'Gravity',
  //     capacity: 6,
  //     location: 'First Floor',
  //     statusMessage: 'Available Till 1 PM',
  //     available: true      
  //   },
  //   {
  //     id: 'revloution',
  //     name: 'Revolution',
  //     capacity: 6,
  //     location: 'First Floor',
  //     statusMessage: 'Available Till 3:30 PM',
  //     available: true,      
  //   },{
  //     id: 'reaction',
  //     name: 'Reaction',
  //     capacity: 6,
  //     location: 'First Floor',
  //     statusMessage: 'Available Till 11:30 AM',
  //     available: true      
  //   },
  //   {
  //     id: 'pi',
  //     name: 'Pi',
  //     capacity: 6,
  //     location: 'First Floor',
  //     statusMessage: 'Available at 11 AM',
  //     available: false      
  //   },
  //   {
  //     id: 'think',
  //     name: 'Think',
  //     capacity: 6,
  //     location: 'First Floor',
  //     statusMessage: 'Available Till 3 PM',
  //     available: true      
  //   },
  //   {
  //     id: 'rainmaker',
  //     name: 'Rainmaker',
  //     capacity: 6,
  //     location: 'First Floor',
  //     statusMessage: 'Available Till 3 PM',
  //     available: true,      
  //   }
  // ];

  public rooms: any;

  constructor(private authService: AuthService,
    private _graphService: GraphService) { }

  ngOnInit() {
    if(this.authService.authenticated){
      console.log('authenticated');
      this._graphService.getRooms()
      .then((rooms) => {
        console.log(rooms);
        this.rooms = rooms;
        console.log(this.rooms);
      });
    }
  }

  public displayFloor(floor){
    if(floor === 1){
      this.firstFloor = true;
    }
    else if(floor === 2){
      this.firstFloor = false;
    }
  }

  // async signIn(): Promise<void> {
  //   await this.authService.signIn();
  // }

}
