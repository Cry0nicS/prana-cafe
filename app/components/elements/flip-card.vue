<script setup lang="ts">
const props = defineProps({
    name: {type: String, default: ""},
    active: {type: Boolean, default: false}
});

const emit = defineEmits<{(e: "toggle"): void}>();

function onToggle() {
    emit("toggle");
}
</script>

<template>
    <div
        class="group h-100 w-full cursor-pointer focus:outline-none"
        @click="onToggle">
        <div
            class="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
            :class="{
                '[transform:rotateY(180deg)]': props.active,
                'group-hover:[transform:rotateY(180deg)]': !props.active
            }">
            <!-- Front card -->
            <UCard class="absolute h-full w-full overflow-hidden [backface-visibility:hidden]">
                <div class="aspect-[4/3] w-full overflow-hidden rounded-t-xl">
                    <slot name="front-image" />
                </div>
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
