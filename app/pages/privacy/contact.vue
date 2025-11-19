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

const features = ref([
    {
        title: t("contact.features.email.title"),
        description: t("contact.features.email.description"),
        icon: "mdi-email-outline",
        to: mailHref
    },
    {
        title: t("contact.features.phone.title"),
        description: t("contact.features.phone.description"),
        icon: "mdi-phone-outline",
        to: telHref
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
        :description="t('contact.pageDescription')"
        :features="features" />
</template>
