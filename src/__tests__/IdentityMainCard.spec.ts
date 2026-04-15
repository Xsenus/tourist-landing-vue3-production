import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import { identitySectionContent } from '@/pages/landing/model/landing-content';
import IdentityMainCard from '@/entities/identity/ui/IdentityMainCard.vue';

describe('IdentityMainCard', () => {
  it('renders the live identity preview card', () => {
    const wrapper = mount(IdentityMainCard, {
      props: {
        profile: identitySectionContent.screens.main
      }
    });

    expect(wrapper.get('.identity-preview__hero-name').text()).toBe('Emily Johnson');
    expect(wrapper.findAll('.identity-preview__action--main')).toHaveLength(
      identitySectionContent.screens.main.actions.length
    );
    expect(wrapper.get('.identity-preview__link-copy span').text()).toBe('@emily');
  });
});
