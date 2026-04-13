<template>
  <div class="about">
    <section class="page-hero">
      <div class="container">
        <h1>About AMIS</h1>
        <p>Learn about our mission, vision, and values</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="content-grid">
          <div class="content-text">
            <h2>Our Mission</h2>
            <p>At AMIS, we are committed to providing exceptional education that empowers students to reach their full potential. We foster a nurturing environment where academic excellence, character development, and innovation thrive.</p>
          </div>
          <div class="content-image">
            <div class="placeholder-image">🏫</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--bg-light)">
      <div class="container">
        <h2 class="section-title">Our Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <h3>Excellence</h3>
            <p>Striving for the highest standards in everything we do</p>
          </div>
          <div class="value-card">
            <h3>Integrity</h3>
            <p>Building trust through honesty and ethical behavior</p>
          </div>
          <div class="value-card">
            <h3>Innovation</h3>
            <p>Embracing new ideas and creative solutions</p>
          </div>
          <div class="value-card">
            <h3>Community</h3>
            <p>Creating a supportive and inclusive environment</p>
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
  margin-top: 80px;
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

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.content-text h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.content-text p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-light);
}

.placeholder-image {
  background: var(--bg-light);
  border-radius: 12px;
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.value-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--border);
}

.value-card h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: var(--primary);
}

.value-card p {
  color: var(--text-light);
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .page-hero {
    padding: 140px 0 80px;
  }
  
  .page-hero h1 {
    font-size: 2.5rem;
  }
}
</style>
