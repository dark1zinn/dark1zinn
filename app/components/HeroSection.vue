<script setup lang="ts">
import ghStatus from '@/utils/ghStatus'
const data = await ghStatus()
</script>

<template>
    <section class="relative min-h-[80vh] flex items-center justify-center py-20 overflow-hidden">
        <UContainer class="relative z-10 flex flex-col items-center text-center">

            <!-- Profile & Status -->
            <div class="relative mb-8 group">
                <div
                    class="absolute -inset-1 bg-linear-to-r from-primary-500 to-secondary-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
                </div>
                <div class="relative">
                    <NuxtImg src="https://github.com/dark1zinn.png" alt="Profile"
                        class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-neutral-900 object-cover shadow-2xl" />

                    <!-- Status Badge -->
                    <div v-if="data"
                        class="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 flex items-center gap-2 bg-white dark:bg-neutral-800 px-3 py-1.5 rounded-full shadow-lg border border-neutral-200 dark:border-neutral-700 animate-bounce-in">
                        <span v-html="data.emojiHTML" class="text-xl leading-none"></span>
                        <span
                            class="text-xs font-medium text-neutral-600 dark:text-neutral-300 whitespace-nowrap max-w-[150px] truncate">
                            {{ data.message }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Headlines -->
            <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                <span
                    class="bg-clip-text text-transparent bg-linear-to-r from-primary-500 via-secondary-500 to-primary-500 animate-gradient-x">
                    dark1zinn
                </span>
            </h1>

            <p class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-medium mb-8 max-w-2xl">
                Full Stack Developer | CS Student <br />
                <span class="text-primary-500">Building digital dreams with code.</span>
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row items-center gap-4">
                <UButton to="#projects" size="xl" color="primary" variant="solid"
                    class="px-8 py-3 font-bold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-1 transition-all"
                    icon="i-lucide-rocket">
                    View Projects
                </UButton>
                <UButton to="#contact" size="xl" variant="ghost" color="neutral"
                    class="px-8 py-3 font-bold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                    icon="i-lucide-message-circle">
                    Contact Me
                </UButton>
            </div>

        </UContainer>

        <!-- Scroll Down -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <UIcon name="i-lucide-chevron-down" class="w-6 h-6 text-neutral-400" />
        </div>
    </section>
</template>

<style scoped>
.animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 3s ease infinite;
}

@keyframes gradient-x {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.animate-bounce-in {
    animation: bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
}

@keyframes bounce-in {
    0% {
        opacity: 0;
        transform: scale(0.3) translate(25%, 25%);
    }

    100% {
        opacity: 1;
        transform: scale(1) translate(25%, 25%);
    }
}
</style>
