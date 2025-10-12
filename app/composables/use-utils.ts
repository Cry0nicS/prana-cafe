export function useUtils() {
    const colorMode = useColorMode();

    const themedFavicon = computed(() =>
        colorMode.value === "dark" ? "/favicon.ico" : "/favicon.ico"
    );

    return {themedFavicon};
}
