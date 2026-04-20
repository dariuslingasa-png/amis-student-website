<template>
  <section class="photo-album">
    <div class="container">
      <h2 class="section-title">Life at AMIS</h2>
      <p class="section-subtitle">Moments that define our journey</p>
      
      <div class="album-grid">
        <div 
          v-for="(album, albumIndex) in albums" 
          :key="albumIndex"
          class="album-slideshow"
          :style="{ animationDelay: `${albumIndex * 0.15}s` }"
        >
          <!-- Individual Slideshow for each album -->
          <div class="slideshow-container">
            <div class="slide-wrapper">
              <transition :name="`slide-${album.direction}`">
                <div :key="album.currentIndex" class="slide">
                  <img 
                    :src="album.photos[album.currentIndex].src" 
                    :alt="album.title"
                    loading="lazy"
                  />
                  <!-- Title appears on hover -->
                  <div class="slide-overlay">
                    <h3 class="album-title">{{ album.title }}</h3>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Albums data with current index and direction
const albums = ref([
  {
    title: 'SportFest 2025',
    currentIndex: 0,
    direction: 'left',
    photos: [
      { src: '/albums/SportFest 2025/591753363_1378332790970238_4366905468227256693_n.jpg' },
      { src: '/albums/SportFest 2025/594810255_1378340514302799_3937983275975124545_n.jpg' },
      { src: '/albums/SportFest 2025/595229775_1378332614303589_8850257664654745554_n.jpg' },
      { src: '/albums/SportFest 2025/595376814_1378339567636227_7667497623519424210_n.jpg' },
      { src: '/albums/SportFest 2025/595574610_1378333234303527_5885555887180984400_n.jpg' },
      { src: '/albums/SportFest 2025/image.png' }
    ]
  },
  {
    title: 'Recognition Day',
    currentIndex: 0,
    direction: 'left',
    photos: [
      { src: '/albums/Recognition Day/586393325_1371334605003390_6520786643361168505_n.jpg' },
      { src: '/albums/Recognition Day/586405972_1371336098336574_1398916957616274054_n.jpg' },
      { src: '/albums/Recognition Day/586434021_1371335625003288_3818678958531396199_n.jpg' },
      { src: '/albums/Recognition Day/587823096_1371334698336714_8992502310903265703_n.jpg' },
      { src: '/albums/Recognition Day/588711905_1371335111670006_1218599412944930085_n.jpg' }
    ]
  },
  {
    title: 'AMIS Health Assessment',
    currentIndex: 0,
    direction: 'left',
    photos: [
      { src: '/albums/AMIS Health Assessment/556674742_1321397483330436_1853498844359200128_n.jpg' },
      { src: '/albums/AMIS Health Assessment/557110048_1321396613330523_6346617683935954154_n.jpg' },
      { src: '/albums/AMIS Health Assessment/557589849_1321396386663879_8754873903607782981_n.jpg' },
      { src: '/albums/AMIS Health Assessment/558553930_1321396553330529_2586108122500349060_n.jpg' }
    ]
  },
  {
    title: 'AMISians join YMUN Korea XIII',
    currentIndex: 0,
    direction: 'left',
    photos: [
      { src: '/albums/AMISians join YMUN Korea XIII/587823096_1373163228153861_4039571029225953603_n.jpg' },
      { src: '/albums/AMISians join YMUN Korea XIII/588322790_1373163481487169_3200445259471165563_n.jpg' },
      { src: '/albums/AMISians join YMUN Korea XIII/588869895_1373163174820533_5208695980297783885_n.jpg' },
      { src: '/albums/AMISians join YMUN Korea XIII/593546542_1373163398153844_3002296050142669488_n.jpg' }
    ]
  },
  {
    title: 'Makasaysayan sa Pagkakaisa ng Bansa',
    currentIndex: 0,
    direction: 'left',
    photos: [
      { src: '/albums/Makasaysayan sa Pagkakaisa ng Bansa/534734549_1281575337312651_4408743598392564701_n.jpg' },
      { src: '/albums/Makasaysayan sa Pagkakaisa ng Bansa/536633326_1281574800646038_1320401250326399751_n.jpg' },
      { src: '/albums/Makasaysayan sa Pagkakaisa ng Bansa/536863135_1281353394001512_5883053672460982067_n.jpg' },
      { src: '/albums/Makasaysayan sa Pagkakaisa ng Bansa/537263889_1281221894014662_5911267714594746890_n.jpg' }
    ]
  },
  {
    title: 'Athletic Excellence',
    currentIndex: 0,
    direction: 'left',
    photos: [
      { src: '/albums/SportFest 2025/595574610_1378333234303527_5885555887180984400_n.jpg' },
      { src: '/albums/SportFest 2025/595376814_1378339567636227_7667497623519424210_n.jpg' },
      { src: '/albums/SportFest 2025/594810255_1378340514302799_3937983275975124545_n.jpg' }
    ]
  },
  {
    title: 'Academic Achievements',
    currentIndex: 0,
    direction: 'left',
    photos: [
      { src: '/albums/Recognition Day/588711905_1371335111670006_1218599412944930085_n.jpg' },
      { src: '/albums/Recognition Day/586434021_1371335625003288_3818678958531396199_n.jpg' },
      { src: '/albums/Recognition Day/586405972_1371336098336574_1398916957616274054_n.jpg' }
    ]
  },
  {
    title: 'Student Wellness Program',
    currentIndex: 0,
    direction: 'left',
    photos: [
      { src: '/albums/AMIS Health Assessment/558553930_1321396553330529_2586108122500349060_n.jpg' },
      { src: '/albums/AMIS Health Assessment/557589849_1321396386663879_8754873903607782981_n.jpg' },
      { src: '/albums/AMIS Health Assessment/556674742_1321397483330436_1853498844359200128_n.jpg' }
    ]
  },
  {
    title: 'Global Engagement',
    currentIndex: 0,
    direction: 'left',
    photos: [
      { src: '/albums/AMISians join YMUN Korea XIII/593546542_1373163398153844_3002296050142669488_n.jpg' },
      { src: '/albums/AMISians join YMUN Korea XIII/588869895_1373163174820533_5208695980297783885_n.jpg' },
      { src: '/albums/AMISians join YMUN Korea XIII/587823096_1373163228153861_4039571029225953603_n.jpg' }
    ]
  }
])

