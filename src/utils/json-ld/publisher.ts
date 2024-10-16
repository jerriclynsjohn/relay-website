import { SITE_DATA, TOP_NAVIGATION } from '@config';

export function publisher() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${TOP_NAVIGATION.landing}/#organization`,
    name: SITE_DATA.organization.name,
    description: SITE_DATA.organization.description,
    slogan: SITE_DATA.organization.slogan,
    url: TOP_NAVIGATION.landing,
    logo: {
      '@type': 'ImageObject',
      url: SITE_DATA.organization.logo,
      width: 512,
      height: 512
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: `mailto:${SITE_DATA.organization.contactPoint.email}`,
      contactType: 'Customer Support',
      availableLanguage: ['English'],
      areaServed: 'Worldwide'
    },
    sameAs: SITE_DATA.organization.sameAs,
    legalName: SITE_DATA.organization.legalName,
    foundingDate: SITE_DATA.organization.foundingDate,
    knowsLanguage: SITE_DATA.organization.knowsLanguage,
    knowsAbout: SITE_DATA.organization.knowsAbout
  };
}
