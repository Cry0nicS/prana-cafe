<script setup lang="ts">
const showCookieBanner = ref(false);

onMounted(() => {
    const dismissed = localStorage.getItem("cookie-banner-dismissed");

    if (!dismissed) {
        showCookieBanner.value = true;
    }
});

function dismiss() {
    showCookieBanner.value = false;
    localStorage.setItem("cookie-banner-dismissed", "true");
}
</script>

<template>
    <div
        v-if="showCookieBanner"
        class="fixed right-5 bottom-5 z-50 ml-5 lg:ml-0">
        <UAlert
            :title="$t('cookieBanner.title')"
            :description="$t('cookieBanner.description')"
            color="secondary"
            variant="solid"
            class="text-white"
            :close="{
                variant: 'solid'
            }"
            close-icon="mdi:close-circle-outline"
            @update:open="dismiss" />
    </div>
</template>
