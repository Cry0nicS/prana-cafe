import type {Database} from "#shared/utils/types";
import type {H3Event} from "h3";
import {ReservationSchema} from "#shared/utils/schemas";
import {serverSupabaseClient} from "#supabase/server";
import * as z from "zod";
import {insertReservation} from "~~/server/repositories/reservations";
import {sendReservationEmail} from "~~/server/utils/email";
type ReservationInsertType = Database["public"]["Tables"]["reservations"]["Insert"];

export default defineEventHandler(async (event: H3Event) => {
    let reservation;

    let body;
    try {
        body = await readBody(event);
    } catch (error) {
        throw createError({
            statusCode: 400,
            statusMessage: "Error while reading reservation body",
            message: typeof error === "string" ? error : String(error),
            data: error
        });
    }

    const result = ReservationSchema.safeParse(body);

    if (!result.success) {
        throw createError({
            statusCode: 422,
            statusMessage: "Validation Error",
            message: z.prettifyError(result.error),
            data: result.error.issues
        });
    }

    const client = await serverSupabaseClient<Database>(event);

    try {
        const reservationData: ReservationInsertType = {
            date: result.data.date.toString(),
            email: result.data.email,
            first_name: result.data.firstName,
            guests: result.data.guests,
            last_name: result.data.lastName,
            message: result.data.message,
            phone: result.data.phone,
            time: result.data.time.toString()
        };

        reservation = await insertReservation(client, reservationData);

        await sendReservationEmail(reservation);
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Error while inserting reservation in the database",
            message: typeof error === "string" ? error : String(error),
            data: error
        });
    }

    return {
        message: "Reservation updated successfully",
        reservation
    };
});
