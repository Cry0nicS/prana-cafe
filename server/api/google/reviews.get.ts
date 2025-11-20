import type {Database, Tables} from "#shared/utils/types";
import type {H3Event} from "h3";
import {fallbackTestimonials} from "#shared/utils/constants";
import {serverSupabaseClient} from "#supabase/server";
import {fetchReviews} from "~~/server/repositories/reviews";

type ReviewType = Tables<"reviews">;

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 1 day
let cachedReviews: ReviewType[] | null = null;
let lastFetched = 0;

/**
 * API endpoint to get reviews.
 * Returns cached reviews if available and not stale.
 * Otherwise, fetches from the database.
 */
export default defineEventHandler(async (event: H3Event) => {
    const now = Date.now();

    // Return cached version if still valid.
    if (cachedReviews && now - lastFetched < CACHE_DURATION) {
        return cachedReviews;
    }

    // Fetch reviews from the database first.
    const client = await serverSupabaseClient<Database>(event);
    const reviews = await fetchReviews(client);

    if (reviews && reviews.length > 0) {
        // Update cache and timestamp, then return DB results.
        cachedReviews = reviews;
        lastFetched = now;

        return reviews;
    }

    // Return database reviews. If none, return fallback testimonials.
    return cachedReviews ?? fallbackTestimonials;
});
