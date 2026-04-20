<template>
  <div class="home">
    <SkeletonLoader v-if="loading" />
    <div v-else>
      <HeroSection />

      <section class="section news-announcements">
        <div class="container">
          <h2 class="section-title">Latest News & Announcements</h2>
          <p class="section-subtitle">Stay updated with the latest happenings at AMIS</p>
          
          <div v-if="apiError" class="api-notice">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Showing sample data. Database connection unavailable.</span>
          </div>

          <div class="news-layout">
            <FacebookEmbed />
            
            <AnnouncementGrid
              :announcements="paginatedAnnouncements"
              :show-sample-ribbon="apiError"
              :current-page="currentPage"
              :total-pages="totalPages"
              @page-change="goToPage"
              @prev="prevPage"
              @next="nextPage"
            />
          </div>
        </div>
      </section>

      <StatsSection />
      <PhotoAlbum />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import SkeletonLoader from '../components/SkeletonLoader.vue'
import HeroSection from '../components/home/HeroSection.vue'
import FacebookEmbed from '../components/home/FacebookEmbed.vue'
import AnnouncementGrid from '../components/home/AnnouncementGrid.vue'
import StatsSection from '../components/home/StatsSection.vue'
import PhotoAlbum from '../components/home/PhotoAlbum.vue'

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
    const response = await fetch('http://localhost:3002/api/announcements?limit=50&type=all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (response.ok) {
      const data = await response.json()
      if (data && data.length > 0) {
        announcements.value = data
        apiError.value = false
      } else {
        // No announcements in database, use sample data
        apiError.value = true
        announcements.value = sampleNews
      }
    } else {
      throw new Error(`API request failed with status: ${response.status}`)
    }
  } catch (error) {
    // Database is offline or unreachable, use sample data
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

@media (max-width: 768px) {
  .news-layout {
    grid-template-columns: 1fr;
  }
}
</style>
