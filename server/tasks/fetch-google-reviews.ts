import type {Database} from "#shared/utils/types";
import {serverSupabaseClient} from "#supabase/server";
import {insertReviews} from "~~/server/repositories/reviews";
import {fetchGoogleReviews} from "~~/server/services/google";
import {logger} from "~~/server/utils/logger";
/**
 * This task fetches reviews from the Google Places API and stores them in the database.
 * The task is scheduled to run once per week to keep the reviews up to date.
 */
export default defineTask({
    meta: {
        name: "fetch-google-reviews",
        description: "Fetch reviews from Google Places API and store them in the database."
    },

    async run() {
        try {
            const event = useEvent();
            const client = await serverSupabaseClient<Database>(event);

            const reviews = await fetchGoogleReviews();

            if (reviews && reviews.length > 0) {
                logger.info(`Fetched ${reviews.length} reviews from Google Places API.`);

                // Store fetched reviews in the database.
                await insertReviews(client, reviews);
            }

            return {result: "Success"};
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: "Error executing fetch-google-reviews task",
                message: typeof error === "string" ? error : String(error),
                data: error
            });
        }
    }
});
