import * as z from "zod";

export const ReservationSchema = z.object({
    firstName: z.string().trim().min(1, "Vorname ist erforderlich"),
    lastName: z.string().trim().min(1, "Nachname ist erforderlich"),
    email: z.email("Ungültige E‑Mail").trim().min(3, "E-Mail ist erforderlich"),
    phone: z
        .string()
        .regex(/^(?:\+\d{1,2}\s*)?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/, "invalid")
        .optional()
        .nullable(),
    message: z.string().trim().min(1, "Nachricht ist erforderlich"),
    guests: z
        .number()
        .int()
        .positive()
        .min(1, "Mindestens 1 Gast erforderlich")
        .max(20, "Maximal 20 Gäste erlaubt"),
    date: z.string().refine((val) => {
        const date = new Date(val);
        const now = new Date();
        now.setHours(0, 0, 0, 0); // set to start of today
        return !Number.isNaN(date.getTime()) && date >= now;
    }),
    privacyConsent: z
        .boolean()
        .default(false) // optional: gives you a default initial value
        .refine((v) => v === true, {
            message:
                "Bitte bestätigen Sie die Datenschutzerklärung und Ihre Einwilligung zur Kontaktaufnahme."
        })
});
