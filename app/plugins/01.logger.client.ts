import {defineNuxtPlugin, useRuntimeConfig} from "#app";
import {createLogger} from "#shared/create-logger";

/**
 * Initializes the logger for error tracking in the client-side.
 */
export default defineNuxtPlugin((nuxtApp) => {
    const runtimeConfig = useRuntimeConfig().public;
    const logger = createLogger({
        enabled: runtimeConfig.rollbarEnabled,
        accessToken: runtimeConfig.rollbarClientToken,
        environment: runtimeConfig.nodeEnv
    });

    nuxtApp.provide("logger", logger);
});
