<template>
  <section :id="sectionId" class="section-shell perks">
    <div class="panel perks__panel">
      <div class="perks__copy" data-animate="perks-copy">
        <SectionBadge :label="sectionData.eyebrow" tone="orange" />
        <h2 class="section-title section-title--compact perks__title">
          <span class="perks__title-line">{{ sectionData.titleStart }}</span>
          <span class="perks__title-line perks__title-line--accent">
            <span class="section-title__accent section-title__accent--orange">{{ sectionData.titleAccent }}</span>
            <span class="perks__title-heart" aria-hidden="true"></span>
          </span>
        </h2>
        <p class="section-copy">{{ sectionData.copy }}</p>

        <FeatureList :items="sectionData.features" />

        <InlineLink
          :href="sectionData.linkHref"
          :label="sectionData.linkLabel"
          tone="orange"
          animate-id="perks-link"
        />

        <p class="perks__aside" data-animate="perks-note">{{ sectionData.aside }}</p>
      </div>

      <ProfileCard :profile="sectionData.profile" />

      <div class="perks__connectors" aria-hidden="true">
        <span class="perks__connector perks__connector--top"></span>
        <span class="perks__connector perks__connector--bottom"></span>
        <span class="perks__spark"></span>
      </div>

      <span class="perks__panel-spark" aria-hidden="true"></span>

      <div class="perks__aside-stack" data-animate="perks-side-stack">
        <PerkInfoCard
          :title="sectionData.saveCard.title"
          :copy="sectionData.saveCard.copy"
          icon="shield"
        />

        <FriendsStrip :avatars="sectionData.friends.avatars" :copy="sectionData.friends.copy" />

        <PerkInfoCard
          :title="sectionData.memberCard.title"
          :copy="sectionData.memberCard.copy"
          icon="gift"
          :chips="sectionData.memberCard.brands"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FriendsStrip from '@/entities/perks/ui/FriendsStrip.vue';
import PerkInfoCard from '@/entities/perks/ui/PerkInfoCard.vue';
import ProfileCard from '@/entities/perks/ui/ProfileCard.vue';
import type { PerksSectionContent } from '@/pages/landing/model/landing.types';
import FeatureList from '@/shared/ui/FeatureList.vue';
import InlineLink from '@/shared/ui/InlineLink.vue';
import SectionBadge from '@/shared/ui/SectionBadge.vue';

withDefaults(
  defineProps<{
    sectionData: PerksSectionContent;
    sectionId?: string;
  }>(),
  {
    sectionId: 'card'
  }
);
</script>
