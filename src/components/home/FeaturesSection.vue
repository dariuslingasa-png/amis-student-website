<template>
  <section class="section features">
    <div class="container">
      <h2 class="section-title">Why Choose AMIS?</h2>
      <p class="section-subtitle">We provide a comprehensive educational experience that prepares students for success</p>
      
      <div class="features-grid">
        <div class="feature-card">
          <div class="sample-ribbon-feature">SAMPLE</div>
          <div class="feature-number">01</div>
          <h3>Academic Excellence</h3>
          <p>Rigorous curriculum designed to challenge and inspire students</p>
        </div>
        
        <div class="feature-card">
          <div class="sample-ribbon-feature">SAMPLE</div>
          <div class="feature-number">02</div>
          <h3>Expert Faculty</h3>
          <p>Dedicated teachers committed to student success</p>
        </div>
        
        <div class="feature-card">
          <div class="sample-ribbon-feature">SAMPLE</div>
          <div class="feature-number">03</div>
          <h3>Modern Facilities</h3>
          <p>State-of-the-art classrooms and learning resources</p>
        </div>
        
        <div class="feature-card">
          <div class="sample-ribbon-feature">SAMPLE</div>
          <div class="feature-number">04</div>
          <h3>Global Perspective</h3>
          <p>Preparing students for an interconnected world</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.feature-card {
  background: var(--bg-light);
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  border-left: 4px solid var(--primary);
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.sample-ribbon-feature {
  position: absolute;
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  color: white;
  padding: 6px 40px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  transform: rotate(-45deg);
  left: -35px;
  top: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 5;
}

.feature-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  opacity: 0.3;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
  color: var(--text);
  font-weight: 600;
}

.feature-card p {
  color: var(--text-light);
  font-size: 0.95rem;
}
</style>
