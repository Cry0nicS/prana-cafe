<script setup lang="ts">
import type {Reservation, ReservationForm} from "#shared/utils/types/reservation";
import type {DateValue} from "@internationalized/date";
import {ReservationSchema} from "#shared/utils/schemas";
import {CalendarDate, DateFormatter, getLocalTimeZone} from "@internationalized/date";
import {useValidation} from "~/composables/use-validation";

const {t} = useI18n();
const localePath = useLocalePath();
const {translateValidationMessage} = useValidation();

const df = new DateFormatter("de-DE", {
    dateStyle: "medium"
});

const now = new Date();
const dateNow = new CalendarDate(now.getFullYear(), now.getMonth() + 1, now.getDate());

const isSubmitting = ref(false);
const toast = useToast();
const errorMsg = ref("");

const formState = reactive<ReservationForm>({
    date: dateNow,
    email: "",
    firstName: "",
    guests: 2,
    lastName: "",
    message: "",
    phone: null,
    privacyConsent: false
});

const resetFormData = () => {
    formState.date = dateNow;
    formState.email = "";
    formState.firstName = "";
    formState.guests = 2;
    formState.lastName = "";
    formState.message = "";
    formState.phone = null;
    formState.privacyConsent = false;
};

const validateForm = (data: Reservation): {success: true} | {success: false; error: string} => {
    const result = ReservationSchema.safeParse(data);
    if (!result.success) {
        return {success: false, error: result.error.issues.pop()?.message ?? result.error.message};
    }

    return {success: true};
};

const sendReservation = async () => {
    isSubmitting.value = true;
    errorMsg.value = "";

    const jsDate = formState.date.toDate(getLocalTimeZone());
    const isoDate = jsDate.toISOString().split("T")[0]!;

    const data: Reservation = {
        ...formState,
        date: isoDate
    };

    const validationResult = validateForm(data);

    if (!validationResult.success) {
        toast.add({
            title: t("reservations.form.toasts.validationTitle"),
            description: translateValidationMessage(validationResult.error),
            color: "error",
            icon: "mdi:shield-alert"
        });
        isSubmitting.value = false;
        return;
    }

    try {
        await $fetch("/api/reservations", {
            method: "POST",
            body: data
        });

        toast.add({
            title: t("reservations.form.toasts.successTitle"),
            description: t("reservations.form.toasts.successDescription"),
            color: "success",
            icon: "mdi:thumb-up"
        });

        resetFormData();
    } catch {
        toast.add({
            title: t("reservations.form.toasts.sendErrorTitle"),
            description: t("reservations.form.toasts.sendErrorDescription"),
            color: "error",
            icon: "mdi:shield-alert"
        });
    } finally {
        isSubmitting.value = false;
    }
};

function toJsDate(value: CalendarDate) {
    return value.toDate(getLocalTimeZone());
}
</script>

<template>
    <UForm
        :state="formState"
        @submit="sendReservation">
        <div class="space-y-4">
            <UFormField
                :label="t('reservations.form.fields.firstName.label')"
                name="firstName"
                :placeholder="t('reservations.form.fields.firstName.placeholder')"
                required>
                <UInput
                    v-model="formState.firstName"
                    type="text"
                    class="w-full"
                    trailing-icon="mdi:account"
                    required />
            </UFormField>
            <UFormField
                :label="t('reservations.form.fields.lastName.label')"
                name="lastName"
                :placeholder="t('reservations.form.fields.lastName.placeholder')"
                required>
                <UInput
                    v-model="formState.lastName"
                    type="text"
                    class="w-full"
                    trailing-icon="mdi:account"
                    required />
            </UFormField>
            <UFormField
                :label="t('reservations.form.fields.email.label')"
                name="email"
                required>
                <UInput
                    v-model="formState.email"
                    type="email"
                    class="w-full"
                    trailing-icon="mdi:at"
                    :placeholder="t('reservations.form.fields.email.placeholder')"
                    required />
            </UFormField>
            <UFormField
                name="phone"
                :label="t('reservations.form.fields.phone.label')">
                <UInput
                    v-model="formState.phone"
                    :placeholder="t('reservations.form.fields.phone.placeholder')"
                    autocomplete="tel"
                    type="tel"
                    trailing-icon="mdi:phone"
                    class="w-full" />
            </UFormField>
            <UFormField
                name="date"
                :label="t('reservations.form.fields.date.label')">
                <UPopover class="w-full justify-center">
                    <UButton
                        color="neutral"
                        variant="outline"
                        size="lg"
                        trailing-icon="mdi:calendar"
                        class="flex w-full items-center justify-between">
                        <span class="flex-1 text-left">
                            {{
                                formState.date
                                    ? df.format(toJsDate(formState.date as CalendarDate))
                                    : t("reservations.form.fields.date.select")
                            }}
                        </span>
                    </UButton>

                    <template #content>
                        <UCalendar
                            v-model="formState.date as unknown as DateValue"
                            size="xl"
                            class="justify-between p-2" />
                    </template>
                </UPopover>
            </UFormField>
            <UFormField
                name="guests"
                :label="t('reservations.form.fields.guests.label')">
                <UInputNumber
                    v-model="formState.guests"
                    :min="1"
                    :max="20"
                    class="w-full"
                    size="lg"
                    increment-icon="mdi:arrow-up-bold"
                    decrement-icon="mdi:arrow-down-bold"
                    trailing-icon="mdi:account-multiple" />
            </UFormField>
            <UFormField
                name="message"
                :label="t('reservations.form.fields.message.label')">
                <UTextarea
                    v-model="formState.message"
                    class="w-full"
                    :maxrows="8"
                    autoresize
                    size="lg"
                    maxlength="1000"
                    trailing-icon="mdi:message" />
            </UFormField>
            <UCheckbox
                v-model="formState.privacyConsent"
                name="privacyConsent"
                required
                :ui="{label: 'text-left text-sm'}">
                <template #label>
                    {{ t("reservations.form.fields.privacy.preLink") }}
                    <a
                        :href="localePath('/privacy')"
                        target="_blank"
                        rel="noopener">
                        {{ t("reservations.form.fields.privacy.linkText") }}
                    </a>
                    {{ t("reservations.form.fields.privacy.postLink") }}
                </template>
            </UCheckbox>
        </div>
        <div class="mt-4 flex items-center justify-end">
            <UButton
                type="submit"
                :loading="isSubmitting"
                :disabled="isSubmitting"
                size="xl"
                class="flex w-full items-center justify-center gap-1.5"
                trailing-icon="mdi:send"
                loading-icon="mdi:loading">
                {{ t("reservations.form.submit") }}
            </UButton>
        </div>
    </UForm>
</template>
