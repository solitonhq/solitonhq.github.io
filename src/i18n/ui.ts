export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    'site.tagline': 'Tools shaped by a DevOps engineer’s perspective.',
    'nav.products': 'Products',
    'nav.tools': 'Tools',
    'nav.approach': 'Approach',
    'nav.brand': 'Brand',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.openSource': 'Open source',
    'nav.github': 'GitHub',
    'nav.notify': 'Get notified',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to content',
    'lang.switch': 'Türkçe',
    'footer.rights': 'Soliton. All rights reserved.',
    'footer.products': 'Products',
    'footer.company': 'Soliton',
    'footer.legal': 'Legal',
    'home.title': 'Soliton',
    'home.description': 'Soliton builds focused tools for engineers: Kubernetes, terminals, secrets and team knowledge.',
    'home.heroTitle': 'Fewer touchpoints. Faster engineers.',
    'products.title': 'Products',
    'products.description': 'Soliton Rudder, Term, Pass and Wiki: focused tools for Kubernetes, terminals, passwords and team knowledge.',
    'products.lead': 'Focused tools that share one perspective. Statuses are shown honestly: Soliton Rudder has a public pre-release today, and the others are on the way.',
    'products.status': 'Status',
    'products.learnMore': 'Learn more about {name}',
    'notfound.title': 'Page not found',
    'notfound.body': 'The page you are looking for does not exist or has moved.',
    'notfound.back': 'Back to home',
  },
  tr: {
    'site.tagline': 'Bir DevOps mühendisinin bakış açısıyla şekillenen araçlar.',
    'nav.products': 'Ürünler',
    'nav.tools': 'Araçlar',
    'nav.approach': 'Yaklaşım',
    'nav.brand': 'Marka',
    'nav.about': 'Hakkında',
    'nav.contact': 'İletişim',
    'nav.openSource': 'Açık kaynak',
    'nav.github': 'GitHub',
    'nav.notify': 'Haberdar ol',
    'nav.menu': 'Menü',
    'nav.skip': 'İçeriğe geç',
    'lang.switch': 'English',
    'footer.rights': 'Soliton. Tüm hakları saklıdır.',
    'footer.products': 'Ürünler',
    'footer.company': 'Soliton',
    'footer.legal': 'Yasal',
    'home.title': 'Soliton',
    'home.description': 'Soliton, mühendisler için odaklı araçlar geliştirir: Kubernetes, terminal, sırlar ve ekip bilgisi.',
    'home.heroTitle': 'Daha az temas noktası. Daha hızlı mühendisler.',
    'products.title': 'Ürünler',
    'products.description': 'Soliton Rudder, Term, Pass ve Wiki: Kubernetes, terminal, parola ve ekip bilgisi için odaklı araçlar.',
    'products.lead': 'Tek bir bakış açısını paylaşan odaklı araçlar. Durumlar dürüstçe gösterilir: bugün Soliton Rudder’ın herkese açık bir ön sürümü var, diğerleri yolda.',
    'products.status': 'Durum',
    'products.learnMore': '{name} hakkında daha fazla bilgi',
    'notfound.title': 'Sayfa bulunamadı',
    'notfound.body': 'Aradığınız sayfa mevcut değil ya da taşınmış.',
    'notfound.back': 'Ana sayfaya dön',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];

export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key];
}

/** Prefix a site-relative path with the locale ("/" -> "/tr/"). */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === defaultLocale ? clean : `/${locale}${clean}`;
}

/** Path of the same page in another locale. */
export function switchLocalePath(current: string, to: Locale): string {
  const stripped = current.replace(/^\/tr(?=\/|$)/, '') || '/';
  if (stripped === '/404/') return localePath(to, '/');
  return localePath(to, stripped);
}

export function localeFromPath(pathname: string): Locale {
  return /^\/tr(\/|$)/.test(pathname) ? 'tr' : 'en';
}
