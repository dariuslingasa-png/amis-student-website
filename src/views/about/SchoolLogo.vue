<template>
  <div class="school-logo-page">
    <div class="breadcrumb-header">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">/</span>
          <router-link to="/about">About Us</router-link>
          <span class="separator">/</span>
          <span>AMIS Logo</span>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <h1 class="page-title">AMIS Logo</h1>
        <p class="page-subtitle">The symbol of our identity and values</p>
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
.school-logo-page {
  min-height: 100vh;
}

.breadcrumb-header {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  padding: 20px 0;
  margin-top: 0;
  position: relative;
  top: 0;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
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

.page-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: var(--text);
}

.page-subtitle {
  text-align: center;
  color: var(--text-light);
  font-size: 1.25rem;
  margin-bottom: 60px;
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

@media (max-width: 768px) {
  .breadcrumb-header {
    margin-top: 380px;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
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
