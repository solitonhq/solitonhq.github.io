import type { Product } from './i18n/products';
import type { Locale } from './i18n/ui';
import { site } from './site';

const origin = 'https://solitonhq.github.io';
const ctx = 'https://schema.org';

export const organizationLd = () => ({
  '@context': ctx,
  '@type': 'Organization',
  name: site.name,
  url: `${origin}/`,
  logo: `${origin}/brand/soliton-logo-512.png`,
  sameAs: [site.githubOrg],
});

export const websiteLd = (locale: Locale) => ({
  '@context': ctx,
  '@type': 'WebSite',
  name: site.name,
  url: locale === 'tr' ? `${origin}/tr/` : `${origin}/`,
  inLanguage: locale,
});

/** Structured data for a product page. Incoming products carry no offer or download. */
export const softwareLd = (p: Product, locale: Locale, path: string) => {
  const c = p.copy[locale];
  return {
    '@context': ctx,
    '@type': 'SoftwareApplication',
    name: p.name,
    description: `${c.tagline} ${c.description}`,
    applicationCategory: 'DeveloperApplication',
    url: `${origin}${path}`,
    inLanguage: locale,
    publisher: { '@type': 'Organization', name: site.name, url: `${origin}/` },
    ...(p.seo?.os && { operatingSystem: p.seo.os }),
    ...(p.seo?.version && { softwareVersion: p.seo.version }),
    ...(p.seo?.license && { license: p.seo.license }),
    ...(p.seo?.downloadUrl && { downloadUrl: p.seo.downloadUrl }),
    ...(p.status !== 'incoming' && { offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }),
  };
};
