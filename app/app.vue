<script setup lang="ts">
import {extractLocaleIso} from "#shared/utils/helpers";
import * as locales from "@nuxt/ui/locale";

const {themedFavicon} = useUtils();
const {locale} = useI18n();

const lang = computed(() => locales[locale.value].code);

useSeoMeta({
    ogType: "website",
    ogLocale: () => extractLocaleIso(locale.value),
    robots: "index,follow",
    twitterCard: "summary_large_image"
});

useHead({
    link: [{rel: "icon", href: themedFavicon}],
    htmlAttrs: {
        lang
    }
});

useScriptCloudflareWebAnalytics({
    token: useRuntimeConfig().public.scripts.cloudflareWebAnalytics.token,
    scriptOptions: {
        trigger: "onNuxtReady"
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
        <GenericInfoBanner />
        <GenericCookieBanner />
    </UApp>
</template>
