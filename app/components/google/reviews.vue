<script setup lang="ts">
import type {GoogleReview} from "#shared/utils/types";

const {t} = useI18n();

const testimonials = await $fetch<GoogleReview[]>("/api/google/reviews", {
    method: "GET"
});
</script>

<template>
    <UPageSection>
        <template #title>{{ t("testimonials.title") }}</template>
        <template #description>{{ t("testimonials.description") }}</template>
        <UPageColumns class="flex flex-col lg:flex-row">
            <div
                v-for="testimonial in testimonials"
                :key="testimonial.author + testimonial.publishTime"
                class="dark:bg-muted flex h-full max-w-[350px] flex-col justify-between rounded-lg bg-gray-50 p-6 shadow-sm">
                <div class="mb-2 flex justify-between gap-2">
                    <span class="text-yellow-500">{{ testimonial.rating }}</span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">
                        {{ testimonial.relativeTimeDescription }}
                    </span>
                </div>
                <p class="mb-2 italic">“{{ testimonial.text }}”</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">— {{ testimonial.author }}</p>
            </div>
        </UPageColumns>
    </UPageSection>
</template>
