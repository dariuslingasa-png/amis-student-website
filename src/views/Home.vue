<template>
  <div class="home">
    <SkeletonLoader v-if="loading" />
    <div v-else>
    <section class="hero">
      <video class="hero-video" autoplay muted loop playsinline>
        <source src="/hero_video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
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

    <section class="section news-announcements">
      <div class="container">
        <h2 class="section-title">Latest News & Announcements</h2>
        <p class="section-subtitle">Stay updated with the latest happenings at AMIS</p>
        
        <div v-if="apiError" class="api-notice">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Showing sample data. Connect to admin portal to see live announcements.</span>
        </div>

        <div class="news-layout">
          <!-- Facebook Embed (Left side) - Modern Balloon Card -->
          <div class="facebook-balloon-container">
            <div class="balloon-header">
              <div class="balloon-title">
                <svg class="balloon-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Latest AMIS Facebook Updates
              </div>
            </div>
            <div class="balloon-content">
              <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Falmunawwaraislamicschool&tabs=timeline&width=500&height=650&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" 
                width="500" 
                height="650" 
                style="border:none;overflow:hidden" 
                scrolling="no" 
                frameborder="0" 
                allowfullscreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
              </iframe>
            </div>
          </div>

          <!-- Announcement Cards (Right side, 2x2 grid) -->
          <div class="announcements-wrapper">
            <div v-if="announcements.length > 0" class="announcements-column">
              <router-link
                v-for="(item, index) in paginatedAnnouncements" 
                :key="item.id"
                :to="`/announcement/${item.id}`"
                class="news-card"
              >
                <div v-if="item.image_url || item.image" class="news-image">
                  <img :src="item.image_url || item.image" :alt="item.title" />
                  <div v-if="apiError" class="sample-ribbon">SAMPLE</div>
                </div>
                <div class="news-content">
                  <div v-if="item.publish_date" class="news-date">
                    {{ new Date(item.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase() }}
                  </div>
                  <h3>{{ item.title }}</h3>
                  <span class="news-link">Read More →</span>
                </div>
              </router-link>
            </div>
            
            <!-- No Announcements Message -->
            <div v-else class="no-announcements">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h3>No Latest News & Announcements</h3>
              <p>Check back soon for updates from AMIS</p>
            </div>
            
            <!-- Pagination -->
            <div class="pagination" v-if="totalPages > 1">
              <button class="pagination-btn" @click="prevPage" :disabled="currentPage === 1">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                v-for="page in totalPages" 
                :key="page"
                class="pagination-number" 
                :class="{ active: currentPage === page }"
                @click="goToPage(page)"
              >
                {{ page }}
              </button>
              <button class="pagination-btn" @click="nextPage" :disabled="currentPage === totalPages">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
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
import { ref, onMounted, computed } from 'vue'
import SkeletonLoader from '../components/SkeletonLoader.vue'

const loading = ref(true)
const announcements = ref([])
const apiError = ref(false)
const currentPage = ref(1)
const itemsPerPage = 4

// Sample fallback data
const sampleNews = [
  {
    id: 1,
    title: 'Summer Class 2026 - Enroll Now!',
    content: 'Make this summer productive and exciting! We offer One-on-One Sessions, Face-to-Face Learning, and Group Classes. Limited slots only!',
    category: 'news',
    publish_date: '2026-05-04',
    image: '/summer-class.png',
  },
  {
    id: 2,
    title: 'Enrollment for SY 2026-2027 Now Open',
    content: 'We are now accepting applications for the upcoming school year. Limited slots available.',
    category: 'news',
    publish_date: '2026-04-10',
    image: '/enrollment.png',
  },
  {
    id: 3,
    title: 'Sports Festival 2026',
    content: 'Join us for our annual sports day featuring various athletic competitions and activities.',
    category: 'news',
    publish_date: '2026-04-30',
    image: '/sportfest.png',
  },
  {
    id: 4,
    title: 'Academic Excellence Award',
    content: 'Congratulations to our students for achieving outstanding results.',
    category: 'news',
    publish_date: '2026-04-25',
    image: '/summer-class.png',
  },
  {
    id: 5,
    title: 'Parent-Teacher Conference',
    content: 'Join us for our quarterly parent-teacher conference.',
    category: 'news',
    publish_date: '2026-04-20',
    image: '/enrollment.png',
  },
  {
    id: 6,
    title: 'New Facilities Opening',
    content: 'We are excited to announce the opening of our new science laboratory.',
    category: 'news',
    publish_date: '2026-04-15',
    image: '/sportfest.png',
  },
  {
    id: 7,
    title: 'Cultural Day Celebration',
    content: 'Experience diverse cultures through performances and exhibitions.',
    category: 'news',
    publish_date: '2026-04-12',
    image: '/summer-class.png',
  },
  {
    id: 8,
    title: 'Scholarship Program 2026',
    content: 'Applications now open for our merit-based scholarship program.',
    category: 'news',
    publish_date: '2026-04-08',
    image: '/enrollment.png',
  },
  {
    id: 9,
    title: 'Science Fair Winners',
    content: 'Congratulations to all participants and winners of our annual science fair.',
    category: 'news',
    publish_date: '2026-04-05',
    image: '/sportfest.png',
  },
  {
    id: 10,
    title: 'Ramadan Activities 2026',
    content: 'Special programs and activities during the holy month of Ramadan.',
    category: 'news',
    publish_date: '2026-04-01',
    image: '/summer-class.png',
  },
  {
    id: 11,
    title: 'Career Day 2026',
    content: 'Meet professionals from various fields and explore career opportunities.',
    category: 'news',
    publish_date: '2026-03-28',
    image: '/enrollment.png',
  },
  {
    id: 12,
    title: 'Art Exhibition',
    content: 'Showcasing the creative talents of our students.',
    category: 'news',
    publish_date: '2026-03-25',
    image: '/sportfest.png',
  }
]

const totalPages = computed(() => {
  return Math.ceil(announcements.value.length / itemsPerPage)
})

const paginatedAnnouncements = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return announcements.value.slice(start, end)
})

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    // Scroll to announcements section instead of top
    const announcementsSection = document.querySelector('.news-announcements')
    if (announcementsSection) {
      announcementsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    goToPage(currentPage.value + 1)
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    goToPage(currentPage.value - 1)
  }
}

