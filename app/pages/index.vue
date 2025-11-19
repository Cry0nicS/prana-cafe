<script setup lang="ts">
const {t} = useI18n();
const localePath = useLocalePath();

useSeoMeta({
    title: () => t("seo.index.title"),
    description: () => t("seo.index.description"),
    ogImage: "/images/hero.png"
});

const menuImages = {
    waffle: "/images/menu/herzhafte-waffel.png",
    chai: "/images/menu/chai-latte.png",
    bananaBread: "/images/menu/banana-bread.png",
    cacao: "/images/menu/cacao.png"
};

const galleryImages = [
    "/images/home/gallery/gallery-1.png",
    "/images/home/gallery/gallery-2.png",
    "/images/home/gallery/gallery-3.png",
    "/images/home/gallery/gallery-4.png",
    "/images/home/gallery/gallery-5.png"
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
        title: t("index.menu.items.cacao.title"),
        description: t("index.menu.items.cacao.description"),
        image: menuImages.cacao
    },
    {
        title: t("index.menu.items.bananaBread.title"),
        description: t("index.menu.items.bananaBread.description"),
        image: menuImages.bananaBread
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
        to: localePath("/reservations")
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
            <NuxtImg
                src="/images/hero.png"
                :alt="t('index.hero.title')"
                class="aspect-[2/3] h-full w-full max-w-[570px] overflow-hidden rounded-lg object-cover sm:max-w-[710px] md:max-w-[970px] lg:max-w-[550px]"
                format="webp"
                sizes="lg:550px md:970px sm:710px 570px"
                placeholder />
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
                        format="webp"
                        :src="item.image"
                        :alt="item.title"
                        class="h-full w-full max-w-[520px] rounded-lg object-cover sm:max-w-[275px] md:max-w-[400px] lg:max-w-[242px]"
                        sizes="520px sm:275px md:400px lg:242px"
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
                :ui="{item: 'sm:basis-2/3 md:basis-1/3'}"
                class="rounded-lg">
                <NuxtImg
                    format="webp"
                    :src="item"
                    :alt="`${t('index.gallery.title')}`"
                    class="h-full w-full max-w-[500px] overflow-hidden object-cover lg:aspect-[3/4]"
                    sizes="500px"
                    placeholder />
            </UCarousel>
        </UPageSection>

        <!-- My story section with two columns -->
        <UPageSection
            icon="mdi:book-open-page-variant-outline"
            orientation="horizontal"
            reverse>
            <template #title>{{ t("index.story.title") }}</template>
            <template #description>
                <div class="prose dark:prose-invert">
                    <p class="text-justify">{{ t("index.story.description") }}</p>
                </div>
            </template>

            <NuxtImg
                src="/images/home/my-story.png"
                :alt="t('index.story.title')"
                class="aspect-[2/3] h-full w-full max-w-[570px] overflow-hidden rounded-lg object-cover sm:max-w-[710px] md:max-w-[970px] lg:max-w-[550px]"
                format="webp"
                sizes="lg:550px md:970px sm:710px 570px"
                placeholder />
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
            class="mb-24">
            <template #description>
                {{ t("index.cta.description") }}
                <LazyElementsSchedule />
            </template>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.9518671037786!2d13.428888413148465!3d52.53430503505275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fb49a2ba2a9%3A0xa2e6d18bdc39e1de!2sCaf%C3%A9%20Prana!5e0!3m2!1sen!2sde!4v1762693543237!5m2!1sen!2sde"
                width="100%"
                class="h-[400px] w-full border-0 sm:h-[600px] lg:h-[100%]"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" />
        </UPageCTA>
    </UPage>
</template>
