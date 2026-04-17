<template>
  <div
    id="card"
    class="rectangle-2c mobile-card-section"
    data-design-element="mobile-card-section"
    data-figma-node="55:463"
  >
    <div class="flex-row-c" data-design-element="mobile-card-intro">
      <div class="vector-2d"></div>
      <div class="vector-2e"></div>
      <div class="frame-2f">
        <span class="your-tourist-card">YOUR TOURIST CARD</span>
        <div class="frame-30">
          <div class="frame-31">
            <span class="your-journey">Your journey.</span>
            <div class="your-perks-your-way">
              <span class="your-perks">Your perks. </span><span class="your-way">Your way.</span>
            </div>
          </div>
          <span class="your-digital-travel-profile">
            Your digital travel profile. Share, connect, <br />and get exclusive member perks everywhere you go.
          </span>
        </div>
      </div>
    </div>
    <div class="frame-32" data-design-element="mobile-card-features">
      <div class="group-33">
        <div class="check-one"></div>
        <span class="share-your-adventures">Share your adventures</span>
      </div>
      <div class="group-34">
        <div class="check-one-35"></div>
        <span class="connect-with-travelers">Connect with travelers</span>
      </div>
      <div class="group-36">
        <div class="check-one-37"></div>
        <span class="unlock-member-only-deals">Unlock member-only deals</span>
      </div>
      <div class="group-38">
        <div class="check-one-39"></div>
        <span class="save-on-every-trip">Save on every trip</span>
      </div>
    </div>
    <a class="frame-3a" href="#identity" data-design-element="mobile-card-cta">
      <span class="get-your-free-card">Get your free card</span>
      <ArrowRightIcon class="arrow-3b" />
    </a>
    <div class="frame-3c" data-design-element="mobile-card-preview">
      <ReferencePerksProfileCard :profile="referencePerksProfile" />
    </div>
    <div class="flex-row-a" data-design-element="mobile-card-tagline">
      <div class="union"></div>
      <span class="more-travel">More travel,</span>
      <div class="vector-42"></div>
      <span class="less-cost">less cost</span>
      <div class="group-43"></div>
    </div>
    <div class="flex-row-b">
      <div class="rectangle-44" data-design-element="mobile-card-saved-badge">
        <div class="frame-45">
          <div class="shield-yes-fill"></div>
          <div class="frame-46">
            <span class="saved-1-240">Saved &euro;1,240</span><span class="on-stays-tours">on stays &amp; tours</span>
          </div>
        </div>
      </div>
      <div class="group-47" data-design-element="mobile-card-perks-badge">
        <div class="frame-48">
          <div class="shield-yes-fill-49"></div>
          <div class="frame-4a">
            <span class="member-perks">Member perks</span><span class="only-for-card-holders">Only for card holders</span>
          </div>
        </div>
        <div class="frame-4b">
          <div class="group-4c">
            <span class="bold">Bold</span>
            <div class="ellipse"></div>
          </div>
          <div class="group-4d">
            <span class="drift">DRIFT</span>
            <div class="ellipse-4e"></div>
          </div>
          <div class="group-4f">
            <span class="surf">Surf</span>
            <div class="ellipse-50"></div>
          </div>
        </div>
        <span class="and-more">&amp; more</span>
      </div>
      <div class="frame-51" data-design-element="mobile-card-friends-strip">
        <div class="avatar-image"></div>
        <div class="avatar-image-52"></div>
        <div class="avatar-image-53"></div>
      </div>
      <span class="plus-k-friends">+1.2K friends</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { referencePerksProfile } from '@/pages/landing/model/reference-content';
import ReferencePerksProfileCard from '@/entities/perks/ui/ReferencePerksProfileCard.vue';
import ArrowRightIcon from '@/shared/ui/ArrowRightIcon.vue';
</script>
