import { Injectable } from '@angular/core';
import { Client } from '@microsoft/microsoft-graph-client';

import { AuthService } from './auth.service';
import { DateTimeTimeZone } from "../interfaces/date-time-time-zone.interface";
import { EmailAddress } from '../interfaces/email-address.interface';
import { Event } from '../interfaces/event.interface';
import { ScheduleRequest } from '../interfaces/schedule-request.interface';
import { AlertsService } from './alerts.service';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private graphClient: Client;
  constructor(
    private authService: AuthService,
    private alertsService: AlertsService) {

    // Initialize the Graph client
    this.graphClient = Client.init({
      authProvider: async (done) => {
        // Get the token from the auth service
        let token = await this.authService.getAccessToken()
          .catch((reason) => {
            done(reason, null);
          });

        if (token)
        {
          done(null, token);
        } else {
          done("Could not get an access token", null);
        }
      }
    });
  }

  async getEvents(): Promise<Event[]> {
    try {
      let result =  await this.graphClient
        .api('/me/events')
        .select('subject,organizer,start,end')
        .orderby('createdDateTime DESC')
        .get();

      return result.value;
    } catch (error) {
      this.alertsService.add('Could not get events', JSON.stringify(error, null, 2));
    }
  }

  async getRooms(): Promise<EmailAddress[]> {
    try {
      let result =  await this.graphClient
        .api('/me/findRooms(RoomList=\'LibertyCorporateOffice@drivetime.com\')')
        .version('beta')
        .get();

      console.log(2, result);
      return result.value;
    } catch (error) {
      console.log(error);
      this.alertsService.add('Could not get rooms', JSON.stringify(error, null, 2));
    }
  }

  async getSchedules(scheduleRequest: ScheduleRequest) {
    try {
      let result = await this.graphClient
        .api('/me/getSchedule')
        .post(scheduleRequest);

      return result.value;
    } catch (error) {
      this.alertsService.add('Could not get schedule', JSON.stringify(error, null, 2));
    }
  }

  async createEvent(event: Event) {
    try {
      let result = await this.graphClient
        .api('/me/events')
        .post(event);

      return result.value;
    } catch (error) {
      this.alertsService.add('Could not create event', JSON.stringify(error, null, 2));
    }
  }

  async updateEventEnd(eventEnd: DateTimeTimeZone) {
    try {

      let eventEnd = {

      }
      let result = await this.graphClient
        .api('/me/events')
        .patch(event);

      return result.value;
    } catch (error) {
      this.alertsService.add('Could not update event', JSON.stringify(error, null, 2));
    }
  }
}
