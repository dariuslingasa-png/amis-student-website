<template>
  <div class="contact">
    <section class="page-hero">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Get In Touch</h2>
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>info@amis.edu</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>123 Education Street<br>City, State 12345</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">🕐</div>
                <div>
                  <h4>Office Hours</h4>
                  <p>Monday - Friday<br>8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <form @submit.prevent="handleSubmit">
              <div v-if="submitMessage" class="alert alert-success">
                {{ submitMessage }}
              </div>
              
              <div v-if="submitError" class="alert alert-error">
                {{ submitError }}
              </div>
              
              <div class="form-group">
                <label>Name *</label>
                <input type="text" v-model="form.name" required />
              </div>
              
              <div class="form-group">
                <label>Email *</label>
                <input type="email" v-model="form.email" required />
              </div>
              
              <div class="form-group">
                <label>Phone</label>
                <input type="tel" v-model="form.phone" />
              </div>
              
              <div class="form-group">
                <label>Subject *</label>
                <input type="text" v-model="form.subject" required />
              </div>
              
              <div class="form-group">
                <label>Message *</label>
                <textarea v-model="form.message" rows="5" required></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitError = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  submitError.value = ''
  
  try {
    const response = await fetch('http://localhost:3002/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    
    if (response.ok) {
      submitMessage.value = 'Thank you for your message! We will get back to you soon.'
      form.name = ''
      form.email = ''
      form.phone = ''
      form.subject = ''
      form.message = ''
    } else {
      submitError.value = 'Failed to send message. Please try again.'
    }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    submitError.value = 'Failed to send message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 180px 0 100px;
  
  text-align: center;
}

.page-hero h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}

.page-hero p {
  font-size: 1.25rem;
  opacity: 0.9;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 16px;
}

.contact-info > p {
  color: var(--text-light);
  margin-bottom: 40px;
  line-height: 1.6;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-item {
  display: flex;
  gap: 16px;
}

.info-icon {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  background: var(--bg-light);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-item h4 {
  font-size: 1.125rem;
  margin-bottom: 4px;
  color: var(--text);
}

.info-item p {
  color: var(--text-light);
  line-height: 1.6;
}

.contact-form {
  background: var(--bg-light);
  padding: 40px;
  border-radius: 12px;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--text);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
}

.form-group textarea {
  resize: vertical;
}

.alert {
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.alert-success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert-error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .page-hero {
    padding: 140px 0 80px;
  }
  
  .page-hero h1 {
    font-size: 2.5rem;
  }
  
  .contact-form {
    padding: 30px 20px;
  }
}
</style>
