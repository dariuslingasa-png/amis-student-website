<template>
  <section class="section cta">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Join Our Community?</h2>
        <p>Start your journey with AMIS today</p>
        <router-link to="/admissions" class="btn btn-primary">Apply Now</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background: white;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.125rem;
  color: var(--text-light);
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>
