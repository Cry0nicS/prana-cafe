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
        .regex(/^(?=.*\d)\+?\d(?: ?\d)*$/, "reservations.form.errors.phone.invalid")
        .or(z.literal(""))
        .transform((val) => (val === "" ? null : val))
        .nullable(),
    message: z.string().trim().nullish(),
    guests: z
        .number()
        .int()
        .positive()
        .min(1, "reservations.form.errors.guests.min")
        .max(20, "reservations.form.errors.guests.max"),
    date: z
        .object({
            year: z.number(),
            month: z.number(),
            day: z.number()
        })
        .refine(
            (d) => {
                const date = new CalendarDate(d.year, d.month, d.day);
                const now = new CalendarDate(
                    new Date().getFullYear(),
                    new Date().getMonth() + 1,
                    new Date().getDate()
                );
                return date.compare(now) >= 0;
            },
            {
                message: "reservations.form.errors.date.invalid"
            }
        )
        .transform((d) => new CalendarDate(d.year, d.month, d.day)),
    time: z
        .object({
            hour: z.number(),
            minute: z.number().optional().default(0),
            second: z.number().optional().default(0)
        })
        .refine(
            (t) => {
                if (t.hour < 7) return false;
                if (t.hour > 16) return false;
                return !(t.hour === 16 && t.minute > 0);
            },
            {
                message: "reservations.form.errors.time.invalid"
            }
        )
        .transform((t) => new Time(t.hour, t.minute, t.second)),
    privacyConsent: z
        .boolean()
        .default(false)
        .refine((v) => v === true, {
            message: "reservations.form.errors.privacy.required"
        })
});
