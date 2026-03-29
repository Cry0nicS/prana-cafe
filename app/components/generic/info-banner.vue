<script setup lang="ts">
import {INFO_BANNER_DISPLAY_UNTIL, INFO_BANNER_VERSION} from "#shared/utils/constants";

const showInfoBanner = ref(false);

onMounted(() => {
    const dismissed = localStorage.getItem(`info-banner-dismissed-april-${INFO_BANNER_VERSION}`);

    if (!dismissed && new Date() < INFO_BANNER_DISPLAY_UNTIL) {
        showInfoBanner.value = true;
    }
});

function dismiss() {
    showInfoBanner.value = false;
    localStorage.setItem(`info-banner-dismissed-${INFO_BANNER_VERSION}`, "true");
}
</script>

<template>
    <div
        v-if="showInfoBanner"
        class="fixed top-17.5 z-50 w-full px-5">
        <UBanner
            :title="$t('infoBanner.description')"
            color="warning"
            variant="solid"
            icon="heroicons:information-circle"
            class="text-white"
            :ui="{
                root: 'h-auto min-h-0 items-start',
                container: 'h-auto min-h-0 items-start py-4 lg:py-3',
                title: 'whitespace-normal break-words'
            }"
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
