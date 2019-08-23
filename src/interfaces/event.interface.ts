import { Attendee } from './attendee.interface';
import { DateTimeTimeZone } from './date-time-time-zone.interface';
import { Recipient } from './recipient.interface';

// For a full list of fields, see
// https://docs.microsoft.com/graph/api/resources/event?view=graph-rest-1.0
export interface Event {
  subject: string;
  organizer: Recipient;
  attendees?: Attendee[];
  start: DateTimeTimeZone;
  end: DateTimeTimeZone;
}
