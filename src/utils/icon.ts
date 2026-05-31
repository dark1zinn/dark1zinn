/**
 * Nuxt Icon uses names like `i-lucide-home`. @iconify/vue expects `lucide:home`.
 * @see https://ui.nuxt.com/docs/getting-started/integrations/icons/vue
 */
export function toIconifyName(name: string): string {
    if (!name.startsWith('i-')) {
        return name
    }

    const raw = name.slice(2)

    for (const prefix of ['simple-icons', 'cif']) {
        if (raw.startsWith(`${prefix}-`)) {
            return `${prefix}:${raw.slice(prefix.length + 1)}`
        }
    }

    const dash = raw.indexOf('-')
    if (dash === -1) {
        return raw
    }

    return `${raw.slice(0, dash)}:${raw.slice(dash + 1)}`
}
