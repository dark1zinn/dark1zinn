<script setup lang="ts">
import { toIconifyName } from '@/utils/icon'

const primaryContacts = [
    {
        name: 'Email',
        description: 'dark1zinn00@gmail.com',
        icon: toIconifyName('i-lucide-mail'),
        link: 'mailto:dark1zinn00@gmail.com',
    },
    {
        name: 'GitHub',
        description: 'github.com/dark1zinn',
        icon: toIconifyName('i-simple-icons-github'),
        link: 'https://github.com/dark1zinn',
    },
]

const socialContacts = [
    {
        name: 'Discord',
        icon: toIconifyName('i-simple-icons-discord'),
        link: 'https://discord.com/users/617089012003241994',
    },
    {
        name: 'Instagram',
        icon: toIconifyName('i-simple-icons-instagram'),
        link: 'https://www.instagram.com/dark1zinn/',
    },
]
</script>

<template>
    <section id="contact" class="section-space">
        <UContainer>
            <div class="mx-auto max-w-3xl text-center">
                <p class="section-kicker">Contact</p>
                <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Let’s build something dependable.
                </h2>
                <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                    Reach out for collaborations, technical conversations, or ideas worth making real.
                </p>

                <div class="mt-10 grid gap-4 sm:grid-cols-2">
                    <a
                        v-for="contact in primaryContacts"
                        :key="contact.name"
                        :href="contact.link"
                        :target="contact.name === 'GitHub' ? '_blank' : undefined"
                        :rel="contact.name === 'GitHub' ? 'noreferrer' : undefined"
                        class="surface-card group flex items-center gap-4 text-left transition duration-200 hover:-translate-y-1 hover:border-primary-400 hover:shadow-lg hover:shadow-primary-950/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
                        <span class="rounded-xl bg-primary-50 p-3 text-primary-700 dark:bg-primary-950/40 dark:text-primary-300">
                            <UIcon :name="contact.icon" class="h-5 w-5" />
                        </span>
                        <span class="min-w-0">
                            <span class="block text-sm text-neutral-500 dark:text-neutral-400">{{ contact.name }}</span>
                            <span class="block truncate font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300">
                                {{ contact.description }}
                            </span>
                        </span>
                    </a>
                </div>

                <ul class="mt-8 flex justify-center gap-3" aria-label="Social profiles">
                    <li v-for="contact in socialContacts" :key="contact.name">
                        <a
                            :href="contact.link"
                            target="_blank"
                            rel="noreferrer"
                            :aria-label="`Open dark1zinn's ${contact.name} profile`"
                            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition hover:border-primary-400 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-primary-300">
                            <UIcon :name="contact.icon" class="h-5 w-5" />
                        </a>
                    </li>
                </ul>
            </div>
        </UContainer>
    </section>
</template>
