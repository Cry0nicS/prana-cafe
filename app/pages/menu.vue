<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n();

const categories = [
    {
        id: "deals",
        items: [
            {
                name: "coworking",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "10€/h"
            },
            {
                name: "businessBreak",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "10€ p.p."
            },
            {
                name: "businessLunch",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "40€ for 2"
            },
            {
                name: "tastyDate",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "24€ for 2"
            }
        ]
    },
    {
        id: "drinksCoffee",
        items: [
            {
                name: "espresso",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "2,5 / 3,3€"
            },
            {
                name: "flatWhite",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "4,6€"
            },
            {
                name: "latte",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "5,3€"
            },
            {
                name: "haselnussLatte",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "5,8€"
            }
        ]
    },
    {
        id: "drinksHot",
        items: [
            {
                name: "sunshineMilk",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "5,2€"
            },
            {
                name: "chaiLatte",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "4,6€"
            },
            {
                name: "matchaLatte",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
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
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "6,5 / 11,8€"
            },
            {
                name: "bananaBread",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "9,5€"
            },
            {
                name: "waffle",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "9–14€"
            },
            {
                name: "brunch",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                price: "18€"
            }
        ]
    }
];

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
}
const flipped = ref<string | null>(null);

function toggleFlip(id: string) {
    flipped.value = flipped.value === id ? null : id;
}

function isFlipped(id: string) {
    return flipped.value === id;
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

                        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div
                                v-for="item in category.items"
                                :key="item.name"
                                class="group h-80 h-100 w-full cursor-pointer focus:outline-none"
                                @click="toggleFlip(item.name)">
                                <div
                                    class="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
                                    :class="{
                                        'group-hover:[transform:rotateY(180deg)]': !isFlipped(
                                            item.name
                                        ),
                                        '[transform:rotateY(180deg)]': isFlipped(item.name)
                                    }">
                                    <!-- Front card -->
                                    <UCard
                                        class="absolute h-full w-full overflow-hidden [backface-visibility:hidden]">
                                        <div
                                            class="aspect-[4/3] w-full overflow-hidden rounded-t-xl">
                                            <NuxtImg
                                                :src="item.image"
                                                alt=""
                                                class="h-full w-full object-cover"
                                                format="webp"
                                                sizes="sm:100vw md:50vw lg:33vw"
                                                placeholder />
                                        </div>
                                        <div class="p-4">
                                            <h3 class="mb-1 text-xl font-medium">
                                                {{
                                                    t(
                                                        `menu.${category.id}.items.${item.name}.title`
                                                    )
                                                }}
                                            </h3>
                                            <p class="mb-2 text-sm text-gray-600">
                                                {{
                                                    t(`menu.${category.id}.items.${item.name}.desc`)
                                                }}
                                            </p>
                                            <p class="text-primary font-semibold">
                                                {{ item.price }}
                                            </p>
                                        </div>
                                    </UCard>

                                    <!-- Flipped card -->
                                    <UCard
                                        class="bg-primary absolute h-full w-full [transform:rotateY(180deg)] justify-center text-white [backface-visibility:hidden]"
                                        :ui="{
                                            body: 'flex h-full flex-col items-center justify-center p-6 text-center'
                                        }">
                                        <h3 class="mb-2 text-lg font-semibold">
                                            {{ t(`menu.${category.id}.items.${item.name}.title`) }}
                                        </h3>
                                        <p class="text-sm leading-relaxed">
                                            {{
                                                t(
                                                    `menu.${category.id}.items.${item.name}.ingredients`
                                                )
                                            }}
                                        </p>
                                    </UCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </UContainer>
    </div>
</template>
