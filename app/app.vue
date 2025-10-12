<script setup lang="ts">
const {themedFavicon} = useUtils();

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
    link: [{rel: "icon", href: themedFavicon.value}]
});
</script>

<template>
    <UApp>
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>
