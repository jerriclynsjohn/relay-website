import type { Metadata, SocialObjects } from '@types';

export const BLOG_PER_INDEX = 10;
export const CHANGELOG_PER_INDEX = 2;
export const SCHEDULED_BLOG_MARGIN = 15 * 60 * 1000; // 15 minutes
export const SCHEDULED_CHANGELOG_MARGIN = 15 * 60 * 1000; // 15 minutes

export const LOCALE = {
  lang: 'en', // html lang code. Set this empty and default will be "en"
  langTag: 'en-US' // BCP 47 Language Tags. Set this empty [] to use the environment default
};

export const SOCIAL_MEDIA = [
  {
    name: 'GITHUB',
    label: 'Relay on Github',
    url: 'https://github.com/relaynow'
  },
  {
    name: 'FACEBOOK',
    label: 'Relay on Facebook',
    url: 'https://www.facebook.com/relaynow'
  },
  {
    name: 'INSTAGRAM',
    label: 'Relay on Instagram',
    url: 'https://www.instagram.com/relaynow'
  },
  {
    name: 'LINKEDIN',
    label: 'Relay on LinkedIn',
    url: 'https://www.linkedin.com/company/relaynow'
  },
  {
    name: 'X',
    label: 'Relay on X',
    url: 'https://x.com/relaynow'
  }
];

export const VERIFICATION_TOKENS = {
  google: 'google-site-verification=1234567890'
};

export const TOP_NAVIGATION = {
  landing: 'https://www.relay.now',
  blog: 'https://www.relay.now/blog',
  changelog: 'https://www.relay.now/changelog',
  privacy: 'https://www.relay.now/legal/privacy',
  terms: 'https://www.relay.now/legal/terms',
  about: 'https://www.relay.now/about',
  // TODO: Add these
  contact: 'https://www.relay.now/contact',
  support: 'https://www.relay.now/support',
  pricing: 'https://www.relay.now/pricing',
  documentation: 'https://www.relay.now/docs'
};

export const SITE_DATA: Metadata = {
  organization: {
    name: 'Relay',
    description:
      'At Relay, we are committed to creating exceptional and immersive user experiences when interacting with AI.',
    contactPoint: {
      email: 'hello@relay.now'
    },
    url: TOP_NAVIGATION.about,
    logo: 'https://www.relay.now/logo/relay/logo.png',
    slogan: 'Building seamless experiences with AI',
    sameAs: [TOP_NAVIGATION.landing, ...SOCIAL_MEDIA.map((sm) => sm.url)],
    legalName: 'Relay Intelligence, Inc.',
    foundingDate: '2024-10-01',
    knowsLanguage: [LOCALE.lang],
    knowsAbout: [
      'https://www.wikidata.org/wiki/Q11660', // Artificial Intelligence
      'https://www.wikidata.org/wiki/Q1142726' // Intelligent Agent
    ]
  },
  product: {
    name: 'Relay',
    description:
      'At Relay, we want to advance the experience of interacting with AI Agents.',
    image: 'https://www.relay.now/images/social/relay-og.jpg',
    url: TOP_NAVIGATION.landing
  },
  blog: {
    headline: 'Blog - Updates from Relay team',
    description:
      'Stay informed with our latest insights and updates on AI, user experience design, and the future of human-AI interaction. Our blog covers a wide range of topics including AI agent development, natural language processing, machine learning advancements, and practical applications of AI in various industries.',
    image: 'https://www.relay.now/images/social/relay-blog-og.jpg',
    url: TOP_NAVIGATION.blog
  },
  changelog: {
    headline: 'Changelog - Relay',
    description:
      'Stay up-to-date with our latest product updates, feature releases, and improvements. Our changelog provides a detailed record of all modifications and enhancements made to Relay, helping you track our progress and understand new capabilities as they become available.',
    image: 'https://www.relay.now/images/social/relay-changelog-og.jpg',
    url: TOP_NAVIGATION.changelog
  }
};

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'https://github.com/relaynow',
    linkTitle: ` ${SITE_DATA.organization.name} on Github`,
    active: true
  },
  {
    name: 'Facebook',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE_DATA.organization.name} on Facebook`,
    active: true
  },
  {
    name: 'Instagram',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE_DATA.organization.name} on Instagram`,
    active: true
  },
  {
    name: 'LinkedIn',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE_DATA.organization.name} on LinkedIn`,
    active: true
  },
  {
    name: 'Mail',
    href: 'mailto:hello@relay.now',
    linkTitle: `Send an email to ${SITE_DATA.organization.name}`,
    active: false
  },
  {
    name: 'Twitter',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE_DATA.organization.name} on Twitter`,
    active: false
  },
  {
    name: 'Twitch',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE_DATA.organization.name} on Twitch`,
    active: false
  },
  {
    name: 'YouTube',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE_DATA.organization.name} on YouTube`,
    active: false
  },
  {
    name: 'WhatsApp',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE_DATA.organization.name} on WhatsApp`,
    active: false
  },
  {
    name: 'Snapchat',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE_DATA.organization.name} on Snapchat`,
    active: false
  },
  {
    name: 'Pinterest',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE_DATA.organization.name} on Pinterest`,
    active: false
  },
  {
    name: 'Discord',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE_DATA.organization.name} on Discord`,
    active: false
  },
  {
    name: 'Reddit',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE_DATA.organization.name} on Reddit`,
    active: false
  },
  {
    name: 'Mastodon',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE_DATA.organization.name} on Mastodon`,
    active: false
  }
];
