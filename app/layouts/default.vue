<script setup lang="ts">
import type {NavigationMenuItem} from "@nuxt/ui";
const {themedFavicon} = useUtils();
const localePath = useLocalePath();
const {t} = useI18n();

const navItems: NavigationMenuItem[] = [
    {
        label: t("pages.contact"),
        to: localePath("/privacy/contact"),
        icon: "mdi:email-outline"
    },
    {
        label: t("pages.imprint"),
        to: localePath("/privacy/imprint"),
        icon: "mdi:information-outline"
    },
    {
        label: t("pages.privacy"),
        to: localePath("/privacy"),
        icon: "mdi:shield-account-outline"
    }
];
</script>
<template>
    <div class="flex min-h-screen flex-col">
        <div class="flex grow justify-center">
            <div class="flex min-h-full w-full flex-col">
                <GenericHeader />

                <UMain class="grow">
                    <UContainer>
                        <slot />
                    </UContainer>
                </UMain>

                <ClientOnly>
                    <USeparator
                        orientation="horizontal"
                        :avatar="{
                            src: themedFavicon
                        }" />
                </ClientOnly>

                <GenericFooter>
                    <template #navigation>
                        <UNavigationMenu :items="navItems" />
                    </template>
                    <template #social>
                        <GenericThemeToggle>
                            <template #dark-mode>
                                <span>Light mode</span>
                            </template>
                            <template #light-mode>
                                <span>Dark mode</span>
                            </template>
                        </GenericThemeToggle>
                        <GenericLanguageSelector />
                    </template>
                </GenericFooter>
            </div>
        </div>
    </div>
</template>
