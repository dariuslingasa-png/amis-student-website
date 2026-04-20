<template>
  <div class="icon-examples">
    <h2>Heroicons Examples</h2>
    
    <!-- Outline Icons (default) -->
    <div class="icon-group">
      <h3>Outline Icons</h3>
      <HomeIcon class="icon" />
      <AcademicCapIcon class="icon" />
      <BookOpenIcon class="icon" />
      <UserGroupIcon class="icon" />
      <PhoneIcon class="icon" />
      <EnvelopeIcon class="icon" />
      <MapPinIcon class="icon" />
      <CalendarIcon class="icon" />
    </div>

    <!-- Solid Icons -->
    <div class="icon-group">
      <h3>Solid Icons</h3>
      <HomeIconSolid class="icon" />
      <AcademicCapIconSolid class="icon" />
      <BookOpenIconSolid class="icon" />
      <UserGroupIconSolid class="icon" />
      <PhoneIconSolid class="icon" />
      <EnvelopeIconSolid class="icon" />
      <MapPinIconSolid class="icon" />
      <CalendarIconSolid class="icon" />
    </div>
  </div>
</template>

<script setup>
// Outline icons (24x24)
import {
  HomeIcon,
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CalendarIcon,
} from '@heroicons/vue/24/outline'

// Solid icons (24x24)
import {
  HomeIcon as HomeIconSolid,
  AcademicCapIcon as AcademicCapIconSolid,
  BookOpenIcon as BookOpenIconSolid,
  UserGroupIcon as UserGroupIconSolid,
  PhoneIcon as PhoneIconSolid,
  EnvelopeIcon as EnvelopeIconSolid,
  MapPinIcon as MapPinIconSolid,
  CalendarIcon as CalendarIconSolid,
} from '@heroicons/vue/24/solid'
</script>

<style scoped>
.icon-examples {
  padding: 40px;
}

.icon-group {
  margin-bottom: 40px;
}

.icon-group h3 {
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: var(--primary);
}

.icon {
  width: 32px;
  height: 32px;
  color: var(--primary);
  margin-right: 16px;
  display: inline-block;
}
</style>
