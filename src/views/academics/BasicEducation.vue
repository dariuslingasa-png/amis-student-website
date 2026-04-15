<template>
  <div class="basic-education-page">
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <span>Academics</span>
          <span class="separator">›</span>
          <span class="current">Basic Education - K to 12</span>
        </div>
        <h1>Basic Education - K to 12</h1>
        <p>Comprehensive education from Kindergarten to Grade 12</p>
      </div>
    </section>

    <section class="section coming-soon-section">
      <div class="container">
        <div class="coming-soon-content">
          <div class="icon">🚧</div>
          <h2>Coming Soon</h2>
          <p>We're working hard to bring you detailed information about our Basic Education program. Check back soon!</p>
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
  position: relative;
}

.breadcrumb {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
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

.coming-soon-section {
  background: white;
  min-height: 400px;
  display: flex;
  align-items: center;
}

.coming-soon-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.icon {
  font-size: 5rem;
  margin-bottom: 30px;
}

.coming-soon-content h2 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 20px;
  font-weight: 700;
}

.coming-soon-content p {
  font-size: 1.125rem;
  color: var(--text-light);
  line-height: 1.8;
}

@media (max-width: 968px) {
  .page-hero {
    padding: 140px 0 80px;
    margin-top: 120px;
  }

  .page-hero h1 {
    font-size: 2rem;
  }

  .icon {
    font-size: 4rem;
  }

  .coming-soon-content h2 {
    font-size: 2rem;
  }
}
</style>
