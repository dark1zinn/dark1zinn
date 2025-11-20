<script setup lang="ts">
import { projects } from '@/utils/projects'

</script>

<template>
    <section id="projects" class="py-24 relative">
        <UContainer>
            <div class="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                <div>
                    <div
                        class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
                        <UIcon name="i-lucide-briefcase" class="w-4 h-4" />
                        Portfolio
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p class="text-neutral-600 dark:text-neutral-400 max-w-xl">
                        A collection of projects that I've worked on, ranging from configuration files to algorithmic
                        challenges.
                    </p>
                </div>
                <UButton to="https://github.com/dark1zinn?tab=repositories" target="_blank" variant="ghost"
                    color="neutral" icon="i-lucide-arrow-right" trailing class="group">
                    View All Repositories
                </UButton>
            </div>

            <div v-if="projects.length" class="grid md:grid-cols-2 gap-8">
                <UCard v-for="project in projects" :key="project.title"
                    class="group relative overflow-hidden border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    :ui="{ body: 'h-full flex flex-col' }">
                    <div class="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <UIcon name="i-lucide-arrow-up-right" class="w-6 h-6 text-primary-500" />
                    </div>

                    <div class="flex items-start gap-4 mb-4">
                        <div
                            class="p-3 rounded-xl bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                            <UIcon :name="project.icon" class="w-8 h-8" />
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-1 group-hover:text-primary-500 transition-colors">{{
                                project.title }}</h3>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="tag in project.tags" :key="tag"
                                    class="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <p class="text-neutral-600 dark:text-neutral-300 mb-6 flex-1 leading-relaxed">
                        {{ project.description }}
                    </p>

                    <UButton :to="project.link" target="_blank" block variant="soft" color="neutral"
                        class="group-hover:bg-primary-50 dark:group-hover:bg-primary-950/30 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        View Source
                    </UButton>
                </UCard>
            </div>

            <div v-else class="flex flex-col items-center justify-center py-24 text-center">
                <div class="p-6 rounded-full bg-neutral-100 dark:bg-neutral-800 mb-4 animate-pulse">
                    <UIcon name="i-lucide-hard-hat" class="w-12 h-12 text-neutral-400" />
                </div>
                <p class="text-xl font-medium text-neutral-500 dark:text-neutral-400">
                    This is a work in progress
                </p>
            </div>
        </UContainer>
    </section>
</template>
