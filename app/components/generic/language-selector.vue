<script setup lang="ts">
import {LOCALE_META} from "#shared/utils/constants";
import {extractLocaleCode} from "#shared/utils/helpers";

const {setLocale, t} = useI18n();

const items = [
    {
        label: t("language.en"),
        value: LOCALE_META.en,
        onClick: () => setLocale(extractLocaleCode(LOCALE_META.en))
    },
    {
        label: t("language.de"),
        value: LOCALE_META.de,
        onClick: () => setLocale(extractLocaleCode(LOCALE_META.de))
    },
    {
        label: t("language.fr"),
        value: LOCALE_META.fr,
        onClick: () => setLocale(extractLocaleCode(LOCALE_META.fr))
    }
];
</script>

<template>
    <UDropdownMenu :items="items">
        <UButton
            icon="mdi:translate"
            color="neutral"
            variant="ghost">
            <span class="hidden lg:inline">{{ t("language.label") }}</span>
        </UButton>
    </UDropdownMenu>
</template>
