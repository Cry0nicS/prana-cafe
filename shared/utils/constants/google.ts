import type {Database} from "../types";

type Review = Database["public"]["Tables"]["reviews"]["Insert"];

export const fallbackTestimonials: Review[] = [
    {
        author: "Alice Smith",
        rating: 5,
        text: "Excellent service and friendly staff. Highly recommended!",
        publish_time: 1766348420,
        relative_time: "2 days ago"
    },
    {
        author: "Bob Johnson",
        rating: 4,
        text: "Great experience overall, but the wait time was a bit long.",
        publish_time: 1719792000,
        relative_time: "3 days ago"
    },
    {
        author: "Charlie Lee",
        rating: 5,
        text: "Absolutely loved it! Will come back for sure.",
        publish_time: 1766348420,
        relative_time: "4 days ago"
    }
] as const;
