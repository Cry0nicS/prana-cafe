<script setup lang="ts"></script>
<template>
    <UHeader
        class="h-[70px]"
        :toggle="false">
        <template #title>
            <ColorScheme
                placeholder="Logo"
                tag="span">
                <ClientOnly>
                    <GenericLogo :size="40" />
                </ClientOnly>
            </ColorScheme>
        </template>
        <template #right>
            <GenericThemeToggle />
        </template>
    </UHeader>
</template>
