import type {EventMeta} from "#shared/utils/types";

export const useEvents = () => {
    const {t} = useI18n();
    const localePath = useLocalePath();

    const events: EventMeta[] = [
        {
            slug: "community-xmas-dinner",
            image: "/images/events/posts/community-xmas-dinner.png",
            tag: t("events.items.christmas-events.badge"),
            dateIso: "2025-12-24"
        },
        {
            slug: "christmas-brunch-buffet",
            image: "/images/events/posts/christmas-brunch-buffet.png",
            tag: t("events.items.winter-celebration-dinner.badge"),
            dateIso: "2025-12-25"
        },
        {
            slug: "community-breakfast",
            image: "/images/events/posts/community-breakfast.png",
            tag: t("events.items.community-buffet.badge"),
            dateIso: "2025-12-28"
        },
        {
            slug: "winter-celebration-dinner",
            image: "/images/events/posts/winter-celebration-dinner.png",
            tag: t("events.items.winter-celebration-best-of.badge"),
            dateIso: "2026-01-05"
        }
    ];

    const mapToBlogPosts = () =>
        events.map((event) => {
            const itemKey = `events.items.${event.slug}` as const;
            return {
                title: t(`${itemKey}.title`),
                description: t(`${itemKey}.intro`),
                to: localePath(`/events/${event.slug}`),
                image: event.image,
                chip: event.tag,
                date: event.dateIso
            };
        });

    const splitByDate = () => {
        const now = new Date();
        const upcoming = events.filter((e) => new Date(e.dateIso) >= now);
        const past = events.filter((e) => new Date(e.dateIso) < now);

        return {upcoming, past};
    };

    const mapToBlogPostsByStatus = () => {
        const {upcoming, past} = splitByDate();

        return {
            upcoming: upcoming.map((event) => {
                const itemKey = `events.items.${event.slug}` as const;
                return {
                    title: t(`${itemKey}.title`),
                    description: t(`${itemKey}.intro`),
                    to: localePath(`/events/${event.slug}`),
                    image: event.image,
                    chip: event.tag,
                    date: event.dateIso
                };
            }),

            past: past.map((event) => {
                const itemKey = `events.items.${event.slug}` as const;
                return {
                    title: t(`${itemKey}.title`),
                    description: t(`${itemKey}.intro`),
                    to: localePath(`/events/${event.slug}`),
                    image: event.image,
                    chip: event.tag,
                    date: event.dateIso
                };
            })
        };
    };

    return {events, mapToBlogPosts, mapToBlogPostsByStatus};
};
