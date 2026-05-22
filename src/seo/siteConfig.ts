export const SITE_URL = 'https://visitchina.au';
export const SITE_NAME = 'VisitChina.au';
export const SITE_LEGAL_NAME = 'Visit China';
export const SITE_DESCRIPTION =
  'Private China travel planning for Australians, including curated itineraries, destination guidance, and support for visa-free travel.';
export const DEFAULT_OG_IMAGE =
  'https://raw.githubusercontent.com/vincentluna-0507/VisitChinaImages/refs/heads/main/logo.png';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const BUSINESS_ENTITY = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}#organization`,
  name: SITE_NAME,
  alternateName: SITE_LEGAL_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: DEFAULT_OG_IMAGE,
  },
  email: 'sales@visitchina.au',
  telephone: '+61 2 9055 4216',
  identifier: 'ABN 43 694 026 616',
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sydney',
    addressRegion: 'NSW',
    addressCountry: 'AU',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Australia',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+61 2 9055 4216',
      email: 'sales@visitchina.au',
      areaServed: 'AU',
      availableLanguage: ['English'],
    },
  ],
};

export const WEBSITE_ENTITY = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: {
    '@id': `${SITE_URL}#organization`,
  },
  inLanguage: 'en-AU',
};

export const TRAVEL_AGENCY_ENTITY = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': `${SITE_URL}#travelagency`,
  name: SITE_NAME,
  alternateName: SITE_LEGAL_NAME,
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  logo: DEFAULT_OG_IMAGE,
  description: SITE_DESCRIPTION,
  email: 'sales@visitchina.au',
  telephone: '+61 2 9055 4216',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sydney',
    addressRegion: 'NSW',
    addressCountry: 'AU',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Australia',
    },
    {
      '@type': 'Country',
      name: 'China',
    },
  ],
  serviceType: [
    'Private China itineraries',
    'China travel planning for Australians',
    'China destination guidance',
    'Visa-free travel planning',
  ],
  parentOrganization: {
    '@id': `${SITE_URL}#organization`,
  },
};

export const HOME_FAQS: FaqItem[] = [
  {
    question: "Why can't I just travel China by myself (DIY)?",
    answer:
      "China's travel ecosystem is heavily digital-first, with trains, restaurants, and attractions often relying on local payment apps, local-language interfaces, and processes that can be difficult to navigate without support.",
  },
  {
    question: 'Is it safe for Australians?',
    answer:
      'China remains a safe destination for many tourists, and VisitChina.au supports travellers with Australia-based planning plus local on-the-ground coordination.',
  },
  {
    question: 'How does the 30-day visa-free entry work?',
    answer:
      'Australian passport holders can enter China for tourism, business, or family visits for up to 30 days without a pre-arranged visa under the current policy described on the site.',
  },
  {
    question: 'Can I use my Australian phone apps there?',
    answer:
      'Major Western apps may be inaccessible in mainland China, so travellers often need a VPN or roaming eSIM strategy to stay connected.',
  },
];
