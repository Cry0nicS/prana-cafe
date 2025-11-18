<script setup lang="ts">
const props = defineProps({
    active: {type: Boolean, default: false}
});

const emit = defineEmits<{(e: "toggle"): void}>();

function onToggle() {
    emit("toggle");
}
</script>

<template>
    <div
        role="button"
        tabindex="0"
        :aria-label="props.active ? 'Show front of card' : 'Show back of card'"
        :aria-pressed="props.active"
        class="group focus:ring-primary min-h-110 max-w-[330px] cursor-pointer rounded-lg focus:ring-2 focus:ring-offset-2"
        @click="onToggle"
        @keydown.enter="onToggle"
        @keydown.space.prevent="onToggle">
        <div
            class="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
            :class="{
                '[transform:rotateY(180deg)]': props.active,
                'group-hover:[transform:rotateY(180deg)]': !props.active
            }">
            <!-- Front card -->
            <UCard class="absolute h-full w-full overflow-hidden [backface-visibility:hidden]">
                <slot name="front-image" />
                <div class="p-4">
                    <slot name="front-text" />
                </div>
            </UCard>
            <!-- Flipped card -->
            <UCard
                class="bg-primary absolute h-full w-full [transform:rotateY(180deg)] justify-center text-white [backface-visibility:hidden]"
                :ui="{
                    body: 'flex h-full flex-col items-center justify-center p-6 text-center'
                }">
                <slot name="back" />
            </UCard>
        </div>
    </div>
</template>
