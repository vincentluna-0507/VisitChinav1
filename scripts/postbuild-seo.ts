import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderHeadMarkup, absoluteUrl } from '../src/seo/meta.ts';
import { ALL_ROUTES, INDEXABLE_ROUTES, getSeoRoute } from '../src/seo/routes.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const homeRoute = getSeoRoute('/');

const HEAD_START = '<!-- SEO_HEAD_START -->';
const HEAD_END = '<!-- SEO_HEAD_END -->';
const LASTMOD = '2026-05-21';
const REDIRECTS = [{ from: '/styles/kids', to: '/styles/family' }];

const PRIORITY_BY_PATH: Record<string, string> = {
  '/': '1.0',
  '/itineraries': '0.8',
  '/destinations': '0.8',
  '/styles': '0.7',
  '/contact': '0.6',
  '/visa-guide': '0.9',
  '/payment-help': '0.7',
  '/insurance': '0.7',
  '/terms': '0.4',
};

const CHANGEFREQ_BY_PATH: Record<string, string> = {
  '/': 'weekly',
  '/itineraries': 'weekly',
  '/destinations': 'weekly',
  '/styles': 'weekly',
  '/contact': 'monthly',
  '/visa-guide': 'monthly',
  '/payment-help': 'monthly',
  '/insurance': 'monthly',
  '/terms': 'yearly',
};

const assertBuiltHtml = (html: string) => {
  if (html.includes('/src/main.tsx') || html.includes('./src/main.tsx') || html.includes('src/main.tsx')) {
    throw new Error(
      'postbuild-seo: dist/index.html still references the source app entry (src/main.tsx). Run this script only after a successful Vite build.',
    );
  }

  if (!html.includes('/assets/') && !html.includes('assets/')) {
    throw new Error(
      'postbuild-seo: dist/index.html does not look like a Vite production build because no built assets were found.',
    );
  }
};

const replaceSeoHead = (html: string, routePath: string) => {
  const route = getSeoRoute(routePath);
  const start = html.indexOf(HEAD_START);
  const end = html.indexOf(HEAD_END);

  if (start === -1 || end === -1 || end <= start) {
    throw new Error('Unable to locate SEO head markers in the HTML template.');
  }

  const before = html.slice(0, start + HEAD_START.length);
  const after = html.slice(end);
  return `${before}\n${renderHeadMarkup(route)}\n    ${after}`;
};

const ensureRouteHtml = async (html: string, routePath: string) => {
  const routeDir = path.join(distDir, routePath.slice(1));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, 'index.html'), replaceSeoHead(html, routePath), 'utf8');
};

const buildSitemap = () => {
  const xml = INDEXABLE_ROUTES.map((route) => {
    const priority =
      PRIORITY_BY_PATH[route.path] ??
      (route.path.startsWith('/destinations/') ? '0.8' : route.path.startsWith('/styles/') ? '0.7' : '0.7');
    const changefreq =
      CHANGEFREQ_BY_PATH[route.path] ??
      (route.path.startsWith('/destinations/') || route.path.startsWith('/styles/') ? 'monthly' : 'monthly');
    return `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xml}
</urlset>
`;
};

const buildRobots = () => `User-agent: *
Allow: /

Sitemap: ${absoluteUrl('/sitemap.xml')}
`;

const run = async () => {
  const templatePath = path.join(distDir, 'index.html');
  const templateHtml = await readFile(templatePath, 'utf8');
  assertBuiltHtml(templateHtml);
  const homeHtml = replaceSeoHead(templateHtml, homeRoute.path);

  await writeFile(templatePath, homeHtml, 'utf8');

  for (const route of ALL_ROUTES) {
    if (route.path === '/') {
      continue;
    }
    await ensureRouteHtml(templateHtml, route.path);
  }

  for (const redirect of REDIRECTS) {
    if (redirect.from !== '/') {
      await rm(path.join(distDir, redirect.from.slice(1)), { recursive: true, force: true });
    }
  }

  await writeFile(path.join(distDir, 'sitemap.xml'), buildSitemap(), 'utf8');
  await writeFile(path.join(distDir, 'robots.txt'), buildRobots(), 'utf8');
  await writeFile(path.join(distDir, '404.html'), homeHtml, 'utf8');
  await writeFile(
    path.join(distDir, '_redirects'),
    `${REDIRECTS.map((item) => `${item.from} ${item.to} 301`).join('\n')}\n/* /index.html 200\n`,
    'utf8',
  );
};

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
