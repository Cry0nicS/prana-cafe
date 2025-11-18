<script setup lang="ts">
import type {Reservation, ReservationForm} from "#shared/utils/types/reservation";
import type {DateValue} from "@internationalized/date";
import {ReservationSchema} from "#shared/utils/schemas";
import {CalendarDate, DateFormatter, getLocalTimeZone} from "@internationalized/date";

const localePath = useLocalePath();

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
            title: "Fehler im Formular",
            description: validationResult.error,
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
            title: "Reservierung erfolgreich gesendet",
            description: " Wir melden uns, sobald wie deine Anfrage bearbeitet haben.",
            color: "success",
            icon: "mdi:thumb-up"
        });

        resetFormData();
    } catch {
        toast.add({
            title: "Fehler beim Senden der Anfrage",
            description: "Bitte versuche es später erneut.",
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
    <UPage>
        <UForm
            :state="formState"
            @submit="sendReservation">
            <div class="space-y-4">
                <UFormField
                    label="Vorname"
                    name="firstName"
                    placeholder="First name"
                    required>
                    <UInput
                        v-model="formState.firstName"
                        type="text"
                        class="w-full"
                        trailing-icon="mdi:account"
                        required />
                </UFormField>
                <UFormField
                    label="Nachname"
                    name="lastName"
                    placeholder="Last name"
                    required>
                    <UInput
                        v-model="formState.lastName"
                        type="text"
                        class="w-full"
                        trailing-icon="mdi:account"
                        required />
                </UFormField>
                <UFormField
                    label="E-Mail"
                    name="email"
                    required>
                    <UInput
                        v-model="formState.email"
                        type="email"
                        class="w-full"
                        trailing-icon="mdi:at"
                        required />
                </UFormField>
                <UFormField
                    name="phone"
                    label="Phone Number (with country code)">
                    <UInput
                        v-model="formState.phone"
                        placeholder="+49 345 678 9012"
                        autocomplete="tel"
                        type="tel"
                        trailing-icon="mdi:phone"
                        class="w-full" />
                </UFormField>
                <UFormField
                    name="date"
                    label="Reservation Date">
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
                                        : "Select a date"
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
                    label="Anzahl der Gäste">
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
                    label="Nachricht (optional)">
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
                        Die
                        <a
                            :href="localePath('/privacy')"
                            target="_blank"
                            rel="noopener">
                            Datenschutzerklärung
                        </a>
                        wurde zur Kenntnis genommen und akzeptiert. Es wurde eingewilligt, dass die
                        freiwillig angegebenen Daten speichern und zur Kontaktaufnahme verwenden
                        darf. Die Verarbeitung kann jederzeit widerrufen werden.
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
                    trailing-icon="i-heroicons-arrow-long-right"
                    loading-icon="i-heroicons-arrow-path">
                    Submit
                </UButton>
            </div>
        </UForm>
    </UPage>
</template>
