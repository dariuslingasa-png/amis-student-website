<template>
  <section class="hero">
    <video 
      v-if="heroType === 'video'" 
      class="hero-video" 
      autoplay 
      muted 
      loop 
      playsinline
      :key="heroVideoUrl"
    >
      <source :src="heroVideoUrl" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <img 
      v-else 
      :src="heroImageUrl" 
      alt="Hero Background" 
      class="hero-image"
    />
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Building Tomorrow's Leaders</h1>
        <p class="hero-subtitle">Nurturing excellence in Islamic education and character development</p>
        <div class="hero-buttons">
          <router-link to="/admissions" class="btn btn-hero">Enroll Now</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const heroType = ref('video')
const heroVideoUrl = ref('/hero_video.mp4')
const heroImageUrl = ref('/hero_image.jpg')

const fetchHeroSettings = async () => {
  try {
    const response = await fetch('http://localhost:3002/api/settings')
    if (response.ok) {
      const settings = await response.json()
      if (settings.hero_type) heroType.value = settings.hero_type
      if (settings.hero_video_url) heroVideoUrl.value = settings.hero_video_url
      if (settings.hero_image_url) heroImageUrl.value = settings.hero_image_url
    }
  } catch (error) {
    // Use default settings on error
  }
}

onMounted(() => {
  fetchHeroSettings()
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: margin-top 0.3s ease;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  color: white;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 40px;
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-hero {
  background: white;
  color: var(--primary);
  padding: 14px 40px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  border: 2px solid white;
}

.btn-hero:hover {
  background: transparent;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero {
    padding: 140px 0 80px;
    min-height: 400px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>
