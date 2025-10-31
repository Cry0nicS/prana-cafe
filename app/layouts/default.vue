<script setup lang="ts">
const {themedFavicon} = useUtils();
const {footer: navItems} = useNavItems();
</script>

<template>
    <div class="flex min-h-svh flex-col">
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
</template>
