import type {Database} from "#shared/utils/types";
import type {SupabaseClient} from "@supabase/supabase-js";
import {logger} from "~~/server/utils/logger";

type Review = Database["public"]["Tables"]["reviews"]["Row"];

export const fetchReviews = async (client: SupabaseClient<Database>): Promise<Review[] | null> => {
    const {data} = await client
        .from("reviews")
        .select("*")
        .order("created_at", {ascending: false})
        .limit(3);

    return data;
};

/**
 * Fetch random reviews from the database.
 * Uses the "random_reviews" view to get a random selection.
 */
export const fetchRandomReviews = async (
    client: SupabaseClient<Database>
): Promise<Review[] | null> => {
    const {data} = await client.from("random_reviews").select("*").limit(3);

    return data as Review[];
};

/**
 * Insert reviews into the database while avoiding duplicates.
 *
 * - Queries existing reviews by the incoming `publish_time` timestamps.
 * - Deduplicates incoming reviews using the composite key: `publish_time + author`.
 * - Inserts only the reviews that are not already present and logs the result.
 */
export const insertReviews = async (
    client: SupabaseClient<Database>,
    reviews: Omit<Review, "id" | "created_at">[]
): Promise<void> => {
    if (!reviews || reviews.length === 0) {
        logger.info("No reviews provided to insert.");
        return;
    }

    // Build a unique list of published_at values to query existing reviews
    const publishedDates = Array.from(new Set(reviews.map((review) => review.publish_time)));

    // Fetch existing reviews that match those published_at timestamps
    const {data: existing, error} = await client
        .from("reviews")
        .select("publish_time, author, text")
        .in("publish_time", publishedDates);

    if (error) {
        logger.error("Failed to query existing reviews before insert.", {error});
        return;
    }

    const existingSet = new Set((existing ?? []).map((e) => `${e.publish_time}||${e.author}`));

    // Filter incoming reviews to only those not already present
    const toInsert = reviews.filter((r) => !existingSet.has(`${r.publish_time}||${r.author}`));

    if (toInsert.length === 0) {
        logger.info("No new reviews to insert.");
        return;
    }

    await client.from("reviews").insert(toInsert);

    logger.info(`Inserted ${toInsert.length} new review(s) into the database.`);
};
