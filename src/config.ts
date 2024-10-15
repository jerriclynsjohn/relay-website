import type { Metadata, Site, SocialObjects } from './types';

export const LOCALE = {
  lang: 'en', // html lang code. Set this empty and default will be "en"
  langTag: ['en-EN'] // BCP 47 Language Tags. Set this empty [] to use the environment default
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

export const SITE_DATA: Metadata = {
  organization: {
    name: 'Relay',
    description:
      'At Relay, we are committed to creating exceptional and immersive user experiences when interacting with AI.',
    contactPoint: {
      email: 'hello@relay.now'
    },
    url: 'https://www.relay.now/about',
    logo: 'https://www.relay.now/logo/relay/logo.png',
    slogan: 'Building seamless experiences with AI',
    sameAs: ['https://www.relay.now/', ...SOCIAL_MEDIA.map((sm) => sm.url)],
    legalName: 'Relay Intelligence, Inc.',
    foundingDate: '2024-10-01',
    knowsLanguage: ['en'],
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
    url: 'https://www.relay.now/'
  },
  blog: {
    headline: 'Blog - Updates from Relay team',
    description:
      'Stay informed with our latest insights and updates on AI, user experience design, and the future of human-AI interaction. Our blog covers a wide range of topics including AI agent development, natural language processing, machine learning advancements, and practical applications of AI in various industries.',
    image: 'https://www.relay.now/images/social/relay-blog-og.jpg',
    url: 'https://www.relay.now/blog'
  },
  changelog: {
    headline: 'Changelog - Relay',
    description:
      'Stay up-to-date with our latest product updates, feature releases, and improvements. Our changelog provides a detailed record of all modifications and enhancements made to Relay, helping you track our progress and understand new capabilities as they become available.',
    image: 'https://www.relay.now/images/social/relay-changelog-og.jpg',
    url: 'https://www.relay.now/changelog'
  }
};

export const SITE: Site = {
  website: 'https://www.relay.now/', // replace this with your deployed domain
  author: 'Jerric Lyns John',
  profile: 'https://www.jerric.xyz/',
  desc: 'A platform for creating your own AI Agents',
  title: 'Relay',
  ogImage: 'images/relay-og.jpg',
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: 'https://github.com/jerriclynsjohn/relay-website/edit/main/src/content/blog',
    text: 'Suggest Changes',
    appendFilePath: true
  }
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46
};

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'https://github.com/relaynow',
    linkTitle: ` ${SITE.title} on Github`,
    active: true
  },
  {
    name: 'Facebook',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE.title} on Facebook`,
    active: true
  },
  {
    name: 'Instagram',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE.title} on Instagram`,
    active: true
  },
  {
    name: 'LinkedIn',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true
  },
  {
    name: 'Mail',
    href: 'mailto:hello@relay.now',
    linkTitle: `Send an email to ${SITE.title}`,
    active: false
  },
  {
    name: 'Twitter',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE.title} on Twitter`,
    active: false
  },
  {
    name: 'Twitch',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE.title} on Twitch`,
    active: false
  },
  {
    name: 'YouTube',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE.title} on YouTube`,
    active: false
  },
  {
    name: 'WhatsApp',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false
  },
  {
    name: 'Snapchat',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE.title} on Snapchat`,
    active: false
  },
  {
    name: 'Pinterest',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE.title} on Pinterest`,
    active: false
  },
  {
    name: 'Discord',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE.title} on Discord`,
    active: false
  },
  {
    name: 'Reddit',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE.title} on Reddit`,
    active: false
  },
  {
    name: 'Mastodon',
    href: 'https://github.com/relaynow',
    linkTitle: `${SITE.title} on Mastodon`,
    active: false
  }
];
