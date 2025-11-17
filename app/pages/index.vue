<script setup lang="ts">
const {t} = useI18n();
const localePath = useLocalePath();

useSeoMeta({
    title: () => t("seo.index.title"),
    description: () => t("seo.index.description"),
    ogImage: "/images/hero.png"
});

const menuImages = {
    waffle: "/images/menu/waffle.png",
    chai: "/images/menu/haselnuss-latte.png",
    bananaBread: "/images/menu/banana-bread.png",
    cacao: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
};

const galleryImages = [
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1550565088-49d86e5f7d5b?auto=format&fit=crop&w=900&q=80"
];

const heroLinks = computed(() => [
    {label: t("index.hero.links.menuHighlights"), to: "#menu"},
    {label: t("index.hero.links.getDirections"), to: "#directions"}
]);

const features = computed(() => [
    {
        icon: "mdi:allergy",
        title: t("index.features.glutenFree.title"),
        description: t("index.features.glutenFree.description")
    },
    {
        icon: "mdi:sprout-outline",
        title: t("index.features.plantBased.title"),
        description: t("index.features.plantBased.description")
    },
    {
        icon: "mdi:bowl-mix-outline",
        title: t("index.features.bowls.title"),
        description: t("index.features.bowls.description")
    },
    {
        icon: "mdi:heart-multiple-outline",
        title: t("index.features.community.title"),
        description: t("index.features.community.description")
    },
    {
        icon: "mdi:coffee-outline",
        title: t("index.features.drinks.title"),
        description: t("index.features.drinks.description")
    },
    {
        icon: "mdi:account-group-outline",
        title: t("index.features.experience.title"),
        description: t("index.features.experience.description")
    }
]);

const menuHighlights = computed(() => [
    {
        title: t("index.menu.items.waffle.title"),
        description: t("index.menu.items.waffle.description"),
        image: menuImages.waffle
    },
    {
        title: t("index.menu.items.chai.title"),
        description: t("index.menu.items.chai.description"),
        image: menuImages.chai
    },
    {
        title: t("index.menu.items.bananaBread.title"),
        description: t("index.menu.items.bananaBread.description"),
        image: menuImages.bananaBread
    },
    {
        title: t("index.menu.items.cacao.title"),
        description: t("index.menu.items.cacao.description"),
        image: menuImages.cacao
    }
]);

const faqs = computed(() => [
    {
        label: t("index.faq.items.glutenFree.question"),
        content: t("index.faq.items.glutenFree.answer")
    },
    {
        label: t("index.faq.items.reservations.question"),
        content: t("index.faq.items.reservations.answer")
    },
    {
        label: t("index.faq.items.pets.question"),
        content: t("index.faq.items.pets.answer")
    },
    {
        label: t("index.faq.items.takeaway.question"),
        content: t("index.faq.items.takeaway.answer")
    }
]);

const ctaLinks = computed(() => [
    {
        label: t("index.cta.links.getDirections"),
        icon: "mdi:map-outline",
        to: "https://maps.app.goo.gl/MToiG3VyXv7PB8kw9"
    },
    {
        label: t("index.cta.links.reservations"),
        icon: "mdi:calendar-check-outline",
        disabled: true,
        badge: {
            label: t("global.comingSoon"),
            variant: "outline",
            color: "neutral"
        }
    }
]);
</script>

<template>
    <UPage>
        <!-- Hero section introducing the café -->
        <UPageHero
            :title="t('index.hero.title')"
            :description="t('index.hero.description')"
            :headline="t('index.hero.headline')"
            orientation="horizontal"
            :links="heroLinks">
            <img
                src="https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774"
                alt="Prana Café interior"
                class="h-full w-full rounded-lg object-cover" />
        </UPageHero>

        <!-- Values / philosophy section using features -->
        <UPageSection icon="mdi:food-apple-outline">
            <template #title>{{ t("index.philosophy.title") }}</template>
            <template #description>{{ t("index.philosophy.description") }}</template>
            <UPageColumns>
                <UPageFeature
                    v-for="feature in features"
                    :key="feature.title"
                    :icon="feature.icon"
                    :title="feature.title"
                    :description="feature.description" />
            </UPageColumns>
        </UPageSection>

        <!-- Menu highlights in a responsive grid of cards -->
        <UPageSection
            id="menu"
            icon="mdi:food-outline">
            <template #title>{{ t("index.menu.title") }}</template>
            <template #description>{{ t("index.menu.description") }}</template>
            <UPageGrid class="gap-6 lg:grid-cols-2">
                <UPageCard
                    v-for="item in menuHighlights"
                    :key="item.title"
                    :title="item.title"
                    :description="item.description"
                    class="dark:bg-muted flex flex-col items-start bg-gray-50"
                    orientation="horizontal"
                    reverse>
                    <NuxtImg
                        :src="item.image"
                        :alt="item.title"
                        class="h-full w-full rounded-lg object-cover"
                        sizes="sm:100vw md:50vw lg:33vw"
                        placeholder />
                </UPageCard>
            </UPageGrid>
            <div class="flex justify-center">
                <UButton
                    class="mx-auto inline-flex w-full items-center justify-center gap-2 sm:w-auto"
                    icon="mdi:food-fork-drink"
                    size="xl"
                    color="info"
                    variant="solid"
                    :to="localePath('/menu')">
                    {{ t("index.menu.cta.label") }}
                </UButton>
            </div>
        </UPageSection>

        <!-- Visual gallery carousel -->
        <UPageSection icon="mdi:camera-outline">
            <template #title>{{ t("index.gallery.title") }}</template>
            <template #description>{{ t("index.gallery.description") }}</template>
            <UCarousel
                v-slot="{item}"
                loop
                :auto-scroll="{
                    speed: 2,
                    stopOnFocusIn: true,
                    stopOnMouseEnter: true,
                    stopOnInteraction: false
                }"
                :items="galleryImages"
                :wrap-around="true"
                class="overflow-hidden rounded-lg">
                <img
                    :src="item"
                    class="h-64 w-full object-cover"
                    alt="Prana Café photo" />
            </UCarousel>
        </UPageSection>

        <!-- Our story section with two columns -->
        <UPageSection icon="mdi:book-open-page-variant-outline">
            <template #title>{{ t("index.story.title") }}</template>
            <template #description>{{ t("index.story.description") }}</template>
            <UPageColumns class="lg:columns-2">
                <div class="prose dark:prose-invert">
                    <p class="text-justify">{{ t("index.story.text") }}</p>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
                    alt="Founders enjoying coffee"
                    class="h-72 w-full rounded-lg object-cover" />
            </UPageColumns>
        </UPageSection>

        <!-- Testimonials section -->
        <LazyGoogleReviews />

        <!-- FAQ section using accordion -->
        <UPageSection
            orientation="horizontal"
            :description="t('index.faq.description')"
            :title="t('index.faq.title')"
            icon="mdi:frequently-asked-questions">
            <UAccordion :items="faqs" />
        </UPageSection>

        <!-- Final call to action -->
        <UPageCTA
            id="directions"
            :title="t('index.cta.title')"
            :links="ctaLinks"
            orientation="horizontal"
            variant="outline"
            reverse
            class="mb-24">
            <template #description>
                {{ t("index.cta.description") }}
                <LazyElementsSchedule />
            </template>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.9518671037786!2d13.428888413148465!3d52.53430503505275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fb49a2ba2a9%3A0xa2e6d18bdc39e1de!2sCaf%C3%A9%20Prana!5e0!3m2!1sen!2sde!4v1762693543237!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" />
        </UPageCTA>
    </UPage>
</template>
