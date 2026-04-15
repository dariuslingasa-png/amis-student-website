<template>
  <div class="pvmg-page">
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <router-link to="/about">About Us</router-link>
          <span class="separator">›</span>
          <span class="current">Philosophy, Vision, Mission, and Goals</span>
        </div>
        <h1>Philosophy, Vision, Mission, and Goals</h1>
        <p>Our guiding principles and aspirations</p>
      </div>
    </section>

    <section class="section philosophy-section">
      <div class="container">
        <div class="content-wrapper">
          <h2>Philosophy</h2>
          <p>Al Munawwara Islamic School is committed to providing an education that harmoniously integrates academic excellence with Islamic values, guided by the Holy Qur'an and the Sunnah of the Prophet Muhammad's (SAW). We believe that every student should be equipped not only with knowledge but also with the moral and spiritual foundation to live lives in accordance with Islamic principles. By providing a curriculum that promotes intellectual progress and Islamic character development, we hope to form self-directed, lifelong learners who positively contribute to their communities and uphold the teachings of Islam in all aspects of life.</p>
        </div>
      </div>
    </section>

    <section class="section vision-section">
      <div class="container">
        <div class="content-wrapper">
          <h2>Vision</h2>
          <p>To establish an integrated school through the Islamic Developmental Approach towards Academic Excellence within the framework of the Holy Qur'an and Sunnah of the Prophet Muhammad (SAW).</p>
        </div>
      </div>
    </section>

    <section class="section mission-section">
      <div class="container">
        <div class="content-wrapper">
          <h2>Mission</h2>
          <ul>
            <li>To provide a well-balanced instructional program that will enable all children to reach their highest level of academic success using a curriculum that complies with the Philippine Department of Education's academic goals and standards through the Islamic Developmental Approach within the framework of the Holy Qur'an and Sunnah of the Prophet Muhammad (S.A.W).</li>
            <li>To educate, reinforce, and develop the skills required for reading, memorizing, and comprehending the Arabic language, thus applying the teachings of the Holy Qur'an and Sunnah of the Prophet Muhammad (S.A.W) to understand Islamic faith and its practices.</li>
            <li>To provide opportunities for children to become self-directed, lifelong learners and help them develop their social, emotional, and physical potential, lifelong Islamic personality, ensuring behavior that is in accordance with Islamic principles.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section goals-section">
      <div class="container">
        <div class="content-wrapper">
          <h2>Goals</h2>
          <ul>
            <li>Instill the importance of putting God in the center of every student's life.</li>
            <li>Maintain a safe, inclusive, and educationally stimulating environment.</li>
            <li>Enhance development of all five aspects of a child's growth - physical, mental, emotional, spiritual and social.</li>
            <li>Instill the importance of culture, traditions, and values.</li>
            <li>Promote self-respect and respect for others.</li>
            <li>Make learning a fun and enjoyable experience.</li>
            <li>To create an opportunity that enables every student to be well informed, have a well-rounded education, remain God conscious, become confident and caring individuals, and develop a love for learning.</li>
            <li>To produce graduates who inspire others, and together change their community and beyond for the benefit of humanity.</li>
            <li>Enrich our families and serve our community.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section core-values-section">
      <div class="container">
        <div class="content-wrapper">
          <h2>Core Values</h2>
          <ul class="core-values-list">
            <li><span class="first-letter">A</span> – Allah-consciousness (Taqwa)</li>
            <li><span class="first-letter">M</span> – Moral Integrity</li>
            <li><span class="first-letter">I</span> – Innovation</li>
            <li><span class="first-letter">S</span> – Service to Ummah and Nation</li>
          </ul>
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

.philosophy-section {
  background: white;
}

.vision-section {
  background: var(--bg-light);
}

.mission-section {
  background: white;
}

.goals-section {
  background: var(--bg-light);
}

.core-values-section {
  background: white;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.content-wrapper h2 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 25px;
  text-align: center;
  font-weight: 700;
}

.content-wrapper p {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--text-light);
  text-align: justify;
}

.content-wrapper ul {
  list-style: disc;
  padding-left: 30px;
}

.content-wrapper li {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--text-light);
  margin-bottom: 20px;
}

.core-values-list {
  list-style: none;
  padding-left: 0;
}

.core-values-list li {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--text-light);
  margin-bottom: 20px;
}

.first-letter {
  color: var(--primary);
  font-weight: 700;
  font-size: 1.3rem;
}

@media (max-width: 968px) {
  .page-hero {
    padding: 140px 0 80px;
    margin-top: 120px;
  }

  .page-hero h1 {
    font-size: 2rem;
  }

  .content-wrapper h2 {
    font-size: 2rem;
  }

  .content-wrapper p,
  .content-wrapper li {
    text-align: left;
  }

  .content-wrapper ul {
    padding-left: 20px;
  }
}
</style>
