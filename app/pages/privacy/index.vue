<script setup lang="ts">
import {company} from "#shared/utils/constants";

const {t} = useI18n();

useSeoMeta({
    title: () => t("seo.privacy.title"),
    description: () => t("seo.privacy.description"),
    ogImage: "/images/hero.png"
});
</script>

<template>
    <UPage>
        <UPageHero>
            <template #title>
                <div class="flex items-center gap-3">
                    <UIcon name="mdi-shield-check" />
                    <h1 class="text-3xl font-bold">{{ t("privacy.title") }}</h1>
                </div>
            </template>
            <template #description>
                <p class="text-muted">{{ t("privacy.description") }}</p>
            </template>
        </UPageHero>

        <UPageSection>
            <UPageGrid
                cols="1 md:3"
                gap="6">
                <div class="md:col-span-1">
                    <UCard>
                        <h3 class="mb-2 text-lg font-semibold">
                            {{ t("privacy.section.controller.title") }}
                        </h3>
                        <p class="text-muted text-sm whitespace-pre-line">
                            {{ t("privacy.section.controller.content", company) }}
                        </p>
                        <USeparator class="my-2" />
                        <h3 class="mb-2 text-lg font-semibold">
                            {{ t("privacy.section.contact.title") }}
                        </h3>
                        <p class="text-muted text-sm">
                            {{ t("privacy.section.contact.content", company) }}
                        </p>
                        <div class="mt-3">
                            <UButton
                                as="a"
                                :href="`mailto:${company.email}`"
                                size="sm"
                                variant="outline">
                                {{ company.email }}
                            </UButton>
                        </div>
                    </UCard>
                </div>

                <div class="space-y-4 md:col-span-2">
                    <UCard>
                        <div class="prose max-w-none">
                            <section>
                                <h3 class="mb-2 text-xl font-semibold">
                                    {{ t("privacy.section.dataCollected.title") }}
                                </h3>
                                <p class="text-muted">
                                    {{ t("privacy.section.dataCollected.content") }}
                                </p>
                            </section>

                            <USeparator class="my-2" />

                            <section>
                                <h3 class="mb-2 text-xl font-semibold">
                                    {{ t("privacy.section.legalBasis.title") }}
                                </h3>
                                <p class="text-muted">
                                    {{ t("privacy.section.legalBasis.content") }}
                                </p>
                            </section>

                            <USeparator class="my-2" />

                            <section>
                                <h3 class="mb-2 text-xl font-semibold">
                                    {{ t("privacy.section.cookies.title") }}
                                </h3>
                                <p class="text-muted">
                                    {{ t("privacy.section.cookies.content") }}
                                </p>
                            </section>

                            <USeparator class="my-2" />

                            <section>
                                <h3 class="mb-2 text-xl font-semibold">
                                    {{ t("privacy.section.retention.title") }}
                                </h3>
                                <p class="text-muted">
                                    {{ t("privacy.section.retention.content") }}
                                </p>
                            </section>

                            <USeparator class="my-2" />

                            <section>
                                <h3 class="mb-2 text-xl font-semibold">
                                    {{ t("privacy.section.security.title") }}
                                </h3>
                                <p class="text-muted">
                                    {{ t("privacy.section.security.content") }}
                                </p>
                            </section>

                            <USeparator class="my-2" />

                            <section>
                                <h3 class="mb-2 text-xl font-semibold">
                                    {{ t("privacy.section.rights.title") }}
                                </h3>
                                <p class="text-muted">
                                    {{ t("privacy.section.rights.content", company) }}
                                </p>
                            </section>

                            <USeparator class="my-2" />

                            <section>
                                <h3 class="mb-2 text-xl font-semibold">
                                    {{ t("privacy.section.dispute.title") }}
                                </h3>
                                <p class="text-muted">
                                    {{ t("privacy.section.dispute.content") }}
                                </p>
                            </section>
                        </div>
                    </UCard>
                </div>
            </UPageGrid>
        </UPageSection>
    </UPage>
</template>
