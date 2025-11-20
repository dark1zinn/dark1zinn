<script setup lang="ts">
const socials = [
    { name: 'Discord', icon: 'i-simple-icons-discord', link: 'https://discord.com/users/617089012003241994', color: 'hover:text-[#5865F2]' },
    { name: 'Instagram', icon: 'i-simple-icons-instagram', link: 'https://www.instagram.com/dark1zinn/', color: 'hover:text-[#E4405F]' },
    { name: 'Twitch', icon: 'i-simple-icons-twitch', link: 'https://www.twitch.tv/dark1zin_', color: 'hover:text-[#9146FF]' },
    { name: 'YouTube', icon: 'i-simple-icons-youtube', link: 'https://www.youtube.com/@dark1zin_', color: 'hover:text-[#FF0000]' },
    { name: 'GitHub', icon: 'i-simple-icons-github', link: 'https://github.com/dark1zinn', color: 'hover:text-neutral-900 dark:hover:text-white' },
]
</script>

<template>
    <section id="contact" class="py-32 relative overflow-hidden">
        <!-- Background Gradients -->
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[100px] -z-10" />

        <UContainer class="max-w-3xl text-center relative z-10">
            <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
                <UIcon name="i-lucide-send" class="w-4 h-4" />
                Get in Touch
            </div>

            <h2 class="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p class="text-xl text-neutral-600 dark:text-neutral-300 mb-12 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                <br />
                <span class="text-primary-500 font-medium">Most active on Discord!</span>
            </p>

            <div class="flex flex-wrap items-center justify-center gap-4 mb-12">
                <UButton v-for="social in socials" :key="social.name" :to="social.link" target="_blank" size="xl"
                    variant="outline" color="neutral" class="transition-all hover:scale-110" :class="social.color"
                    :icon="social.icon" :aria-label="social.name" />
            </div>

            <!-- <div
                class="p-8 rounded-3xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-xl border border-neutral-200 dark:border-neutral-800">
                <h3 class="text-lg font-semibold mb-2">Send me an email</h3>
                <a href="mailto:contact@dark1zinn.dev"
                    class="text-2xl md:text-3xl font-bold text-primary-500 hover:text-primary-600 transition-colors">
                    contact@dark1zinn.dev
                </a>
            </div> -->
        </UContainer>
    </section>
</template>
