<script setup lang="ts">
import { toIconifyName } from '@/utils/icon'

const links = [
    { label: 'Home', to: '/', icon: toIconifyName('i-lucide-house') },
    { label: 'About', to: '#about', icon: toIconifyName('i-lucide-user-round') },
    { label: 'Skills', to: '#skills', icon: toIconifyName('i-lucide-layers-3') },
    { label: 'Projects', to: '#projects', icon: toIconifyName('i-lucide-folder-code') },
    { label: 'Contact', to: '#contact', icon: toIconifyName('i-lucide-send') },
]

function navTarget(to: string) {
    if (to.startsWith('#')) {
        return { path: '/', hash: to }
    }
    return to
}
</script>

<template>
    <UApp>
        <div class="min-h-screen overflow-x-hidden bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
            <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
                <div class="absolute -top-48 left-[10%] h-96 w-96 rounded-full bg-primary-500/10 blur-[120px]" />
                <div class="absolute top-[42rem] -right-48 h-96 w-96 rounded-full bg-secondary-500/10 blur-[120px]" />
            </div>

            <header class="sticky top-0 z-50 border-b border-neutral-200/70 bg-neutral-50/85 backdrop-blur-xl dark:border-neutral-800/70 dark:bg-neutral-950/85">
                <UContainer class="flex min-h-16 items-center justify-between gap-4">
                    <RouterLink to="/" class="group inline-flex shrink-0 items-center gap-2 focus-visible:outline-none">
                        <img
                            src="https://github.com/dark1zinn.png"
                            alt="dark1zinn"
                            class="h-8 w-8 rounded-full border border-primary-500/40 object-cover transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105" />
                        <span class="font-semibold tracking-tight">dark1zinn</span>
                    </RouterLink>

                    <nav aria-label="Primary navigation" class="flex min-w-0 items-center gap-1 overflow-x-auto">
                        <UButton
                            v-for="link in links"
                            :key="link.to"
                            :to="navTarget(link.to)"
                            :icon="link.icon"
                            variant="ghost"
                            color="neutral"
                            size="sm"
                            class="shrink-0 text-xs hover:bg-primary-50 hover:text-primary-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:hover:bg-primary-950/40 dark:hover:text-primary-300 sm:text-sm">
                            <span class="hidden sm:inline">{{ link.label }}</span>
                            <span class="sr-only sm:hidden">{{ link.label }}</span>
                        </UButton>
                    </nav>

                    <UButton
                        to="https://github.com/dark1zinn"
                        target="_blank"
                        rel="noreferrer"
                        :icon="toIconifyName('i-simple-icons-github')"
                        variant="ghost"
                        color="neutral"
                        size="sm"
                        aria-label="Open dark1zinn's GitHub profile"
                        class="shrink-0 hover:bg-primary-50 hover:text-primary-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:hover:bg-primary-950/40 dark:hover:text-primary-300" />
                </UContainer>
            </header>

            <main class="relative">
                <RouterView />
            </main>

            <footer class="border-t border-neutral-200/70 dark:border-neutral-800/70">
                <UContainer class="flex flex-col gap-2 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between dark:text-neutral-400">
                    <p>Designing dependable software, one system at a time.</p>
                    <p>© {{ new Date().getFullYear() }} dark1zinn</p>
                </UContainer>
            </footer>
        </div>
    </UApp>
</template>

<style>
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: rgba(139, 92, 246, 0.3);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(139, 92, 246, 0.5);
}
</style>
