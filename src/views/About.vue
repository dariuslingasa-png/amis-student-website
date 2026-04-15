<template>
  <div class="about">
    <section class="page-hero">
      <div class="container">
        <h1>About AMIS</h1>
        <p>Learn about our mission, vision, and values</p>
      </div>
    </section>

    <section class="section school-logo-section">
      <div class="container">
        <div class="logo-showcase">
          <img src="/logo/AMIS_Logo.png" alt="AMIS School Logo" class="school-logo" />
          <div class="logo-description">
            <h2>AL MUNAWWARA ISLAMIC SCHOOL</h2>
            <p class="arabic-name">المدرسة المنورة الإسلامية</p>
            <p class="tagline">Enabling Our Students to Learn in Fid Dunya Wal Akhira</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section philosophy-section">
      <div class="container">
        <div class="content-card">
          <div class="card-icon">📚</div>
          <h2>Our Philosophy</h2>
          <p>At Al Munawwara Islamic School, we believe in nurturing the whole child - mind, body, and soul. Our educational philosophy is rooted in Islamic values while embracing modern pedagogical approaches. We strive to create an environment where students develop strong moral character, critical thinking skills, and a deep connection to their faith. We recognize that each student is unique and deserves personalized attention to reach their full potential in both worldly and spiritual matters.</p>
        </div>
      </div>
    </section>

    <section class="section vision-mission-section">
      <div class="container">
        <div class="vm-grid">
          <div class="vm-card vision-card">
            <div class="vm-icon">🌟</div>
            <h2>Our Vision</h2>
            <p>To be a leading Islamic educational institution that produces well-rounded individuals who excel academically, embody Islamic values, and contribute positively to society. We envision a community of learners who are confident, compassionate, and committed to lifelong learning and service to humanity.</p>
          </div>
          <div class="vm-card mission-card">
            <div class="vm-icon">🎯</div>
            <h2>Our Mission</h2>
            <p>To provide quality Islamic education that integrates academic excellence with spiritual development. We are committed to fostering a nurturing environment where students develop strong character, critical thinking skills, and a deep understanding of Islamic principles. Our mission is to prepare students to be responsible citizens who contribute meaningfully to their communities while maintaining their Islamic identity.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section goals-section">
      <div class="container">
        <h2 class="section-title">Our Goals</h2>
        <div class="goals-grid">
          <div class="goal-card">
            <div class="goal-number">01</div>
            <h3>Academic Excellence</h3>
            <p>Provide a rigorous curriculum that meets national standards while incorporating Islamic studies, ensuring students excel in both religious and secular subjects.</p>
          </div>
          <div class="goal-card">
            <div class="goal-number">02</div>
            <h3>Character Development</h3>
            <p>Instill strong moral values and Islamic ethics in students, helping them develop integrity, compassion, and respect for others.</p>
          </div>
          <div class="goal-card">
            <div class="goal-number">03</div>
            <h3>Spiritual Growth</h3>
            <p>Foster a deep connection with Allah through Quranic studies, Islamic teachings, and daily practice of faith.</p>
          </div>
          <div class="goal-card">
            <div class="goal-number">04</div>
            <h3>Critical Thinking</h3>
            <p>Develop students' analytical and problem-solving skills to prepare them for future challenges in an ever-changing world.</p>
          </div>
          <div class="goal-card">
            <div class="goal-number">05</div>
            <h3>Community Engagement</h3>
            <p>Encourage active participation in community service and social responsibility, building strong connections with the broader community.</p>
          </div>
          <div class="goal-card">
            <div class="goal-number">06</div>
            <h3>Global Citizenship</h3>
            <p>Prepare students to be responsible global citizens who understand and appreciate diverse cultures while maintaining their Islamic identity.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section location-section">
      <div class="container">
        <h2 class="section-title">School Location</h2>
        <div class="location-content">
          <div class="location-info">
            <div class="location-item">
              <div class="location-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>Al Munawwara Islamic School<br>
                [Street Address]<br>
                [City, Province/State] [Postal Code]<br>
                [Country]</p>
              </div>
            </div>
            <div class="location-item">
              <div class="location-icon">📞</div>
              <div>
                <h3>Contact</h3>
                <p>Phone: [Phone Number]<br>
                Email: [Email Address]<br>
                Fax: [Fax Number]</p>
              </div>
            </div>
            <div class="location-item">
              <div class="location-icon">🕐</div>
              <div>
                <h3>Office Hours</h3>
                <p>Monday - Friday: 8:00 AM - 4:00 PM<br>
                Saturday: 8:00 AM - 12:00 PM<br>
                Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div class="map-placeholder">
            <div class="map-icon">🗺️</div>
            <p>Map will be displayed here</p>
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

