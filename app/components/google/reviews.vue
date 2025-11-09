<script setup lang="ts">
import type {Database} from "#shared/utils/types";
type Review = Database["public"]["Tables"]["reviews"]["Insert"];

const {t} = useI18n();

const {data} = await useLazyAsyncData<Review[]>("google-reviews", () =>
    $fetch<Review[]>("/api/google/reviews")
);
</script>

<template>
    <UPageSection icon="mdi:star-circle-outline">
        <template #title>{{ t("index.testimonials.title") }}</template>
        <template #description>{{ t("index.testimonials.description") }}</template>
        <div class="flex flex-col items-stretch gap-6 md:flex-row">
            <div
                v-for="testimonial in data"
                :key="testimonial.author + testimonial.publish_time"
                class="dark:bg-muted flex min-w-0 flex-1 basis-0 flex-col justify-between rounded-lg bg-gray-50 p-6 shadow-sm">
                <div class="mb-2 flex justify-between gap-2">
                    <span class="text-yellow-500">Stars: {{ testimonial.rating }}</span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">
                        {{ testimonial.relative_time }}
                    </span>
                </div>
                <p class="mb-2 italic">“{{ testimonial.text }}”</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">— {{ testimonial.author }}</p>
            </div>
        </div>
    </UPageSection>
</template>
