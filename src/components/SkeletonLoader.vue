<template>
  <div class="skeleton-wrapper">
    <!-- Hero Skeleton -->
    <div class="skeleton-hero">
      <div class="skeleton-breadcrumb"></div>
      <div class="skeleton-title"></div>
      <div class="skeleton-subtitle"></div>
    </div>

    <!-- Content Skeleton -->
    <div class="skeleton-content">
      <div class="container">
        <div class="skeleton-section">
          <div class="skeleton-heading"></div>
          <div class="skeleton-text"></div>
          <div class="skeleton-text"></div>
          <div class="skeleton-text short"></div>
        </div>

        <div class="skeleton-section">
          <div class="skeleton-heading"></div>
          <div class="skeleton-cards">
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
            <div class="skeleton-card"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-wrapper {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.skeleton-hero {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  padding: 180px 20px 100px;
  margin-top: 150px;
  position: relative;
}

.skeleton-breadcrumb {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 200px;
  height: 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

.skeleton-title {
  width: 400px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  margin: 0 auto 20px;
  animation: pulse 1.5s ease-in-out infinite;
}

.skeleton-subtitle {
  width: 300px;
  height: 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  margin: 0 auto;
  animation: pulse 1.5s ease-in-out infinite;
}

.skeleton-content {
  background: white;
  padding: 80px 0;
}

.skeleton-section {
  margin-bottom: 60px;
}

.skeleton-heading {
  width: 300px;
  height: 36px;
  background: #e5e7eb;
  border-radius: 8px;
  margin: 0 auto 30px;
  animation: pulse 1.5s ease-in-out infinite;
}

.skeleton-text {
  width: 100%;
  height: 16px;
  background: #e5e7eb;
  border-radius: 4px;
  margin-bottom: 12px;
  animation: pulse 1.5s ease-in-out infinite;
}

.skeleton-text.short {
  width: 70%;
}

.skeleton-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.skeleton-card {
  height: 200px;
  background: #e5e7eb;
  border-radius: 12px;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@media (max-width: 968px) {
  .skeleton-hero {
    padding: 140px 20px 80px;
    margin-top: 120px;
  }

  .skeleton-title {
    width: 80%;
    height: 36px;
  }

  .skeleton-subtitle {
    width: 70%;
    height: 20px;
  }

  .skeleton-cards {
    grid-template-columns: 1fr;
  }
}
</style>
