export interface NavigationItem {
  label: string;
  href: string;
}

export interface AvatarItem {
  name: string;
  image: string;
}

export interface SectionPoint {
  title: string;
  text: string;
}

export interface SocialProofContent {
  headline: string;
  subline: string;
  stars: string;
  avatars: AvatarItem[];
}

export interface HeroChip {
  label: string;
  active: boolean;
}

export interface HeroPromoCard {
  eyebrow: string;
  title: string;
  meta: string;
  price: string;
  discount: string;
  image: string;
}

export interface HeroMiniCard {
  title: string;
  meta: string;
  image: string;
}

export interface HeroNavItem {
  label: string;
  icon: string;
  active: boolean;
}

export interface HeroPhoneUiContent {
  time: string;
  brand: string;
  location: string;
  greeting: string;
  name: string;
  badge: string;
  search: string;
  chips: HeroChip[];
  promo: HeroPromoCard;
  sectionTitle: string;
  sectionAction: string;
  cards: HeroMiniCard[];
  nav: HeroNavItem[];
}

export interface HeroMemberCardContent {
  avatar: string;
  name: string;
  handle: string;
  memberSince: string;
  tags: string[];
}

export interface HeroInfoBadgeContent {
  title: string;
  copy: string;
  icon: 'shield' | 'gift';
}

export interface HeroSectionContent {
  eyebrow: string;
  titleTop: string;
  titleGreen: string;
  titleOrange: string;
  summary: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  note: string;
  background: string;
  backPhoneImage?: string;
  visualImage?: string;
  phoneFrame: string;
  phoneUi: HeroPhoneUiContent;
  card: HeroMemberCardContent;
  badges: HeroInfoBadgeContent[];
}

export interface DealCardContent {
  title: string;
  copy?: string;
  meta?: string;
  image: string;
  discount?: string;
  variant: 'feature' | 'ticket' | 'simple';
}

export interface DealsSectionContent {
  eyebrow: string;
  title: [string, string, string];
  copy: string;
  points: SectionPoint[];
  linkLabel: string;
  linkHref: string;
  cards: DealCardContent[];
  note: string;
}

export interface SectionStat {
  value: string;
  label: string;
}

export interface ThumbItem {
  image: string;
  label: string;
}

export interface PerksProfileContent {
  url: string;
  member: string;
  avatar: string;
  name: string;
  role: string;
  stats: SectionStat[];
  thumbs: ThumbItem[];
}

export interface SaveCardContent {
  title: string;
  copy: string;
}

export interface FriendsCardContent {
  avatars: AvatarItem[];
  copy: string;
}

export interface MemberCardContent {
  title: string;
  copy: string;
  brands: string[];
}

export interface PerksSectionContent {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  copy: string;
  features: string[];
  linkLabel: string;
  linkHref: string;
  aside: string;
  profile: PerksProfileContent;
  saveCard: SaveCardContent;
  friends: FriendsCardContent;
  memberCard: MemberCardContent;
}

export interface BookingBubbleContent {
  label: string;
  value: string;
  copy: string;
}

export interface BookingSectionContent {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  copy: string;
  linkLabel: string;
  linkHref: string;
  image: string;
  imageAlt: string;
  bubble: BookingBubbleContent;
}

export interface IdentityGuideContent {
  topLabel: string;
  brand: string;
  badge: string;
  image: string;
  name: string;
  handle: string;
  copy: string;
  prompt: string;
  actions: [string, string, string];
  socialHeading: string;
  socialLabel: string;
  socialHandle: string;
  tone: 'green' | 'orange';
}

export interface IdentitySideScreenContent extends IdentityGuideContent {}

export interface IdentityMainScreenContent {
  time: string;
  image: string;
  name: string;
  handle: string;
  prompt: string;
  actions: [string, string, string];
  socialHeading: string;
  socialLabel: string;
  socialHandle: string;
}

export interface IdentitySectionContent {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  script: string;
  copy: string;
  features: string[];
  buttonLabel: string;
  buttonHref: string;
  screens: {
    left: IdentitySideScreenContent;
    main: IdentityMainScreenContent;
    right: IdentitySideScreenContent;
  };
}

export interface JourneyBubbleContent {
  image: string;
  label: string;
  style: string;
}

export interface JourneyPinContent {
  title: string;
  copy: string;
}

export interface JourneyCountryContent {
  flag: 'de' | 'it' | 'jp' | 'us';
  name: string;
  cities: string;
  count: string;
}

export interface JourneyTravelerContent {
  title: string;
  copy: string;
  avatars: AvatarItem[];
}

export interface JourneySectionContent {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  copy: string;
  tasks: string[];
  mapImage: string;
  pin: JourneyPinContent;
  bubbles: JourneyBubbleContent[];
  note: string;
  countries: JourneyCountryContent[];
  buttonLabel: string;
  buttonHref: string;
  stats: SectionStat[];
  travelers: JourneyTravelerContent;
}
