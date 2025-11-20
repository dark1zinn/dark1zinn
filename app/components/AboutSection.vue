<script setup lang="ts">
import ghRepos from '@/utils/ghRepos'
const repos = await ghRepos()
</script>
<template>
    <section id="about" class="py-24 relative">
        <UContainer>
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Text Content -->
                <div class="space-y-6">
                    <div
                        class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
                        <UIcon name="i-lucide-user" class="w-4 h-4" />
                        About Me
                    </div>

                    <h2 class="text-3xl md:text-4xl font-bold">
                        Passionate about <br />
                        <span class="text-primary-500">Clean Code</span> & <span
                            class="text-secondary-500">Performance</span>
                    </h2>

                    <p class="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        I'm a Computer Science student at Estácio, based in Brazil. My journey involves deep diving into
                        the JavaScript ecosystem, exploring functional programming, and optimizing systems with DevOps
                        practices.
                    </p>

                    <div class="grid grid-cols-2 gap-4 pt-4">
                        <div
                            class="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors group">
                            <h3
                                class="text-3xl font-bold text-primary-500 mb-1 group-hover:scale-110 transition-transform origin-left">
                                2+</h3>
                            <p class="text-sm text-neutral-500">Years of Experience</p>
                        </div>
                        <div
                            class="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-secondary-500 dark:hover:border-secondary-500 transition-colors group">
                            <h3
                                class="text-3xl font-bold text-secondary-500 mb-1 group-hover:scale-110 transition-transform origin-left">
                                {{ repos }}</h3>
                            <p class="text-sm text-neutral-500">Repositories</p>
                        </div>
                    </div>
                </div>

                <!-- Visual/Code Block -->
                <!-- Visual/Code Block -->
                <div class="relative group">
                    <div
                        class="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                        class="relative bg-[#1e1e2e] rounded-2xl border border-white/10 shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
                        <div class="flex items-center gap-2 px-4 py-3 bg-[#181825] border-b border-white/5">
                            <div class="flex gap-1.5">
                                <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                            </div>
                            <div class="ml-auto text-xs font-mono text-white/30">dark1zinn.ts</div>
                        </div>

                        <div class="p-6 overflow-x-auto">
                            <pre class="font-mono text-sm leading-7 text-[#cdd6f4]"><code><span class="text-[#cba6f7]">const</span> <span class="text-[#f9e2af]">developer</span> <span class="text-[#89b4fa]">=</span> <span class="text-[#9399b2]">{</span>
  <span class="text-[#f38ba8]">name</span><span class="text-[#89b4fa]">:</span> <span class="text-[#a6e3a1]">'dark1zinn'</span><span class="text-[#9399b2]">,</span>
  <span class="text-[#f38ba8]">role</span><span class="text-[#89b4fa]">:</span> <span class="text-[#a6e3a1]">'Full Stack Dev'</span><span class="text-[#9399b2]">,</span>
  <span class="text-[#f38ba8]">location</span><span class="text-[#89b4fa]">:</span> <span class="text-[#a6e3a1]">'Brazil <UIcon name="cif:br" />'</span><span class="text-[#9399b2]">,</span>
  <span class="text-[#f38ba8]">traits</span><span class="text-[#89b4fa]">:</span> <span class="text-[#9399b2]">[</span>
    <span class="text-[#a6e3a1]">'Creative'</span><span class="text-[#9399b2]">,</span>
    <span class="text-[#a6e3a1]">'Curious'</span><span class="text-[#9399b2]">,</span>
    <span class="text-[#a6e3a1]">'Detail-oriented'</span>
  <span class="text-[#9399b2]">]</span>
<span class="text-[#9399b2]">}</span></code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
