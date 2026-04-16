<template>
  <div class="basic-education-page">
    <div class="breadcrumb-header">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">/</span>
          <span>Academics</span>
          <span class="separator">/</span>
          <span>Basic Education - K to 12</span>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <h1 class="page-title">Basic Education - K to 12</h1>
        <p class="page-subtitle">Comprehensive education from Kindergarten to Grade 12</p>
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
.basic-education-page {
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

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }

  .icon {
    font-size: 4rem;
  }

  .coming-soon-content h2 {
    font-size: 2rem;
  }
}
</style>
