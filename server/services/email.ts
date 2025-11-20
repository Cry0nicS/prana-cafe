import type {Database} from "#shared/utils/types";
import formData from "form-data";
import Mailgun from "mailgun.js";
import {logger} from "~~/server/utils/logger";
type ReservationRow = Database["public"]["Tables"]["reservations"]["Row"];

export const sendReservationEmail = async (reservation: ReservationRow) => {
    const {mailgunBaseUrl, mailgunKey} = useRuntimeConfig();

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
        username: "api",
        key: mailgunKey,
        url: mailgunBaseUrl
    });

    const textBody = `
        New reservation received:

        First name: ${reservation.first_name}
        Last name: ${reservation.last_name}
        Email: ${reservation.email}
        Phone: ${reservation.phone || "-"}
        Guests: ${reservation.guests}
        Date: ${reservation.date}
        Time: ${reservation.time}
        Message:
        ${reservation.message || "-"}
    `.trim();

    try {
        return mg.messages.create("mail.cafeprana.de", {
            "from": "Cafe Prana <reservation@mail.cafeprana.de>",
            "to": "cafeprana.berlin@gmail.com",
            "bcc": "info@cafeprana.de",
            "subject": `Reservation from ${reservation.first_name} ${reservation.last_name}`,
            "text": textBody,
            "h:Reply-To": reservation.email
        });
    } catch (error) {
        logger.error("Error sending reservation email", {error});

        throw error;
    }
};
