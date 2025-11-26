export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    // Vercel CRON_SECRET security check
    if (getHeader(event, "authorization") !== `Bearer ${config.cronSecret}`) {
        throw createError({statusCode: 401, statusMessage: "Unauthorized in Vercel"});
    }

    try {
        // Call Nitro task
        const {result} = await runTask("fetch-google-reviews");
        return result;
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err ?? "Error in vercel/tasks");

        logger.error("Error executing scheduled task", {
            error: err,
            message
        });

        throw createError({
            statusCode: 500,
            statusMessage: message
        });
    }
});
