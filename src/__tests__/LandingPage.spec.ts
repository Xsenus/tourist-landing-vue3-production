import { flushPromises, mount } from '@vue/test-utils';
import { afterEach, describe, expect, it } from 'vitest';

import DesktopReferencePage from '@/widgets/desktop-reference/ui/DesktopReferencePage.vue';
import MobileReferencePage from '@/widgets/mobile-reference/ui/MobileReferencePage.vue';
import LandingPage from '@/pages/landing/ui/LandingPage.vue';

const setViewportWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    configurable: true,
    writable: true,
    value: width
  });
};

describe('LandingPage', () => {
  afterEach(() => {
    setViewportWidth(1024);
  });

  it('renders the full six-block landing composition', () => {
    setViewportWidth(1024);

    const wrapper = mount(LandingPage);

    expect(wrapper.find('#top').exists()).toBe(true);
    expect(wrapper.find('#deals').exists()).toBe(true);
    expect(wrapper.find('#card').exists()).toBe(true);
    expect(wrapper.find('#book').exists()).toBe(true);
    expect(wrapper.find('#identity').exists()).toBe(true);
    expect(wrapper.find('#journey').exists()).toBe(true);
    expect(wrapper.text()).toContain('Travel better.');
    expect(wrapper.text()).toContain('See everywhere');
  });

  it('renders the desktop figma-aligned branch with inspectable hooks', async () => {
    const wrapper = mount(DesktopReferencePage);
    await flushPromises();

    expect(wrapper.find('[data-figma-node="21:14"]').exists()).toBe(true);
    expect(wrapper.find('[data-design-element="desktop-hero-section"]').exists()).toBe(true);
    expect(wrapper.find('[data-design-element="desktop-card-stats"]').exists()).toBe(true);
    expect(wrapper.findAll('[data-design-element="desktop-country-item"]')).toHaveLength(4);
  });

  it('renders the mobile figma-aligned branch with inspectable hooks', async () => {
    const wrapper = mount(MobileReferencePage);
    await flushPromises();

    expect(wrapper.find('[data-figma-node="46:505"]').exists()).toBe(true);
    expect(wrapper.find('[data-design-element="mobile-header"]').exists()).toBe(true);
    expect(wrapper.find('[data-design-element="mobile-card-section"]').exists()).toBe(true);
    expect(wrapper.findAll('[data-design-element="mobile-country-item"]')).toHaveLength(4);
  });
});
