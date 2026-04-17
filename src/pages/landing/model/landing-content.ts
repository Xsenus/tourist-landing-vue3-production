/**
 * Static content is centralized here to keep section components presentational
 * and to make future CMS or API integration an isolated change.
 */
import {
  avatarAlex,
  avatarHero,
  avatarJonah,
  avatarLuca,
  avatarMia,
  avatarOlivia,
  bookingImageFig,
  dealBeach,
  dealBeachFig,
  dealCove,
  dealCoveFig,
  dealFood,
  dealFoodFig,
  dealStreet,
  dealStreetFig,
  heroBackground,
  heroMapScreenFig,
  journeyMapFig,
  phoneFrame,
  referenceAlexAvatar,
  referenceAlexThumb1,
  referenceAlexThumb2,
  referenceAlexThumb3
} from '@/shared/assets/images';
import type {
  BookingSectionContent,
  DealsSectionContent,
  HeroSectionContent,
  IdentitySectionContent,
  JourneySectionContent,
  NavigationItem,
  PerksSectionContent,
  SocialProofContent
} from '@/pages/landing/model/landing.types';

export const navigationItems: NavigationItem[] = [
  { label: 'Explore', href: '#deals' },
  { label: 'Deals', href: '#deals' },
  { label: 'For Businesses', href: '#book' },
  { label: 'About', href: '#identity' },
  { label: 'Support', href: '#journey' }
];

export const heroSectionContent: HeroSectionContent = {
  eyebrow: 'THE FUTURE OF TRAVEL',
  titleTop: 'Travel better.',
  titleGreen: 'Save',
  titleOrange: 'more.',
  summary:
    'Exclusive deals from local businesses.\nNo middlemen. Just real connections\nand unforgettable experiences.',
  primaryLabel: 'Join Tourist for Free',
  primaryHref: '#deals',
  secondaryLabel: 'See deals',
  secondaryHref: '#deals',
  note: 'Your key to\nthe world',
  background: heroBackground,
  backPhoneImage: heroMapScreenFig,
  phoneFrame,
  phoneUi: {
    time: '9:41',
    brand: 'tourist',
    location: 'Barcelona',
    greeting: 'Good morning',
    name: 'Alex, where to next?',
    badge: 'VIP',
    search: 'Where do you want to go?',
    chips: [],
    promo: {
      eyebrow: 'Squat 17b',
      title: 'Cultural space, cozy meetups, networking, cocktail bar, and kitchen',
      meta: 'Peshekhivska, 17b',
      price: '',
      discount: 'Save up to 20%',
      image: dealStreetFig
    },
    sectionTitle: 'Find your next spot',
    sectionAction: 'Discover places that match your vibe',
    cards: [
      { title: 'Shops', meta: '35%', image: dealStreetFig },
      { title: 'Cafes', meta: '37%', image: dealFoodFig },
      { title: 'Restaurants', meta: '40%', image: dealFoodFig },
      { title: 'Places to Stay', meta: '20%', image: dealCoveFig },
      { title: 'Bars & Pubs', meta: '45%', image: dealFoodFig },
      { title: 'Attractions & Museums', meta: '60%', image: dealStreetFig },
      { title: 'Wellness & Beauty', meta: '20%', image: dealBeachFig },
      { title: 'Services & Essentials', meta: '45%', image: dealStreetFig },
      { title: 'More', meta: '60%', image: dealStreetFig }
    ],
    nav: [
      { label: 'Home', icon: 'home', active: false },
      { label: 'Discover', icon: 'discover', active: false },
      { label: 'Offers', icon: 'offers', active: true },
      { label: 'Favorites', icon: 'favorites', active: false },
      { label: 'Profile', icon: 'profile', active: false }
    ]
  },
  card: {
    avatar: avatarHero,
    name: 'Alexandra J.',
    handle: '@alexplorer',
    memberSince: '2026',
    tags: ['Verified', '47 countries']
  },
  badges: [
    { title: 'No fees.', copy: 'No commissions.', icon: 'shield' },
    { title: 'Unlock deals', copy: 'worldwide', icon: 'gift' }
  ]
};

export const socialProofContent: SocialProofContent = {
  headline: '20,000+ travelers',
  subline: 'already exploring',
  stars: '\u2605\u2605\u2605\u2605\u2605',
  avatars: [
    { name: 'Alex', image: referenceAlexAvatar },
    { name: 'Olivia', image: avatarOlivia },
    { name: 'Mia', image: avatarMia },
    { name: 'Luca', image: avatarLuca },
    { name: 'Jonah', image: avatarJonah }
  ]
};

export const dealsSectionContent: DealsSectionContent = {
  eyebrow: 'EXPLORE & SAVE',
  title: ['Handpicked', 'deals.', 'Local prices.'],
  copy:
    'Get up to 20% off on amazing stays, tours, restaurants, and more. Only with local businesses.',
  points: [
    { title: 'Better prices', text: 'Every time' },
    { title: 'Hidden gems', text: 'Only locals know' },
    { title: 'Unforgettable', text: 'Experiences' }
  ],
  linkLabel: 'See how it works',
  linkHref: '#book',
  cards: [
    {
      title: 'Beach escapes',
      copy: 'Member-only local pricing',
      image: dealBeachFig,
      discount: '-20%',
      variant: 'feature'
    },
    {
      title: 'Boutique Hotel',
      copy: 'from \u20AC89 / night',
      meta: '4.9 (128)',
      image: dealCoveFig,
      variant: 'ticket'
    },
    {
      title: 'City walks',
      image: dealStreetFig,
      variant: 'simple'
    },
    {
      title: 'Local dining',
      image: dealFoodFig,
      variant: 'simple'
    }
  ],
  note: "Deals you won't\nfind anywhere else"
};

