<script setup lang="ts">
const showInfoBanner = ref(false);

onMounted(() => {
    const dismissed = localStorage.getItem("info-banner-dismissed");

    if (!dismissed) {
        showInfoBanner.value = true;
    }
});

function dismiss() {
    showInfoBanner.value = false;
    localStorage.setItem("info-banner-dismissed", "true");
}
</script>

<template>
    <div
        v-if="showInfoBanner"
        class="fixed top-17.5 z-50 w-full px-5">
        <UAlert
            :title="$t('infoBanner.description')"
            color="warning"
            variant="solid"
            icon="heroicons:information-circle"
            class="text-white"
            :actions="[
                {
                    label: $t('infoBanner.actionLabel'),
                    variant: 'solid',
                    color: 'info',
                    onClick: dismiss
                }
            ]" />
    </div>
</template>
