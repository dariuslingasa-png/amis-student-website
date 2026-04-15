<template>
  <div class="location-page">
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">›</span>
          <router-link to="/about">About Us</router-link>
          <span class="separator">›</span>
          <span class="current">School Location</span>
        </div>
        <h1>School Location</h1>
        <p>Find us and get in touch</p>
      </div>
    </section>

    <section class="section contact-section">
      <div class="container">
        <div class="contact-layout">
          <div class="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.4247467474706!2d125.58427682164505!3d7.076655203071124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d40fc876e1b%3A0xb32cba4725997165!2sAl%20Munawwara%20Islamic%20School!5e0!3m2!1sen!2sph!4v1776238165660!5m2!1sen!2sph"
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <div class="info-wrapper">
            <h2>Contact Information</h2>
            
            <div class="info-grid">
              <div class="info-item">
                <h3>Address</h3>
                <p>Al Munawwara Islamic School</p>
                <p>Don Julian Rodriguez Avenue, Ma-a</p>
                <p>Davao City, Philippines, 8000</p>
              </div>

              <div class="info-item">
                <h3>Email</h3>
                <p>almunawwaraislamicschool@gmail.com</p>
              </div>

              <div class="info-item">
                <h3>Phone</h3>
                <p>[Phone Number]</p>
              </div>

              <div class="info-item">
                <h3>Get Directions</h3>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Al+Munawwara+Islamic+School,Don+Julian+Rodriguez+Avenue,Ma-a,Davao+City,Philippines&destination_place_id=ChIJG25P_EBtlzMRZXGZJUe6LLM" 
                  target="_blank" 
                  class="directions-btn"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <div class="visit-cta">
          <h3>Plan Your Visit</h3>
          <p>We welcome prospective families to visit our campus and experience our learning environment firsthand. Please contact our admissions office to schedule a tour.</p>
          <router-link to="/contact" class="btn btn-primary">Contact Us</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
  padding: 180px 0 100px;
  margin-top: 150px;
  text-align: center;
}

.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
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

.breadcrumb .current {
  color: white;
  font-weight: 600;
}

.page-hero h1 {
  font-size: 3rem;
  margin-bottom: 16px;
  font-weight: 700;
}

.page-hero p {
  font-size: 1.25rem;
  opacity: 0.95;
}

.map-section {
  background: var(--bg-light);
  padding: 0;
}

.map-container {
  width: 100%;
  height: 500px;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.contact-section {
  background: white;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.map-wrapper {
  position: relative;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.info-wrapper {
  background: var(--bg-light);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-left: 4px solid var(--primary);
  height: 500px;
  overflow-y: auto;
}

.info-wrapper h2 {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 30px;
  font-weight: 700;
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info-item h3 {
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 8px;
  font-weight: 600;
}

.info-item p {
  color: var(--text-light);
  line-height: 1.7;
  font-size: 0.95rem;
  margin-bottom: 3px;
}

.info-item p:last-child {
  margin-bottom: 0;
}

.directions-btn {
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  margin-top: 8px;
}

.directions-btn:hover {
  background: #047857;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
}

.cta-section {
  background: var(--bg-light);
}

.visit-cta {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
  padding: 50px 40px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(5, 150, 105, 0.3);
}

.visit-cta h3 {
  font-size: 2rem;
  margin-bottom: 16px;
  font-weight: 700;
}

.visit-cta p {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 30px;
  opacity: 0.95;
}

.btn {
  display: inline-block;
  padding: 14px 40px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-primary {
  background: white;
  color: var(--primary);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

@media (max-width: 968px) {
  .page-hero {
    padding: 140px 0 80px;
    margin-top: 120px;
  }

  .page-hero h1 {
    font-size: 2.5rem;
  }

  .contact-layout {
    grid-template-columns: 1fr;
  }

  .map-wrapper {
    height: 350px;
  }

  .info-wrapper {
    height: auto;
    padding: 30px;
  }

  .visit-cta {
    padding: 40px 30px;
  }

  .visit-cta h3 {
    font-size: 1.75rem;
  }
}
</style>
