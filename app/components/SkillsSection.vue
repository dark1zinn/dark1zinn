<template>
  <section id="skills" class="skills section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Tech Stack</h2>
        <p class="section-subtitle">Technologies I work with</p>
      </div>
      
      <div class="skills-categories">
        <!-- Daily Drivers -->
        <div class="skill-category">
          <div class="category-header">
            <h3>🚀 Daily Drivers</h3>
            <p>Technologies I use every day</p>
          </div>
          <div class="skills-grid">
            <div class="skill-card card" v-for="skill in dailyDrivers" :key="skill.name">
              <div class="skill-icon" v-html="skill.icon"></div>
              <div class="skill-info">
                <h4>{{ skill.name }}</h4>
                <p>{{ skill.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Familiar With -->
        <div class="skill-category">
          <div class="category-header">
            <h3>🔧 Familiar With</h3>
            <p>Technologies I have good experience with</p>
          </div>
          <div class="skills-grid grid-compact">
            <div class="skill-badge badge" v-for="skill in familiarWith" :key="skill">
              {{ skill }}
            </div>
          </div>
        </div>
        
        <!-- Currently Learning -->
        <div class="skill-category">
          <div class="category-header">
            <h3>🎯 Currently Learning</h3>
            <p>Exploring new technologies</p>
          </div>
          <div class="skills-grid">
            <div class="skill-card card learning" v-for="skill in learning" :key="skill.name">
              <div class="skill-icon" v-html="skill.icon"></div>
              <div class="skill-info">
                <h4>{{ skill.name }}</h4>
                <p>{{ skill.description }}</p>
              </div>
              <div class="learning-badge">Learning</div>
            </div>
          </div>
        </div>
        
        <!-- Explored -->
        <div class="skill-category">
          <div class="category-header">
            <h3>👀 Explored</h3>
            <p>Technologies I've worked with</p>
          </div>
          <div class="skills-grid grid-compact">
            <div class="skill-badge badge" v-for="skill in explored" :key="skill">
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const dailyDrivers = [
  {
    name: 'TypeScript',
    description: 'Primary language for type-safe development',
    icon: '📘'
  },
  {
    name: 'JavaScript',
    description: 'Foundation of web development',
    icon: '⚡'
  },
  {
    name: 'Node.js',
    description: 'Backend runtime environment',
    icon: '🟢'
  },
  {
    name: 'Git & GitHub',
    description: 'Version control and collaboration',
    icon: '🔀'
  },
  {
    name: 'VS Code',
    description: 'Primary code editor',
    icon: '💻'
  },
  {
    name: 'Bun',
    description: 'Fast JavaScript runtime',
    icon: '🥟'
  }
]

const familiarWith = [
  'React',
  'Vue.js',
  'NestJS',
  'Docker',
  'Prisma',
  'TailwindCSS',
  'SASS',
  'Vite',
  'Jest',
  'HTML5',
  'CSS3'
]

const learning = [
  {
    name: 'Rust',
    description: 'Systems programming language',
    icon: '🦀'
  },
  {
    name: 'Tauri',
    description: 'Building desktop applications',
    icon: '🪟'
  }
]

const explored = [
  'Python',
  'Java',
  'C',
  'PostgreSQL',
  'Electron',
  'Cloudflare',
  'Nginx',
  'GitHub Actions',
  'Google Cloud',
  'Figma',
  'Blender'
]
</script>

<style scoped>
.skills {
  background: var(--color-bg-secondary);
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

.skills-categories {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4xl);
}

.skill-category {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.category-header h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-xs);
}

.category-header p {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  margin: 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-lg);
}

.grid-compact {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.skill-card {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  position: relative;
}

.skill-icon {
  font-size: var(--font-size-3xl);
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-lg);
  flex-shrink: 0;
}

.skill-info {
  flex: 1;
}

.skill-info h4 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-primary);
  background: none;
  -webkit-text-fill-color: var(--color-text-primary);
}

.skill-info p {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: 0;
}

.skill-card.learning {
  border-color: var(--color-accent);
}

.learning-badge {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--color-accent);
  color: var(--color-bg-primary);
  font-size: var(--font-size-xs);
  font-weight: 700;
  border-radius: var(--radius-sm);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.skill-badge {
  font-size: var(--font-size-base);
  padding: var(--spacing-sm) var(--spacing-lg);
  cursor: default;
}

/* Responsive */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
