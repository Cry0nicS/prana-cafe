<script setup lang="ts">
import type {GoogleReview} from "#shared/utils/types";

const {t} = useI18n();

// Use Nuxt's useAsyncData so the result is fetched on the server and
// properly dehydrated to the client — avoiding a second client-side fetch
// during hydration which causes the endpoint to be called twice.
const {data} = await useLazyAsyncData<GoogleReview[]>("google-reviews", () =>
    $fetch<GoogleReview[]>("/api/google/reviews")
);
</script>

<template>
    <UPageSection>
        <template #title>{{ t("testimonials.title") }}</template>
        <template #description>{{ t("testimonials.description") }}</template>
        <div class="flex flex-col items-stretch gap-6 md:flex-row">
            <div
                v-for="testimonial in data"
                :key="testimonial.author + testimonial.publishTime"
                class="dark:bg-muted flex min-w-0 flex-1 basis-0 flex-col justify-between rounded-lg bg-gray-50 p-6 shadow-sm">
                <div class="mb-2 flex justify-between gap-2">
                    <span class="text-yellow-500">Stars: {{ testimonial.rating }}</span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">
                        {{ testimonial.relativeTimeDescription }}
                    </span>
                </div>
                <p class="mb-2 italic">“{{ testimonial.text }}”</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">— {{ testimonial.author }}</p>
            </div>
        </div>
    </UPageSection>
</template>
