import { useEffect } from 'react';
import { buildHeadPayload, buildStructuredData } from '../seo/meta';
import type { SeoRoute } from '../seo/routes';

interface SeoProps {
  route: SeoRoute;
}

const ensureHeadTag = (selector: string, tagName: 'meta' | 'link') => {
  const existing = document.head.querySelector(selector);
  if (existing) {
    return existing as HTMLMetaElement | HTMLLinkElement;
  }

  const tag = document.createElement(tagName);
  document.head.appendChild(tag);
  return tag;
};

const Seo = ({ route }: SeoProps) => {
  useEffect(() => {
    const payload = buildHeadPayload(route);
    document.title = payload.title;

    payload.tags.forEach(({ selector, attributes }) => {
      const tag = ensureHeadTag(selector, 'meta') as HTMLMetaElement;
      Object.entries(attributes).forEach(([key, value]) => {
        tag.setAttribute(key, value);
      });
    });

    const canonical = ensureHeadTag('link[rel="canonical"]', 'link') as HTMLLinkElement;
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', payload.canonicalUrl);

    document
      .querySelectorAll('script[data-seo-schema="true"]')
      .forEach((node) => node.parentNode?.removeChild(node));

    buildStructuredData(route).forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoSchema = 'true';
      script.dataset.schemaIndex = String(index);
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [route]);

  return null;
};

export default Seo;
