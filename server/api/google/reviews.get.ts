import type {GoogleReview} from "#shared/utils/types";
import {PlacesClient} from "@googlemaps/places";
import {logger} from "~~/server/utils/logger";

let cachedReviews: GoogleReview[] | null = null;
let lastFetched = 0;

export default defineEventHandler<Promise<GoogleReview[]>>(async (event) => {
    const {googleApiKey, pranaPlaceId} = useRuntimeConfig(event);

    const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
    const now = Date.now();

    // Return cached version if still valid.
    if (cachedReviews && now - lastFetched < CACHE_DURATION) {
        logger.info("Returning cached Google reviews.");
        return cachedReviews;
    }

    const placesClient = new PlacesClient({
        apiKey: googleApiKey
    });

    try {
        const response = await placesClient.getPlace(
            {name: `places/${pranaPlaceId}`},
            {otherArgs: {headers: {"X-Goog-FieldMask": "reviews"}}}
        );

        logger.info("Fetched new Google reviews from API.");

        const rawReviews = response[0]?.reviews;

        if (!rawReviews) return [];

        const reviews = rawReviews
            .map((rev) => {
                const author: string = rev.authorAttribution?.displayName ?? "Anonymouse user";
                const rating: number = typeof rev.rating === "number" ? rev.rating : 0;
                const text = rev.text?.text ?? "Review cannot be displayed";
                const publishTime = rev.publishTime?.seconds;
                const relativeTimeDescription: string | undefined =
                    rev.relativePublishTimeDescription || undefined;

                return {
                    author,
                    rating,
                    text,
                    publishTime,
                    relativeTimeDescription
                } as GoogleReview;
            })
            .sort((a, b) => {
                return Number.parseInt(b.publishTime) - Number.parseInt(a.publishTime);
            })
            .slice(0, 3);

        cachedReviews = reviews;
        lastFetched = now;

        return reviews;
    } catch (error) {
        // eslint-disable-next-line ts/no-explicit-any
        logger.error("Failed to fetch reviews from Google API", error as any);

        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch reviews from Google.",
            data: {details: error}
        });
    }
});
