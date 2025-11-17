<script setup lang="ts">
const {t} = useI18n();

useSeoMeta({
    title: () => t("seo.menu.title"),
    description: () => t("seo.menu.description"),
    ogImage: "/images/hero.png"
});

const categories = [
    {
        id: "deals",
        items: [
            {
                name: "coworking",
                image: "/images/menu/business-break.png",
                price: "10€ p.p. / h"
            },
            {
                name: "businessBreak",
                image: "/images/menu/business-break.png",
                price: "10€ p.p."
            },
            {
                name: "businessLunch",
                image: "/images/menu/business-lunch.png",
                price: "40€ for 2"
            },
            {
                name: "tastyDate",
                image: "/images/menu/tasty-date.png",
                price: "24€ for 2"
            }
        ]
    },
    {
        id: "drinksCoffee",
        items: [
            {
                name: "haselnussLatte",
                image: "/images/menu/haselnuss-latte.png",
                price: "5,8€"
            },
            {
                name: "dirtyEarl",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "5.2€"
            },
            {
                name: "espresso",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "2,5 / 3,3€"
            },
            {
                name: "flatWhite",
                image: "/images/menu/flat-white.png",
                price: "4,6€"
            },
            {
                name: "latte",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "5,3€"
            }
        ]
    },
    {
        id: "drinksHot",
        items: [
            {
                name: "cacao",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "6€"
            },
            {
                name: "sunshineMilk",
                image: "/images/menu/sunshine-milk.png",
                price: "5,2€"
            },
            {
                name: "chaiLatte",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "4,6€"
            },
            {
                name: "matchaLatte",
                image: "/images/menu/matcha-latte.png",
                price: "5,9€"
            },
            {
                name: "hotChocolate",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "4,9€"
            }
        ]
    },
    {
        id: "food",
        items: [
            {
                name: "porridge",
                image: "/images/menu/porridge.png",
                price: "6,5 / 11,8€"
            },
            {
                name: "bananaBread",
                image: "/images/menu/banana-bread.png",
                price: "9,5€"
            },
            {
                name: "waffle",
                image: "/images/menu/waffle.png",
                price: "15€"
            },
            {
                name: "brunch",
                image: "/images/menu/brunch.png",
                price: "18€"
            },
            {
                name: "lunch",
                image: "/images/menu/lunch.png",
                price: "14.90€"
            },
            {
                name: "soup",
                image: "/images/menu/soup.png",
                price: "4€ / 8€"
            }
        ]
    }
];

const flippedByCategory = ref<Record<string, string | null>>({});

function isFlipCardActive(categoryId: string, itemName: string) {
    return flippedByCategory.value[categoryId] === itemName;
}

function toggleFlipCard(categoryId: string, itemName: string) {
    const current = flippedByCategory.value[categoryId] || null;
    flippedByCategory.value[categoryId] = current === itemName ? null : itemName;
}

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
}
</script>

<template>
    <div>
        <!-- Mobile Navigation -->
        <aside class="bg-default sticky inset-x-0 top-[70px] z-10 lg:hidden">
            <div class="flex flex-wrap gap-3 overflow-x-auto p-4 pb-3 backdrop-blur-md">
                <UButton
                    v-for="category in categories"
                    :key="category.id"
                    size="sm"
                    variant="soft"
                    color="primary"
                    class="whitespace-nowrap"
                    @click="scrollTo(category.id)">
                    {{ t(`menu.${category.id}.title`) }}
                </UButton>
            </div>
        </aside>

        <UContainer class="py-10">
            <div class="flex flex-col gap-10 md:flex-row">
                <!-- Desktop Navigation -->
                <aside class="sticky top-[100px] hidden self-start md:w-1/4 lg:block">
                    <UCard>
                        <ul class="space-y-2">
                            <li
                                v-for="category in categories"
                                :key="category.id">
                                <UButton
                                    color="primary"
                                    variant="ghost"
                                    class="w-full justify-start"
                                    @click="scrollTo(category.id)">
                                    {{ t(`menu.${category.id}.title`) }}
                                </UButton>
                            </li>
                        </ul>
                    </UCard>
                </aside>
                <section class="flex-1 space-y-16">
                    <div
                        v-for="category in categories"
                        :id="category.id"
                        :key="category.id"
                        class="scroll-mt-20">
                        <h2 class="mb-6 text-3xl font-semibold">
                            {{ t(`menu.${category.id}.title`) }}
                        </h2>
                        <p
                            v-if="`menu.${category.id}.options`"
                            class="text-muted mb-6">
                            {{ t(`menu.${category.id}.options`) }}
                        </p>
                        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <ElementsFlipCard
                                v-for="item in category.items"
                                :key="`${category.id}-${item.name}`"
                                :active="isFlipCardActive(category.id, item.name)"
                                @toggle="toggleFlipCard(category.id, item.name)">
                                <template #front-image>
                                    <div
                                        class="w-full"
                                        style="aspect-ratio: 4 / 3; overflow: hidden">
                                        <NuxtImg
                                            :src="item.image"
                                            alt=""
                                            class="h-full w-full object-fill"
                                            format="webp"
                                            width="300"
                                            height="226"
                                            sizes="sm:100vw md:50vw lg:33vw"
                                            placeholder />
                                    </div>
                                </template>
                                <template #front-text>
                                    <div class="p-4">
                                        <h3 class="mb-1 text-xl font-medium">
                                            {{ t(`menu.${category.id}.items.${item.name}.title`) }}
                                        </h3>
                                        <p class="text-muted mb-2 text-sm">
                                            {{ t(`menu.${category.id}.items.${item.name}.desc`) }}
                                        </p>
                                        <p class="text-primary font-semibold">
                                            {{ item.price }}
                                        </p>
                                    </div>
                                </template>
                                <template #back>
                                    <h3 class="mb-2 text-lg font-semibold">
                                        {{ t(`menu.${category.id}.items.${item.name}.title`) }}
                                    </h3>
                                    <p class="text-sm leading-relaxed">
                                        {{
                                            t(`menu.${category.id}.items.${item.name}.ingredients`)
                                        }}
                                    </p>
                                </template>
                            </ElementsFlipCard>
                        </div>
                    </div>
                </section>
            </div>
        </UContainer>
    </div>
</template>
