<script setup lang="ts">
const {t} = useI18n();

// Images used in various sections (these remain static)
const menuImages = {
    avocado:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    rainbow:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    turmericLatte:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    berry: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    chickpeaWrap:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    matcha: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
};

const galleryImages = [
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1550565088-49d86e5f7d5b?auto=format&fit=crop&w=900&q=80"
];

// Dynamic arrays computed from translation keys
const heroLinks = computed(() => [
    {label: t("hero.links.ourPhilosophy"), to: "#philosophy"},
    {label: t("hero.links.menuHighlights"), to: "#menu"}
]);

const features = computed(() => [
    {
        icon: "mdi:allergy",
        title: t("features.glutenFree.title"),
        description: t("features.glutenFree.description")
    },
    {
        icon: "mdi:sprout-outline",
        title: t("features.plantBased.title"),
        description: t("features.plantBased.description")
    },
    {
        icon: "mdi:bowl-mix-outline",
        title: t("features.bowls.title"),
        description: t("features.bowls.description")
    },
    {
        icon: "mdi:heart-multiple-outline",
        title: t("features.community.title"),
        description: t("features.community.description")
    },
    {
        icon: "mdi:bowl-mix-outline",
        title: t("features.bowls.title"),
        description: t("features.bowls.description")
    },
    {
        icon: "mdi:heart-multiple-outline",
        title: t("features.community.title"),
        description: t("features.community.description")
    }
]);

const menuHighlights = computed(() => [
    {
        title: t("menu.items.avocado.title"),
        description: t("menu.items.avocado.description"),
        image: menuImages.avocado
    },
    {
        title: t("menu.items.rainbow.title"),
        description: t("menu.items.rainbow.description"),
        image: menuImages.rainbow
    },
    {
        title: t("menu.items.turmericLatte.title"),
        description: t("menu.items.turmericLatte.description"),
        image: menuImages.turmericLatte
    },
    {
        title: t("menu.items.berry.title"),
        description: t("menu.items.berry.description"),
        image: menuImages.berry
    },
    {
        title: t("menu.items.chickpeaWrap.title"),
        description: t("menu.items.chickpeaWrap.description"),
        image: menuImages.chickpeaWrap
    },
    {
        title: t("menu.items.matcha.title"),
        description: t("menu.items.matcha.description"),
        image: menuImages.matcha
    }
]);

const faqs = computed(() => [
    {
        label: t("faq.items.glutenFree.question"),
        content: t("faq.items.glutenFree.answer")
    },
    {
        label: t("faq.items.reservations.question"),
        content: t("faq.items.reservations.answer")
    },
    {
        label: t("faq.items.pets.question"),
        content: t("faq.items.pets.answer")
    },
    {
        label: t("faq.items.takeaway.question"),
        content: t("faq.items.takeaway.answer")
    }
]);

const ctaLinks = computed(() => [
    {label: t("cta.links.getDirections"), to: "https://maps.app.goo.gl/MToiG3VyXv7PB8kw9"},
    {label: t("cta.links.seeMore"), to: "#"}
]);
</script>

<template>
    <UPage>
        <!-- Hero section introducing the café -->
        <UPageHero
            :title="t('hero.title')"
            :description="t('hero.description')"
            :headline="t('hero.headline')"
            orientation="horizontal"
            :links="heroLinks">
            <img
                src="https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774"
                alt="Prana Café interior"
                class="h-full w-full rounded-lg object-cover" />
        </UPageHero>

        <!-- Values / philosophy section using features -->
        <UPageSection
            id="philosophy"
            icon="mdi:coffee-to-go-outline">
            <template #title>{{ t("philosophy.title") }}</template>
            <template #description>{{ t("philosophy.description") }}</template>
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
        <UPageSection id="menu">
            <template #title>{{ t("menu.title") }}</template>
            <template #description>{{ t("menu.description") }}</template>
            <UPageGrid class="gap-6 lg:grid-cols-2">
                <UPageCard
                    v-for="item in menuHighlights"
                    :key="item.title"
                    :title="item.title"
                    :description="item.description"
                    class="dark:bg-muted flex flex-col items-start bg-gray-50"
                    orientation="horizontal"
                    reverse>
                    <img
                        :src="item.image"
                        :alt="item.title"
                        class="w-full rounded-lg object-cover" />
                </UPageCard>
            </UPageGrid>
            <div class="flex justify-center">
                <UButton
                    class="mx-auto inline-flex w-full items-center justify-center gap-2 sm:w-auto"
                    icon="mdi:food-fork-drink"
                    size="xl"
                    color="info"
                    variant="solid"
                    to="https://www.google.com/search?q=google.com+menu+coming+soon&sourceid=chrome&ie=UTF-8"
                    target="_blank">
                    {{ t("menu.cta.label") }}
                </UButton>
            </div>
        </UPageSection>

        <!-- Visual gallery carousel -->
        <UPageSection>
            <template #title>{{ t("gallery.title") }}</template>
            <template #description>{{ t("gallery.description") }}</template>
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
        <UPageSection>
            <template #title>{{ t("story.title") }}</template>
            <template #description>{{ t("story.description") }}</template>
            <UPageColumns class="lg:columns-2">
                <div class="prose dark:prose-invert">
                    <p>{{ t("story.paragraph1") }}</p>
                    <p>{{ t("story.paragraph2") }}</p>
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
            :description="t('faq.description')"
            :title="t('faq.title')"
            icon="mdi:frequently-asked-questions">
            <UAccordion :items="faqs" />
        </UPageSection>

        <!-- Final call to action -->
        <UPageCTA
            :title="t('cta.title')"
            :description="t('cta.description')"
            :links="ctaLinks"
            class="mb-24" />
    </UPage>
</template>
