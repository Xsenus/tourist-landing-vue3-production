import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import { heroSectionContent } from '@/pages/landing/model/landing-content';
import HeroPhoneUi from '@/entities/hero/ui/HeroPhoneUi.vue';

describe('HeroPhoneUi', () => {
  it('renders the live phone UI content', () => {
    const wrapper = mount(HeroPhoneUi, {
      props: {
        screen: heroSectionContent.phoneUi
      }
    });

    expect(wrapper.get('.phone-ui__brand strong').text()).toBe('tourist');
    expect(wrapper.get('.phone-ui__location').text()).toContain('Barcelona');
    expect(wrapper.findAll('.phone-ui__tile')).toHaveLength(heroSectionContent.phoneUi.cards.length);
    expect(wrapper.findAll('.phone-ui__nav-item')).toHaveLength(heroSectionContent.phoneUi.nav.length);
  });
});
