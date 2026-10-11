<script setup lang="ts">
import { projects } from '@/utils/projects'
</script>

<template>
    <section id="projects" class="section-space border-y border-neutral-200/70 bg-white/40 dark:border-neutral-800/70 dark:bg-neutral-900/20">
        <UContainer>
            <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div class="max-w-2xl">
                    <p class="section-kicker">Selected work</p>
                    <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Tools built for real developer workflows.
                    </h2>
                    <p class="mt-5 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                        A selection of open-source projects spanning developer experience, systems, and application infrastructure.
                    </p>
                </div>
                <UButton
                    to="https://github.com/dark1zinn?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    variant="outline"
                    color="neutral"
                    icon="lucide:github"
                    trailing-icon="lucide:arrow-up-right">
                    View all repositories
                </UButton>
            </div>

            <ul class="mt-12 grid gap-5 md:grid-cols-2" aria-label="Selected GitHub projects">
                <li v-for="project in projects" :key="project.title">
                    <a
                        :href="project.link"
                        target="_blank"
                        rel="noreferrer"
                        class="group surface-card flex h-full flex-col transition duration-200 hover:-translate-y-1 hover:border-primary-400 hover:shadow-lg hover:shadow-primary-950/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
                        <div class="flex items-start justify-between gap-4">
                            <div class="flex items-center gap-3">
                                <span class="rounded-xl bg-primary-50 p-3 text-primary-700 dark:bg-primary-950/40 dark:text-primary-300">
                                    <UIcon :name="project.icon" class="h-5 w-5" />
                                </span>
                                <h3 class="text-xl font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300">
                                    {{ project.title }}
                                </h3>
                            </div>
                            <UIcon name="lucide:arrow-up-right" class="mt-1 h-5 w-5 text-neutral-400 transition group-hover:text-primary-600 dark:group-hover:text-primary-300" />
                        </div>
                        <p class="mt-5 flex-1 leading-7 text-neutral-600 dark:text-neutral-300">
                            {{ project.description }}
                        </p>
                        <ul class="mt-6 flex flex-wrap gap-2" :aria-label="`${project.title} technologies`">
                            <li
                                v-for="tag in project.tags"
                                :key="tag"
                                class="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                                {{ tag }}
                            </li>
                        </ul>
                        <span class="mt-6 text-sm font-semibold text-primary-700 dark:text-primary-300">
                            Open source on GitHub <span class="sr-only">— opens in a new tab</span>
                        </span>
                    </a>
                </li>
            </ul>
        </UContainer>
    </section>
</template>
