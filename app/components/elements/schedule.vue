<template>
    <h4 class="mt-4">{{ $t("index.cta.hours.heading") }}</h4>
    <ul class="mt-2 space-y-1">
        <li
            v-for="day in [
                'monday',
                'tuesday',
                'wednesday',
                'thursday',
                'friday',
                'saturday',
                'sunday'
            ]"
            :key="day"
            class="flex items-center justify-between border-b border-gray-200 pb-1">
            <span>
                {{ $t(`index.cta.hours.${day}.day`) }}
            </span>
            <UBadge
                variant="soft"
                :color="$t(`index.cta.hours.${day}.time`) === 'Closed' ? 'error' : 'success'">
                {{ $t(`index.cta.hours.${day}.time`) }}
            </UBadge>
        </li>
    </ul>
</template>
