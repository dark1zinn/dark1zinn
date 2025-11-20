<template>
  <section class="hero section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text animate-fade-in">
          <div class="greeting">
            <span class="wave">👋</span>
            <span>Hey there! I'm</span>
          </div>
          <h1 class="hero-title">
            <span class="name">dark1zinn</span>
          </h1>
          <h2 class="hero-subtitle">
            Full Stack Developer <span class="separator">|</span> CS Student
          </h2>
          <p class="hero-description">
            Passionate about building <span class="highlight">cool stuff</span> with modern technologies.
            From Brazil 🇧🇷, always learning and exploring new tech.
          </p>
          
          <div class="hero-cta">
            <a href="#contact" class="btn btn-primary">
              <span>Get In Touch</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#projects" class="btn btn-outline">
              <span>View Projects</span>
            </a>
          </div>
          
          <div class="social-links">
            <a href="https://discord.com/users/617089012003241994" target="_blank" rel="noopener" class="social-link" title="Discord">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/dark1zinn/" target="_blank" rel="noopener" class="social-link" title="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://github.com/dark1zinn" target="_blank" rel="noopener" class="social-link" title="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@dark1zin_" target="_blank" rel="noopener" class="social-link" title="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="hero-visual animate-fade-in">
          <div class="code-window">
            <div class="window-header">
              <div class="window-controls">
                <span class="control close"></span>
                <span class="control minimize"></span>
                <span class="control maximize"></span>
              </div>
              <div class="window-title">dark1zinn.ts</div>
            </div>
            <div class="window-content">
              <pre><code><span class="keyword">const</span> <span class="variable">developer</span> = {
  <span class="property">name</span>: <span class="string">"dark1zinn"</span>,
  <span class="property">location</span>: <span class="string">"Brazil 🇧🇷"</span>,
  <span class="property">role</span>: <span class="string">"Full Stack Developer"</span>,
  <span class="property">education</span>: <span class="string">"Computer Science"</span>,
  <span class="property">skills</span>: [
    <span class="string">"TypeScript"</span>,
    <span class="string">"Node.js"</span>,
    <span class="string">"Vue.js"</span>,
    <span class="string">"React"</span>
  ],
  <span class="property">passion</span>: <span class="string">"Building cool stuff"</span>,
  <span class="property">currentlyLearning</span>: [
    <span class="string">"Rust"</span>,
    <span class="string">"Tauri"</span>
  ]
};</code></pre>
            </div>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4xl);
  align-items: center;
}

.hero-text {
  animation-delay: 0.2s;
}

.greeting {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
}

.wave {
  display: inline-block;
  animation: wave 2.5s ease-in-out infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  40% { transform: rotate(14deg); }
  50% { transform: rotate(0deg); }
}

.hero-title {
  font-size: var(--font-size-6xl);
  font-weight: 800;
  margin-bottom: var(--spacing-sm);
  line-height: 1.1;
}

.name {
  background: var(--gradient-secondary);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease infinite;
}

.hero-subtitle {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
  background: none;
  -webkit-text-fill-color: var(--color-text-secondary);
}

.separator {
  color: var(--color-primary);
  margin: 0 var(--spacing-sm);
}

.hero-description {
  font-size: var(--font-size-lg);
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: var(--spacing-2xl);
}

.highlight {
  color: var(--color-accent);
  font-weight: 600;
}

.hero-cta {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.social-link {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text-secondary);
  transition: all var(--transition-base);
}

.social-link:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

/* Code Window */
.hero-visual {
  animation-delay: 0.4s;
}

.code-window {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.window-header {
  background: var(--color-bg-tertiary);
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
}

.window-controls {
  display: flex;
  gap: var(--spacing-xs);
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.close { background: #ff5f56; }
.minimize { background: #ffbd2e; }
.maximize { background: #27c93f; }

.window-title {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.window-content {
  padding: var(--spacing-xl);
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  line-height: 1.8;
  overflow-x: auto;
}

.window-content code {
  background: none;
  padding: 0;
  color: var(--color-text-primary);
}

.keyword { color: #ff79c6; }
.variable { color: #f8f8f2; }
.property { color: #50fa7b; }
.string { color: #f1fa8c; }

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: var(--spacing-2xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  animation: float 3s ease-in-out infinite;
}

.mouse {
  width: 24px;
  height: 36px;
  border: 2px solid var(--color-border);
  border-radius: 12px;
  position: relative;
}

.wheel {
  width: 3px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s ease-in-out infinite;
}

@keyframes scroll {
  0%, 100% {
    opacity: 0;
    transform: translateX(-50%) translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateX(-50%) translateY(8px);
  }
}

/* Responsive */
@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .hero-visual {
    order: -1;
  }
  
  .hero-title {
    font-size: var(--font-size-4xl);
  }
  
  .hero-cta {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .window-content {
    font-size: 0.75rem;
    padding: var(--spacing-md);
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>
