<template>
  <div class="portfolio">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'dark1zinn | Full Stack Developer Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio of dark1zinn - Full Stack Developer from Brazil specializing in TypeScript, Node.js, and modern web technologies.' }
  ]
})
</script>

<style scoped>
.portfolio {
  min-height: 100vh;
  position: relative;
}

/* Background effects */
.portfolio::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(162, 119, 255, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(97, 255, 202, 0.08) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.portfolio > * {
  position: relative;
  z-index: 1;
}
</style>
