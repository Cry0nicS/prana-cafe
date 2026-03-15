// Reusable validation translation helpers for Zod errors
// Provides functions to translate Zod issue messages (which are stored as translation keys)

export function useValidation() {
    const {t} = useI18n();

    /**
     * Translate a single message that may be a translation key.
     * Falls back to the original message when translation is missing.
     */
    function translateOne(msg: string) {
        try {
            const translated = t(msg);
            return translated === msg ? msg : translated;
        } catch {
            return msg;
        }
    }

    /**
     * Accepts either a raw message string or an array of zod issue-like objects
     * ({ message: string, path?: string[] }) and returns a single joined, translated string.
     */
    function translateValidationMessage(
        issues: string | Array<{message: string; path?: (string | number)[]}>
    ) {
        if (typeof issues === "string") {
            return translateOne(issues);
        }

        const translated = issues.map((i) => translateOne(i.message));
        const unique = [...new Set(translated.filter(Boolean))];
        return unique.join(" - ");
    }

    return {translateValidationMessage};
}
