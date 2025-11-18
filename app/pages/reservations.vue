<script setup lang="ts">
const {t} = useI18n();

useSeoMeta({
    title: () => t("seo.reservations.title"),
    description: () => t("seo.reservations.description"),
    ogImage: "/images/hero.png"
});
</script>

<template>
    <UPage>
        <UPageHero
            :title="t('index.hero.title')"
            :description="t('index.hero.description')"
            :headline="t('index.hero.headline')"
            orientation="horizontal">
            <img
                src="https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774"
                alt="Prana Café interior"
                class="h-full w-full rounded-lg object-cover" />
        </UPageHero>

        <UContainer class="mx-auto max-w-xl py-4">
            <ElementsReservation />
        </UContainer>
    </UPage>
</template>
