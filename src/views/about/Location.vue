<template>
  <div class="location-page">
    <section class="page-hero">
      <div class="breadcrumb">
        <router-link to="/">Home</router-link>
        <span class="separator">›</span>
        <router-link to="/about">About Us</router-link>
        <span class="separator">›</span>
        <span class="current">School Location</span>
      </div>
      <div class="container">
        <h1>Visit Us</h1>
        <p>Al Munawwara Islamic School - Davao City</p>
      </div>
    </section>

    <section class="map-section">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.4247467474706!2d125.58427682164505!3d7.076655203071124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d40fc876e1b%3A0xb32cba4725997165!2sAl%20Munawwara%20Islamic%20School!5e0!3m2!1sen!2sph!4v1776238165660!5m2!1sen!2sph"
        width="100%" 
        height="100%" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-main">
            <h2>Get in Touch</h2>
            <div class="contact-item">
              <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="contact-details">
                <h3>Address</h3>
                <p>Don Julian Rodriguez Avenue, Ma-a</p>
                <p>Davao City, Philippines 8000</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="contact-details">
                <h3>Email</h3>
                <a href="mailto:almunawwaraislamicschool@gmail.com">almunawwaraislamicschool@gmail.com</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="contact-details">
                <h3>Phone</h3>
                <p>Contact us for inquiries</p>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Al+Munawwara+Islamic+School,Don+Julian+Rodriguez+Avenue,Ma-a,Davao+City,Philippines&destination_place_id=ChIJG25P_EBtlzMRZXGZJUe6LLM" 
              target="_blank" 
              class="directions-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Get Directions
            </a>
          </div>

          <div class="info-card">
            <h3>School Hours</h3>
            <div class="hours-list">
              <div class="hours-item">
                <span class="day">Monday - Friday</span>
                <span class="time">7:00 AM - 5:00 PM</span>
              </div>
              <div class="hours-item">
                <span class="day">Saturday</span>
                <span class="time">8:00 AM - 12:00 PM</span>
              </div>
              <div class="hours-item">
                <span class="day">Sunday</span>
                <span class="time">Closed</span>
              </div>
            </div>

            <div class="visit-note">
              <h4>Plan Your Visit</h4>
              <p>We welcome prospective families to visit our campus. Please contact us in advance to schedule a tour.</p>
              <router-link to="/contact" class="contact-link">Contact Admissions →</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.location-page {
  min-height: 100vh;
}

.page-hero {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
  padding: 180px 0 80px;
  margin-top: 150px;
  text-align: center;
  position: relative;
}

.breadcrumb {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  z-index: 10;
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
  font-weight: 700;
}

.page-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 12px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.page-hero p {
  font-size: 1.25rem;
  opacity: 0.95;
}

.map-section {
  width: 100%;
  height: 550px;
  position: relative;
}

.map-section iframe {
  display: block;
}

.contact-section {
  background: white;
  padding: 80px 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 60px;
  align-items: start;
}

.contact-main h2 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 40px;
  font-weight: 700;
}

.contact-item {
  display: flex;
  gap: 20px;
  margin-bottom: 35px;
  padding-bottom: 35px;
  border-bottom: 1px solid #e5e7eb;
}

.contact-item:last-of-type {
  border-bottom: none;
  margin-bottom: 40px;
}

.icon-wrapper {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.icon-wrapper svg {
  width: 26px;
  height: 26px;
}

.contact-details h3 {
  font-size: 1.125rem;
  color: var(--primary);
  margin-bottom: 8px;
  font-weight: 700;
}

.contact-details p {
  color: var(--text-light);
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
}

.contact-details a {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.2s;
  word-break: break-word;
}

.contact-details a:hover {
  color: #047857;
  text-decoration: underline;
}

.directions-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
  padding: 16px 36px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(5, 150, 105, 0.25);
}

.directions-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(5, 150, 105, 0.35);
}

.directions-btn svg {
  width: 22px;
  height: 22px;
}

.info-card {
  background: var(--bg-light);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 180px;
}

.info-card h3 {
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 25px;
  font-weight: 700;
}

.hours-list {
  margin-bottom: 35px;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e5e7eb;
}

.hours-item:last-child {
  border-bottom: none;
}

.hours-item .day {
  color: var(--text-dark);
  font-weight: 600;
  font-size: 0.95rem;
}

.hours-item .time {
  color: var(--text-light);
  font-size: 0.9rem;
}

.visit-note {
  background: white;
  padding: 25px;
  border-radius: 12px;
  border-left: 4px solid var(--primary);
}

.visit-note h4 {
  font-size: 1.125rem;
  color: var(--primary);
  margin-bottom: 12px;
  font-weight: 700;
}

.visit-note p {
  color: var(--text-light);
  line-height: 1.7;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.contact-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.contact-link:hover {
  color: #047857;
}

@media (max-width: 968px) {
  .page-hero {
    padding: 140px 0 60px;
    margin-top: 120px;
  }

  .page-hero h1 {
    font-size: 2.5rem;
  }

  .page-hero p {
    font-size: 1.125rem;
  }

  .map-section {
    height: 400px;
  }

  .contact-section {
    padding: 60px 0;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-main h2 {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .info-card {
    position: static;
    padding: 30px;
  }

  .contact-item {
    margin-bottom: 25px;
    padding-bottom: 25px;
  }

  .icon-wrapper {
    width: 45px;
    height: 45px;
  }

  .icon-wrapper svg {
    width: 22px;
    height: 22px;
  }
}

@media (max-width: 640px) {
  .page-hero h1 {
    font-size: 2rem;
  }

  .map-section {
    height: 300px;
  }

  .contact-item {
    flex-direction: column;
    gap: 12px;
  }

  .directions-btn {
    width: 100%;
    justify-content: center;
  }

  .info-card {
    padding: 25px;
  }
}
</style>
