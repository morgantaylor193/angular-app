import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

import { GraphService } from '../../services/graph.service';
import { EmailAddress } from '../../interfaces/email-address.interface';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  private rooms: EmailAddress[];

  constructor(
    private graphService: GraphService,
    private alertsService: AlertsService) { }

  ngOnInit() {
    this.graphService.getRooms()
      .then((rooms) => {
        this.rooms = rooms;
      });
  }
}
