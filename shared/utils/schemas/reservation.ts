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
    date: z.string().refine((val) => {
        const date = new Date(val);
        const now = new Date();
        now.setHours(0, 0, 0, 0); // set to start of today
        return !Number.isNaN(date.getTime()) && date >= now;
    }, "reservations.form.errors.date.invalid"),
    privacyConsent: z
        .boolean()
        .default(false)
        .refine((v) => v === true, {
            message: "reservations.form.errors.privacy.required"
        })
});
