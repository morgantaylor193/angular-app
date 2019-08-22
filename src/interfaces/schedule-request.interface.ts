import { DateTimeTimeZone } from './date-time-time-zone.interface';

// For a full list of fields, see
// https://docs.microsoft.com/graph/api/calendar-getschedule/event?view=graph-rest-beta
export interface ScheduleRequest {
    schedules: string[];
    startTime: DateTimeTimeZone;
    endTime: DateTimeTimeZone;
    availabilityViewInterval: number;
}