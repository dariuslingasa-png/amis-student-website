<template>
  <div>
    <!-- Feedback Button Sticker -->
    <button 
      @click="openModal" 
      class="feedback-sticker"
      aria-label="Send Feedback"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
      <span>FEEDBACK</span>
    </button>

    <!-- Feedback Modal -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button @click="closeModal" class="close-btn" aria-label="Close">×</button>
        
        <h2>Send Us Your Feedback</h2>
        <p class="subtitle">We'd love to hear from you!</p>

        <form @submit.prevent="submitFeedback" v-if="!submitted">
          <div class="form-group">
            <label for="name">Name (Optional)</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name"
              placeholder="Your name"
            />
          </div>

          <div class="form-group">
            <label for="email">Email (Optional)</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              placeholder="your.email@example.com"
            />
          </div>

          <div class="form-group">
            <label for="feedback_type">Feedback Type</label>
            <select id="feedback_type" v-model="form.feedback_type" required>
              <option value="">Select type</option>
              <option value="suggestion">Suggestion</option>
              <option value="complaint">Complaint</option>
              <option value="compliment">Compliment</option>
              <option value="question">Question</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="rating">How would you rate our website?</label>
            <div class="rating-stars">
              <button 
                type="button"
                v-for="star in 5" 
                :key="star"
                @click="form.rating = star"
                class="star-btn"
                :class="{ active: star <= form.rating }"
              >
                ★
              </button>
            </div>
          </div>

          <div class="form-group">
            <label for="message">Your Feedback *</label>
            <textarea 
              id="message" 
              v-model="form.message"
              placeholder="Tell us what you think..."
              rows="5"
              required
            ></textarea>
          </div>

          <div class="form-actions">
            <button type="button" @click="closeModal" class="btn-cancel">Cancel</button>
            <button type="submit" class="btn-submit" :disabled="loading">
              {{ loading ? 'Sending...' : 'Send Feedback' }}
            </button>
          </div>

          <p v-if="error" class="error-message">{{ error }}</p>
        </form>

        <div v-else class="success-message">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3>Thank You!</h3>
          <p>Your feedback has been submitted successfully.</p>
          <button @click="closeModal" class="btn-close">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const showModal = ref(false)
const submitted = ref(false)
const loading = ref(false)
const error = ref('')

const form = ref({
  name: '',
  email: '',
  feedback_type: '',
  rating: 0,
  message: ''
})

// Disable body scroll when modal is open
watch(showModal, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const openModal = () => {
  showModal.value = true
  submitted.value = false
  error.value = ''
}

const closeModal = () => {
  showModal.value = false
  form.value = {
    name: '',
    email: '',
    feedback_type: '',
    rating: 0,
    message: ''
  }
}

const submitFeedback = async () => {
  loading.value = true
  error.value = ''

  try {
    const response = await fetch('http://localhost:3002/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value)
    })

    if (response.ok) {
      submitted.value = true
      setTimeout(() => {
        closeModal()
      }, 3000)
    } else {
      error.value = 'Failed to submit feedback. Please try again.'
    }
  } catch (err) {
    error.value = 'Network error. Please check your connection.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.feedback-sticker {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  transform-origin: right center;
  background: linear-gradient(135deg, #1e7e34 0%, #28a745 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.feedback-sticker:hover {
  background: linear-gradient(135deg, #155724 0%, #1e7e34 100%);
  box-shadow: -2px 2px 12px rgba(0, 0, 0, 0.3);
  padding: 12px 28px;
  right: 18px;
}

.feedback-sticker svg {
  width: 20px;
  height: 20px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.modal-content {
  background: white;
  border-radius: 12px;
  padding: 24px;
  max-width: 450px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  margin: auto;
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 32px;
  color: #666;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 32px;
  height: 32px;
}

.close-btn:hover {
  color: #000;
}

h2 {
  margin: 0 0 4px 0;
  color: #1e7e34;
  font-size: 22px;
}

.subtitle {
  margin: 0 0 20px 0;
  color: #666;
  font-size: 14px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: #333;
  font-size: 14px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #28a745;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.rating-stars {
  display: flex;
  gap: 4px;
}

.star-btn {
  background: none;
  border: none;
  font-size: 28px;
  color: #ddd;
  cursor: pointer;
  transition: color 0.2s;
  padding: 4px;
}

.star-btn:hover,
.star-btn.active {
  color: #ffc107;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn-cancel,
.btn-submit {
  flex: 1;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-cancel {
  background: #f0f0f0;
  color: #666;
}

.btn-cancel:hover {
  background: #e0e0e0;
}

.btn-submit {
  background: linear-gradient(135deg, #1e7e34 0%, #28a745 100%);
  color: white;
}

.btn-submit:hover:not(:disabled) {
  background: linear-gradient(135deg, #155724 0%, #1e7e34 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  color: #dc3545;
  margin-top: 12px;
  font-size: 14px;
}

.success-message {
  text-align: center;
  padding: 20px;
}

.success-message svg {
  width: 64px;
  height: 64px;
  color: #28a745;
  margin: 0 auto 16px;
}

.success-message h3 {
  color: #1e7e34;
  margin: 0 0 8px 0;
}

.success-message p {
  color: #666;
  margin: 0 0 24px 0;
}

.btn-close {
  background: linear-gradient(135deg, #1e7e34 0%, #28a745 100%);
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.btn-close:hover {
  background: linear-gradient(135deg, #155724 0%, #1e7e34 100%);
}

@media (max-width: 768px) {
  .modal-content {
    padding: 20px;
    max-width: 95%;
  }
  
  .feedback-sticker {
    font-size: 12px;
    padding: 10px 20px;
  }
  
  h2 {
    font-size: 20px;
  }
  
  .form-group {
    margin-bottom: 14px;
  }
}
</style>