export const perksSectionContent: PerksSectionContent = {
  eyebrow: 'YOUR TOURIST CARD',
  titleStart: 'Your journey. Your perks.',
  titleAccent: 'Your way.',
  copy:
    'Your digital travel profile. Share, connect, and get exclusive member perks everywhere you go.',
  features: [
    'Share your adventures',
    'Connect with travelers',
    'Unlock member-only deals',
    'Save on every trip'
  ],
  linkLabel: 'Get your free card',
  linkHref: '#identity',
  aside: 'More travel,\nless cost',
  profile: {
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
      { image: referenceAlexThumb1, label: 'Beach' },
      { image: referenceAlexThumb2, label: 'Surf' },
      { image: referenceAlexThumb3, label: 'Stories' }
    ]
  },
  saveCard: {
    title: 'Saved \u20AC1,240',
    copy: 'on stays & tours'
  },
  friends: {
    avatars: [
      { name: 'Alex', image: avatarAlex },
      { name: 'Olivia', image: avatarOlivia },
      { name: 'Jonah', image: avatarJonah }
    ],
    copy: '+1.2K friends'
  },
  memberCard: {
    title: 'Member perks',
    copy: 'Only for card holders',
    brands: ['Bold', 'DRIFT', 'Surf', '& more']
  }
};

export const bookingSectionContent: BookingSectionContent = {
  eyebrow: 'NO MIDDLEMEN',
  titleStart: 'Book. Connect.',
  titleAccent: 'Save more.',
  copy:
    'Contact businesses directly. No fees. No commissions. Just transparent prices and real relationships.',
  linkLabel: 'See how it works',
  linkHref: '#journey',
  image: bookingImageFig,
  imageAlt: 'Traveler paying directly to a host',
  bubble: {
    label: 'YOU save',
    value: '\u20AC23',
    copy: 'on this booking'
  }
};

export const identitySectionContent: IdentitySectionContent = {
  eyebrow: 'YOUR PROFILE',
  titleStart: 'Your journey.',
  titleAccent: 'Your identity.',
  script: 'Make it yours. Share your story.',
  copy:
    'Build a profile that feels like you. Add your style, links, and personality \u2014 and connect with travelers who vibe with your journey.',
  features: [
    'Custom profile & cover',
    'Add your social links',
    'Share your travel vibe',
    'Connect & chat easily'
  ],
  buttonLabel: 'Create Your Profile',
  buttonHref: '#journey',
  screens: {
    left: {
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
    },
    main: {
      time: '9:41',
      image: avatarMia,
      name: 'Emily Johnson',
      handle: '@emily_johnson',
      prompt: 'Exchange contact',
      actions: ['Save contact', 'Call me', 'Email me'],
      socialHeading: 'Social links',
      socialLabel: 'Messenger',
      socialHandle: '@emily'
    },
    right: {
      topLabel: 'Preview',
      brand: 'tourist',
      badge: 'PLUS',
      image: avatarHero,
      name: 'Olivia Johnson',
      handle: '@serhii',
      copy: 'Explorer eager to discover hidden gems around the globe. Follow along for travel tips, and exclusive deals!',
      prompt: 'Exchange contact',
      actions: ['Save contact', 'Call me', 'Email me'],
      socialHeading: 'Social links',
      socialLabel: 'Messenger',
      socialHandle: '@olivia',
      tone: 'orange'
    }
  }
};

export const journeySectionContent: JourneySectionContent = {
  eyebrow: 'YOUR JOURNEY',
  titleStart: 'See everywhere',
  titleAccent: "you've been",
  copy: 'Pin the countries and cities you have visited. Track your journey and inspire others.',
  tasks: [
    "Mark countries you've visited",
    'Add your favorite cities',
    'Watch your map grow'
  ],
  mapImage: journeyMapFig,
  pin: {
    title: 'New pin!',
    copy: 'Barcelona, Spain'
  },
  bubbles: [],
  note: 'Your world,\nyour story',
  countries: [
    {
      flag: 'de',
      name: 'Germany',
      cities: 'Berlin, Hamburg, Munich,\nCologne, and 5 more',
      count: '8 CITIES'
    },
    {
      flag: 'it',
      name: 'Italy',
      cities: 'Rome, Milan, Venice,\nFlorence, and 3 more',
      count: '8 CITIES'
    },
    {
      flag: 'jp',
      name: 'Japan',
      cities: 'Tokyo, Kyoto, Osaka,\nNara',
      count: '8 CITIES'
    },
    {
      flag: 'us',
      name: 'United States',
      cities: 'New York, Los Angeles,\nMiami, and 4 more',
      count: '8 CITIES'
    }
  ],
  buttonLabel: 'Show all countries',
  buttonHref: '#top',
  stats: [
    { value: '32', label: 'Countries' },
    { value: '96', label: 'Cities' }
  ],
  travelers: {
    title: '+1.2K',
    copy: 'Travelers are exploring the world\nand sharing their journey',
    avatars: [
      { name: 'Alex', image: avatarAlex },
      { name: 'Olivia', image: avatarOlivia },
      { name: 'Mia', image: avatarMia }
    ]
  }
};
