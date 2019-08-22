import { EmailAddress } from './email-address.interface';

// https://docs.microsoft.com/graph/api/resources/recipient?view=graph-rest-1.0
export interface Recipient {
  emailAddress: EmailAddress;
}
