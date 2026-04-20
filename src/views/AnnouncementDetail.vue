<template>
  <div class="announcement-detail">
    <SkeletonLoader v-if="loading" />
    
    <div v-else>
      <!-- Breadcrumb Header -->
      <div class="breadcrumb-header">
        <div class="container">
          <div class="breadcrumb">
            <router-link to="/">Home</router-link>
            <span class="separator">/</span>
            <span>Announcement</span>
          </div>
        </div>
      </div>

      <!-- Announcement Content -->
      <section v-if="announcement" class="section">
        <div class="container">
          <!-- Category Badge -->
          <div v-if="announcement.category" class="detail-category">
            <span :class="`category-badge category-${announcement.category}`">
              {{ announcement.category }}
            </span>
          </div>

          <!-- Title -->
          <h1 class="page-title">{{ announcement.title }}</h1>

          <!-- Date -->
          <div v-if="announcement.publish_date" class="page-subtitle">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ new Date(announcement.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase() }}
          </div>

          <!-- Content Wrapper -->
          <div class="content-wrapper">
            <!-- Image -->
            <div v-if="announcement.image_url" class="detail-image">
              <img :src="announcement.image_url" :alt="announcement.title" />
            </div>

            <!-- Text Content -->
            <div class="detail-text">
              {{ announcement.content }}
            </div>

            <!-- Author -->
            <div v-if="announcement.author" class="detail-author">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Posted by {{ announcement.author }}
            </div>
          </div>
        </div>
      </section>

      <!-- Error State -->
      <section v-else class="section">
        <div class="container">
          <div class="error-message">
            <h2>Announcement Not Found</h2>
            <p>The announcement you're looking for doesn't exist or has been removed.</p>
            <router-link to="/" class="btn-primary">Go Back Home</router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SkeletonLoader from '../components/SkeletonLoader.vue'

const route = useRoute()
const loading = ref(true)
const announcement = ref(null)

const fetchAnnouncement = async () => {
  try {
    const response = await fetch(`http://localhost:3001/api/public/announcements`)
    
    if (response.ok) {
      const data = await response.json()
      announcement.value = data.find(item => item.id === parseInt(route.params.id))
    }
  } catch (error) {
    console.error('Failed to fetch announcement:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchAnnouncement()
})
</script>

<style scoped>
.announcement-detail {
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

.detail-category {
  text-align: center;
  margin-bottom: 16px;
}

.category-badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.category-news {
  background: #dbeafe;
  color: #1e40af;
}

.category-event {
  background: #fce7f3;
  color: #be185d;
}

.category-announcement {
  background: #fef3c7;
  color: #92400e;
}

.category-other {
  background: #e5e7eb;
  color: #374151;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: var(--text);
  line-height: 1.2;
}

.page-subtitle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--text-light);
  font-size: 1rem;
  margin-bottom: 60px;
}

.page-subtitle svg {
  width: 20px;
  height: 20px;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.detail-image {
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  background: var(--bg-light);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 40px;
}

.detail-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-height: 500px;
}

.detail-text {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--text-light);
  text-align: justify;
  margin-bottom: 40px;
  white-space: pre-wrap;
}

.detail-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--text-light);
  font-size: 0.95rem;
  padding-top: 30px;
  border-top: 2px solid var(--bg-light);
}

.detail-author svg {
  width: 18px;
  height: 18px;
}

.error-message {
  text-align: center;
  padding: 80px 20px;
}

.error-message h2 {
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 16px;
}

.error-message p {
  color: var(--text-light);
  margin-bottom: 32px;
  font-size: 1.1rem;
}

.btn-primary {
  display: inline-block;
  padding: 12px 32px;
  background: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .breadcrumb-header {
    margin-top: 380px;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 0.9rem;
  }

  .detail-text {
    text-align: left;
  }
}
</style>
