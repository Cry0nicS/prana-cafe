import type {Tables} from "#shared/utils/types";
import type {H3Event} from "h3";
import {fallbackTestimonials} from "#shared/utils/constants";
import {PlacesClient} from "@googlemaps/places";
import {fetchReviews, insertReviews} from "~~/server/repositories/reviews";
import {logger} from "~~/server/utils/logger";

type ReviewType = Tables<"reviews">;

let cachedReviews: ReviewType[] | null = null;
let lastFetched = 0;

async function fetchGoogleReviews(event: H3Event): Promise<ReviewType[] | []> {
    const {googleApiKey, pranaPlaceId} = useRuntimeConfig(event);

    // Initialize Google PlacesClient.
    const placesClient = new PlacesClient(
        // Only provide API key in non-development environments.
        process.env.NUXT_PUBLIC_NODE_ENV === "development" ? {} : {apiKey: googleApiKey}
    );

    try {
        // Fetch place details with reviews field mask.
        const response = await placesClient.getPlace(
            {name: `places/${pranaPlaceId}`},
            {otherArgs: {headers: {"X-Goog-FieldMask": "reviews"}}}
        );

        const rawReviews = response[0]?.reviews;

        if (!rawReviews) return [];

        return rawReviews
            .map((review) => {
                const author: string = review.authorAttribution?.displayName ?? "Anonymouse user";
                const rating: number = typeof review.rating === "number" ? review.rating : 0;
                const text = review.text?.text ?? "Review cannot be displayed";
                const publish_time = (review.publishTime?.seconds as number) ?? 0;
                const relative_time = review.relativePublishTimeDescription || undefined;

                return {
                    author,
                    rating,
                    text,
                    publish_time,
                    relative_time
                } as ReviewType;
            })
            .sort((a, b) => {
                return b.publish_time - a.publish_time;
            })
            .slice(0, 3);
    } catch (error) {
        logger.error("Failed to fetch reviews from Google API", {
            error,
            // eslint-disable-next-line ts/no-explicit-any
            details: (error as any)?.details || (error as any)?.data || null
        });

        return [];
    }
}

/**
 * API endpoint to get reviews.
 * Returns cached reviews if available and not stale.
 * Otherwise, fetches from the database or Google Places API.
 */
export default defineEventHandler(async (event: H3Event) => {
    const CACHE_DURATION = 3 * 24 * 60 * 60 * 1000; // 3 days
    const now = Date.now();

    // Return cached version if still valid.
    if (cachedReviews && now - lastFetched < CACHE_DURATION) {
        logger.info("Returning cached Google reviews.");
        return cachedReviews;
    }

    // Fetch reviews from the database first.
    const reviews = await fetchReviews(event);
    if (reviews && reviews.length > 0) {
        // Return reviews from database if not stale.
        if (now - new Date(reviews[0]!.created_at).getTime() < CACHE_DURATION) {
            cachedReviews = reviews;
            lastFetched = now;

            return reviews;
        }
    }

    const googleReviews = await fetchGoogleReviews(event);

    if (googleReviews && googleReviews.length > 0) {
        logger.info(`Fetched ${googleReviews.length} reviews from Google Places API.`);
        await insertReviews(event, googleReviews);

        cachedReviews = googleReviews;
        lastFetched = now;
    }

    // Return database reviews if Google fetch fails. If none, return fallback testimonials.
    return cachedReviews ?? fallbackTestimonials;
});
