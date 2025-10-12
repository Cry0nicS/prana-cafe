// https://nuxt.com/docs/api/configuration/nuxt-config
import {i18nPages} from "./shared/utils/constants";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    css: ["./app/assets/main.css"],
    devtools: {enabled: true},
    eslint: {
        config: {
            standalone: false // <--- Required for Antfu ESLint config.
        }
    },
    i18n: {
        // Disable custom route with page components.
        customRoutes: "config",
        defaultLocale: "en",
        detectBrowserLanguage: {
            cookieKey: "i18n_redirected",
            redirectOn: "root",
            useCookie: true
        },
        langDir: "locales/",
        locales: [
            {code: "en", file: "en.ts", name: "English"},
            {code: "de", file: "de.ts", name: "Deutsch"}
        ],
        pages: i18nPages,
        strategy: "prefix_except_default"
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
    modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/image", "@nuxtjs/i18n"],
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
