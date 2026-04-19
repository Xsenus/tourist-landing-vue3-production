export type ReferenceBreakpoint = 'desktop' | 'tablet' | 'mobile';

export interface ReferenceLayerLayout {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width: string;
  rotate?: string;
  scale?: number;
  zIndex?: number;
}

export interface ReferenceHeroVisualConfig {
  width: string;
  height: string;
  backPhone: ReferenceLayerLayout;
  frontPhone: ReferenceLayerLayout;
  card: ReferenceLayerLayout;
  badges: {
    top: ReferenceLayerLayout;
    bottom: ReferenceLayerLayout;
  };
  scribble: {
    right: string;
    bottom: string;
    width: string;
    fontSize: string;
  };
}

export interface ReferencePerksCardConfig {
  padding: string;
  radius: string;
  borderWidth: string;
  avatarSize: string;
  nameSize: string;
  metaSize: string;
  galleryHeight: string;
  statValueSize: string;
  statLabelSize: string;
  topbarPadding: string;
}

export interface ReferenceIdentityScreenLayout extends ReferenceLayerLayout {
  zIndex: number;
}

export interface ReferenceIdentityStackLayout {
  left: ReferenceIdentityScreenLayout;
  main: ReferenceIdentityScreenLayout;
  right: ReferenceIdentityScreenLayout;
}

export interface ReferenceIdentityStackConfig {
  desktop: ReferenceIdentityStackLayout;
  tablet: ReferenceIdentityStackLayout;
  mobile: ReferenceIdentityStackLayout;
}

export interface ReferenceAvatarStackItem {
  name: string;
  image: string;
}

export interface ReferenceJourneyPreviewCardData {
  brand: string;
  badge: string;
  avatar: string;
  name: string;
  handle: string;
  summary: string;
  actions: [string, string, string];
  footerMap: string;
}

export interface TabletReferenceLayoutConfig {
  maxWidth: number;
  minPadding: number;
}
