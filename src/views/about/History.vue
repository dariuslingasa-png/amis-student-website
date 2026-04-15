<template>
  <div class="history-page">
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <router-link to="/about">About Us</router-link>
          <span class="separator">›</span>
          <span class="current">History</span>
        </div>
        <h1>History</h1>
        <p>Our journey and milestones</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="content-wrapper">
          <h2>HISTORY</h2>
          
          <p>Al Munawwara Islamic School (AMIS) was established in 2008 as part of the Moro National Liberation Front (MNLF) and Government of the Republic of the Philippines (GRP) Peace Agreement signed in 1996, which aimed to integrate traditional madrasahs into the Philippine educational system. Consequently, DepEd Order No. 51, Series of 2004, signed by the former DepEd Secretary Mr. Edilberto C. de Jesus, was issued to invite traditional madrasahs to become pilot private madrasahs. After four years of preparation, the program was implemented in 2008, and AMIS was among the schools selected to participate. It became the first-ever private Islamic school to be established in Davao City that is duly recognized by the Department of Education (DepEd).</p>

          <p>Initially, the school offered Kindergarten, Preparatory, and Grade 1 levels for the School Year 2008-2009 and the Summer of 2009. The school provided an 8-week curriculum on Early Childhood Learning in preparation for Grade 1 and an Accelerated Islamic Studies Learning Program for transfer students who did not have Islamic Studies in their previous schools.</p>

          <p>As of now, the Al Munawwara Islamic School (AMIS) completely offers Basic Education from Kindergarten 1 to Grade 12 with the Department of Education's K-12 Curriculum and Revised K-10 Curriculum plus a refined standard Madrasah Curriculum. AMIS has also received international accreditation from QAHE in 2025 and ACTD USA.</p>

          <p>Al Munawwara Islamic School believes that the "Islamic Development Approach" leads to academic excellence, it produces the sphere of creativity, ingenuity of one's mind, and well-rounded student development. Our commitment to quality learning and extensive educational exposure aims to equip students to meet global demands and achieve a brighter future. While emphasizing physical, social, and intellectual development, we prioritize Islamic values and beliefs based on the Qur'an and Sunnah as the core of our educational integrity.</p>
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

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.content-wrapper h2 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 30px;
  text-align: center;
  font-weight: 700;
}

.content-wrapper p {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--text-light);
  text-align: justify;
  margin-bottom: 25px;
}

@media (max-width: 968px) {
  .page-hero {
    padding: 140px 0 80px;
    margin-top: 120px;
  }

  .page-hero h1 {
    font-size: 2.5rem;
  }

  .content-wrapper h2 {
    font-size: 2rem;
  }

  .content-wrapper p {
    text-align: left;
  }
}
</style>
