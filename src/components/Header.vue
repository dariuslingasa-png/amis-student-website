<template>
  <header class="header">
    <div class="main-header" :class="{ scrolled: isScrolled }">
      <nav class="nav">
        <router-link to="/" class="logo">
          <img src="/logo.png" alt="AMIS Logo" class="logo-img" />
          <div class="logo-text-wrapper">
            <span class="logo-text-arabic">المدرسة المنورة الإسلامية</span>
            <span class="logo-text">AL MUNAWWARA ISLAMIC SCHOOL</span>
            <span class="logo-tagline">Enabling Our Students to Learn in Fid Dunya Wal Akhira</span>
          </div>
        </router-link>

        <div class="nav-right">
        </div>
      </nav>
    </div>
    
    <div class="white-bar">
      <div class="white-bar-content">
        <button class="mobile-menu-toggle" :class="{ hidden: menuOpen }" @click="menuOpen = !menuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="menu-overlay" :class="{ open: menuOpen }" @click="menuOpen = false"></div>
        <ul class="nav-menu" :class="{ open: menuOpen }">
          <button class="menu-close" @click="menuOpen = false">
            <span>✕</span>
          </button>
          <li><router-link to="/" @click="menuOpen = false">Home</router-link></li>
          <li>
            <a href="#" class="disabled-link" @click.prevent>
              About Us
              <span class="coming-soon-badge">Coming Soon</span>
            </a>
          </li>
          <li>
            <a href="#" class="disabled-link" @click.prevent>
              Academics
              <span class="coming-soon-badge">Coming Soon</span>
            </a>
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

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.main-header {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  transition: all 0.3s ease;
}

.main-header.scrolled {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  min-height: 97px;
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
  margin-bottom: 4px;
  letter-spacing: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-font-smoothing: antialiased;
  transform: scaleX(1.5);
  transform-origin: center;
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

.nav-right {
  display: flex;
  align-items: center;
  gap: 24px;
  padding-right: 20px;
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

.white-bar {
  background: white;
  border-bottom: 1px solid var(--border);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 15px 0;
}

.white-bar-content {
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
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

  .logo {
    padding-left: 15px;
  }

  .logo-img {
    height: 60px;
    width: 60px;
  }

  .logo-text-arabic {
    font-size: 1rem;
    letter-spacing: 4px;
    transform: scaleX(1.2);
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

  .nav-right {
    position: fixed;
    top: 92px;
    left: 0;
    right: 0;
    background: var(--primary);
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    gap: 16px;
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
