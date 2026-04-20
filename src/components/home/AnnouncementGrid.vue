<template>
  <div class="announcements-wrapper">
    <div v-if="announcements.length > 0" class="announcements-column">
      <AnnouncementCard
        v-for="announcement in announcements"
        :key="announcement.id"
        :announcement="announcement"
        :show-sample-ribbon="showSampleRibbon"
      />
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
    <Pagination
      v-if="totalPages > 1"
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="$emit('page-change', $event)"
      @prev="$emit('prev')"
      @next="$emit('next')"
    />
  </div>
</template>

<script setup>
import AnnouncementCard from './AnnouncementCard.vue'
import Pagination from './Pagination.vue'

defineProps({
  announcements: {
    type: Array,
    required: true
  },
  showSampleRibbon: {
    type: Boolean,
    default: false
  },
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

defineEmits(['page-change', 'prev', 'next'])
</script>

<style scoped>
.announcements-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.announcements-column {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
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

@media (max-width: 768px) {
  .announcements-column {
    grid-template-columns: 1fr;
  }
}
</style>
