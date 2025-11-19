import {CalendarDate, Time} from "@internationalized/date";
import * as z from "zod";

export const ReservationSchema = z.object({
    firstName: z.string().trim().min(1, "reservations.form.errors.firstName.required"),
    lastName: z.string().trim().min(1, "reservations.form.errors.lastName.required"),
    email: z
        .email("reservations.form.errors.email.invalid")
        .trim()
        .min(5, "reservations.form.errors.email.required"),
    phone: z
        .string()
        .regex(
            /^(?:\+\d{1,2}\s*)?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/,
            "reservations.form.errors.phone.invalid"
        )
        .nullish(),
    message: z.string().trim().nullish(),
    guests: z
        .number()
        .int()
        .positive()
        .min(1, "reservations.form.errors.guests.min")
        .max(20, "reservations.form.errors.guests.max"),
    date: z
        .custom<CalendarDate>(
            (val) => {
                // Runtime instance/type validation
                if (!(val instanceof CalendarDate)) return false;

                // Build a comparable 'today' CalendarDate
                const now = new Date();
                const today = new CalendarDate(
                    now.getFullYear(),
                    now.getMonth() + 1,
                    now.getDate()
                );

                // Check that val is today or in the future
                return val.compare(today) >= 0;
            },
            {
                message: "reservations.form.errors.date.invalid"
            }
        )
        .transform((val) => val.toString()),
    time: z
        .custom<Time>(
            (val) => {
                // Check instance and properties
                if (!(val instanceof Time)) return false;
                if (val.hour < 7) return false;
                if (val.hour > 16) return false;
                return !(val.hour === 16 && val.minute > 0);
            },
            {
                message: "reservations.form.errors.time.invalid"
            }
        )
        .transform((val) => val.toString()),
    privacyConsent: z
        .boolean()
        .default(false)
        .refine((v) => v === true, {
            message: "reservations.form.errors.privacy.required"
        })
});
