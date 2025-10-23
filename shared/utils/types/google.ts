export interface GoogleReview {
    /** The display name of the reviewer. */
    author: string;

    /** Star rating from 1 to 5 provided by the reviewer. */
    rating: number;

    /** The review text written by the user. */
    text: string;

    /**
     * Date string in seconds, representing when the review was published.
     */
    publishTime: string;

    /**
     * A relative description of when the review was published (e.g.
     * "2 weeks ago"). Note that this is localized and may change over time.
     */
    relativeTimeDescription?: string;
}
