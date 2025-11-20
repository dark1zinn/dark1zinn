<template>
    <section id="projects" class="projects section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Featured Projects</h2>
                <p class="section-subtitle">Some of the cool stuff I've built</p>
            </div>

            <div class="projects-grid">
                <div class="project-card card" v-for="project in projects" :key="project.title">
                    <div class="project-header">
                        <div class="project-icon">{{ project.icon }}</div>
                        <div class="project-status" :class="project.status">
                            {{ project.status }}
                        </div>
                    </div>

                    <h3 class="project-title">{{ project.title }}</h3>
                    <p class="project-description">{{ project.description }}</p>

                    <div class="project-tech">
                        <span class="tech-tag" v-for="tech in project.tech" :key="tech">
                            {{ tech }}
                        </span>
                    </div>

                    <div class="project-links">
                        <a v-if="project.github" :href="project.github" target="_blank" rel="noopener"
                            class="project-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span>Code</span>
                        </a>
                        <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener"
                            class="project-link primary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            <span>Demo</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="github-cta">
                <p>Want to see more?</p>
                <a href="https://github.com/dark1zinn" target="_blank" rel="noopener" class="btn btn-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>View GitHub Profile</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const projects = [
    {
        title: 'Portfolio Website',
        description: 'Modern portfolio built with Nuxt 3, featuring stunning animations and responsive design. Optimized for static generation.',
        icon: '🎨',
        tech: ['Nuxt 3', 'Vue.js', 'TypeScript', 'CSS3'],
        status: 'active',
        github: 'https://github.com/dark1zinn/dark1zinn',
        demo: '#'
    },
    {
        title: 'Discord Bot',
        description: 'Feature-rich Discord bot built with TypeScript and Discord.js, providing utility commands and automation.',
        icon: '🤖',
        tech: ['TypeScript', 'Discord.js', 'Node.js'],
        status: 'active',
        github: '#'
    },
    {
        title: 'Web Dashboard',
        description: 'Admin dashboard with real-time data visualization, built with modern frameworks and best practices.',
        icon: '📊',
        tech: ['React', 'TypeScript', 'TailwindCSS'],
        status: 'in-progress',
        github: '#'
    },
    {
        title: 'API Server',
        description: 'RESTful API server with authentication, database integration, and comprehensive documentation.',
        icon: '⚡',
        tech: ['NestJS', 'Prisma', 'PostgreSQL'],
        status: 'active',
        github: '#'
    },
    {
        title: 'Desktop App',
        description: 'Cross-platform desktop application built with Tauri and Rust for optimal performance.',
        icon: '🖥️',
        tech: ['Tauri', 'Rust', 'Vue.js'],
        status: 'in-progress',
        github: '#'
    },
    {
        title: 'CLI Tool',
        description: 'Command-line tool for developers to automate repetitive tasks and improve workflow.',
        icon: '⌨️',
        tech: ['Node.js', 'TypeScript'],
        status: 'active',
        github: '#'
    }
]
</script>

<style scoped>
.projects {
    background: var(--color-bg-primary);
}

.section-header {
    text-align: center;
    margin-bottom: var(--spacing-4xl);
}

.section-title {
    font-size: var(--font-size-4xl);
    margin-bottom: var(--spacing-sm);
}

.section-subtitle {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-4xl);
}

.project-card {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-xl);
}

.project-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.project-icon {
    font-size: var(--font-size-3xl);
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg-tertiary);
    border-radius: var(--radius-lg);
}

.project-status {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-size-xs);
    font-weight: 700;
    border-radius: var(--radius-sm);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.project-status.active {
    background: rgba(97, 255, 202, 0.2);
    color: var(--color-accent);
}

.project-status.in-progress {
    background: rgba(162, 119, 255, 0.2);
    color: var(--color-primary);
}

.project-title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    margin: 0;
    color: var(--color-text-primary);
    background: none;
    -webkit-text-fill-color: var(--color-text-primary);
}

.project-description {
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin: 0;
    flex: 1;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
}

.tech-tag {
    padding: var(--spacing-xs) var(--spacing-sm);
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    font-weight: 500;
}

.project-links {
    display: flex;
    gap: var(--spacing-sm);
    padding-top: var(--spacing-md);
    border-top: 1px solid var(--color-border);
}

.project-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    padding: var(--spacing-sm) var(--spacing-md);
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    font-weight: 600;
    transition: all var(--transition-fast);
    flex: 1;
    justify-content: center;
}

.project-link:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-2px);
}

.project-link.primary {
    background: var(--gradient-primary);
    border-color: transparent;
    color: white;
}

.project-link.primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
}

.github-cta {
    text-align: center;
    padding: var(--spacing-3xl);
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
}

.github-cta p {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-lg);
    color: var(--color-text-primary);
}

/* Responsive */
@media (max-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
</style>
