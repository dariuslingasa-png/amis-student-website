<template>
  <div class="academics">
    <section class="page-hero">
      <div class="container">
        <h1>Academics</h1>
        <p>Comprehensive programs designed for student success</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Our Programs</h2>
        <div class="programs-grid">
          <div class="program-card">
            <div class="program-icon">📚</div>
            <h3>Elementary</h3>
            <p>Building strong foundations in core subjects with engaging, hands-on learning experiences.</p>
          </div>
          
          <div class="program-card">
            <div class="program-icon">🔬</div>
            <h3>Middle School</h3>
            <p>Developing critical thinking and problem-solving skills across diverse subjects.</p>
          </div>
          
          <div class="program-card">
            <div class="program-icon">🎯</div>
            <h3>High School</h3>
            <p>Preparing students for college and career with advanced coursework and guidance.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--bg-light)">
      <div class="container">
        <h2 class="section-title">Special Programs</h2>
        <div class="special-programs">
          <div class="special-card">
            <h3>🎨 Arts & Music</h3>
            <p>Nurturing creativity through visual arts, music, and performing arts programs.</p>
          </div>
          <div class="special-card">
            <h3>⚽ Athletics</h3>
            <p>Building teamwork and physical fitness through competitive sports programs.</p>
          </div>
          <div class="special-card">
            <h3>💻 Technology</h3>
            <p>Preparing students for the digital age with coding, robotics, and STEM programs.</p>
          </div>
          <div class="special-card">
            <h3>🌐 Languages</h3>
            <p>Developing global citizens through foreign language and cultural studies.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 180px 0 100px;
  
  text-align: center;
}

.page-hero h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}

.page-hero p {
  font-size: 1.25rem;
  opacity: 0.9;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.program-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  border: 2px solid var(--border);
  transition: all 0.3s;
}

.program-card:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.program-icon {
  font-size: 3.5rem;
  margin-bottom: 20px;
}

.program-card h3 {
  font-size: 1.75rem;
  margin-bottom: 16px;
  color: var(--primary);
}

.program-card p {
  color: var(--text-light);
  line-height: 1.6;
}

.special-programs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.special-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  border-left: 4px solid var(--primary);
}

.special-card h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
  color: var(--text);
}

.special-card p {
  color: var(--text-light);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 140px 0 80px;
  }
  
  .page-hero h1 {
    font-size: 2.5rem;
  }
}
</style>
