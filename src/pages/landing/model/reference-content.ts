import {
  avatarAlex,
  avatarCamila,
  avatarHero,
  avatarJonah,
  journeyMapFig,
  referenceAlexAvatar,
  referenceAlexThumb1,
  referenceAlexThumb2,
  referenceAlexThumb3,
  referenceIdentityLeft,
  referenceIdentityMain,
  referenceIdentityRight,
  referenceJourneyAvatar
} from '@/shared/assets/images';
import type {
  IdentityMainScreenContent,
  IdentitySideScreenContent,
  PerksProfileContent
} from '@/pages/landing/model/landing.types';
import type {
  ReferenceAvatarStackItem,
  ReferenceHeroVisualConfig,
  ReferenceIdentityStackConfig,
  ReferenceJourneyPreviewCardData,
  ReferencePerksCardConfig,
  TabletReferenceLayoutConfig
} from '@/pages/landing/model/reference.types';

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

export const referencePerksCardConfig: Record<'desktop' | 'tablet' | 'mobile', ReferencePerksCardConfig> = {
  desktop: {
    padding: '11px 11px 12px',
    radius: '21px',
    borderWidth: '5px',
    avatarSize: '100px',
    nameSize: '26px',
    metaSize: '12px',
    galleryHeight: '79px',
    statValueSize: '19px',
    statLabelSize: '12px',
    topbarPadding: '0 8px'
  },
  tablet: {
    padding: '11px',
    radius: '18px',
    borderWidth: '4px',
    avatarSize: '92px',
    nameSize: '24px',
    metaSize: '12px',
    galleryHeight: '68px',
    statValueSize: '18px',
    statLabelSize: '12px',
    topbarPadding: '0 8px'
  },
  mobile: {
    padding: '10px',
    radius: '18px',
    borderWidth: '4px',
    avatarSize: '88px',
    nameSize: '22px',
    metaSize: '12px',
    galleryHeight: '63px',
    statValueSize: '17px',
    statLabelSize: '12px',
    topbarPadding: '0 6px'
  }
};

const leftReferenceScreen: IdentitySideScreenContent = {
  topLabel: 'Preview',
  brand: 'tourist',
  badge: 'PLUS',
  image: referenceIdentityLeft,
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
  image: referenceIdentityMain,
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
  image: referenceIdentityRight,
  name: 'Olivia Johnson',
  handle: '@serhii',
  copy: 'Explorer eager to discover hidden gems around the globe. Follow along for travel tips, and exclusive deals!',
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

export const referenceIdentityStackConfig: ReferenceIdentityStackConfig = {
  desktop: {
    left: {
      top: '59px',
      left: '64px',
      width: '312px',
      rotate: '-7.8deg',
      scale: 0.74,
      zIndex: 1
    },
    main: {
      top: '4px',
      left: '159px',
      width: '334px',
      scale: 0.88,
      zIndex: 3
    },
    right: {
      top: '56px',
      right: '86px',
      width: '332px',
      rotate: '7.8deg',
      scale: 0.74,
      zIndex: 2
    }
  },
  tablet: {
    left: {
      top: '104px',
      left: '28px',
      width: '224px',
      rotate: '-7.4deg',
      scale: 0.9,
      zIndex: 1
    },
    main: {
      top: '0px',
      left: '166px',
      width: '304px',
      scale: 1.03,
      zIndex: 3
    },
    right: {
      top: '98px',
      right: '6px',
      width: '224px',
      rotate: '7.4deg',
      scale: 0.9,
      zIndex: 2
    }
  },
  mobile: {
    left: {
      top: '68px',
      left: '10px',
      width: '232px',
      rotate: '-7.6deg',
      scale: 0.48,
      zIndex: 1
    },
    main: {
      top: '0px',
      left: '76px',
      width: '304px',
      scale: 0.56,
      zIndex: 3
    },
    right: {
      top: '68px',
      right: '10px',
      width: '232px',
      rotate: '7.6deg',
      scale: 0.48,
      zIndex: 2
    }
  }
};

export const referenceHeroVisualConfig: Record<'desktop' | 'tablet' | 'mobile', ReferenceHeroVisualConfig> = {
  desktop: {
    width: '790px',
    height: '720px',
    backPhone: {
      top: '126px',
      left: '18px',
      width: '196px',
      rotate: '-12.8deg',
      zIndex: 1
    },
    frontPhone: {
      top: '22px',
      left: '176px',
      width: '302px',
      zIndex: 3
    },
    card: {
      top: '78px',
      left: '468px',
      width: '328px',
      rotate: '6.8deg',
      zIndex: 2
    },
    badges: {
      top: {
        top: '226px',
        left: '604px',
        width: '177px',
        zIndex: 4
      },
      bottom: {
        top: '314px',
        left: '561px',
        width: '170px',
        zIndex: 4
      }
    },
    scribble: {
      right: '-6px',
      bottom: '8px',
      width: '146px',
      fontSize: '20px'
    }
  },
  tablet: {
    width: '650px',
    height: '592px',
    backPhone: {
      top: '138px',
      left: '10px',
      width: '192px',
      rotate: '-13deg',
      zIndex: 1
    },
    frontPhone: {
      top: '14px',
      left: '200px',
      width: '316px',
      zIndex: 3
    },
    card: {
      top: '26px',
      right: '12px',
      width: '222px',
      rotate: '7deg',
      zIndex: 2
    },
    badges: {
      top: {
        top: '196px',
        right: '0px',
        width: '228px',
        zIndex: 4
      },
      bottom: {
        top: '338px',
        right: '28px',
        width: '220px',
        zIndex: 4
      }
    },
    scribble: {
      right: '12px',
      bottom: '-18px',
      width: '152px',
      fontSize: '20px'
    }
  },
  mobile: {
    width: '318px',
    height: '332px',
    backPhone: {
      top: '72px',
      left: '-6px',
      width: '104px',
      rotate: '-13deg',
      zIndex: 1
    },
    frontPhone: {
      top: '22px',
      left: '72px',
      width: '156px',
      zIndex: 3
    },
    card: {
      top: '16px',
      right: '-4px',
      width: '118px',
      rotate: '7deg',
      zIndex: 2
    },
    badges: {
      top: {
        top: '118px',
        right: '-2px',
        width: '132px',
        zIndex: 4
      },
      bottom: {
        top: '194px',
        right: '8px',
        width: '134px',
        zIndex: 4
      }
    },
    scribble: {
      right: '2px',
      bottom: '-18px',
      width: '114px',
      fontSize: '16px'
    }
  }
};

export const referenceJourneyPreviewCard: ReferenceJourneyPreviewCardData = {
  brand: 'tourist',
  badge: 'FREE',
  avatar: referenceJourneyAvatar,
  name: 'Alex Henderson',
  handle: '@alexplorer',
  summary: 'Explorer across continents. Mountain hiker, scuba lover. Currently based in Barcelona.',
  actions: ['Exchange contact', 'Save contact', 'Call me'],
  footerMap: journeyMapFig
};

export const referencePerksFriends: ReferenceAvatarStackItem[] = [
  { name: 'Alex', image: avatarAlex },
  { name: 'Emily', image: avatarCamila },
  { name: 'Jonah', image: avatarJonah }
];

export const referenceJourneyTravelers: ReferenceAvatarStackItem[] = [
  { name: 'Alex', image: avatarAlex },
  { name: 'Emily', image: avatarCamila },
  { name: 'Jonah', image: avatarHero }
];

export const tabletReferenceLayout: TabletReferenceLayoutConfig = {
  maxWidth: 1279,
  minPadding: 20
};
