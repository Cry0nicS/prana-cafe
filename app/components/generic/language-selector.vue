<script setup lang="ts">
import type {Locale} from "#shared/utils/types";

const {setLocale} = useI18n();

const items = [
    {
        label: $t("language.en"),
        value: "en" as Locale,
        onClick: () => setLocale("en")
    },
    {
        label: $t("language.de"),
        value: "de" as Locale,
        onClick: () => setLocale("de")
    }
];
</script>

<template>
    <UDropdownMenu :items="items">
        <UButton
            icon="mdi:translate"
            color="neutral"
            variant="ghost">
            {{ $t("language.label") }}
        </UButton>
    </UDropdownMenu>
</template>
