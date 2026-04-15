import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { describe, expect, it } from 'vitest';

import { navigationItems } from '@/pages/landing/model/landing-content';
import SiteHeader from '@/widgets/site-header/ui/SiteHeader.vue';

describe('SiteHeader', () => {
  it('updates the burger accessibility state when the mobile menu is toggled', async () => {
    const wrapper = mount(SiteHeader, {
      props: {
        navItems: navigationItems
      }
    });

    expect(wrapper.get('.site-header__burger').attributes('aria-expanded')).toBe('false');

    await wrapper.get('.site-header__burger').trigger('click');
    await nextTick();
    expect(wrapper.get('.site-header__burger').attributes('aria-expanded')).toBe('true');
    expect(wrapper.find('#mobile-navigation').exists()).toBe(true);

    await wrapper.get('.site-header__burger').trigger('click');
    await nextTick();
    expect(wrapper.get('.site-header__burger').attributes('aria-expanded')).toBe('false');
  });
});
