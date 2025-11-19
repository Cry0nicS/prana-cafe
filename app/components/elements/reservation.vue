<script setup lang="ts">
import type {Reservation, ReservationForm} from "#shared/utils/types/reservation";
import type {DateValue} from "@internationalized/date";
import {LOCALE_META} from "#shared/utils/constants";
import {ReservationSchema} from "#shared/utils/schemas";
import {CalendarDate, getDayOfWeek} from "@internationalized/date";
import {useValidation} from "~/composables/use-validation";

const {t} = useI18n();
const localePath = useLocalePath();
const {translateValidationMessage} = useValidation();

const now = new Date();
const today = new CalendarDate(now.getFullYear(), now.getMonth() + 1, now.getDate());
const inputDateRef = useTemplateRef("inputDateRef");

const isSubmitting = ref(false);
const toast = useToast();
const errorMsg = ref("");

const formState = reactive<ReservationForm>({
    date: today,
    email: "",
    firstName: "",
    guests: 2,
    lastName: "",
    message: "",
    phone: null,
    privacyConsent: false
});

const resetFormData = () => {
    formState.date = today;
    formState.email = "";
    formState.firstName = "";
    formState.guests = 2;
    formState.lastName = "";
    formState.message = "";
    formState.phone = null;
    formState.privacyConsent = false;
};

const validateForm = (): {success: boolean; data?: Reservation; error?: string} => {
    const data = {
        ...formState,
        date: formState.date.toString()
    };

    const result = ReservationSchema.safeParse(data);
    if (!result.success) {
        return {success: false, error: result.error.issues.pop()?.message ?? result.error.message};
    }

    return {success: true, data: result.data as Reservation};
};

const sendReservation = async () => {
    isSubmitting.value = true;
    errorMsg.value = "";

    // Validate form data.
    const {success: validationSuccess, data, error: validationError} = validateForm();

    if (!validationSuccess) {
        toast.add({
            title: t("reservations.form.toasts.validationTitle"),
            description: translateValidationMessage(validationError!),
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

const isDateUnavailable = (date: DateValue) => {
    // Example: Disable all Mondays.
    return getDayOfWeek(date, LOCALE_META.de.iso, "mon") === 0;
};
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
                <UInputDate
                    ref="inputDateRef"
                    v-model="formState.date as unknown as DateValue"
                    :min-value="today"
                    :is-date-unavailable="isDateUnavailable"
                    required>
                    <template #trailing>
                        <UPopover :reference="inputDateRef?.inputsRef[3]?.$el">
                            <UButton
                                color="neutral"
                                variant="link"
                                size="sm"
                                icon="mdi:calendar"
                                aria-label="Select a date"
                                class="px-0" />

                            <template #content>
                                <UCalendar
                                    v-model="formState.date as unknown as DateValue"
                                    :is-date-unavailable="isDateUnavailable"
                                    :is-date-disabled="isDateUnavailable"
                                    size="lg"
                                    :week-starts-on="1"
                                    class="p-2" />
                            </template>
                        </UPopover>
                    </template>
                </UInputDate>
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
