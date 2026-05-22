import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, BUSINESS_ENTITY, TRAVEL_AGENCY_ENTITY, WEBSITE_ENTITY } from './siteConfig.ts';
import type { SeoRoute } from './routes.ts';

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

export interface HeadPayload {
  title: string;
  description: string;
  canonicalUrl: string;
  robots: string;
  tags: Array<{ selector: string; attributes: Record<string, string> }>;
}

export const absoluteUrl = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`;

export const buildHeadPayload = (route: SeoRoute): HeadPayload => {
  const canonicalUrl = absoluteUrl(route.path);
  const robots = route.noindex ? 'noindex, nofollow' : 'index, follow';

  return {
    title: route.title,
    description: route.description,
    canonicalUrl,
    robots,
    tags: [
      { selector: 'meta[name="description"]', attributes: { name: 'description', content: route.description } },
      { selector: 'meta[name="robots"]', attributes: { name: 'robots', content: robots } },
      { selector: 'meta[property="og:type"]', attributes: { property: 'og:type', content: 'website' } },
      { selector: 'meta[property="og:site_name"]', attributes: { property: 'og:site_name', content: SITE_NAME } },
      { selector: 'meta[property="og:title"]', attributes: { property: 'og:title', content: route.title } },
      { selector: 'meta[property="og:description"]', attributes: { property: 'og:description', content: route.description } },
      { selector: 'meta[property="og:url"]', attributes: { property: 'og:url', content: canonicalUrl } },
      { selector: 'meta[property="og:image"]', attributes: { property: 'og:image', content: DEFAULT_OG_IMAGE } },
      { selector: 'meta[property="og:image:alt"]', attributes: { property: 'og:image:alt', content: `${SITE_NAME} logo` } },
      { selector: 'meta[name="twitter:card"]', attributes: { name: 'twitter:card', content: 'summary_large_image' } },
      { selector: 'meta[name="twitter:title"]', attributes: { name: 'twitter:title', content: route.title } },
      { selector: 'meta[name="twitter:description"]', attributes: { name: 'twitter:description', content: route.description } },
      { selector: 'meta[name="twitter:image"]', attributes: { name: 'twitter:image', content: DEFAULT_OG_IMAGE } },
    ],
  };
};

export const buildStructuredData = (route: SeoRoute) => {
  const graph: object[] = [BUSINESS_ENTITY, WEBSITE_ENTITY, TRAVEL_AGENCY_ENTITY];

  if (route.breadcrumbs.length > 1) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: route.breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    });
  }

  if (route.faqItems?.length) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: route.faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  return graph;
};

export const renderHeadMarkup = (route: SeoRoute) => {
  const payload = buildHeadPayload(route);
  const metaMarkup = payload.tags
    .filter(({ selector }) => selector !== 'meta[name="description"]' && selector !== 'meta[name="robots"]')
    .map(({ attributes }) => {
      const attrs = Object.entries(attributes)
        .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
        .join(' ');
      return `<meta ${attrs}>`;
    })
    .join('\n    ');

  const schemaMarkup = buildStructuredData(route)
    .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .join('\n    ');

  return `    <title>${escapeHtml(payload.title)}</title>
    <meta name="description" content="${escapeHtml(payload.description)}">
    <meta name="robots" content="${escapeHtml(payload.robots)}">
    <link rel="canonical" href="${escapeHtml(payload.canonicalUrl)}">
    ${metaMarkup}
    ${schemaMarkup}`;
};
