import type {LocaleCodes, LocaleMeta} from "#shared/utils/types";

/**
 * Extracts and returns the locale code from a locale identifier or a locale metadata object.
 *
 * @param locale - The locale identifier (`LocaleCodes`) or locale metadata object (`LocaleMeta`).
 * @returns The locale code as a `LocaleCodes` string.
 */
export function extractLocaleCode(locale: LocaleCodes | LocaleMeta): LocaleCodes {
    return (typeof locale === "string" ? locale : locale.code) as LocaleCodes;
}
