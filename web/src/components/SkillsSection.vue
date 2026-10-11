<script setup lang="ts">
import { dailyDrivers, explored, familiarWith } from '@/utils/skills'

const groups = [
    {
        title: 'Daily drivers',
        description: 'The tools I reach for when building and shipping software.',
        technologies: dailyDrivers,
    },
    {
        title: 'Familiar with',
        description: 'Technologies I can use effectively across a product stack.',
        technologies: familiarWith,
    },
    {
        title: 'Explored',
        description: 'Tools I have worked with while learning different problem spaces.',
        technologies: explored,
    },
]
</script>

<template>
    <section id="skills" class="section-space">
        <UContainer>
            <div class="max-w-2xl">
                <p class="section-kicker">Skills</p>
                <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    A practical, evolving toolkit.
                </h2>
                <p class="mt-5 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                    Technologies I use to build, maintain, and improve software.
                </p>
            </div>

            <div class="mt-12 grid gap-5 lg:grid-cols-3">
                <section v-for="group in groups" :key="group.title" class="surface-card">
                    <h3 class="text-lg font-semibold">{{ group.title }}</h3>
                    <p class="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                        {{ group.description }}
                    </p>
                    <ul class="mt-6 flex flex-wrap gap-2" :aria-label="group.title">
                        <li
                            v-for="technology in group.technologies"
                            :key="technology.name"
                            class="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm font-medium dark:border-neutral-700 dark:bg-neutral-800">
                            <UIcon :name="technology.icon" class="h-4 w-4" :class="technology.color" />
                            {{ technology.name }}
                        </li>
                    </ul>
                </section>
            </div>
        </UContainer>
    </section>
</template>
