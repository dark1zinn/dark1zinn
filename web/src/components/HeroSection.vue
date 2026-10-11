<template>
    <section class="section-space">
        <UContainer>
            <div class="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.8fr)] lg:gap-20">
                <div class="order-2 lg:order-1">
                    <p class="mb-5 flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-300">
                        <span class="h-2 w-2 rounded-full bg-primary-500" aria-hidden="true" />
                        Based in Brazil
                    </p>
                    <h1 class="max-w-3xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                        Building software with
                        <span class="text-primary-600 dark:text-primary-300">clarity</span> and care.
                    </h1>
                    <p class="content-measure mt-7 text-xl leading-8 text-neutral-600 dark:text-neutral-300">
                        I’m a software developer turning complex ideas into simple, dependable software.
                    </p>
                    <div class="mt-9 flex flex-wrap gap-3">
                        <UButton
                            to="#projects"
                            size="lg"
                            color="primary"
                            icon="lucide:arrow-down-right"
                            class="font-semibold">
                            View selected work
                        </UButton>
                        <UButton
                            to="#contact"
                            size="lg"
                            variant="outline"
                            color="neutral"
                            icon="lucide:mail">
                            Start a conversation
                        </UButton>
                    </div>
                </div>

                <div class="order-1 lg:order-2">
                    <div class="relative mx-auto max-w-sm">
                        <div class="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-primary-500/30 via-transparent to-secondary-500/30 blur-2xl" aria-hidden="true" />
                        <img
                            src="https://github.com/dark1zinn.png"
                            alt="Portrait of dark1zinn"
                            class="relative aspect-square w-full rounded-[1.75rem] border border-white/70 object-cover shadow-2xl shadow-primary-950/20 dark:border-neutral-700/70" />
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
