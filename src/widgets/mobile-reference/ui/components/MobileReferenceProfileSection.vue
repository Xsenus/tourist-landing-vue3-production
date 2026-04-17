<template>
  <div
    id="identity"
    class="frame-60 mobile-profile-section"
    data-design-element="mobile-profile-section"
    data-figma-node="55:690"
  >
    <div class="rectangle-61"></div>
    <div class="group-62">
      <div class="frame-63" data-design-element="mobile-profile-intro">
        <div class="group-64">
          <div class="group-65">
            <div class="frame-66">
              <span class="your-profile">YOUR PROFILE</span>
              <div class="frame-67">
                <span class="your-journey-68">Your journey.</span><span class="your-identity">Your identity.</span>
              </div>
            </div>
          </div>
          <div class="group-69">
            <div class="mdi-heart"></div>
            <span class="make-it-yours">Make it yours. Share your story.</span>
          </div>
        </div>
        <span class="build-a-profile">
          Build a profile that feels like you. Add your style, <br />links, and personality - and connect with travelers <br />who vibe with your journey.
        </span>
      </div>
      <div class="frame-6a" data-design-element="mobile-profile-features">
        <div class="group-6b">
          <span class="custom-profile-cover">Custom profile &amp; cover</span>
          <div class="frame-6c"></div>
        </div>
        <div class="group-6d">
          <span class="add-your-social-links">Add your social links</span>
          <div class="frame-6e"></div>
        </div>
        <div class="group-6f">
          <span class="share-your-travel-vibe">Share your travel vibe</span>
          <div class="frame-70"></div>
        </div>
        <div class="group-71">
          <span class="connect-chat-easily">Connect &amp; chat easily</span>
          <div class="frame-72"></div>
        </div>
      </div>
      <a class="frame-73" href="#journey" data-design-element="mobile-profile-cta">
        <span class="create-your-profile">Create Your Profile</span>
        <ArrowRightIcon class="arrow-74" />
      </a>
    </div>
    <div class="group-75">
      <div class="flex-row-fbe">
        <div class="group-76"></div>
        <div class="star-77"></div>
        <div class="group-78">
          <ReferenceProfileCardStack
            design-element="mobile-profile-screen-stack"
            prefix="mobile-profile-screen"
            :screens="referenceIdentityScreens"
            variant="mobile"
          />
        </div>
      </div>
      <div class="star-7a"></div>
      <div class="group-7b"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { referenceIdentityScreens } from '@/pages/landing/model/reference-content';
import ReferenceProfileCardStack from '@/entities/identity/ui/ReferenceProfileCardStack.vue';
import ArrowRightIcon from '@/shared/ui/ArrowRightIcon.vue';
</script>
