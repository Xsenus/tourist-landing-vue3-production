<template>
  <section :id="sectionId" class="section-shell journey">
    <div class="panel journey__panel">
      <div class="journey__copy" data-animate="journey-copy">
        <SectionBadge :label="sectionData.eyebrow" tone="blue" />
        <h2 class="section-title section-title--compact">
          {{ sectionData.titleStart }}
          <span class="section-title__accent section-title__accent--blue">{{ sectionData.titleAccent }}</span>
        </h2>
        <p class="section-copy">{{ sectionData.copy }}</p>

        <ul class="journey__tasks">
          <li v-for="item in sectionData.tasks" :key="item" data-animate="journey-task">
            <span class="journey__task-icon"></span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="journey__visual" data-animate="journey-visual">
        <img class="journey__map" :src="sectionData.mapImage" alt="Travel map illustration" />

        <div v-if="sectionData.pin.title || sectionData.pin.copy" class="journey__pin-note" data-animate="journey-pin-note">
          <span class="journey__pin"></span>
          <div>
            <strong>{{ sectionData.pin.title }}</strong>
            <small>{{ sectionData.pin.copy }}</small>
          </div>
        </div>

        <JourneyBubble v-for="bubble in sectionData.bubbles" :key="bubble.label" :bubble="bubble" />

        <p v-if="sectionData.note" class="journey__scribble" data-animate="journey-note">{{ sectionData.note }}</p>
      </div>

      <aside class="country-card" data-animate="country-card">
        <div class="country-card__header"></div>

        <CountryListItem v-for="country in sectionData.countries" :key="country.name" :country="country" />

        <a class="country-card__button" :href="sectionData.buttonHref" data-animate="country-button">
          {{ sectionData.buttonLabel }}
          <span aria-hidden="true">&#8594;</span>
        </a>
      </aside>

      <div class="journey__footer" data-animate="journey-footer">
        <div class="stats-board">
          <article v-for="stat in sectionData.stats" :key="stat.label" class="stats-board__item" data-animate="stats-item">
            <span class="stats-board__icon"></span>
            <div>
              <strong>{{ stat.value }}</strong>
              <small>{{ stat.label }}</small>
            </div>
          </article>
        </div>

        <TravelersBoard :travelers="sectionData.travelers" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CountryListItem from '@/entities/journey/ui/CountryListItem.vue';
import JourneyBubble from '@/entities/journey/ui/JourneyBubble.vue';
import TravelersBoard from '@/entities/journey/ui/TravelersBoard.vue';
import type { JourneySectionContent } from '@/pages/landing/model/landing.types';
import SectionBadge from '@/shared/ui/SectionBadge.vue';

withDefaults(
  defineProps<{
    sectionData: JourneySectionContent;
    sectionId?: string;
  }>(),
  {
    sectionId: 'journey'
  }
);
</script>
