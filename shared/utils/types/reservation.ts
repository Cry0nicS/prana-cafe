import type {ReservationSchema} from "#shared/utils/schemas";
import type {CalendarDate, Time} from "@internationalized/date";
import type * as z from "zod";

export type Reservation = z.infer<typeof ReservationSchema>;

export interface ReservationForm {
    date: CalendarDate;
    time: Time;
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
    message: string;
    guests: number;
    privacyConsent: boolean;
}
