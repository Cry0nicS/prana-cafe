import type {GoogleReview} from "#shared/utils/types";
import {PlacesClient} from "@googlemaps/places";

export default defineEventHandler<Promise<GoogleReview[]>>(async (event) => {
    // TODO: Use the Google API key in production.
    const {_googleApiKey, pranaPlaceId} = useRuntimeConfig(event);

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

        return rawReviews
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
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch reviews from Google.",
            data: {details: error}
        });
    }
});
