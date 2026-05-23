import { DESTINATIONS, ITINERARIES, STYLE_DETAILS, TRAVEL_STYLES } from '../data.ts';
import type { Destination, TravelStyleDetail } from '../types.ts';
import { CHINA_TOURS_FROM_AU_FAQS, FAMILY_TOURS_FAQS, FIRST_TIME_CHINA_GUIDE_FAQS, HOME_FAQS, ITINERARIES_FAQS, PAYMENT_HELP_FAQS, PRIVATE_CHINA_TOURS_FAQS, VISA_GUIDE_FAQS, type BreadcrumbItem, type FaqItem, SITE_NAME } from './siteConfig.ts';

export interface SeoRoute {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
  includeInSitemap?: boolean;
  breadcrumbs: BreadcrumbItem[];
  faqItems?: FaqItem[];
}

export const getStyleRoutePath = (styleId: string) => (styleId === 'kids' ? '/styles/family' : `/styles/${styleId}`);

const route = (
  path: string,
  title: string,
  description: string,
  breadcrumbs: BreadcrumbItem[],
  options: Partial<Pick<SeoRoute, 'noindex' | 'includeInSitemap' | 'faqItems'>> = {},
): SeoRoute => ({
  path,
  title,
  description,
  breadcrumbs,
  includeInSitemap: true,
  ...options,
});

const baseCrumb = (name: string, path: string): BreadcrumbItem => ({ name, path });

export const STATIC_ROUTES: SeoRoute[] = [
  route(
    '/',
    `${SITE_NAME} | China Travel Planning for Australians`,
    'Private China travel planning for Australians, with curated itineraries, destination guidance, and support for visa-free travel.',
    [baseCrumb('Home', '/')],
    { faqItems: HOME_FAQS },
  ),
  route(
    '/itineraries',
    `China Itineraries for Australians | ${SITE_NAME}`,
    'Sample China itineraries for Australian travellers, including private, family-friendly and first-time China travel routes with flexible pacing and local support.',
    [baseCrumb('Home', '/'), baseCrumb('Itineraries', '/itineraries')],
    { faqItems: ITINERARIES_FAQS },
  ),
  route(
    '/destinations',
    `China Destinations Guide | ${SITE_NAME}`,
    'Explore key China destinations for Australian travellers, including city highlights, local context, and trip planning guidance.',
    [baseCrumb('Home', '/'), baseCrumb('Destinations', '/destinations')],
  ),
  route(
    '/styles',
    `China Travel Styles | ${SITE_NAME}`,
    'Compare China travel styles including culture, nature, family, food, and relaxed itineraries for Australian travellers.',
    [baseCrumb('Home', '/'), baseCrumb('Travel Styles', '/styles')],
  ),
  route(
    '/contact',
    `Contact VisitChina.au | China Trip Planning`,
    'Contact VisitChina.au for private China trip planning, itinerary guidance, and support for Australian travellers.',
    [baseCrumb('Home', '/'), baseCrumb('Contact', '/contact')],
  ),
  route(
    '/visa-guide',
    `China Visa-Free Travel Guide for Australians | ${SITE_NAME}`,
    'A practical guide to China visa-free travel for Australians, covering 30-day visa-free entry, travel planning notes, documents, payments and itinerary support.',
    [baseCrumb('Home', '/'), baseCrumb('Visa Guide', '/visa-guide')],
    { faqItems: VISA_GUIDE_FAQS },
  ),
  route(
    '/payment-help',
    `China Payment Apps Guide for Australians | ${SITE_NAME}`,
    'A practical guide to China payment apps for Australian travellers, covering Alipay, WeChat Pay, cards, cash, connectivity and trip preparation.',
    [baseCrumb('Home', '/'), baseCrumb('Payment Help', '/payment-help')],
    { faqItems: PAYMENT_HELP_FAQS },
  ),
  route(
    '/insurance',
    `China Travel Insurance Guide | ${SITE_NAME}`,
    'Review practical China travel insurance guidance for Australian travellers planning private itineraries.',
    [baseCrumb('Home', '/'), baseCrumb('Travel Insurance', '/insurance')],
  ),
  route(
    '/terms',
    `Terms of Service | ${SITE_NAME}`,
    'Read the VisitChina.au terms of service covering bookings, cancellations, and travel planning responsibilities.',
    [baseCrumb('Home', '/'), baseCrumb('Terms of Service', '/terms')],
  ),
  route(
    '/china-tours-from-australia',
    `China Tours from Australia | ${SITE_NAME}`,
    'Private China tours from Australia with customised itineraries, local guides, hotels, transfers, high-speed rail planning and support for Australian travellers.',
    [baseCrumb('Home', '/'), baseCrumb('China Tours from Australia', '/china-tours-from-australia')],
    { faqItems: CHINA_TOURS_FROM_AU_FAQS },
  ),
  route(
    '/private-china-tours',
    `Private China Tours | ${SITE_NAME}`,
    'Private China tours with customised itineraries, private guides, flexible pacing, transfers, hotels, high-speed rail planning and no forced shopping stops.',
    [baseCrumb('Home', '/'), baseCrumb('Private China Tours', '/private-china-tours')],
    { faqItems: PRIVATE_CHINA_TOURS_FAQS },
  ),
  route(
    '/first-time-china-travel-guide',
    `First-Time China Travel Guide for Australians | ${SITE_NAME}`,
    'A practical first-time China travel guide for Australians covering visa-free entry, payments, transport, apps, itinerary planning and local travel support.',
    [baseCrumb('Home', '/'), baseCrumb('First-Time China Travel Guide', '/first-time-china-travel-guide')],
    { faqItems: FIRST_TIME_CHINA_GUIDE_FAQS },
  ),
];

