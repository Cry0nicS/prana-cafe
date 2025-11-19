<script setup lang="ts">
import {company} from "#shared/utils/constants";

const {t} = useI18n();

useSeoMeta({
    title: () => t("seo.contact.title"),
    description: () => t("seo.contact.description"),
    ogImage: "/images/hero.png"
});

const telHref = computed(() => `tel:${company.phone.replace(/\s+/g, "")}`);
const mailHref = computed(() => `mailto:${company.email}`);
const instagramUrl = "https://instagram.com/pranacafe";

const features = computed(() => [
    {
        title: t("contact.features.email.title"),
        description: t("contact.features.email.description"),
        icon: "mdi-email-outline",
        to: mailHref.value
    },
    {
        title: t("contact.features.phone.title"),
        description: t("contact.features.phone.description"),
        icon: "mdi-phone-outline",
        to: telHref.value
    },
    {
        title: t("contact.features.instagram.title"),
        description: t("contact.features.instagram.description"),
        icon: "mdi-instagram",
        to: instagramUrl
    }
]);
</script>

<template>
    <UPageSection
        icon="mdi-email-outline"
        variant="outline"
        :title="t('contact.pageTitle')"
        :description="t('contact.pageDescription')">
        <UPageColumns>
            <UPageFeature
                v-for="feature in features"
                :key="feature.title"
                :description="feature.description"
                :icon="feature.icon"
                :title="feature.title"
                :to="feature.to" />
        </UPageColumns>
    </UPageSection>
</template>
