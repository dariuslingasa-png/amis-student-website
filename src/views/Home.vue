<template>
  <div class="home">
    <SkeletonLoader v-if="loading" />
    <div v-else>
    <section class="hero">
      <div class="hero-slider">
        <div 
          v-for="(image, index) in heroImages" 
          :key="index"
          class="hero-slide"
          :class="{ 
            active: currentSlide === index,
            'slide-out': isTransitioning && currentSlide === index,
            'slide-in': isTransitioning && nextSlide === index
          }"
          :style="{ backgroundImage: `url(${image})` }"
        ></div>
      </div>
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
      <div class="slider-dots">
        <span 
          v-for="(image, index) in heroImages" 
          :key="index"
          class="dot"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </section>

    <section class="section news-announcements">
      <div class="container">
        <h2 class="section-title">Latest News & Announcements</h2>
        <p class="section-subtitle">Stay updated with the latest happenings at AMIS</p>
        
        <div class="news-grid">
          <div class="news-card featured">
            <div class="news-image">
              <img src="/summer-class.png" alt="Summer Class 2026" />
              <div class="sample-ribbon">SAMPLE</div>
            </div>
            <div class="news-date">May 4 - June 4, 2026</div>
            <h3>Summer Class 2026 - Enroll Now!</h3>
            <p>Make this summer productive and exciting! We offer One-on-One Sessions, Face-to-Face Learning, and Group Classes. Limited slots only!</p>
            <router-link to="/contact" class="news-link">Enroll Today →</router-link>
          </div>
          
          <div class="news-card">
            <div class="news-image">
              <img src="/enrollment.png" alt="Enrollment SY 2026-2027" />
              <div class="sample-ribbon">SAMPLE</div>
            </div>
            <div class="news-date">April 10, 2026</div>
            <h3>Enrollment for SY 2026-2027 Now Open</h3>
            <p>We are now accepting applications for the upcoming school year. Limited slots available.</p>
            <router-link to="/admissions" class="news-link">Learn More →</router-link>
          </div>
          
          <div class="news-card">
            <div class="news-image">
              <img src="/sportfest.png" alt="Sports Festival 2026" />
              <div class="sample-ribbon">SAMPLE</div>
            </div>
            <div class="news-date">April 30, 2026</div>
            <h3>Sports Festival 2026</h3>
            <p>Join us for our annual sports day featuring various athletic competitions and activities. All students and parents are welcome!</p>
            <router-link to="/contact" class="news-link">Learn More →</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="section upcoming-events">
      <div class="container">
        <h2 class="section-title">Upcoming Events</h2>
        <p class="section-subtitle">Mark your calendars for these important dates</p>
        
        <div class="events-list">
          <div class="event-card">
            <div class="sample-ribbon-event">SAMPLE</div>
            <div class="event-date">
              <div class="event-day">15</div>
              <div class="event-month">APR</div>
            </div>
            <div class="event-details">
              <h3>Parent-Teacher Conference</h3>
              <p>Meet with teachers to discuss student progress and development</p>
              <span class="event-time">9:00 AM - 5:00 PM</span>
            </div>
          </div>
          
          <div class="event-card">
            <div class="sample-ribbon-event">SAMPLE</div>
            <div class="event-date">
              <div class="event-day">22</div>
              <div class="event-month">APR</div>
            </div>
            <div class="event-details">
              <h3>Islamic Studies Competition</h3>
              <p>Inter-school Quran recitation and Islamic knowledge competition</p>
              <span class="event-time">8:00 AM - 12:00 PM</span>
            </div>
          </div>
          
          <div class="event-card">
            <div class="sample-ribbon-event">SAMPLE</div>
            <div class="event-date">
              <div class="event-day">30</div>
              <div class="event-month">APR</div>
            </div>
            <div class="event-details">
              <h3>Sports Festival</h3>
              <p>Annual sports day featuring various athletic competitions and activities</p>
              <span class="event-time">7:00 AM - 4:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section features">
      <div class="container">
        <h2 class="section-title">Why Choose AMIS?</h2>
        <p class="section-subtitle">We provide a comprehensive educational experience that prepares students for success</p>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="sample-ribbon-feature">SAMPLE</div>
            <div class="feature-number">01</div>
            <h3>Academic Excellence</h3>
            <p>Rigorous curriculum designed to challenge and inspire students</p>
          </div>
          
          <div class="feature-card">
            <div class="sample-ribbon-feature">SAMPLE</div>
            <div class="feature-number">02</div>
            <h3>Expert Faculty</h3>
            <p>Dedicated teachers committed to student success</p>
          </div>
          
          <div class="feature-card">
            <div class="sample-ribbon-feature">SAMPLE</div>
            <div class="feature-number">03</div>
            <h3>Modern Facilities</h3>
            <p>State-of-the-art classrooms and learning resources</p>
          </div>
          
          <div class="feature-card">
            <div class="sample-ribbon-feature">SAMPLE</div>
            <div class="feature-number">04</div>
            <h3>Global Perspective</h3>
            <p>Preparing students for an interconnected world</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">1000+</div>
            <div class="stat-label">Students</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">50+</div>
            <div class="stat-label">Teachers</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">95%</div>
            <div class="stat-label">Success Rate</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">20+</div>
            <div class="stat-label">Years</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Join Our Community?</h2>
          <p>Start your journey with AMIS today</p>
          <router-link to="/admissions" class="btn btn-primary">Apply Now</router-link>
        </div>
      </div>
    </section>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SkeletonLoader from '../components/SkeletonLoader.vue'