const destinationRoute = (destination: Destination): SeoRoute =>
  route(
    `/destinations/${destination.id}`,
    `${destination.name} Travel Guide | ${SITE_NAME}`,
    `${destination.name} travel guide for Australians, covering highlights, local context, activity level, and planning notes.`,
    [
      baseCrumb('Home', '/'),
      baseCrumb('Destinations', '/destinations'),
      baseCrumb(destination.name, `/destinations/${destination.id}`),
    ],
  );

const styleRoute = (style: TravelStyleDetail): SeoRoute =>
  route(
    getStyleRoutePath(style.id),
    `${style.name} China Travel Style | ${SITE_NAME}`,
    `${style.name} China travel style guide for Australians, including featured cities, experiences, and trip planning context.`,
    [
      baseCrumb('Home', '/'),
      baseCrumb('Travel Styles', '/styles'),
      baseCrumb(style.name, getStyleRoutePath(style.id)),
    ],
  );

const familyStyleRoute = (): SeoRoute =>
  route(
    '/styles/family',
    `China Family Tours | ${SITE_NAME}`,
    'Family-friendly China tours with customised itineraries, private guides, comfortable pacing, hotels, transfers and local support for Australian families.',
    [
      baseCrumb('Home', '/'),
      baseCrumb('Travel Styles', '/styles'),
      baseCrumb('China Family Tours', '/styles/family'),
    ],
    { faqItems: FAMILY_TOURS_FAQS },
  );

const checkoutRoute = (id: string, title: string): SeoRoute =>
  route(
    `/checkout/${id}`,
    `${title} Checkout | ${SITE_NAME}`,
    `Secure checkout for ${title} on VisitChina.au.`,
    [
      baseCrumb('Home', '/'),
      baseCrumb('Itineraries', '/itineraries'),
      baseCrumb('Checkout', `/checkout/${id}`),
    ],
    { noindex: true, includeInSitemap: false },
  );

export const DESTINATION_ROUTES = DESTINATIONS.map(destinationRoute);
export const STYLE_ROUTES = [
  ...TRAVEL_STYLES.filter((style) => style.id !== 'kids').map((style) => styleRoute(STYLE_DETAILS[style.id])),
  familyStyleRoute(),
];
export const CHECKOUT_ROUTES = ITINERARIES.map((trip) => checkoutRoute(trip.id, trip.title));

export const INDEXABLE_ROUTES: SeoRoute[] = [...STATIC_ROUTES, ...DESTINATION_ROUTES, ...STYLE_ROUTES];
export const ALL_ROUTES: SeoRoute[] = [...INDEXABLE_ROUTES, ...CHECKOUT_ROUTES];

const normalizePath = (path: string) => {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path.slice(0, -1) : path;
};

export const getSeoRoute = (path: string): SeoRoute => {
  const normalizedPath = normalizePath(path);
  return ALL_ROUTES.find((item) => normalizePath(item.path) === normalizedPath) ?? STATIC_ROUTES[0];
};
