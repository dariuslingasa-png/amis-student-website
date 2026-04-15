<template>
  <div class="goals-page">
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <router-link to="/about">About Us</router-link>
          <span class="separator">›</span>
          <span class="current">Goals</span>
        </div>
        <h1>Our Goals</h1>
        <p>What we strive to achieve for our students</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="intro-text">
          <p>At Al Munawwara Islamic School, our goals are designed to ensure that every student receives a comprehensive education that prepares them for success in both this world and the hereafter. These goals guide our curriculum, teaching methods, and overall approach to education.</p>
        </div>

        <div class="goals-grid">
          <div class="goal-card">
            <div class="goal-number">01</div>
            <h3>Academic Excellence</h3>
            <p>Provide a rigorous curriculum that meets national standards while incorporating Islamic studies, ensuring students excel in both religious and secular subjects. We aim to develop strong foundational skills in literacy, numeracy, and critical thinking.</p>
          </div>

          <div class="goal-card">
            <div class="goal-number">02</div>
            <h3>Character Development</h3>
            <p>Instill strong moral values and Islamic ethics in students, helping them develop integrity, compassion, and respect for others. We focus on building character traits that reflect the teachings of Islam and prepare students to be exemplary members of society.</p>
          </div>

          <div class="goal-card">
            <div class="goal-number">03</div>
            <h3>Spiritual Growth</h3>
            <p>Foster a deep connection with Allah through Quranic studies, Islamic teachings, and daily practice of faith. We encourage students to develop a strong spiritual foundation that will guide them throughout their lives.</p>
          </div>

          <div class="goal-card">
            <div class="goal-number">04</div>
            <h3>Critical Thinking</h3>
            <p>Develop students' analytical and problem-solving skills to prepare them for future challenges in an ever-changing world. We encourage questioning, exploration, and independent thinking within an Islamic framework.</p>
          </div>

          <div class="goal-card">
            <div class="goal-number">05</div>
            <h3>Community Engagement</h3>
            <p>Encourage active participation in community service and social responsibility, building strong connections with the broader community. We teach students the importance of giving back and making a positive impact on society.</p>
          </div>

          <div class="goal-card">
            <div class="goal-number">06</div>
            <h3>Global Citizenship</h3>
            <p>Prepare students to be responsible global citizens who understand and appreciate diverse cultures while maintaining their Islamic identity. We aim to develop students who can navigate the modern world with confidence and integrity.</p>
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

.intro-text {
  max-width: 800px;
  margin: 0 auto 50px;
  text-align: center;
}

.intro-text p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-light);
}

.goals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.goal-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  border-left: 4px solid var(--primary);
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.goal-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.goal-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  opacity: 0.15;
  line-height: 1;
}

.goal-card h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: var(--text);
  font-weight: 600;
}

.goal-card p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.7;
}

@media (max-width: 968px) {
  .page-hero {
    padding: 140px 0 80px;
    margin-top: 120px;
  }

  .page-hero h1 {
    font-size: 2.5rem;
  }

  .goals-grid {
    grid-template-columns: 1fr;
  }
}
</style>
