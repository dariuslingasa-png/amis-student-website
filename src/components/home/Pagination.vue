<template>
  <div class="pagination">
    <button 
      class="pagination-btn" 
      @click="$emit('prev')" 
      :disabled="currentPage === 1"
    >
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button 
      v-for="page in totalPages" 
      :key="page"
      class="pagination-number" 
      :class="{ active: currentPage === page }"
      @click="$emit('page-change', page)"
    >
      {{ page }}
    </button>
    
    <button 
      class="pagination-btn" 
      @click="$emit('next')" 
      :disabled="currentPage === totalPages"
    >
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
defineProps({
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
</style>
