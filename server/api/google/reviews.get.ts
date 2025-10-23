import type {GoogleReview} from "#shared/utils/types";
import {PlacesClient} from "@googlemaps/places";

let cachedReviews: GoogleReview[] | null = null;
let lastFetched = 0;

export default defineEventHandler<Promise<GoogleReview[]>>(async (event) => {
    // TODO: Use the Google API key in production.
    const {_googleApiKey, pranaPlaceId} = useRuntimeConfig(event);

    const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
    const now = Date.now();

    // Return cached version if still valid.
    if (cachedReviews && now - lastFetched < CACHE_DURATION) {
        return cachedReviews;
    }

    const placesClient = new PlacesClient();

    try {
        const response = await placesClient.getPlace(
            {
                name: `places/${pranaPlaceId}`
            },
            {otherArgs: {headers: {"X-Goog-FieldMask": "reviews"}}}
        );

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
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch reviews from Google.",
            data: {details: error}
        });
    }
});
