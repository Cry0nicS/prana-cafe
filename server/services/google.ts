import type {Tables} from "#shared/utils/types";
import {PlacesClient} from "@googlemaps/places";
import {logger} from "~~/server/utils/logger";

type ReviewType = Tables<"reviews">;

export async function fetchGoogleReviews(): Promise<ReviewType[] | []> {
    const {googleApiKey, pranaPlaceId} = useRuntimeConfig();

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