// Auto-play intervals for each album
let autoPlayIntervals = []

const nextSlide = (albumIndex) => {
  const album = albums.value[albumIndex]
  if (album.currentIndex < album.photos.length - 1) {
    album.direction = 'left'
    album.currentIndex++
  } else {
    // Loop back to first photo
    album.direction = 'left'
    album.currentIndex = 0
  }
}

const prevSlide = (albumIndex) => {
  const album = albums.value[albumIndex]
  if (album.currentIndex > 0) {
    album.direction = 'right'
    album.currentIndex--
  }
}

const goToSlide = (albumIndex, slideIndex) => {
  const album = albums.value[albumIndex]
  album.direction = slideIndex > album.currentIndex ? 'left' : 'right'
  album.currentIndex = slideIndex
}

// Auto-play functionality
const startAutoPlay = () => {
  albums.value.forEach((album, index) => {
    const interval = setInterval(() => {
      nextSlide(index)
    }, 4000 + (index * 500)) // Stagger the auto-play timing
    autoPlayIntervals.push(interval)
  })
}

const stopAutoPlay = () => {
  autoPlayIntervals.forEach(interval => clearInterval(interval))
  autoPlayIntervals = []
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.photo-album {
  padding: 60px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  overflow: hidden;
}

/* Decorative Green Shapes in Background */
.photo-album::before {
  content: '';
  position: absolute;
  top: -100px;
  left: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(30, 126, 52, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 20s ease-in-out infinite;
}

.photo-album::after {
  content: '';
  position: absolute;
  bottom: -150px;
  right: -150px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(5, 150, 105, 0.12) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 25s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(50px, 50px) scale(1.1);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e7e34;
  text-align: center;
  margin-bottom: 12px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  text-align: center;
  margin-bottom: 40px;
}

/* Album Grid - 3x3 Layout with NO SPACE */
.album-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  width: 100%;
  max-height: 700px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.album-slideshow {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  animation: fadeInUp 0.8s ease-out backwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Slideshow */
.slideshow-container {
  width: 100%;
  height: 100%;
}

.slide-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: #000;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Hover Overlay with Green Fade and Title */
.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg, 
    rgba(30, 126, 52, 0.85) 0%, 
    rgba(5, 150, 105, 0.75) 50%,
    rgba(16, 185, 129, 0.65) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  padding: 20px;
  text-align: center;
}

.album-slideshow:hover .slide-overlay {
  opacity: 1;
}

.album-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  line-height: 1.3;
  transform: translateY(20px);
  transition: transform 0.5s ease;
}

.album-slideshow:hover .album-title {
  transform: translateY(0);
}

/* Slide Animations */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-btn {
  display: none;
}

.dots-container {
  display: none;
}

@media (max-width: 1024px) {
  .album-grid {
    grid-template-columns: repeat(2, 1fr);
    max-height: 600px;
  }
  
  .album-title {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .photo-album {
    padding: 40px 0;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .album-grid {
    grid-template-columns: 1fr;
    max-height: none;
  }
  
  .album-slideshow {
    height: 250px;
    aspect-ratio: auto;
  }
  
  .album-title {
    font-size: 1rem;
  }
}
</style>
