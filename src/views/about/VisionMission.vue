<template>
  <div class="vision-mission-page">
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <router-link to="/about">About Us</router-link>
          <span class="separator">›</span>
          <span class="current">Vision & Mission</span>
        </div>
        <h1>Vision & Mission</h1>
        <p>Our guiding principles and aspirations</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="vm-grid">
          <div class="vm-card vision-card">
            <h2>Our Vision</h2>
            <p>To be a leading Islamic educational institution that produces well-rounded individuals who excel academically, embody Islamic values, and contribute positively to society. We envision a community of learners who are confident, compassionate, and committed to lifelong learning and service to humanity.</p>
            
            <div class="vision-points">
              <h3>We Aspire To:</h3>
              <ul>
                <li>Be recognized as a center of excellence in Islamic education</li>
                <li>Develop future leaders who embody Islamic values</li>
                <li>Create a nurturing environment for holistic growth</li>
                <li>Foster a strong sense of community and belonging</li>
                <li>Inspire lifelong learning and continuous improvement</li>
              </ul>
            </div>
          </div>

          <div class="vm-card mission-card">
            <h2>Our Mission</h2>
            <p>To provide quality Islamic education that integrates academic excellence with spiritual development. We are committed to fostering a nurturing environment where students develop strong character, critical thinking skills, and a deep understanding of Islamic principles. Our mission is to prepare students to be responsible citizens who contribute meaningfully to their communities while maintaining their Islamic identity.</p>
            
            <div class="mission-points">
              <h3>We Commit To:</h3>
              <ul>
                <li>Deliver high-quality education rooted in Islamic values</li>
                <li>Nurture moral character and ethical behavior</li>
                <li>Develop critical thinking and problem-solving skills</li>
                <li>Promote spiritual growth and religious understanding</li>
                <li>Prepare students for success in this life and the hereafter</li>
              </ul>
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

.vm-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  max-width: 900px;
  margin: 0 auto;
}

.vm-card {
  padding: 50px 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.vision-card {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
}

.mission-card {
  background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
  color: white;
}

.vm-card h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 700;
}

.vm-card > p {
  font-size: 1.125rem;
  line-height: 1.8;
  opacity: 0.95;
  margin-bottom: 40px;
  text-align: justify;
}

.vision-points,
.mission-points {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 12px;
  text-align: left;
}

.vision-points h3,
.mission-points h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
}

.vision-points ul,
.mission-points ul {
  list-style: none;
  padding: 0;
}

.vision-points li,
.mission-points li {
  padding: 12px 0 12px 30px;
  position: relative;
  font-size: 1rem;
  line-height: 1.6;
}

.vision-points li:before,
.mission-points li:before {
  content: "•";
  position: absolute;
  left: 0;
  font-weight: bold;
  font-size: 1.5rem;
}

@media (max-width: 968px) {
  .page-hero {
    padding: 140px 0 80px;
    margin-top: 120px;
  }

  .page-hero h1 {
    font-size: 2.5rem;
  }

  .vm-card {
    padding: 40px 30px;
  }

  .vm-card h2 {
    font-size: 2rem;
  }

  .vision-points,
  .mission-points {
    padding: 20px;
  }
}
</style>
