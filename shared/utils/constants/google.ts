import type {GoogleReview} from "../types";

export const fallbackTestimonials: GoogleReview[] = [
    {
        author: "Alice Smith",
        rating: 5,
        text: "Excellent service and friendly staff. Highly recommended!",
        publishTime: "1719878400",
        relativeTimeDescription: "2 days ago"
    },
    {
        author: "Bob Johnson",
        rating: 4,
        text: "Great experience overall, but the wait time was a bit long.",
        publishTime: "1719792000",
        relativeTimeDescription: "3 days ago"
    },
    {
        author: "Charlie Lee",
        rating: 5,
        text: "Absolutely loved it! Will come back for sure.",
        publishTime: "1719705600",
        relativeTimeDescription: "4 days ago"
    }
] as const;
