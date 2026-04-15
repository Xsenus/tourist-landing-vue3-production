import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import AppButton from '@/shared/ui/AppButton.vue';

describe('AppButton', () => {
  it('renders anchor semantics and play icon variant', () => {
    const wrapper = mount(AppButton, {
      props: {
        label: 'See deals',
        href: '#deals',
        variant: 'secondary',
        icon: 'play'
      }
    });

    const link = wrapper.get('a');
    expect(link.attributes('href')).toBe('#deals');
    expect(link.classes()).toContain('app-button--secondary');
    expect(link.text()).toContain('See deals');
    expect(wrapper.get('.app-button__icon').classes()).toContain('app-button__icon--play');
  });

  it('omits icon markup when icon is disabled', () => {
    const wrapper = mount(AppButton, {
      props: {
        label: 'Create profile',
        icon: 'none'
      }
    });

    expect(wrapper.find('.app-button__icon').exists()).toBe(false);
  });
});
