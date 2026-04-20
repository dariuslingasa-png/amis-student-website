<template>
  <header class="header">
    <div class="main-header" :class="{ scrolled: isScrolled }">
      <div class="top-bar">
        <div class="top-bar-row">
          <div class="social-links">
            <a href="https://www.facebook.com/almunawwaraislamicschool" target="_blank" class="social-link" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@amistv3214" target="_blank" class="social-link" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          <div class="top-links">
            <a href="#" class="top-link">e-Book</a>
            <span class="separator">|</span>
            <a href="http://localhost/student_portal/public" target="_blank" class="top-link">Student Portal Login</a>
            <span class="separator">|</span>
            <a href="#" class="top-link">Login</a>
          </div>
        </div>
      </div>
      <nav class="nav">
        <router-link to="/" class="logo">
          <img src="/logo.png" alt="AMIS Logo" class="logo-img" />
          <div class="logo-text-wrapper">
            <span class="logo-text-arabic">المدرسة المنورة الإسلامية</span>
            <span class="logo-text">AL MUNAWWARA ISLAMIC SCHOOL</span>
            <span class="logo-tagline">Enabling Our Students to Learn in Fid Dunya Wal Akhira</span>
          </div>
        </router-link>
        <div class="contact-info-right">
          <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+63 927 299 1833</span>
          </div>
          <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:admi@amis.edu.ph">admi@amis.edu.ph</a>
          </div>
          <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Don Julian Rodriguez Avenue, Ma-a, Davao City</span>
          </div>
        </div>
      </nav>
      <div class="mobile-contact-bar">
        <div class="mobile-contact-row">
          <div class="mobile-contact-item">
            <div class="contact-label">CALL SUPPORT</div>
            <div class="contact-value">+63 927 299 1833</div>
          </div>
          <div class="mobile-contact-item">
            <div class="contact-label">LOCATION</div>
            <div class="contact-value">Don Julian Rodriguez Avenue, Ma-a, Davao City</div>
          </div>
        </div>
        <div class="mobile-contact-row">
          <div class="mobile-contact-item">
            <div class="contact-label">EMAIL SUPPORT</div>
            <div class="contact-value"><a href="mailto:admi@amis.edu.ph">admi@amis.edu.ph</a></div>
          </div>
          <div class="mobile-contact-item">
            <a href="#" class="pre-enrollment-btn">PRE-ENROLLMENT</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="white-bar">
      <div class="white-bar-content">
        <button class="mobile-menu-toggle" :class="{ hidden: menuOpen }" @click="menuOpen = !menuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <span class="menu-hint" :class="{ hidden: menuOpen }">← Click here for menu</span>
        <div class="menu-overlay" :class="{ open: menuOpen }" @click="menuOpen = false"></div>
        <ul class="nav-menu" :class="{ open: menuOpen }">
          <button class="menu-close" @click="menuOpen = false">
            <span>✕</span>
          </button>
          <li><router-link to="/" @click="menuOpen = false">Home</router-link></li>
          <li class="dropdown">
            <router-link to="/about" @click="menuOpen = false">
              About Us
              <svg class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </router-link>
            <ul class="dropdown-menu">
              <li><router-link to="/about/history" @click="menuOpen = false">History</router-link></li>
              <li><router-link to="/about/philosophy-vision-mission-goals" @click="menuOpen = false">Philosophy, Vision, Mission, and Goals</router-link></li>
              <li><router-link to="/about/school-logo" @click="menuOpen = false">AMIS Logo</router-link></li>
              <li><router-link to="/about/why-islamic-school" @click="menuOpen = false">Why Islamic School?</router-link></li>
              <li><router-link to="/about/certifications" @click="menuOpen = false">Certifications & Recognition</router-link></li>
              <li><router-link to="/about/location" @click="menuOpen = false">School Location</router-link></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" @click.prevent>
              Academics
              <svg class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <ul class="dropdown-menu">
              <li><router-link to="/academics/basic-education" @click="menuOpen = false">Basic Education - K to 12</router-link></li>
            </ul>
          </li>
          <li>
            <a href="#" class="disabled-link" @click.prevent>
              Admissions
              <span class="coming-soon-badge">Coming Soon</span>
            </a>
          </li>
          <li>
            <a href="#" class="disabled-link" @click.prevent>
              Contact
              <span class="coming-soon-badge">Coming Soon</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)
let ticking = false

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      isScrolled.value = window.scrollY > 20
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  display: contents;
}

.main-header {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  position: relative;
  z-index: 1000;
}

.white-bar {
  background: white;
  border-bottom: 1px solid var(--border);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1001;
}

