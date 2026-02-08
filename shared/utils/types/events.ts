export type EventSlug =
    | "community-xmas-dinner"
    | "christmas-brunch-buffet"
    | "community-breakfast"
    | "winter-celebration-dinner"
    | "cacao-journey-series";

export type EventMeta = {
    slug: EventSlug;
    image: string;
    tag?: string;
    dateIso: string; // ISO date used for sorting and status
};
