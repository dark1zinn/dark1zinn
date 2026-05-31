import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'
import VueRouter from 'vue-router/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/dark1zinn/',
    plugins: [
        VueRouter({
            dts: 'src/route-map.d.ts',
        }),
        vue(),
        ui({
            ui: {
                colors: {
                    primary: 'violet',
                    neutral: 'gray',
                    secondary: 'purple',
                    success: 'green',
                    warning: 'yellow',
                    danger: 'red',
                },
            },
            colorMode: true,
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