.page-hero h1 {
  font-size: 3rem;
  margin-bottom: 16px;
  font-weight: 700;
}

.page-hero p {
  font-size: 1.25rem;
  opacity: 0.95;
}

.school-logo-section {
  background: white;
}

.logo-showcase {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  text-align: center;
}

.school-logo {
  width: 200px;
  height: 200px;
  object-fit: contain;
}

.logo-description h2 {
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 12px;
  font-weight: 700;
  letter-spacing: 1px;
}

.arabic-name {
  font-size: 1.75rem;
  color: var(--primary);
  margin-bottom: 12px;
  font-family: 'Traditional Arabic', 'Arabic Typesetting', 'Simplified Arabic', Arial, sans-serif;
  direction: rtl;
  font-weight: 700;
}

.tagline {
  font-size: 1rem;
  color: var(--text-light);
  font-style: italic;
}

.philosophy-section {
  background: var(--bg-light);
}

.content-card {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  padding: 50px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.card-icon {
  font-size: 4rem;
  margin-bottom: 20px;
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
}

.vision-mission-section {
  background: white;
}

.vm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
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

.vm-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.vm-card h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 700;
}

.vm-card p {
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.95;
}

.goals-section {
  background: var(--bg-light);
}

.goals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.goal-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  border-left: 4px solid var(--primary);
  transition: all 0.3s ease;
  position: relative;
}

.goal-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.goal-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary);
  opacity: 0.2;
  margin-bottom: 16px;
  line-height: 1;
}

.goal-card h3 {
  font-size: 1.35rem;
  margin-bottom: 12px;
  color: var(--text);
  font-weight: 600;
}

.goal-card p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.7;
}

.location-section {
  background: white;
}

.location-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: start;
}

.location-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.location-item {
  display: flex;
  gap: 20px;
  align-items: start;
}

.location-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.location-item h3 {
  font-size: 1.25rem;
  color: var(--primary);
  margin-bottom: 8px;
  font-weight: 600;
}

.location-item p {
  color: var(--text-light);
  line-height: 1.8;
  font-size: 0.95rem;
}

.map-placeholder {
  background: var(--bg-light);
  border-radius: 12px;
  aspect-ratio: 4/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border: 2px dashed var(--border);
}

.map-icon {
  font-size: 5rem;
  opacity: 0.5;
}

.map-placeholder p {
  color: var(--text-light);
  font-size: 1rem;
}

@media (max-width: 968px) {
  .page-hero {
    padding: 140px 0 80px;
    margin-top: 120px;
  }
  
  .page-hero h1 {
    font-size: 2.5rem;
  }

  .school-logo {
    width: 150px;
    height: 150px;
  }

  .logo-description h2 {
    font-size: 1.5rem;
  }

  .arabic-name {
    font-size: 1.25rem;
  }

  .content-card {
    padding: 30px 20px;
  }

  .content-card h2 {
    font-size: 2rem;
  }

  .vm-grid {
    grid-template-columns: 1fr;
  }

  .vm-card {
    padding: 40px 30px;
  }

  .location-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .goals-grid {
    grid-template-columns: 1fr;
  }
}
</style>
