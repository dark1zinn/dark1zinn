<template>
  <section id="about" class="about section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">Get to know me better</p>
      </div>
      
      <div class="about-content">
        <div class="about-text">
          <div class="about-card card">
            <h3>👨‍💻 Who I Am</h3>
            <p>
              I'm a passionate <strong>Full Stack Developer</strong> from Brazil 🇧🇷, currently pursuing 
              <strong>Computer Science</strong> at Estácio University. I love building cool stuff and 
              experimenting with new technologies.
            </p>
            <p>
              My journey in tech started with curiosity and evolved into a passion for creating 
              efficient, scalable, and beautiful applications. I'm always eager to learn and take 
              on new challenges.
            </p>
          </div>
          
          <div class="about-card card">
            <h3>🎯 What I Do</h3>
            <p>
              I specialize in building modern web applications using <strong>TypeScript</strong>, 
              <strong>Node.js</strong>, and frameworks like <strong>Vue.js</strong> and <strong>React</strong>. 
              I'm also diving into <strong>Rust</strong> and <strong>Tauri</strong> for desktop applications.
            </p>
            <p>
              Beyond coding, I'm interested in <strong>DevOps</strong>, <strong>system architecture</strong>, 
              and exploring how different technologies can work together to solve real-world problems.
            </p>
          </div>
        </div>
        
        <div class="about-stats">
          <div class="stat-card card">
            <div class="stat-icon">🎓</div>
            <div class="stat-content">
              <h4>Education</h4>
              <p>Computer Science</p>
              <span class="stat-detail">Estácio University</span>
            </div>
          </div>
          
          <div class="stat-card card">
            <div class="stat-icon">💼</div>
            <div class="stat-content">
              <h4>Focus</h4>
              <p>Full Stack Development</p>
              <span class="stat-detail">Web & Desktop Apps</span>
            </div>
          </div>
          
          <div class="stat-card card">
            <div class="stat-icon">🌍</div>
            <div class="stat-content">
              <h4>Location</h4>
              <p>Brazil</p>
              <span class="stat-detail">Remote Available</span>
            </div>
          </div>
          
          <div class="stat-card card">
            <div class="stat-icon">🎵</div>
            <div class="stat-content">
              <h4>Fun Fact</h4>
              <p>Music Lover</p>
              <span class="stat-detail">Coding 24/7 with music</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="interests">
        <h3 class="interests-title">Interests & Passions</h3>
        <div class="interests-grid">
          <div class="interest-item badge">
            <span>🚀</span>
            <span>Modern Web Tech</span>
          </div>
          <div class="interest-item badge">
            <span>⚙️</span>
            <span>DevOps</span>
          </div>
          <div class="interest-item badge">
            <span>🏗️</span>
            <span>System Architecture</span>
          </div>
          <div class="interest-item badge">
            <span>🎨</span>
            <span>UI/UX Design</span>
          </div>
          <div class="interest-item badge">
            <span>📱</span>
            <span>Desktop Apps</span>
          </div>
          <div class="interest-item badge">
            <span>🔧</span>
            <span>Open Source</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
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

.about-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-4xl);
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.about-card h3 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.about-card p {
  margin-bottom: var(--spacing-md);
  line-height: 1.8;
}

.about-card p:last-child {
  margin-bottom: 0;
}

.about-card strong {
  color: var(--color-primary);
  font-weight: 600;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
  align-content: start;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
}

.stat-icon {
  font-size: var(--font-size-3xl);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-lg);
  flex-shrink: 0;
}

.stat-content h4 {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: none;
  -webkit-text-fill-color: var(--color-text-muted);
}

.stat-content p {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.stat-detail {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.interests {
  text-align: center;
}

.interests-title {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-xl);
}

.interests-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  justify-content: center;
}

.interest-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-size-base);
  cursor: default;
}

.interest-item span:first-child {
  font-size: var(--font-size-xl);
}

/* Responsive */
@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
  }
  
  .about-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .about-stats {
    grid-template-columns: 1fr;
  }
  
  .interests-grid {
    justify-content: flex-start;
  }
}
</style>
