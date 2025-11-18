<script setup lang="ts">
const {t} = useI18n();
const localePath = useLocalePath();

useSeoMeta({
    title: () => t("seo.reservations.title"),
    description: () => t("seo.reservations.description"),
    ogImage: "/images/hero.png"
});

const features = ref([
    {
        title: t("reservations.features.request.title"),
        description: t("reservations.features.request.description"),
        icon: "mdi:shape-square-plus"
    },
    {
        title: t("reservations.features.confirmation.title"),
        description: t("reservations.features.confirmation.description"),
        icon: "mdi:clock-time-three-outline"
    },
    {
        title: t("reservations.features.email.title"),
        description: t("reservations.features.email.description"),
        icon: "mdi:email-alert-outline"
    },
    {
        title: t("reservations.features.special.title"),
        description: t("reservations.features.special.description"),
        icon: "mdi:allergy"
    },
    {
        title: t("reservations.features.changes.title"),
        description: t("reservations.features.changes.description"),
        icon: "mdi:sync",
        to: localePath("/privacy/contact")
    }
]);
</script>

<template>
    <UPage>
        <UPageSection
            :title="t('reservations.title')"
            :description="t('reservations.description')"
            icon="mdi-calendar-check"
            orientation="horizontal"
            :features="features">
            <UContainer class="mx-auto max-w-xl py-4">
                <ElementsReservation />
            </UContainer>
        </UPageSection>
    </UPage>
</template>
