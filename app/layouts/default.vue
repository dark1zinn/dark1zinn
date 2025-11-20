<script setup lang="ts">
const links = [
    { label: 'Home', to: '/', icon: 'i-lucide-home' },
    { label: 'About', to: '#about', icon: 'i-lucide-user' },
    { label: 'Skills', to: '#skills', icon: 'i-lucide-cpu' },
    { label: 'Projects', to: '#projects', icon: 'i-lucide-code' },
    { label: 'Contact', to: '#contact', icon: 'i-lucide-mail' }
]
</script>

<template>
    <div
        class="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 selection:bg-primary-500/30 selection:text-primary-400">
        <!-- Background Gradient Mesh -->
        <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div
                class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/10 rounded-full blur-[120px] animate-pulse" />
            <div
                class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <header class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
            <div
                class="bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-full px-6 py-3 shadow-lg shadow-neutral-900/5 flex items-center justify-between transition-all duration-300 hover:bg-white/80 dark:hover:bg-neutral-900/80">
                <NuxtLink to="/" class="flex items-center gap-2 group">
                    <div
                        class="relative w-8 h-8 overflow-hidden rounded-full ring-2 ring-primary-500/50 group-hover:ring-primary-500 transition-all">
                        <NuxtImg src="https://github.com/dark1zinn.png" alt="Logo" class="w-full h-full object-cover" />
                    </div>
                    <span
                        class="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-500">
                        dark1zinn
                    </span>
                </NuxtLink>

                <nav class="hidden md:flex items-center gap-1">
                    <UButton v-for="link in links" :key="link.to" :to="link.to" :icon="link.icon" variant="ghost"
                        color="neutral" size="sm"
                        class="hover:bg-primary-50 dark:hover:bg-primary-950/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        {{ link.label }}
                    </UButton>
                </nav>

                <div class="flex items-center gap-2">
                    <UButton to="https://github.com/dark1zinn" target="_blank" icon="i-simple-icons-github"
                        variant="ghost" color="neutral" size="sm" aria-label="GitHub"
                        class="hover:scale-110 transition-transform" />
                </div>
            </div>
        </header>

        <main class="flex-1 relative z-10 pt-24">
            <slot />
        </main>

        <footer
            class="relative z-10 py-12 border-t border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm">
            <UContainer class="flex flex-col md:flex-row items-center justify-between gap-6">
                <div class="flex flex-col items-center md:items-start gap-2">
                    <span
                        class="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-500">
                        dark1zinn
                    </span>
                    <p class="text-sm text-neutral-500 dark:text-neutral-400">
                        Building digital experiences with ❤️ and ☕
                    </p>
                </div>

                <!-- <div class="flex items-center gap-4">
                    <UButton to="https://github.com/dark1zinn" target="_blank" icon="i-simple-icons-github"
                        variant="ghost" color="neutral" />
                    <UButton to="https://discord.com/users/617089012003241994" target="_blank"
                        icon="i-simple-icons-discord" variant="ghost" color="neutral" />
                    <UButton to="mailto:contact@dark1zinn.dev" icon="i-lucide-mail" variant="ghost" color="neutral" />
                </div> -->

                <p class="text-xs text-neutral-400 dark:text-neutral-500">
                    © {{ new Date().getFullYear() }} dark1zinn. All rights reserved.
                </p>
            </UContainer>
        </footer>
    </div>
</template>

<style>
/* Custom scrollbar */
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
