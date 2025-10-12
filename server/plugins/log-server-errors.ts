import type {H3EventContext} from "h3";
import {logger} from "~~/server/utils/logger";

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook("error", (error: Error, event) => {
        // Skip 404s from being logged.
        if (error.message.includes("Page not found")) return;

        // Log all other errors.
        logger.error(error, {
            name: error.name,
            message: error.message,
            stack: error.stack,
            path: event.path,
            method: event.method,
            params: (event.context as H3EventContext)?.params ?? undefined
        });
    });
});
