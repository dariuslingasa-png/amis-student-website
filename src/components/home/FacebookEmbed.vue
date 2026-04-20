<template>
  <div class="facebook-balloon-container">
    <div class="balloon-header">
      <div class="balloon-title">
        <svg class="balloon-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        Latest AMIS Facebook Updates
      </div>
    </div>
    <div class="balloon-content">
      <iframe 
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Falmunawwaraislamicschool&tabs=timeline&width=500&height=650&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" 
        width="500" 
        height="650" 
        style="border:none;overflow:hidden" 
        scrolling="no" 
        frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>
    </div>
  </div>
</template>

<style scoped>
.facebook-balloon-container {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 24px;
  box-shadow: 
    0 10px 40px rgba(5, 150, 105, 0.12),
    0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  height: 100%;
  min-height: 624px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid rgba(5, 150, 105, 0.1);
  transition: all 0.3s ease;
}

.facebook-balloon-container:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 15px 50px rgba(5, 150, 105, 0.15),
    0 8px 20px rgba(0, 0, 0, 0.1);
}

.balloon-header {
  background: linear-gradient(135deg, var(--primary) 0%, #047857 100%);
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.balloon-title {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.balloon-icon {
  width: 24px;
  height: 24px;
  opacity: 0.95;
}

.balloon-content {
  padding: 20px;
  background: white;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.balloon-content iframe {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}
</style>
