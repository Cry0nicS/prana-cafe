import type {NavigationMenuItem} from "@nuxt/ui";
import {computed} from "vue";

export const useNavItems = () => {
    const {t, locale} = useI18n();
    const localePath = useLocalePath();

    const headerDesktop = computed<NavigationMenuItem[]>(() => {
        void locale.value;

        return [
            {
                label: t("pages.home"),
                to: localePath("/"),
                icon: "mdi:home-outline"
            },
            {
                label: t("pages.menu"),
                to: localePath("/menu"),
                icon: "mdi:food-fork-drink"
            },
            {
                label: t("pages.events"),
                to: localePath("/events"),
                icon: "mdi:party-popper"
            },
            {
                label: t("pages.reservations"),
                icon: "mdi:calendar-check-outline",
                to: localePath("/reservations")
            },
            {
                label: t("pages.contact"),
                to: localePath("/privacy/contact"),
                icon: "mdi:email-outline"
            }
        ];
    });

    const headerMobile = computed<NavigationMenuItem[]>(() => {
        void locale.value;

        return [
            {
                label: t("pages.home"),
                to: localePath("/"),
                icon: "mdi:home"
            },
            {
                label: t("pages.menu"),
                to: localePath("/menu"),
                icon: "mdi:food-fork-drink"
            },
            {
                label: t("pages.reservations"),
                icon: "mdi:calendar-check-outline",
                to: localePath("/reservations")
            },
            {
                label: t("pages.contact"),
                to: localePath("/privacy/contact"),
                icon: "mdi:email-outline"
            },
            {
                label: t("pages.imprint"),
                to: localePath("/privacy/imprint"),
                icon: "mdi:information-outline"
            },
            {
                label: t("pages.privacy"),
                to: localePath("/privacy"),
                icon: "mdi:shield-account-outline"
            },
            {
                label: t("pages.events"),
                to: localePath("/events"),
                icon: "mdi:party-popper"
            }
        ];
    });

    const footer = computed<NavigationMenuItem[]>(() => {
        void locale.value;

        return [
            {
                label: t("pages.contact"),
                to: localePath("/privacy/contact"),
                icon: "mdi:email-outline"
            },
            {
                label: t("pages.imprint"),
                to: localePath("/privacy/imprint"),
                icon: "mdi:information-outline"
            },
            {
                label: t("pages.privacy"),
                to: localePath("/privacy"),
                icon: "mdi:shield-account-outline"
            },
            {
                label: t("pages.events"),
                to: localePath("/events"),
                icon: "mdi:party-popper"
            }
        ];
    });

    return {footer, headerDesktop, headerMobile};
};
