import type {Database} from "#shared/utils/types";
import type {SupabaseClient} from "@supabase/supabase-js";
import type {H3Event} from "h3";
import {serverSupabaseClient} from "#supabase/server";
import {logger} from "~~/server/utils/logger";
type ReservationInsert = Database["public"]["Tables"]["reservations"]["Insert"];
type ReservationRow = Database["public"]["Tables"]["reservations"]["Row"];

export const fetchReservations = async (event: H3Event): Promise<ReservationRow[] | null> => {
    const client = await serverSupabaseClient<Database>(event);

    const {data} = await client
        .from("reservations")
        .select("*")
        .order("created_at", {ascending: false})
        .limit(3);

    return data;
};

/**
 * Insert reviews into the database while avoiding duplicates.
 *
 * - Queries existing reviews by the incoming `publish_time` timestamps.
 * - Deduplicates incoming reviews using the composite key: `publish_time + author`.
 * - Inserts only the reviews that are not already present and logs the result.
 */
export const insertReservation = async (
    client: SupabaseClient<Database>,
    reservation: ReservationInsert
): Promise<ReservationRow> => {
    const {data, error} = await client.from("reservations").insert(reservation).select().single();

    if (error) {
        logger.error("Failed to insert reservation.", {error});

        throw createError({
            statusCode: 500,
            statusMessage: error.message
        });
    }

    logger.info(`Inserted a new reservation into the database.`, {data});

    return data;
};
