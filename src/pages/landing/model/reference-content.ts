import {
  avatarCamila,
  avatarHero,
  avatarOlivia,
  referenceAlexAvatar,
  referenceAlexThumb1,
  referenceAlexThumb2,
  referenceAlexThumb3
} from '@/shared/assets/images';
import type {
  IdentityMainScreenContent,
  IdentitySideScreenContent,
  PerksProfileContent
} from '@/pages/landing/model/landing.types';

export const referencePerksProfile: PerksProfileContent = {
  url: 'tourist.com/Alex',
  member: 'MEMBER',
  avatar: referenceAlexAvatar,
  name: 'Alex Explorer',
  role: 'Traveler \u00B7 47 countries',
  stats: [
    { value: '34', label: 'Trips' },
    { value: '56', label: 'Countries' },
    { value: '1.2K', label: 'Cities' }
  ],
  thumbs: [
    { image: referenceAlexThumb1, label: 'Portrait' },
    { image: referenceAlexThumb2, label: 'Beach' },
    { image: referenceAlexThumb3, label: 'Profile' }
  ]
};

const leftReferenceScreen: IdentitySideScreenContent = {
  topLabel: 'Preview',
  brand: 'tourist',
  badge: 'PLUS',
  image: avatarOlivia,
  name: 'Olena Shevchenko',
  handle: '@olena',
  copy: "Adventure seeker on a quest for the world's best-kept secrets, local spots, stories, and unique stays.",
  prompt: 'Exchange contact',
  actions: ['Save contact', 'Call me', 'Email me'],
  socialHeading: 'Social links',
  socialLabel: 'Messenger',
  socialHandle: '@olena',
  tone: 'green'
};

const mainReferenceScreen: IdentityMainScreenContent = {
  time: '9:41',
  image: avatarCamila,
  name: 'Emily Johnson',
  handle: '@emily_johnson',
  prompt: 'Exchange contact',
  actions: ['Save contact', 'Call me', 'Email me'],
  socialHeading: 'Social links',
  socialLabel: 'Messenger',
  socialHandle: '@emily'
};

const rightReferenceScreen: IdentitySideScreenContent = {
  topLabel: 'Preview',
  brand: 'tourist',
  badge: 'PLUS',
  image: avatarHero,
  name: 'Olivia Johnson',
  handle: '@olivia_johnson',
  copy: 'Explorer eager to discover hidden gems around the globe. Follow along for travel tips and exclusive deals.',
  prompt: 'Exchange contact',
  actions: ['Save contact', 'Call me', 'Email me'],
  socialHeading: 'Social links',
  socialLabel: 'Messenger',
  socialHandle: '@olivia',
  tone: 'orange'
};

export const referenceIdentityScreens = {
  left: leftReferenceScreen,
  main: mainReferenceScreen,
  right: rightReferenceScreen
};
