<template>
  <div class="school-logo-page">
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <router-link to="/about">About Us</router-link>
          <span class="separator">›</span>
          <span class="current">School Logo</span>
        </div>
        <h1>School Logo</h1>
        <p>The symbol of our identity and values</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="logo-showcase">
          <img src="/logo/AMIS_Logo.png" alt="AMIS School Logo" class="school-logo" />
          <div class="logo-description">
            <h2>AL MUNAWWARA ISLAMIC SCHOOL</h2>
            <p class="arabic-name">المدرسة المنورة الإسلامية</p>
            <p class="tagline">Enabling Our Students to Learn in Fid Dunya Wal Akhira</p>
          </div>
        </div>

        <div class="logo-meaning">
          <h3>Logo Elements & Meaning</h3>
          <p>The Al Munawwara Islamic School logo is rich with symbolism, representing our commitment to excellence in Islamic education. Each element has been carefully designed to reflect our core values and mission.</p>
          
          <div class="logo-elements-list">
            <ul>
              <li>
                <strong>The Circle</strong> - The Circle symbolizes ONENESS, the inclusiveness of all tribes, sectors, and faiths.
              </li>
              <li>
                <strong>The Name of the School</strong> - Written in Arabic and English in equal proportions to symbolize a balanced curriculum, as directed by the Department of Education (DepEd) in memo order No. 51, s. 2004.
              </li>
              <li>
                <strong>A: Allah</strong> - We testify that there is no God but Allah, none has the right to be worshipped but Him.
              </li>
              <li>
                <strong>M: Muhammad</strong> - Muhammad is the Messenger of Allah.
              </li>
              <li>
                <strong>I: Islam</strong> - Islam teaches five pillars to strengthen our Patience and Faith.
              </li>
              <li>
                <strong>S: School</strong> - School is the primary source of knowledge and guidance.
              </li>
              <li>
                <strong>2008 - 1429</strong> - Arabic and Gregorian Calendar year the school was established.
              </li>
              <li>
                <strong>The Moon</strong> - Symbolizes Al Munawwara, which means Light or Guidance.
              </li>
            </ul>
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

.logo-showcase {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  text-align: center;
  margin-bottom: 60px;
}

.school-logo {
  width: 250px;
  height: 250px;
  object-fit: contain;
}

.logo-description h2 {
  font-size: 2.5rem;
  color: var(--text);
  margin-bottom: 12px;
  font-weight: 700;
  letter-spacing: 1px;
}

.arabic-name {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 12px;
  font-family: 'Traditional Arabic', 'Arabic Typesetting', 'Simplified Arabic', Arial, sans-serif;
  direction: rtl;
  font-weight: 700;
}

.tagline {
  font-size: 1.125rem;
  color: var(--text-light);
  font-style: italic;
}

.logo-meaning {
  max-width: 900px;
  margin: 0 auto;
}

.logo-meaning h3 {
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 20px;
  text-align: center;
}

.logo-meaning > p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-light);
  text-align: center;
  margin-bottom: 40px;
}

.logo-elements-list ul {
  list-style: disc;
  padding-left: 30px;
  margin-bottom: 40px;
}

.logo-elements-list li {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 20px;
}

.logo-elements-list strong {
  color: var(--primary);
  font-weight: 600;
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
    width: 180px;
    height: 180px;
  }

  .logo-description h2 {
    font-size: 1.75rem;
  }

  .arabic-name {
    font-size: 1.5rem;
  }

  .logo-elements-list ul {
    padding-left: 20px;
  }
}
</style>
