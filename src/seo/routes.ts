import { DESTINATIONS, ITINERARIES, STYLE_DETAILS, TRAVEL_STYLES } from '../data.ts';
import type { Destination, TravelStyleDetail } from '../types.ts';
import { HOME_FAQS, type BreadcrumbItem, type FaqItem, SITE_NAME } from './siteConfig.ts';

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
    'Browse sample China itineraries designed for Australian travellers, with private planning and flexible route ideas.',
    [baseCrumb('Home', '/'), baseCrumb('Itineraries', '/itineraries')],
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
    `China 30-Day Visa-Free Guide | ${SITE_NAME}`,
    'Read the China 30-day visa-free guide for Australian passport holders, including entry basics and travel preparation notes.',
    [baseCrumb('Home', '/'), baseCrumb('Visa Guide', '/visa-guide')],
  ),
  route(
    '/payment-help',
    `China Payment Apps Help | ${SITE_NAME}`,
    'Learn the basics of Alipay and WeChat Pay setup for Australian travellers visiting China.',
    [baseCrumb('Home', '/'), baseCrumb('Payment Help', '/payment-help')],
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
    `Family China Travel Style | ${SITE_NAME}`,
    'Family China travel style guide for Australians, covering child-friendly cities, comfortable pacing, and family-suitable experiences.',
    [
      baseCrumb('Home', '/'),
      baseCrumb('Travel Styles', '/styles'),
      baseCrumb('Family Travel', '/styles/family'),
    ],
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
