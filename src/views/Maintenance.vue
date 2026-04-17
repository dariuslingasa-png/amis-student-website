<template>
  <div class="maintenance-page">
    <div class="maintenance-container">
      <div class="maintenance-icon">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      
      <h1 class="maintenance-title">Under Maintenance</h1>
      
      <p class="maintenance-message">{{ message }}</p>
      
      <p class="maintenance-footer">Thank you for your patience!</p>
      
      <div class="maintenance-logo">
        <div class="logo-circle">
          <span>AMIS</span>
        </div>
        <p class="logo-text">Al-Madinah Islamic School</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const message = ref('We are currently performing scheduled maintenance. Please check back soon!')

const fetchMaintenanceMessage = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/public/settings?key=maintenance_message')
    if (response.ok) {
      const data = await response.json()
      if (data.value) {
        message.value = data.value
      }
    }
  } catch (error) {
    console.error('Failed to fetch maintenance message:', error)
  }
}

onMounted(() => {
  fetchMaintenanceMessage()
})
</script>

<style scoped>
.maintenance-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  padding: 20px;
}

.maintenance-container {
  background: white;
  border-radius: 20px;
  padding: 60px 40px;
  max-width: 600px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.maintenance-icon {
  width: 100px;
  height: 100px;
  background: #fed7aa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
}

.maintenance-icon svg {
  width: 50px;
  height: 50px;
  color: #ea580c;
}

.maintenance-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 20px;
}

.maintenance-message {
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 30px;
}

.maintenance-footer {
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 40px;
}

.maintenance-logo {
  padding-top: 30px;
  border-top: 2px solid #e5e7eb;
}

.logo-circle {
  width: 60px;
  height: 60px;
  background: #059669;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
}

.logo-circle span {
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
}

.logo-text {
  color: #6b7280;
  font-size: 0.9rem;
  font-weight: 500;
}

@media (max-width: 640px) {
  .maintenance-container {
    padding: 40px 24px;
  }
  
  .maintenance-title {
    font-size: 2rem;
  }
  
  .maintenance-message {
    font-size: 1rem;
  }
}
</style>
