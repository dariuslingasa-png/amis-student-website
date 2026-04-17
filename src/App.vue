<template>
  <div class="app">
    <!-- Show maintenance page if maintenance mode is enabled -->
    <Maintenance v-if="maintenanceMode" />
    
    <!-- Normal website content -->
    <template v-else>
      <Header />
      <main>
        <router-view />
      </main>
      <Footer />
      
      <!-- Scroll to Top Button -->
      <button 
        v-show="showScrollTop" 
        @click="scrollToTop" 
        class="scroll-to-top"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Maintenance from './views/Maintenance.vue'

const showScrollTop = ref(false)
const maintenanceMode = ref(false)

const checkMaintenanceMode = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/public/settings?key=maintenance_mode')
    if (response.ok) {
      const data = await response.json()
      maintenanceMode.value = data.value === 'true'
    }
  } catch (error) {
    console.error('Failed to check maintenance mode:', error)
    // If API fails, assume not in maintenance mode
    maintenanceMode.value = false
  }
}

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  checkMaintenanceMode()
  // Check maintenance mode every 30 seconds
  setInterval(checkMaintenanceMode, 30000)
  
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(5, 150, 105, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.scroll-to-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(5, 150, 105, 0.4);
}

.scroll-to-top:active {
  transform: translateY(-2px);
}

.scroll-to-top svg {
  width: 24px;
  height: 24px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .scroll-to-top {
    width: 45px;
    height: 45px;
    bottom: 20px;
    right: 20px;
  }

  .scroll-to-top svg {
    width: 20px;
    height: 20px;
  }
}
</style>
