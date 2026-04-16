<template>
  <div class="certifications">
    <div class="breadcrumb-header">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">/</span>
          <router-link to="/about">About Us</router-link>
          <span class="separator">/</span>
          <span>Certifications & Recognition</span>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <h1 class="page-title">Certifications & Recognition</h1>
        <p class="page-subtitle">Our commitment to excellence is recognized by leading educational authorities</p>

        <div class="main-accreditations">
          <div class="accred-section">
            <h2 class="accred-title">QAHE - Quality Assurance in Higher Education</h2>
            <div class="accred-images-grid">
              <div class="accred-img-card" @click="openModal('/accre/QAHE_cert1.jpg')">
                <img src="/accre/QAHE_cert1.jpg" alt="QAHE Certificate 1" />
              </div>
              <div class="accred-img-card" @click="openModal('/accre/QAHE_cert2.jpg')">
                <img src="/accre/QAHE_cert2.jpg" alt="QAHE Certificate 2" />
              </div>
              <div class="accred-img-card" @click="openModal('/accre/QAHE_cert3.jpg')">
                <img src="/accre/QAHE_cert3.jpg" alt="QAHE Certificate 3" />
              </div>
            </div>
          </div>

          <div class="accred-section">
            <h2 class="accred-title">ACTD - Accrediting Council for Teacher Development</h2>
            <div class="accred-images-grid single">
              <div class="accred-img-card large" @click="openModal('/accre/ACTD_cert.jpg')">
                <img src="/accre/ACTD_cert.jpg" alt="ACTD Certificate" />
              </div>
            </div>
          </div>
        </div>

        <div class="info-box">
          <h2>Our Commitment to Quality</h2>
          <p>Al Munawwara Islamic School maintains the highest standards of educational excellence. Our international accreditations from QAHE and ACTD, along with DepEd recognition, reflect our dedication to providing quality Islamic education that meets and exceeds national and international standards.</p>
          <div class="accred-badges">
            <div class="badge">
              <div class="badge-icon">✓</div>
              <div class="badge-text">QAHE Accredited</div>
            </div>
            <div class="badge">
              <div class="badge-icon">✓</div>
              <div class="badge-text">ACTD Certified</div>
            </div>
            <div class="badge">
              <div class="badge-icon">✓</div>
              <div class="badge-text">DepEd Recognized</div>
            </div>
            <div class="badge">
              <div class="badge-icon">✓</div>
              <div class="badge-text">K-12 Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Modal -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">✕</button>
        <img :src="modalImage" alt="Certificate" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const modalImage = ref('')

const openModal = (imageSrc) => {
  modalImage.value = imageSrc
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.certifications {
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

.page-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: var(--text);
}

.page-subtitle {
  text-align: center;
  color: var(--text-light);
  font-size: 1.25rem;
  margin-bottom: 60px;
}

.accreditation-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.main-accreditations {
  margin-bottom: 60px;
}

.accred-section {
  margin-bottom: 50px;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.accred-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 30px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 3px solid var(--primary);
}

.accred-images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.accred-images-grid.single {
  grid-template-columns: 1fr;
  max-width: 800px;
  margin: 0 auto;
}

.accred-img-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 3px solid var(--border);
  cursor: pointer;
}

.accred-img-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  border-color: var(--primary);
}

.accred-img-card.large {
  max-width: 100%;
}

.accred-img-card img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  background: white;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  animation: zoomIn 0.3s ease;
}

@keyframes zoomIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.modal-content img {
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: white;
  color: #1f2937;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-weight: 700;
}

.modal-close:hover {
  background: var(--primary);
  color: white;
  transform: rotate(90deg);
}

.info-box {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  padding: 50px 40px;
  border-radius: 16px;
  color: white;
  text-align: center;
}

.info-box h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
}

.info-box p {
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.8;
  font-size: 1.15rem;
  margin-bottom: 40px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.accred-badges {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.badge {
  background: rgba(255, 255, 255, 0.15);
  padding: 20px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.badge:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-5px);
}

.badge-icon {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
}

.badge-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
}

.accred-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.accred-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.accred-card img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.accred-card h3 {
  padding: 20px;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
  background: var(--bg-light);
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.cert-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border-top: 4px solid var(--primary);
}

.cert-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.cert-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.cert-icon svg {
  width: 40px;
  height: 40px;
  color: white;
}

.cert-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text);
}

.cert-card p {
  color: var(--text-light);
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 16px;
}

.cert-year {
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.info-box {
  background: var(--bg-light);
  padding: 50px 40px;
  border-radius: 16px;
  border-left: 6px solid var(--primary);
}

.info-box h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text);
}

.info-box p {
  color: var(--text-light);
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 16px;
}

.info-box p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .breadcrumb-header {
    
  }

  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }

  .cert-grid {
    grid-template-columns: 1fr;
  }

  .info-box {
    padding: 30px 20px;
  }

  .info-box h2 {
    font-size: 1.5rem;
  }

  .info-box p {
    font-size: 1rem;
  }

  .accred-section {
    padding: 20px;
  }

  .accred-title {
    font-size: 1.5rem;
  }

  .accred-images-grid {
    grid-template-columns: 1fr;
  }

  .accred-badges {
    grid-template-columns: 1fr 1fr;
  }

  .modal-close {
    top: 10px;
    right: 10px;
  }

  .modal-content {
    max-width: 95vw;
  }
}
</style>