.main-header.scrolled {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.top-bar {
  background: rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.top-bar-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-bar-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 12px;
}

.social-link {
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.15);
  color: white;
}

.social-link svg {
  width: 18px;
  height: 18px;
}

.search-icon {
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.2s;
  display: none;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}

.search-icon:hover {
  background: rgba(255, 255, 255, 0.15);
  color: white;
}

.search-icon svg {
  width: 18px;
  height: 18px;
}

.mobile-contact-bar {
  display: none;
}

.top-info {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.85rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 6px;
}

.top-info svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.info-value {
  font-weight: 700;
}

.top-info a.info-value {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.2s;
  font-weight: 700;
}

.top-info a.info-value:hover {
  color: white;
}

.top-info a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.2s;
}

.top-info a:hover {
  color: white;
}

.top-bar-left .separator {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  min-height: 97px;
}

.contact-info-right {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 0.85rem;
  padding: 0 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
}

.contact-item:first-child {
  border-left: none;
}

.contact-item svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.contact-item span,
.contact-item a {
  color: white;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.contact-item a:hover {
  opacity: 0.9;
}

.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 20px;
}

.logo-img {
  height: 100px;
  width: 100px;
  object-fit: contain;
}

.logo-text-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-text-arabic {
  font-size: 1.75rem;
  font-weight: 900;
  color: white;
  line-height: 1.2;
  font-family: 'Traditional Arabic', 'Arabic Typesetting', 'Simplified Arabic', Arial, sans-serif;
  direction: rtl;
  unicode-bidi: embed;
  margin-bottom: 4px;
  letter-spacing: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-font-smoothing: antialiased;
  text-align: center;
  width: 100%;
}

.logo-text {
  font-size: 1.75rem;
  font-weight: 800;
  color: white;
  letter-spacing: 2px;
  line-height: 1;
  font-family: 'Arial', 'Helvetica', sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.logo-tagline {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
  margin-top: 6px;
  font-style: italic;
  letter-spacing: 0.3px;
  align-self: flex-start;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  width: 25px;
  height: 2px;
  background: white;
  transition: 0.3s;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--text);
  border-radius: 2px;
  transition: 0.3s;
}

.menu-hint {
  display: none;
  position: absolute;
  left: 65px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--primary);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
  animation: pulse-hint 2s ease-in-out infinite;
  box-shadow: 0 2px 8px rgba(5, 150, 105, 0.3);
  z-index: 5;
}

.menu-hint.hidden {
  display: none !important;
}

@keyframes pulse-hint {
  0%, 100% {
    transform: translateY(-50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(-50%) scale(1.05);
    opacity: 0.9;
  }
}

.menu-overlay {
  display: none;
}

.menu-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: none;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.menu-close:hover {
  color: rgba(255, 255, 255, 0.8);
  transform: rotate(90deg);
}

.top-links {
  display: flex;
  align-items: center;
  gap: 12px;
}

.top-link {
  color: white;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s;
  padding: 4px 10px;
  border-radius: 4px;
}

.top-link:hover {
  background: rgba(255, 255, 255, 0.15);
}

.top-links .separator {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  transition: opacity 0.2s;
  padding: 8px 0;
}

.nav-links a:hover {
  opacity: 0.8;
}

.nav-links .router-link-active {
  border-bottom: 2px solid white;
}

.btn-portal {
  background: white;
  color: var(--primary);
  padding: 12px 28px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  white-space: nowrap;
}

.btn-portal:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-1px);
}

.btn-portal:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-1px);
}

.white-bar-content {
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding: 0;
}

