<script setup lang="ts">
import {company} from "#shared/utils/constants";

const sectionKeys = [
    "company",
    "contact",
    "supervisory",
    "liability",
    "links",
    "copyright",
    "dispute"
];

const {t} = useI18n();
const telHref = `tel:${company.phone.replace(/\s+/g, "")}`;
const mailHref = `mailto:${company.email}`;
</script>

<template>
    <UPage>
        <UPageSection>
            <UPageGrid
                cols="1 md:3"
                gap="6">
                <div class="md:col-span-1">
                    <UCard>
                        <div class="space-y-3">
                            <div>
                                <h2 class="text-lg font-semibold">
                                    {{ t("imprint.section.company.title") }}
                                </h2>
                                <p class="text-muted text-sm whitespace-pre-line">
                                    {{ t("imprint.section.company.content", company) }}
                                </p>
                            </div>

                            <USeparator class="my-2" />

                            <div>
                                <h2 class="text-lg font-semibold">
                                    {{ t("imprint.section.contact.title") }}
                                </h2>
                                <p class="text-muted mb-3 text-sm whitespace-pre-line">
                                    {{ t("imprint.section.contact.content", company) }}
                                </p>
                                <div class="flex flex-wrap gap-2">
                                    <UButton
                                        size="sm"
                                        as="a"
                                        :href="telHref"
                                        variant="outline">
                                        {{ t("imprint.section.contact.phoneLabel") }}:
                                        {{ company.phone }}
                                    </UButton>

                                    <UButton
                                        size="sm"
                                        as="a"
                                        :href="mailHref"
                                        variant="outline">
                                        {{ t("imprint.section.contact.emailLabel") }}
                                    </UButton>

                                    <UButton
                                        size="sm"
                                        as="a"
                                        :href="company.website"
                                        target="_blank"
                                        rel="noopener"
                                        variant="outline">
                                        {{ t("imprint.section.contact.websiteLabel") }}
                                    </UButton>
                                </div>
                            </div>
                        </div>
                    </UCard>
                </div>

                <div class="space-y-4 md:col-span-2">
                    <UCard>
                        <div class="prose max-w-none">
                            <template
                                v-for="(sectionKey, idx) in sectionKeys"
                                :key="idx">
                                <section
                                    v-if="sectionKey !== 'company' && sectionKey !== 'contact'">
                                    <h3 class="mb-2 text-xl font-semibold">
                                        {{ t(`imprint.section.${sectionKey}.title`) }}
                                    </h3>
                                    <p class="text-muted mb-4 whitespace-pre-line">
                                        {{ t(`imprint.section.${sectionKey}.content`, company) }}
                                    </p>
                                    <USeparator
                                        v-if="idx < sectionKeys.length - 1"
                                        class="my-2" />
                                </section>
                            </template>
                        </div>
                    </UCard>

                    <UCard tone="neutral">
                        <div class="flex items-center justify-between">
                            <div>
                                <h4 class="font-semibold">{{ company.name }}</h4>
                                <p class="text-sm text-gray-600">
                                    {{ company.street }} • {{ company.postalCodeCity }}
                                </p>
                            </div>
                            <ULink
                                :href="company.website"
                                target="_blank"
                                rel="noopener"
                                class="text-sm underline">
                                {{ company.website }}
                            </ULink>
                        </div>
                    </UCard>
                </div>
            </UPageGrid>
        </UPageSection>
    </UPage>
</template>
