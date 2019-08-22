import { EmailAddress } from './email-address.interface';

// For a full list of fields, see
// https://docs.microsoft.com/graph/api/resources/attendee?view=graph-rest-1.0
export interface Attendee {
  status: {
    response: string,
    time: string
  };
  type: string; // required, optional, resource
  emailAddress: EmailAddress
}
