<template>
  <section class="section calendar-section">
    <div class="container">
      <h2 class="section-title">DepEd School Year 2026 - 2027</h2>
      <p class="section-subtitle">Academic Calendar - Term 1</p>
      
      <!-- Single Square Calendar Container -->
      <div class="calendar-container">
        <!-- Left: Month Name -->
        <div class="month-sidebar">
          <div class="month-vertical">
            <span v-for="(letter, index) in months[currentMonthIndex].name.split(' ')[0]" :key="index" class="month-letter">
              {{ letter }}
            </span>
          </div>
          <p class="month-year">{{ months[currentMonthIndex].name.split(' ')[1] }}</p>
          
          <!-- Navigation Buttons -->
          <div class="month-nav">
            <button @click="previousMonth" class="nav-btn-small" :disabled="currentMonthIndex === 0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button @click="nextMonth" class="nav-btn-small" :disabled="currentMonthIndex === months.length - 1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Right: Calendar Grid -->
        <div class="calendar-area">
          <div class="calendar-wrapper">
            <div class="calendar-grid">
              <div class="day-header">Sun</div>
              <div class="day-header">Mon</div>
              <div class="day-header">Tue</div>
              <div class="day-header">Wed</div>
              <div class="day-header">Thu</div>
              <div class="day-header">Fri</div>
              <div class="day-header">Sat</div>
              
              <div 
                v-for="(day, index) in months[currentMonthIndex].days" 
                :key="index"
                :class="['day-cell', { 'empty': !day.number, 'has-events': day.events }]"
              >
                <span class="day-number">{{ day.number }}</span>
                <button 
                  v-if="day.events && day.events.length > 0"
                  @click="showEventInfo({ date: `${months[currentMonthIndex].name.split(' ')[0]} ${day.number}`, events: day.events })"
                  class="event-counter"
                >
                  {{ day.events.length }}
                </button>
              </div>
            </div>
          </div>
          
          <!-- Event Info Modal -->
          <div v-if="selectedEvent" class="event-modal" @click="closeEventInfo">
            <div class="event-modal-content" @click.stop>
              <button class="close-btn" @click="closeEventInfo">×</button>
              <h3 class="event-modal-title">{{ selectedEvent.date }}</h3>
              <div class="event-list-modal">
                <div 
                  v-for="(event, idx) in selectedEvent.events" 
                  :key="idx"
                  :class="['event-item-modal', event.class]"
                >
                  {{ event.label }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentMonthIndex = ref(0)
const selectedEvent = ref(null)

const currentMonthEvents = computed(() => {
  const events = []
  const currentMonth = months[currentMonthIndex.value]
  
  currentMonth.days.forEach((day, index) => {
    if (day.events && day.events.length > 0) {
      day.events.forEach(event => {
        events.push({
          date: `${currentMonth.name.split(' ')[0]} ${day.number}`,
          title: event.label,
          type: event.class
        })
      })
    }
  })
  
  return events
})

const showEventInfo = (event) => {
  selectedEvent.value = event
}

const closeEventInfo = () => {
  selectedEvent.value = null
}

const months = [
  {
    name: 'June 2026',
    days: [
      // Week 1
      { number: 1, events: [{ label: 'Brigada Eskwela', class: 'brigada' }] },
      { number: 2, events: [{ label: 'Brigada Eskwela', class: 'brigada' }] },
      { number: 3, events: [{ label: 'Brigada Eskwela', class: 'brigada' }] },
      { number: 4, events: [{ label: 'Brigada Eskwela', class: 'brigada' }] },
      { number: 5, events: [{ label: 'Brigada Eskwela', class: 'brigada' }, { label: 'Enrollment Period', class: 'brigada' }] },
      { number: 6 },
      { number: 7 },
      // Week 2
      { number: 8, events: [{ label: 'Opening Block', class: 'opening' }] },
      { number: 9, events: [{ label: 'Opening Block', class: 'opening' }] },
      { number: 10, events: [{ label: 'Opening Block', class: 'opening' }] },
      { number: 11, events: [{ label: 'Start of Term 1', class: 'opening' }] },
      { number: 12, events: [{ label: 'Independence Day', class: 'holiday' }] },
      { number: 13 },
      { number: 14 },
      // Week 3-5
      { number: 15 }, { number: 16 }, { number: 17 }, { number: 18 }, { number: 19 }, { number: 20 }, { number: 21 },
      { number: 22 }, { number: 23 }, { number: 24 }, { number: 25 }, { number: 26 }, { number: 27 }, { number: 28 },
      { number: 29 }, { number: 30 }, { number: '' }, { number: '' }, { number: '' }, { number: '' }, { number: '' },
    ]
  },
  {
    name: 'July 2026',
    days: [
      // Week 1
      { number: '' }, { number: '' }, { number: '' }, { number: 1 }, { number: 2 }, { number: 3 }, { number: 4 },
      // Week 2
      { number: 5 },
      { number: 6, events: [{ label: 'First Summative Test', class: 'test' }] },
      { number: 7 }, { number: 8 }, { number: 9 }, { number: 10 }, { number: 11 },
      // Week 3-5
      { number: 12 }, { number: 13 }, { number: 14 }, { number: 15 }, { number: 16 }, { number: 17 }, { number: 18 },
      { number: 19 }, { number: 20 }, { number: 21 }, { number: 22 }, { number: 23 }, { number: 24 }, { number: 25 },
      { number: 26 }, { number: 27 },
      { number: 28, events: [{ label: 'Second Summative Test', class: 'test' }] },
      { number: 29 }, { number: 30 }, { number: 31 }, { number: '' },
    ]
  },
  {
    name: 'August 2026',
    days: [
      // Week 1
      { number: '' }, { number: '' }, { number: '' }, { number: '' }, { number: '' }, { number: '' }, { number: 1 },
      // Week 2-5
      { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }, { number: 6 }, { number: 7 }, { number: 8 },
      { number: 9 }, { number: 10 }, { number: 11 }, { number: 12 }, { number: 13 }, { number: 14 }, { number: 15 },
      { number: 16 }, { number: 17 }, { number: 18 }, { number: 19 }, { number: 20 },
      { number: 21, events: [{ label: 'Exam Period', class: 'exam' }] },
      { number: 22 }, { number: 23 }, { number: 24 }, { number: 25 }, { number: 26 }, { number: 27 }, { number: 28 },
      { number: 29 }, { number: 30 },
      { number: 31, events: [{ label: 'Ninoy Aquino Day', class: 'holiday' }] },
      { number: '' }, { number: '' }, { number: '' }, { number: '' }, { number: '' },
    ]
  },
  {
    name: 'September 2026',
    days: [
      // Week 1
      { number: '' }, { number: '' },
      { number: 1, events: [{ label: 'Term 1 Exam', class: 'exam' }] },
      { number: 2, events: [{ label: 'End of Term Block', class: 'endterm' }] },
      { number: 3, events: [{ label: 'End of Term Block', class: 'endterm' }] },
      { number: 4, events: [{ label: 'End of Term Block', class: 'endterm' }] },
      { number: 5, events: [{ label: 'End of Term Block', class: 'endterm' }] },
      // Week 2
      { number: 6, events: [{ label: 'End of Term Block', class: 'endterm' }] },
      { number: 7, events: [{ label: 'End of Term Block', class: 'endterm' }] },
      { number: 8, events: [{ label: 'End of Term Block', class: 'endterm' }] },
      { number: 9, events: [{ label: 'End of Term Block', class: 'endterm' }] },
      { number: 10, events: [{ label: 'End of Term Block', class: 'endterm' }] },
      { number: 11, events: [{ label: 'End of Term Block', class: 'endterm' }] },
      { number: 12, events: [{ label: 'End of Term Block', class: 'endterm' }] },
      // Week 3
      { number: 13, events: [{ label: 'End of Term Block', class: 'endterm' }] },
      { number: 14, events: [{ label: 'End of Term Block', class: 'endterm' }] },
      { number: 15, events: [{ label: 'Term 1 Complete', class: 'endterm' }] },
      { number: 16 }, { number: 17 }, { number: 18 }, { number: 19 },
      // Week 4-5
      { number: 20 }, { number: 21 }, { number: 22 }, { number: 23 }, { number: 24 }, { number: 25 }, { number: 26 },
      { number: 27 }, { number: 28 }, { number: 29 }, { number: 30 }, { number: '' }, { number: '' }, { number: '' },
    ]
  }
]

const nextMonth = () => {
  if (currentMonthIndex.value < months.length - 1) {
    currentMonthIndex.value++
  }
}

const previousMonth = () => {
  if (currentMonthIndex.value > 0) {
    currentMonthIndex.value--
  }
}
</script>

<style scoped>
.calendar-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.calendar-container {
  max-width: 1000px;
  margin: 40px auto;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 150px 1fr;
  height: 600px;
  overflow: hidden;
}

/* Left: Month Sidebar */
.month-sidebar {
  background: var(--primary);
  color: white;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Left: Month Sidebar */
.month-sidebar {
  background: var(--primary);
  color: white;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.month-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
}

.month-letter {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.month-name {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  writing-mode: horizontal-tb;
}

.month-year {
  font-size: 1.125rem;
  font-weight: 400;
  margin: 0 0 30px 0;
  opacity: 0.9;
}

.month-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
}

.nav-btn-small {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.nav-btn-small:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.nav-btn-small:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Middle: Content Area */
.content-area {
  padding: 40px 30px;
  border-right: 1px solid #e5e7eb;
  overflow-y: auto;
}

.content-heading {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
  margin: 0 0 24px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--primary);
}

.event-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.event-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 3px solid var(--primary);
  transition: all 0.2s ease;
}

.event-item:hover {
  background: #e9ecef;
  transform: translateX(4px);
}

.event-date {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
}

.event-title {
  font-size: 0.875rem;
  color: var(--text-dark);
  line-height: 1.4;
}

/* Right: Calendar Area */
.calendar-area {
  padding: 40px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.calendar-wrapper {
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 100%;
  max-height: 520px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto repeat(6, 1fr);
  gap: 8px;
  width: 100%;
  height: 100%;
}

.day-header {
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-light);
  padding: 12px 4px;
  text-transform: uppercase;
}

.day-cell {
  aspect-ratio: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 8px;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  color: var(--text-dark);
  transition: all 0.2s ease;
  cursor: default;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  position: relative;
}

.day-number {
  font-size: 1.5rem;
  font-weight: 700;
  z-index: 10;
  position: relative;
}

.day-cell.empty {
  background: transparent;
  border: none;
}

.event-counter {
  align-self: flex-end;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.event-counter:hover {
  background: #047857;
  transform: scale(1.1);
}

/* Event Modal */
.event-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.event-modal-content {
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  position: relative;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f3f4f6;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: #e5e7eb;
}

.event-modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin: 0 0 24px 0;
}

.event-list-modal {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.event-item-modal {
  padding: 16px;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
}

.event-item-modal.brigada {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
}

.event-item-modal.opening {
  background: linear-gradient(135deg, var(--primary) 0%, #10b981 100%);
}

.event-item-modal.test {
  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
}

.event-item-modal.exam {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.event-item-modal.holiday {
  background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
}

.event-item-modal.endterm {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
}

@media (max-width: 1024px) {
  .calendar-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }

  .month-sidebar {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
  }

  .month-name {
    font-size: 1.5rem;
    writing-mode: horizontal-tb;
  }

  .month-year {
    margin: 0;
  }

  .month-nav {
    flex-direction: row;
    margin-top: 0;
  }

  .content-area {
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
  }

  .calendar-area {
    padding: 30px 20px;
  }
}

@media (max-width: 768px) {
  .calendar-container {
    margin: 20px 10px;
  }

  .month-sidebar {
    padding: 20px;
  }

  .month-name {
    font-size: 1.25rem;
  }

  .month-year {
    font-size: 1rem;
  }

  .content-area {
    padding: 24px 20px;
  }

  .content-heading {
    font-size: 1.125rem;
  }

  .calendar-area {
    padding: 24px 16px;
  }

  .calendar-grid {
    gap: 4px;
  }

  .day-header {
    font-size: 0.75rem;
    padding: 8px 2px;
  }

  .day-cell {
    min-height: 60px;
    padding: 4px;
  }

  .day-number {
    font-size: 1rem;
  }
}
</style>
