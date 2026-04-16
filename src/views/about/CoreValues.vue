<template>
  <div class="core-values-page">
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <router-link to="/about">About Us</router-link>
          <span class="separator">›</span>
          <span class="current">Core Values</span>
        </div>
        <h1>Core Values</h1>
        <p>The principles that guide us</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="intro-text">
          <h2>CORE VALUES</h2>
          <p>Our core values represent the fundamental beliefs and guiding principles that shape our school community and educational approach.</p>
        </div>

        <div class="values-grid">
          <div class="value-card">
            <div class="value-letter">A</div>
            <h3>Allah-consciousness (Taqwa)</h3>
            <p>We cultivate a deep awareness of Allah in all our actions and decisions, fostering spiritual growth and mindfulness in our students and staff.</p>
          </div>

          <div class="value-card">
            <div class="value-letter">M</div>
            <h3>Moral Integrity</h3>
            <p>We uphold the highest standards of honesty, ethics, and moral character, ensuring that our actions align with Islamic principles and values.</p>
          </div>

          <div class="value-card">
            <div class="value-letter">I</div>
            <h3>Innovation</h3>
            <p>We embrace creativity and progressive thinking in our educational approach, continuously seeking better ways to serve our students and community.</p>
          </div>

          <div class="value-card">
            <div class="value-letter">S</div>
            <h3>Service to Ummah and Nation</h3>
            <p>We are committed to serving both the Muslim community and our nation, preparing students to be responsible citizens who contribute positively to society.</p>
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

.intro-text {
  max-width: 800px;
  margin: 0 auto 50px;
  text-align: center;
}

.intro-text h2 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 20px;
  font-weight: 700;
}

.intro-text p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-light);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.value-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-top: 4px solid var(--primary);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.value-letter {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 auto 20px;
}

.value-card h3 {
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 15px;
  font-weight: 600;
}

.value-card p {
  color: var(--text-light);
  line-height: 1.7;
  font-size: 0.95rem;
}

@media (max-width: 968px) {
  .page-hero {
    padding: 140px 0 80px;
    
  }

  .page-hero h1 {
    font-size: 2.5rem;
  }

  .intro-text h2 {
    font-size: 2rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
