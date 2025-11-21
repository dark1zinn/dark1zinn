// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    app: {
        baseURL: '/dark1zinn/',
        head: {
            title: 'Home',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    name: 'description',
                    content:
                        'Full Stack Developer from Brazil. Passionate about web development, DevOps, and modern technologies.',
                },
                { name: 'theme-color', content: '#a277ff' },
                {
                    property: 'og:title',
                    content: 'dark1zinn',
                },
                {
                    property: 'og:description',
                    content:
                        'Full Stack Developer from Brazil. Passionate about web development, DevOps, and modern technologies.',
                },
                { property: 'og:type', content: 'website' },
            ],
        },
    },

    css: ['~/assets/css/main.css'],

    modules: [
        '@nuxt/ui',
        '@nuxt/image',
        '@nuxt/icon',
        '@nuxt/fonts',
        '@nuxtjs/seo',
    ],

    colorMode: {
        preference: 'dark',
        fallback: 'dark',
        classSuffix: '',
    },
});
