import { flushPromises, mount } from '@vue/test-utils';
import { afterEach, describe, expect, it } from 'vitest';

import DesktopReferencePage from '@/widgets/desktop-reference/ui/DesktopReferencePage.vue';
import DesktopReferenceViewport from '@/widgets/desktop-reference/ui/DesktopReferenceViewport.vue';
import MobileReferencePage from '@/widgets/mobile-reference/ui/MobileReferencePage.vue';
import LandingPage from '@/pages/landing/ui/LandingPage.vue';
import TabletReferencePage from '@/widgets/tablet-reference/ui/TabletReferencePage.vue';

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

  it('switches between desktop and mobile reference layouts by viewport width', async () => {
    setViewportWidth(1440);
    let wrapper = mount(LandingPage);
    await flushPromises();

    expect(wrapper.find('[data-layout-mode="desktop"]').exists()).toBe(true);
    wrapper.unmount();

    setViewportWidth(390);
    wrapper = mount(LandingPage);
    await flushPromises();

    expect(wrapper.find('[data-layout-mode="mobile"]').exists()).toBe(true);
  });

  it('renders the desktop figma-aligned branch with inspectable hooks', async () => {
    const wrapper = mount(DesktopReferencePage);
    await flushPromises();

    expect(wrapper.find('[data-figma-node="21:14"]').exists()).toBe(true);
    expect(wrapper.find('[data-design-element="desktop-hero-section"]').exists()).toBe(true);
    expect(wrapper.find('[data-design-element="desktop-card-stats"]').exists()).toBe(true);
    expect(wrapper.find('button[data-design-element="desktop-language-switch"]').exists()).toBe(true);
    expect(wrapper.find('[data-design-element="desktop-primary-cta"]').exists()).toBe(true);
    expect(wrapper.find('[data-design-element="desktop-deals-cta"]').exists()).toBe(true);
    expect(wrapper.findAll('[data-design-element="desktop-country-item"]')).toHaveLength(4);
    expect(wrapper.find('[data-country="Germany"]').exists()).toBe(true);
  });

  it('renders the tablet wrapper with the scaled desktop canvas', async () => {
    const wrapper = mount(TabletReferencePage);
    await flushPromises();

    expect(wrapper.find('[data-layout-mode="tablet"]').exists()).toBe(true);
    expect(wrapper.find('[data-design-element="tablet-page"]').exists()).toBe(true);
    expect(wrapper.find('[data-figma-node="21:14"]').exists()).toBe(true);
  });

  it('scales the desktop canvas to fit narrower desktop viewports', async () => {
    setViewportWidth(1440);
    const wrapper = mount(DesktopReferenceViewport);
    await flushPromises();

    expect(wrapper.find('[data-design-element="desktop-page-fit"]').exists()).toBe(true);
    expect(wrapper.find('[data-figma-node="21:14"]').exists()).toBe(true);
    expect(wrapper.find('[data-design-element="desktop-page-fit-canvas"]').attributes('style')).toContain(
      'transform: scale('
    );
    expect(wrapper.find('[data-design-element="desktop-page-fit-canvas"]').attributes('style')).not.toContain(
      'transform: scale(1)'
    );
  });

  it('renders the mobile figma-aligned branch with inspectable hooks', async () => {
    const wrapper = mount(MobileReferencePage);
    await flushPromises();

    expect(wrapper.find('[data-figma-node="46:505"]').exists()).toBe(true);
    expect(wrapper.find('[data-design-element="mobile-header"]').exists()).toBe(true);
    expect(wrapper.find('[data-design-element="mobile-card-section"]').exists()).toBe(true);
    expect(wrapper.find('button[data-design-element="mobile-language-switch"]').exists()).toBe(true);
    expect(wrapper.find('[data-design-element="mobile-primary-cta"]').exists()).toBe(true);
    expect(wrapper.find('[data-design-element="mobile-deals-cta"]').exists()).toBe(true);
    expect(wrapper.findAll('[data-design-element="mobile-country-item"]')).toHaveLength(4);
    expect(wrapper.find('[data-country="Japan"]').exists()).toBe(true);
  });
});
