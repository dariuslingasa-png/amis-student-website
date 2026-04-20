<template>
  <router-link
    :to="`/announcement/${announcement.id}`"
    class="news-card"
  >
    <div v-if="announcement.image_url || announcement.image" class="news-image">
      <img :src="announcement.image_url || announcement.image" :alt="announcement.title" />
      <div v-if="showSampleRibbon" class="sample-ribbon">SAMPLE</div>
    </div>
    <div class="news-content">
      <div class="news-date">
        {{ formatDate(announcement.publish_date || announcement.created_at) }}
      </div>
      <h3>{{ announcement.title }}</h3>
      <span class="news-link">Read More →</span>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  announcement: {
    type: Object,
    required: true
  },
  showSampleRibbon: {
    type: Boolean,
    default: false
  }
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).toUpperCase()
}
</script>

<style scoped>
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
</style>
