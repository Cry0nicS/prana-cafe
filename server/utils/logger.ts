import type {Logger} from "~~/shared/utils/types";
import {createLogger} from "~~/shared/create-logger";

const config = useRuntimeConfig();

/**
 * Initializes logger for error tracking in the server-side.
 */
const logger: Logger = createLogger({
    enabled: config.public.rollbarEnabled,
    accessToken: config.rollbarServerToken,
    environment: config.public.nodeEnv
});

export {logger};
