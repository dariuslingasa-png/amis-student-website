<template>
  <section class="section stats">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">1000+</div>
          <div class="stat-label">Students</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">50+</div>
          <div class="stat-label">Teachers</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">95%</div>
          <div class="stat-label">Success Rate</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">20+</div>
          <div class="stat-label">Years</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  background: var(--bg-gray);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.stat-card {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--primary);
}

.stat-label {
  font-size: 1rem;
  color: var(--text-light);
}
</style>