const heroImages = ['/hero3.jpg', '/hero4.jpg']
const currentSlide = ref(0)
const loading = ref(true)
const nextSlide = ref(1)
const isTransitioning = ref(false)
let slideInterval = null

onMounted(() => {
  // Simulate loading time
  setTimeout(() => {
    loading.value = false
  }, 800)
  
  slideInterval = setInterval(() => {
    changeSlide()
  }, 5000)
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})

function changeSlide() {
  isTransitioning.value = true
  nextSlide.value = (currentSlide.value + 1) % heroImages.length
  
  setTimeout(() => {
    currentSlide.value = nextSlide.value
    isTransitioning.value = false
  }, 1000)
}

function goToSlide(index) {
  if (index !== currentSlide.value && !isTransitioning.value) {
    isTransitioning.value = true
    nextSlide.value = index
    
    setTimeout(() => {
      currentSlide.value = nextSlide.value
      isTransitioning.value = false
    }, 1000)
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  margin-top: 150px;
  min-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(1.2) translateX(100%);
  transition: none;
}

.hero-slide.active {
  opacity: 1;
  transform: scale(1) translateX(0);
  transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 1s ease;
}

.hero-slide.slide-out {
  animation: slideOutLeft 1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
}

.hero-slide.slide-in {
  animation: slideInRight 1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
}

@keyframes slideOutLeft {
  0% {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
  100% {
    opacity: 0;
    transform: scale(0.9) translateX(-100%);
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: scale(1.2) translateX(100%);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
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

.slider-dots {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 2;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s;
}

.dot.active {
  background: white;
  width: 30px;
  border-radius: 6px;
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

.features {
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.feature-card {
  background: var(--bg-light);
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  border-left: 4px solid var(--primary);
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.sample-ribbon-feature {
  position: absolute;
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  color: white;
  padding: 6px 40px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  transform: rotate(-45deg);
  left: -35px;
  top: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 5;
}

.feature-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  opacity: 0.3;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
  color: var(--text);
  font-weight: 600;
}

.feature-card p {
  color: var(--text-light);
  font-size: 0.95rem;
}

.stats {
  background: var(--bg-gray);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.stat-card {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--primary);
}

.stat-label {
  font-size: 1rem;
  color: var(--text-light);
}

.cta {
  background: white;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.125rem;
  color: var(--text-light);
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .hero {
    padding: 140px 0 80px;
    margin-top: 120px;
    min-height: 400px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }

  .slider-dots {
    bottom: 20px;
  }

  .dot {
    width: 8px;
    height: 8px;
  }

  .dot.active {
    width: 20px;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .event-card {
    flex-direction: column;
    gap: 16px;
  }
  
  .event-date {
    width: fit-content;
  }
}

.news-announcements {
  background: var(--bg-light);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.news-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  border-left: 4px solid var(--primary);
  transition: all 0.3s ease;
}

.news-card.featured {
  grid-column: span 1;
}

.news-image {
  margin: -30px -30px 20px -30px;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  position: relative;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.sample-ribbon {
  position: absolute;
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  color: white;
  padding: 8px 50px;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 2px;
  transform: rotate(-45deg);
  left: -40px;
  bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 5;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.news-date {
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.news-card h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
  color: var(--text);
  font-weight: 600;
}

.news-card p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.news-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.news-link:hover {
  color: var(--primary-dark);
}

.upcoming-events {
  background: white;
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.event-card {
  display: flex;
  gap: 24px;
  background: var(--bg-light);
  padding: 24px;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.event-card:hover {
  transform: translateX(10px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.sample-ribbon-event {
  position: absolute;
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  color: white;
  padding: 6px 40px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  transform: rotate(-45deg);
  left: -35px;
  top: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 5;
}

.event-date {
  background: var(--primary);
  color: white;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  min-width: 80px;
  flex-shrink: 0;
}

.event-day {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.event-month {
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 4px;
}

.event-details h3 {
  font-size: 1.25rem;
  margin-bottom: 8px;
  color: var(--text);
  font-weight: 600;
}

.event-details p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 8px;
}

.event-time {
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 600;
}
</style>