<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";

const {themedFavicon} = useUtils();
const {locale} = useI18n();

const lang = computed(() => locales[locale.value].code);

// TODO: Translate all static text.
useSeoMeta({
    title: "Prana Cafe",
    description: "Prana Cafe",
    ogTitle: "Prana Cafe",
    ogDescription: "Prana Cafe",
    ogType: "website",
    ogLocale: "de_DE"
});

useHead({
    link: [{rel: "icon", href: themedFavicon}],
    htmlAttrs: {
        lang
    }
});
</script>

<template>
    <UApp :locale="locales[locale]">
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>
