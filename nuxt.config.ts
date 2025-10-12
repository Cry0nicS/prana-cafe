// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: {enabled: true},
    eslint: {
        config: {
            standalone: false // <--- Required for Antfu ESLint config.
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