const fetchAnnouncements = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/public/announcements?limit=50&type=all')
    
    if (response.ok) {
      const data = await response.json()
      announcements.value = data
      apiError.value = false
    } else {
      throw new Error('API request failed')
    }
  } catch (error) {
    console.error('Failed to fetch announcements:', error)
    apiError.value = true
    announcements.value = sampleNews
  }
}

onMounted(async () => {
  await fetchAnnouncements()
  loading.value = false
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

.api-notice {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fef3c7;
  border: 1px solid #fbbf24;
  color: #92400e;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  font-size: 0.9rem;
}

.api-notice svg {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.news-layout {
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 24px;
  margin-bottom: 40px;
  align-items: stretch;
}

.facebook-embed-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100%;
}

.facebook-embed-card iframe {
  width: 100%;
  height: 100%;
  min-height: 100%;
  border-radius: 12px;
}

.facebook-balloon-container {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 24px;
  box-shadow: 
    0 10px 40px rgba(5, 150, 105, 0.12),
    0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  height: 100%;
  min-height: 624px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid rgba(5, 150, 105, 0.1);
  transition: all 0.3s ease;
}

.facebook-balloon-container:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 15px 50px rgba(5, 150, 105, 0.15),
    0 8px 20px rgba(0, 0, 0, 0.1);
}

.balloon-header {
  background: linear-gradient(135deg, var(--primary) 0%, #047857 100%);
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.balloon-title {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.balloon-icon {
  width: 24px;
  height: 24px;
  opacity: 0.95;
}

.balloon-content {
  padding: 20px;
  background: white;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.balloon-content iframe {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.announcements-column {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 24px;
  height: 100%;
}

.announcements-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.pagination-btn {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-light);
}

.pagination-btn:hover:not(:disabled) {
  background: var(--bg-light);
  border-color: var(--primary);
  color: var(--primary);
}

.pagination-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination-btn svg {
  width: 20px;
  height: 20px;
}

.pagination-number {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text);
}

.pagination-number:hover {
  background: var(--bg-light);
  border-color: var(--primary);
  color: var(--primary);
}

.pagination-number.active {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
}

.no-announcements {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 40px;
  min-height: 400px;
}

.no-announcements svg {
  width: 80px;
  height: 80px;
  color: var(--primary);
  opacity: 0.5;
  margin-bottom: 24px;
}

.no-announcements h3 {
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 12px;
  font-weight: 600;
}

.no-announcements p {
  color: var(--text-light);
  font-size: 1rem;
}

.news-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  aspect-ratio: 1 / 1;
  align-self: start;
  max-height: 300px;
  max-width: 300px;
}

.news-image {
  width: 100%;
  height: 60%;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
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
  padding: 6px 40px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  transform: rotate(-45deg);
  left: -35px;
  bottom: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 5;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.news-content {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  height: 40%;
  overflow: hidden;
}

.news-date {
  color: var(--primary);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.news-card h3 {
  font-size: 0.95rem;
  margin: 0;
  color: var(--text);
  font-weight: 600;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

.news-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8rem;
  transition: all 0.2s;
  display: inline-block;
  margin-top: auto;
}

.news-link:hover {
  color: var(--primary-dark);
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .news-layout {
    grid-template-columns: 1fr;
  }
  
  .facebook-balloon-container {
    order: 2;
  }
  
  .announcements-wrapper {
    order: 1;
  }
  
  .announcements-column {
    grid-template-columns: 1fr;
  }
}
</style>