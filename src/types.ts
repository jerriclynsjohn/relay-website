import type socialIcons from '@assets/socialIcons';

export type Site = {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives?: boolean;
  editPost?: {
    url?: URL['href'];
    text?: string;
    appendFilePath?: boolean;
  };
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type Metadata = {
  organization: Organization;
  product: Product;
  feature?: {
    headline: string;
    description: string;
    image: string;
    url: string;
    features?: Feature[];
  };
  blog: {
    headline: string;
    description: string;
    image: string;
    url: string;
    blogs?: Blog[];
  };
  changelog: {
    headline: string;
    description: string;
    image: string;
    url: string;
    changelogs?: Changelog[];
  };
};

export type Organization = {
  name: string;
  description: string;
  contactPoint: ContactPoint;
  url: string;
  logo: string;
  slogan: string;
  sameAs: string[];
  legalName: string;
  foundingDate: string;
  knowsLanguage: string[];
  knowsAbout: string[];
};

export type ContactPoint = {
  email: string;
};

export type Product = {
  name: string;
  description: string;
  image: string;
  url: string;
  price?: string;
  priceCurrency?: string;
};

export type Feature = {
  name: string;
  description: string;
  image: string;
  url: string;
};

export type Blog = {
  headline: string;
  description: string;
  author: Author;
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
};

export type Author = {
  name: string;
  jobTitle: string;
  url: string;
};

export type Changelog = {
  name: string;
  description: string;
  image: string;
  url: string;
  author: Author[];
  datePublished: string;
  dateModified: string;
};
