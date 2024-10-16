import { SITE_DATA, TOP_NAVIGATION } from '@config';

export function website() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${TOP_NAVIGATION.landing}/#website`,
    url: TOP_NAVIGATION.landing,
    name: SITE_DATA.organization.name,
    publisher: {
      '@id': `${TOP_NAVIGATION.landing}/#organization`
    }
  };
}
