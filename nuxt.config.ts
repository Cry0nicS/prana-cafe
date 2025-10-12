// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    css: ["./app/assets/main.css"],
    devtools: {enabled: true},
    eslint: {
        config: {
            standalone: false // <--- Required for Antfu ESLint config.
        }
    },
    image: {
        dir: "app/assets/images",
        format: ["webp"],
        provider: "vercel",
        quality: 80,
        screens: {
            icon: 20,
            icon2x: 40,
            lg: 1024,
            md: 768,
            sm: 640,
            xl: 1280
        }
    },
    modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/image"],
    runtimeConfig: {
        public: {
            nodeEnv: process.env.NUXT_PUBLIC_NODE_ENV || "development",
            rollbarClientToken: process.env.NUXT_PUBLIC_ROLLBAR_CLIENT_TOKEN || "",
            rollbarEnabled: false
        },
        rollbarServerToken: process.env.NUXT_ROLLBAR_SERVER_TOKEN || ""
    },
    typescript: {
        strict: true,
        typeCheck: true
    },
    ui: {
        colorMode: true
    }
});
