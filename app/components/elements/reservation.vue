<script setup lang="ts">
import type {Reservation, ReservationForm} from "#shared/utils/types/reservation";
import type {DateValue} from "@internationalized/date";
import {LOCALE_META} from "#shared/utils/constants";
import {ReservationSchema} from "#shared/utils/schemas";
import {CalendarDate, getDayOfWeek, Time} from "@internationalized/date";
import {useValidation} from "~/composables/use-validation";

const {t} = useI18n();
const localePath = useLocalePath();
const {translateValidationMessage} = useValidation();

const now = new Date();
const todayDate = new CalendarDate(now.getFullYear(), now.getMonth() + 1, now.getDate());
const nowTime = new Time(12, 30, 0);
const inputDateRef = useTemplateRef("inputDateRef");

const isSubmitting = ref(false);
const toast = useToast();
const showModal = ref(false);

const formState = reactive<ReservationForm>({
    date: todayDate,
    time: nowTime,
    email: "",
    firstName: "",
    guests: 2,
    lastName: "",
    message: "",
    phone: null,
    privacyConsent: false
});

const resetFormData = () => {
    formState.date = todayDate;
    formState.time = nowTime;
    formState.email = "";
    formState.firstName = "";
    formState.guests = 2;
    formState.lastName = "";
    formState.message = "";
    formState.phone = null;
    formState.privacyConsent = false;
};

const validateForm = (): {success: boolean; data?: Reservation; error?: string} => {
    const result = ReservationSchema.safeParse(formState);

    if (!result.success) {
        return {success: false, error: result.error.issues.pop()?.message ?? result.error.message};
    }

    return {success: true, data: result.data as Reservation};
};

const sendReservation = async () => {
    isSubmitting.value = true;

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

        showModal.value = true;
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

/**
 * Check if a date is a Monday.
 */
const isDateUnavailable = (date: DateValue) => {
    return getDayOfWeek(date, LOCALE_META.de.iso, "mon") === 0;
};
</script>

<template>
    <UForm
        :state="formState"
        :disabled="isSubmitting"
        @submit.prevent="sendReservation">
        <div class="space-y-4">
            <UFormField
                :label="t('reservations.form.fields.firstName.label')"
                name="firstName"
                :placeholder="t('reservations.form.fields.firstName.placeholder')"
                required>
                <UInput
                    v-model="formState.firstName"
                    type="text"
                    size="lg"
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
                    size="lg"
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
                    size="lg"
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
                    size="lg"
                    class="w-full" />
            </UFormField>
            <div class="flex flex-col justify-between gap-4 lg:flex-row">
                <UFormField
                    name="date"
                    class="w-full lg:max-w-[50%]"
                    required
                    :label="t('reservations.form.fields.date.label')">
                    <UInputDate
                        ref="inputDateRef"
                        v-model="formState.date as unknown as DateValue"
                        class="w-full"
                        size="lg"
                        :min-value="todayDate"
                        :is-date-unavailable="isDateUnavailable"
                        required
                        :ui="{
                            base: 'flex justify-center'
                        }">
                        <template #trailing>
                            <UPopover :reference="inputDateRef?.inputsRef[3]?.$el">
                                <UButton
                                    color="neutral"
                                    variant="link"
                                    size="lg"
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
                    label="Time"
                    class="w-full lg:max-w-[50%]"
                    required>
                    <UInputTime
                        v-model="formState.time as unknown as Time"
                        class="w-full"
                        :step="{minute: 15}"
                        :hour-cycle="24"
                        size="lg"
                        :min-value="new Time(7, 0, 0)"
                        :max-value="new Time(16, 0, 0)"
                        trailing-icon="mdi-clock"
                        required
                        :ui="{
                            base: 'flex justify-center'
                        }" />
                </UFormField>
            </div>
            <UFormField
                name="guests"
                required
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
                size="lg"
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
    <UModal
        v-model:open="showModal"
        :title="t('reservations.form.modal.title')"
        close-icon="mdi:close-thick">
        <template #body>
            <p class="mb-2">{{ t("reservations.form.modal.body.p1") }}</p>
            <p>
                {{ t("reservations.form.modal.body.p2_pre") }}
                <a
                    :href="localePath('/privacy/contact')"
                    target="_blank"
                    rel="noopener">
                    {{ t("reservations.form.modal.body.p2_link") }}
                </a>
                {{ t("reservations.form.modal.body.p2_post") }}
            </p>
        </template>
        <template #footer>
            <div class="flex w-full">
                <UButton
                    trailing-icon="mdi:thumb-up-outline"
                    :ui="{
                        base: 'bg-[#00C16A]'
                    }"
                    @click="showModal = false">
                    {{ t("reservations.form.modal.closeButton") }}
                </UButton>
            </div>
        </template>
    </UModal>
</template>
