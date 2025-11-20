<script setup lang="ts">
import { items, dailyDrivers, familiarWith, explored } from '@/utils/skills'

</script>

<template>
    <section id="skills" class="py-24">
        <UContainer>
            <div class="text-center mb-16">
                <div
                    class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-50 dark:bg-secondary-950/30 text-secondary-600 dark:text-secondary-400 text-sm font-medium mb-6">
                    <UIcon name="i-lucide-cpu" class="w-4 h-4" />
                    Tech Stack
                </div>
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Technologies I Use</h2>
                <p class="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                    A curated list of tools and technologies I use to build digital products.
                </p>
            </div>

            <div class="max-w-5xl mx-auto">
                <UTabs :items="items" class="w-full">
                    <template #daily-drivers>
                        <div
                            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div v-for="tech in dailyDrivers" :key="tech.name"
                                class="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group">
                                <UIcon :name="tech.icon"
                                    class="w-10 h-10 mb-3 transition-transform group-hover:scale-110"
                                    :class="tech.color" />
                                <span class="text-sm font-medium text-neutral-700 dark:text-neutral-200">{{ tech.name
                                    }}</span>
                            </div>
                        </div>
                    </template>

                    <template #familiar-with>
                        <div
                            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div v-for="tech in familiarWith" :key="tech.name"
                                class="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group">
                                <UIcon :name="tech.icon" class="w-8 h-8 mb-3 transition-transform group-hover:scale-110"
                                    :class="tech.color" />
                                <span class="text-sm font-medium text-neutral-700 dark:text-neutral-200">{{ tech.name
                                    }}</span>
                            </div>
                        </div>
                    </template>

                    <template #explored>
                        <div
                            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div v-for="tech in explored" :key="tech.name"
                                class="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-success-500 dark:hover:border-success-500 hover:shadow-lg hover:shadow-success-500/10 transition-all duration-300 group">
                                <UIcon :name="tech.icon" class="w-8 h-8 mb-3 transition-transform group-hover:scale-110"
                                    :class="tech.color" />
                                <span class="text-sm font-medium text-neutral-700 dark:text-neutral-200">{{ tech.name
                                    }}</span>
                            </div>
                        </div>
                    </template>
                </UTabs>
            </div>
        </UContainer>
    </section>
</template>
