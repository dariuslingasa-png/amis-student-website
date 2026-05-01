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
    
    <!-- Image Slideshow -->
    <template v-else>
      <div v-if="heroSlides.length > 0" class="hero-slideshow">
        <img 
          v-for="(slide, index) in heroSlides"
          :key="slide.id"
          :src="slide.image_url" 
          :alt="slide.title" 
          class="hero-image"
          :class="{ active: index === currentSlide }"
        />
      </div>
      <img 
        v-else
        :src="heroImageUrl" 
        alt="Hero Background" 
        class="hero-image active"
      />
    </template>
    
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">{{ heroTitle }}</h1>
        <p class="hero-subtitle">{{ heroSubtitle }}</p>
        <div class="hero-buttons">
          <router-link to="/admissions" class="btn btn-hero">Enroll Now</router-link>
        </div>
      </div>
    </div>
    
    <!-- Slide Indicators -->
    <div v-if="heroType === 'image' && heroSlides.length > 1" class="slide-indicators">
      <button
        v-for="(slide, index) in heroSlides"
        :key="index"
        @click="currentSlide = index"
        :class="{ active: index === currentSlide }"
        class="indicator"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const heroType = ref('video')
const heroVideoUrl = ref('/hero_video.mp4')
const heroImageUrl = ref('/hero_image.jpg')
const heroTitle = ref("Building Tomorrow's Leaders")
const heroSubtitle = ref('Nurturing excellence in Islamic education and character development')
const heroSlides = ref([])
const currentSlide = ref(0)
let slideInterval = null

const fetchHeroSettings = async () => {
  try {
    const response = await fetch('http://localhost:3002/api/settings')
    if (response.ok) {
      const settings = await response.json()
      if (settings.hero_type) heroType.value = settings.hero_type
      if (settings.hero_video_url) heroVideoUrl.value = settings.hero_video_url
      if (settings.hero_image_url) heroImageUrl.value = settings.hero_image_url
      if (settings.hero_title) heroTitle.value = settings.hero_title
      if (settings.hero_subtitle) heroSubtitle.value = settings.hero_subtitle
    }
  } catch (error) {
    // Use default settings on error
  }
}

const fetchHeroSlides = async () => {
  try {
    const response = await fetch('http://localhost:3002/api/hero-slides')
    if (response.ok) {
      const slides = await response.json()
      heroSlides.value = slides
    }
  } catch (error) {
    console.error('Failed to fetch hero slides:', error)
  }
}

const startSlideshow = () => {
  if (heroSlides.value.length > 1) {
    slideInterval = setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length
    }, 5000) // Change slide every 5 seconds
  }
}

const stopSlideshow = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
    slideInterval = null
  }
}

watch(heroType, (newType) => {
  if (newType === 'image') {
    startSlideshow()
  } else {
    stopSlideshow()
  }
})

watch(() => heroSlides.value.length, () => {
  if (heroType.value === 'image') {
    startSlideshow()
  }
})

onMounted(async () => {
  await fetchHeroSettings()
  await fetchHeroSlides()
  if (heroType.value === 'image') {
    startSlideshow()
  }
})

onUnmounted(() => {
  stopSlideshow()
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

.hero-slideshow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.hero-image.active {
  opacity: 1;
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

.slide-indicators {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 3;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0;
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.8);
}

.indicator.active {
  background: white;
  width: 32px;
  border-radius: 6px;
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
  
  .slide-indicators {
    bottom: 20px;
  }
  
  .indicator {
    width: 8px;
    height: 8px;
  }
  
  .indicator.active {
    width: 24px;
  }
}
</style>
