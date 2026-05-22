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

export const CHINA_TOURS_FROM_AU_FAQS: FaqItem[] = [
  {
    question: 'Do you arrange international flights from Australia?',
    answer:
      'Our focus is mainly on China-side travel arrangements such as itineraries, hotels, guides, transfers, rail planning, and on-the-ground support. International flights can be arranged separately.',
  },
  {
    question: 'Are your China tours private or group-based?',
    answer:
      'VisitChina.au focuses on private customised itineraries for Australian travellers, with private guides, drivers, and flexible day-to-day pacing.',
  },
  {
    question: 'Can you plan family-friendly China trips?',
    answer:
      'Yes. Family-friendly planning is part of the service, including pacing, transfers, hotel selection, and destination combinations that suit children and multi-generational travel.',
  },
  {
    question: 'What kind of support do travellers receive in China?',
    answer:
      'Travellers receive Australia-based planning before departure plus local support in China for practical coordination during the trip.',
  },
];

export const PRIVATE_CHINA_TOURS_FAQS: FaqItem[] = [
  {
    question: 'What makes a private China tour different from a standard group tour?',
    answer:
      'A private China tour is built around your own route, pace, and preferences, with private guides and transfers instead of a fixed large-group schedule.',
  },
  {
    question: 'Can the itinerary be adjusted for families or slower pacing?',
    answer:
      'Yes. Private itineraries can be planned around children, older travellers, multi-generational groups, or anyone who wants a more comfortable daily pace.',
  },
  {
    question: 'Do private China tours include shopping stops or factory visits?',
    answer:
      'No. VisitChina.au focuses on private touring without forced shopping stops, factory detours, or unnecessary time fillers.',
  },
  {
    question: 'What parts of the trip does VisitChina.au mainly arrange?',
    answer:
      'VisitChina.au mainly arranges China-side travel services such as itinerary planning, guides, transfers, hotels, rail coordination, and local support in China.',
  },
];

export const FIRST_TIME_CHINA_GUIDE_FAQS: FaqItem[] = [
  {
    question: 'Do Australians currently need a visa for a short trip to China?',
    answer:
      'Australian travellers should always check the latest official entry requirements before departure. The site provides practical guidance on current visa-free travel information, but official government sources should be the final reference.',
  },
  {
    question: 'Is China difficult for first-time visitors to navigate?',
    answer:
      'For first-time visitors, China can feel unfamiliar because payments, apps, transport systems, and local travel routines work differently from Australia. Good pre-trip planning usually makes the experience much smoother.',
  },
  {
    question: 'Do I need Alipay or local apps before travelling?',
    answer:
      'Setting up payment and connectivity tools before departure is strongly recommended. Services such as Alipay, local rail planning, and connectivity options can be confusing if left until arrival.',
  },
  {
    question: 'What does VisitChina.au mainly arrange for first-time travellers?',
    answer:
      'VisitChina.au mainly arranges China-side travel services such as itinerary planning, private guides, transfers, hotels, rail coordination, and local support in China.',
  },
];
