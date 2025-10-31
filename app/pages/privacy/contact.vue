<script setup lang="ts">
import {company} from "#shared/utils/constants";

const telHref = computed(() => `tel:${company.phone.replace(/\s+/g, "")}`);
const mailHref = computed(() => `mailto:${company.email}`);
const instagramUrl = "https://instagram.com/pranacafe";

const features = ref([
    {
        title: "Email",
        description:
            "Got feedback, event inquiries, or collaboration ideas? Send us a note — we’d love to hear from you.",
        icon: "i-mdi-email-outline",
        to: mailHref
    },
    {
        title: "Phone",
        description: "Have questions or want to book a table? Give us a quick call.",
        icon: "i-mdi-phone-outline",
        to: telHref
    },
    {
        title: "Instagram",
        description: "See what’s brewing today — from vibrant bowls to creamy oat cappuccinos.",
        icon: "i-mdi-instagram",
        to: instagramUrl
    }
]);
</script>

<template>
    <UPageSection
        title="Fresh, Local, and Kind"
        description="Our vegan café is built on a love for plants, sustainability, and community. Reach out to us — we’d love to hear from you."
        :features="features" />
</template>
