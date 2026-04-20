<template>
  <div class="maintenance-page">
    <div class="maintenance-container">
      <div class="maintenance-icon">
        <img src="/icons/maintenance_icon.png" alt="Maintenance" />
      </div>
      
      <h1 class="maintenance-title">Under Maintenance</h1>
      
      <p class="maintenance-message">{{ message }}</p>
      
      <p class="maintenance-footer">Shukran li-sabrik</p>
      
      <p class="maintenance-by">— {{ signature }}</p>
      
      <div class="maintenance-logo">
        <img src="/logo/AMIS_Logo.png" alt="AMIS Logo" class="logo-image" />
        <p class="logo-text">Al Munawwara Islamic School</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const message = ref('We are currently performing scheduled maintenance. Please check back soon!')
const signature = ref('IT Staff')

const fetchMaintenanceSettings = async () => {
  try {
    // Fetch message
    const messageResponse = await fetch('http://localhost:3001/api/public/settings?key=maintenance_message')
    if (messageResponse.ok) {
      const messageData = await messageResponse.json()
      // Only update if there's actual content (not empty or whitespace)
      if (messageData.value && messageData.value.trim()) {
        message.value = messageData.value
      }
    }

    // Fetch signature
    const signatureResponse = await fetch('http://localhost:3001/api/public/settings?key=maintenance_signature')
    if (signatureResponse.ok) {
      const signatureData = await signatureResponse.json()
      if (signatureData.value) {
        signature.value = signatureData.value
      }
    }
  } catch (error) {
    // Silently fail - admin portal is offline, use default values
  }
}

onMounted(() => {
  fetchMaintenanceSettings()
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
  position: relative;
  overflow: hidden;
}

.maintenance-page::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.maintenance-container {
  position: relative;
  z-index: 1;
  max-width: 450px;
  width: 100%;
  text-align: center;
  padding: 40px 32px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.maintenance-icon {
  width: 120px;
  height: 120px;
  margin: 0 auto 30px;
  border-radius: 50%;
  overflow: hidden;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.maintenance-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.maintenance-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}

.maintenance-message {
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 24px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  white-space: pre-line;
}

.maintenance-footer {
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 6px;
  font-weight: 500;
  font-style: italic;
}

.maintenance-by {
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 40px;
  font-style: italic;
}

.maintenance-logo {
  padding-top: 30px;
  border-top: 2px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.logo-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.logo-text {
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

@media (max-width: 640px) {
  .maintenance-container {
    padding: 32px 24px;
  }
  
  .maintenance-icon {
    width: 100px;
    height: 100px;
  }
  
  .maintenance-title {
    font-size: 1.5rem;
  }
  
  .maintenance-message {
    font-size: 0.9rem;
  }
  
  .logo-image {
    width: 50px;
    height: 50px;
  }
  
  .logo-text {
    font-size: 0.8rem;
  }
}
</style>
