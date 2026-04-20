import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

export function useVisitorTracking() {
  const route = useRoute()

  const trackVisit = async () => {
    try {
      const pageUrl = window.location.pathname
      const referrer = document.referrer || null

      await fetch('http://localhost:3002/api/track-visit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page_url: pageUrl,
          referrer: referrer,
        }),
      })
    } catch (error) {
      // Silently fail - don't disrupt user experience
    }
  }

  onMounted(() => {
    trackVisit()
  })

  return {
    trackVisit
  }
}