.nav-menu a {
  display: block;
  padding: 0;
  text-decoration: none;
  color: var(--text);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s;
  border-bottom: 3px solid transparent;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.nav-menu a:hover {
  color: var(--primary);
}

.nav-menu .router-link-active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

.coming-soon-badge {
  display: inline-block;
  background: #f59e0b;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  vertical-align: middle;
}

.disabled-link {
  opacity: 0.6;
  cursor: not-allowed !important;
  pointer-events: all !important;
}

.disabled-link:hover {
  color: var(--text) !important;
  border-bottom-color: transparent !important;
}

.dropdown {
  position: relative;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  margin-left: 6px;
  transition: transform 0.3s ease;
  display: inline-block;
  vertical-align: middle;
}

.dropdown:hover .dropdown-icon {
  transform: rotate(180deg);
}

.dropdown-arrow {
  font-size: 0.7rem;
  margin-left: 4px;
  transition: transform 0.3s;
  display: inline-block;
}

.dropdown:hover .dropdown-arrow {
  transform: rotate(0deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  list-style: none;
  padding: 12px 0;
  margin: 0;
  min-width: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu li {
  border-bottom: none;
}

.dropdown-menu a {
  display: block;
  padding: 10px 20px;
  color: var(--text);
  text-decoration: none;
  font-size: 0.9rem;
  border-bottom: none !important;
  transition: all 0.2s;
}

.dropdown-menu a:hover {
  background: var(--bg-light);
  color: var(--primary);
  padding-left: 24px;
}

@media (max-width: 968px) {
  .menu-toggle {
    display: flex;
    margin-right: 20px;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-menu-toggle.hidden {
    opacity: 0;
    pointer-events: none;
  }

  .menu-hint {
    display: block;
  }

  .logo {
    padding-left: 15px;
  }

  .logo-img {
    height: 60px;
    width: 60px;
  }

  .logo-text-arabic {
    font-size: 1rem;
    letter-spacing: 0;
    transform: none;
  }

  .logo-text {
    font-size: 1rem;
    letter-spacing: 1px;
  }

  .logo-tagline {
    font-size: 0.65rem;
  }

  .nav {
    padding: 10px 0;
    min-height: auto;
  }

  .contact-info-right {
    display: none;
  }

  .white-bar {
    padding: 10px 0;
  }

  .white-bar-content {
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    flex-direction: column;
    gap: 0;
    padding: 80px 30px 30px;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    z-index: 1000;
  }

  .nav-menu.open {
    right: 0;
  }

  .nav-menu.open .menu-close {
    display: flex;
  }

  .nav-menu li {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .nav-menu a {
    display: block;
    padding: 16px 0;
    width: 100%;
    font-size: 1.1rem;
    color: white;
  }

  .nav-menu a:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  .nav-menu .router-link-active {
    color: white;
    border-bottom-color: white;
  }

  .dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background: transparent;
    padding: 0;
    margin-left: 20px;
  }

  .dropdown-menu li {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .dropdown-menu a {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.95rem;
    padding: 12px 0;
  }

  .dropdown-menu a:hover {
    background: transparent;
    color: white;
    padding-left: 0;
  }

  .dropdown-arrow {
    display: none;
  }

  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    z-index: 999;
  }

  .menu-overlay.open {
    opacity: 1;
    pointer-events: all;
  }

  .main-header {
    display: flex;
    flex-direction: column;
  }

  .top-bar {
    order: 1;
    padding: 8px 15px;
    background: rgba(0, 0, 0, 0.1);
    gap: 0;
  }

  .nav {
    order: 2;
    display: flex;
    justify-content: center;
    padding: 20px 15px;
  }

  .logo {
    flex-direction: row;
    text-align: left;
    padding: 0 10px;
    gap: 12px;
    align-items: center;
    justify-content: center;
  }

  .logo-img {
    height: 55px;
    width: 55px;
    margin-bottom: 0;
    flex-shrink: 0;
  }

  .logo-text-wrapper {
    align-items: flex-start;
    text-align: left;
  }

  .logo-text-arabic {
    font-size: 1.1rem;
    letter-spacing: 0;
    transform: none;
    margin-bottom: 2px;
    width: auto;
  }

  .logo-text {
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    line-height: 1.2;
  }

  .logo-tagline {
    font-size: 0.55rem;
    line-height: 1.2;
    margin-top: 3px;
    align-self: flex-start;
  }

  .top-bar-row {
    width: 100%;
  }

  .top-bar-row:first-child {
    display: none;
  }

  .top-bar-row:last-child {
    display: flex;
    justify-content: space-between;
  }

  .social-links {
    display: flex;
    gap: 8px;
  }

  .social-link {
    width: 32px;
    height: 32px;
  }

  .social-link svg {
    width: 16px;
    height: 16px;
  }

  .search-icon {
    display: flex;
  }

  .mobile-contact-bar {
    order: 3;
    padding: 10px 15px 15px;
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .mobile-contact-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .mobile-contact-item {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .contact-label {
    font-size: 0.65rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
    margin-bottom: 3px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .contact-value {
    font-size: 0.75rem;
    color: white;
    font-weight: 700;
    line-height: 1.3;
  }

  .contact-value a {
    color: white;
    text-decoration: none;
    word-break: break-word;
  }

  .pre-enrollment-btn {
    display: inline-block;
    background: #f59e0b;
    color: white;
    padding: 8px 12px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s;
    margin-top: auto;
  }

  .pre-enrollment-btn:hover {
    background: #d97706;
    transform: translateY(-2px);
  }

  .top-bar-left {
    display: none;
  }

  .top-links {
    display: none;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-right:has(.nav-links.open) {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .btn-portal {
    width: 100%;
    text-align: center;
  }
}
</style>
