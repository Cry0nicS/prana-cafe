import type {NuxtError} from "#app";
export default defineNuxtPlugin((nuxtApp) => {
    const clientLogger = useLogger();
    const router = useRouter();

    const routeInfo = () => {
        const currentRoute = router.currentRoute.value;

        if (!currentRoute) return {path: undefined};

        return {
            path: currentRoute?.path,
            fullPath: currentRoute?.fullPath,
            name: typeof currentRoute?.name === "string" ? currentRoute.name : undefined,
            params: currentRoute?.params,
            query: currentRoute?.query
        };
    };

    // Hook into Vue's error handler
    nuxtApp.hook("vue:error", (error) => {
        const route = routeInfo();

        clientLogger.error(error as Error, {route});
    });

    // Hook into Nuxt's app error handler
    nuxtApp.hook("app:error", (error: NuxtError) => {
        const route = routeInfo();

        clientLogger.error(error, {
            statusCode: error.statusCode,
            fatal: error.fatal,
            unhandled: error.unhandled,
            statusMessage: error.statusMessage,
            data: error.data,
            cause: error.cause,
            route,
            context: route.path
        });
    });
});
