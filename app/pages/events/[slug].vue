<script setup lang="ts">
const route = useRoute();
const {t} = useI18n();
const localePath = useLocalePath();
const {events} = useEvents();

const slug = computed(() => route.params.slug as string);

const eventKey = computed(() => `events.items.${slug.value}`);

const exists = computed(() => events.some((e) => e.slug === slug.value));

useSeoMeta({
    title: () => (exists.value ? t(`${eventKey.value}.title`) : "Events"),
    description: () =>
        exists.value ? t(`${eventKey.value}.intro`) : t("seo.events.index.description")
});

const details = computed(() => {
    if (!exists.value) return null;
    const key = eventKey.value;
    return {
        title: t(`${key}.title`),
        intro: t(`${key}.intro`),
        date: t(`${key}.date`),
        time: t(`${key}.time`),
        location: t(`${key}.location`),
        price: t(`${key}.price`),
        concept: t(`${key}.concept`),
        menuNote: t(`${key}.menuNote`),
        expectations: t(`${key}.expectations`),
        reservation: t(`${key}.reservation`),
        forWho: t(`${key}.forWho`)
    };
});
</script>

<template>
    <UPage v-if="exists">
        <UPageHero
            :title="details?.title"
            :description="details?.intro"
            :headline="t('events.headline')"
            icon="mdi:party-popper"
            orientation="horizontal"
            :links="[
                {
                    label: t('index.event.cta.reservation.label'),
                    icon: 'mdi:calendar-check-outline',
                    to: localePath('/reservations')
                }
            ]">
            <NuxtImg
                format="webp"
                :src="`/images/events/posts/${slug}-hero.png`"
                :alt="details?.title"
                class="w-full overflow-hidden rounded-lg object-cover"
                placeholder />
        </UPageHero>

        <UPageSection :title="t('events.sections.details')">
            <div class="grid gap-4 md:grid-cols-2">
                <UCard>
                    <p class="font-semibold">{{ t("events.labels.date") }}</p>
                    <p>{{ details?.date }}</p>
                </UCard>
                <UCard>
                    <p class="font-semibold">{{ t("events.labels.time") }}</p>
                    <p>{{ details?.time }}</p>
                </UCard>
                <UCard>
                    <p class="font-semibold">{{ t("events.labels.location") }}</p>
                    <p>{{ details?.location }}</p>
                </UCard>
                <UCard>
                    <p class="font-semibold">{{ t("events.labels.price") }}</p>
                    <p>{{ details?.price }}</p>
                </UCard>
            </div>
        </UPageSection>

        <UPageSection
            id="features"
            :features="[
                {
                    icon: 'mdi:lightbulb-outline',
                    title: t('events.sections.concept'),
                    description: details?.concept
                },
                {
                    icon: 'mdi:check-decagram',
                    title: t('events.sections.expectations'),
                    description: details?.expectations
                },
                {
                    icon: 'mdi:account-group-outline',
                    title: t('events.sections.forWho'),
                    description: details?.forWho
                }
            ]"
            :ui="{
                title: 'text-left @container relative flex',
                description: 'text-left'
            }"
            class="relative overflow-hidden">
            <div
                class="bg-primary absolute top-10 -left-10 z-10 size-[300px] rounded-full opacity-30 blur-[200px]" />
            <div
                class="bg-primary absolute -right-10 -bottom-10 z-10 size-[300px] rounded-full opacity-30 blur-[200px]" />
            <template #title>
                <div class="flex items-center gap-2 text-2xl font-semibold">
                    <UIcon name="mdi:party-popper" />
                    <span>{{ t("events.sections.details") }}</span>
                </div>
            </template>
        </UPageSection>
    </UPage>
</template>
