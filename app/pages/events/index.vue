<script setup lang="ts">
const {t} = useI18n();
const localePath = useLocalePath();

const {mapToBlogPostsByStatus} = useEvents();

useSeoMeta({
    title: () => t("seo.events.index.title"),
    description: () => t("seo.events.index.description"),
    ogImage: "/images/events/index.png"
});

const postsByStatus = computed(() => mapToBlogPostsByStatus());
</script>

<template>
    <UPage>
        <UPageHero
            :title="t('events.title')"
            :description="t('events.description')"
            :headline="t('events.headline')"
            icon="mdi:party-popper"
            :links="[
                {
                    label: t('index.event.cta.reservation.label'),
                    icon: 'mdi:calendar-check-outline',
                    to: localePath('/reservations')
                }
            ]"
            orientation="horizontal">
            <template #default>
                <NuxtImg
                    src="/images/events/index.png"
                    :alt="t('events.description')"
                    class="h-full w-full max-w-[570px] overflow-hidden rounded-lg object-cover sm:max-w-[710px] md:max-w-[970px] lg:max-w-[550px]"
                    format="webp"
                    sizes="lg:550px md:970px sm:710px 570px"
                    placeholder />
            </template>
        </UPageHero>

        <UPageSection :title="t('events.sections.upcoming')">
            <UBlogPosts :posts="postsByStatus.upcoming" />
        </UPageSection>

        <UPageSection :title="t('events.sections.past')">
            <UBlogPosts :posts="postsByStatus.past" />
        </UPageSection>
    </UPage>
</template>
