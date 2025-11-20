// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    // Static Site Generation (SSG) configuration
    ssr: false,

    app: {
        head: {
            title: 'dark1zinn | Full Stack Developer',
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
                    content: 'dark1zinn | Full Stack Developer',
                },
                {
                    property: 'og:description',
                    content:
                        'Full Stack Developer from Brazil. Passionate about web development, DevOps, and modern technologies.',
                },
                { property: 'og:type', content: 'website' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: '',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap',
                },
            ],
        },
    },

    css: ['~/assets/css/main.css'],

    modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/icon', '@nuxt/fonts'],
});