export function useUtils() {
    const colorMode = useColorMode();

    const themedFavicon = computed(() =>
        colorMode.value === "dark" ? "/favicon-light.ico" : "/favicon-dark.ico"
    );

    return {themedFavicon};
}
