<template>
  <div class="philosophy-page">
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <router-link to="/about">About Us</router-link>
          <span class="separator">›</span>
          <span class="current">Philosophy</span>
        </div>
        <h1>Our Philosophy</h1>
        <p>The foundation of our educational approach</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="content-card">
          <h2>Educational Philosophy</h2>
          <p>At Al Munawwara Islamic School, we believe in nurturing the whole child - mind, body, and soul. Our educational philosophy is rooted in Islamic values while embracing modern pedagogical approaches. We strive to create an environment where students develop strong moral character, critical thinking skills, and a deep connection to their faith.</p>
          <p>We recognize that each student is unique and deserves personalized attention to reach their full potential in both worldly and spiritual matters. Our approach combines traditional Islamic teachings with contemporary educational methods to prepare students for success in all aspects of life.</p>
        </div>

        <div class="philosophy-pillars">
          <h3>Core Pillars of Our Philosophy</h3>
          <div class="pillars-grid">
            <div class="pillar-card">
              <h4>Islamic Foundation</h4>
              <p>Every aspect of our curriculum is grounded in Islamic principles, ensuring students develop a strong connection with their faith while pursuing academic excellence.</p>
            </div>
            <div class="pillar-card">
              <h4>Holistic Development</h4>
              <p>We focus on developing the intellectual, emotional, physical, and spiritual dimensions of each student to create well-rounded individuals.</p>
            </div>
            <div class="pillar-card">
              <h4>Individual Attention</h4>
              <p>Recognizing that every student learns differently, we provide personalized support to help each child reach their unique potential.</p>
            </div>
            <div class="pillar-card">
              <h4>Global Perspective</h4>
              <p>We prepare students to be responsible global citizens who can navigate the modern world while maintaining their Islamic identity and values.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
  padding: 180px 0 100px;
  margin-top: 150px;
  text-align: center;
}

.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.breadcrumb a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb a:hover {
  color: white;
}

.breadcrumb .separator {
  color: rgba(255, 255, 255, 0.6);
}

.breadcrumb .current {
  color: white;
  font-weight: 600;
}

.page-hero h1 {
  font-size: 3rem;
  margin-bottom: 16px;
  font-weight: 700;
}

.page-hero p {
  font-size: 1.25rem;
  opacity: 0.95;
}

.content-card {
  max-width: 900px;
  margin: 0 auto 60px;
  background: var(--bg-light);
  padding: 50px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.content-card h2 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 24px;
  font-weight: 700;
}

.content-card p {
  font-size: 1.125rem;
  line-height: 1.9;
  color: var(--text-light);
  text-align: justify;
  margin-bottom: 20px;
}

.content-card p:last-child {
  margin-bottom: 0;
}

.philosophy-pillars {
  max-width: 1100px;
  margin: 0 auto;
}

.philosophy-pillars h3 {
  font-size: 2rem;
  color: var(--text);
  text-align: center;
  margin-bottom: 40px;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.pillar-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  border-left: 4px solid var(--primary);
  transition: all 0.3s ease;
}

.pillar-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.pillar-card h4 {
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 12px;
  font-weight: 600;
}

.pillar-card p {
  color: var(--text-light);
  line-height: 1.7;
  font-size: 0.95rem;
}

@media (max-width: 968px) {
  .page-hero {
    padding: 140px 0 80px;
    margin-top: 120px;
  }

  .page-hero h1 {
    font-size: 2.5rem;
  }

  .content-card {
    padding: 30px 20px;
  }

  .content-card h2 {
    font-size: 2rem;
  }

  .pillars-grid {
    grid-template-columns: 1fr;
  }
}
</style>
