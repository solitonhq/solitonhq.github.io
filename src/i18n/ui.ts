export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    'site.tagline': 'Tools shaped by a DevOps engineer’s perspective.',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.openSource': 'Open source',
    'nav.github': 'GitHub',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to content',
    'lang.switch': 'Türkçe',
    'lang.label': 'Switch language to Turkish',
    'footer.rights': 'Soliton. All rights reserved.',
    'footer.products': 'Products',
    'footer.company': 'Soliton',
    'footer.legal': 'Legal',
    'home.title': 'Soliton',
    'home.description': 'Soliton builds focused tools for engineers: Kubernetes, terminals, secrets and team knowledge.',
    'home.heroTitle': 'Fewer touchpoints. Faster engineers.',
    'home.heroLead': 'Soliton is an engineering philosophy: tools designed from a DevOps engineer’s point of view, to make the places where work meets software quicker and calmer.',
    'home.ctaProducts': 'Explore products',
    'home.ctaGithub': 'View on GitHub',
    'home.philosophyTitle': 'An engineer’s point of view',
    'home.philosophyLead': 'Soliton starts from the daily touchpoints of a DevOps engineer and removes the friction in them.',
    'home.principle1.title': 'Focused',
    'home.principle1.body': 'Each tool does one job well, instead of becoming a platform you have to learn.',
    'home.principle2.title': 'Fast',
    'home.principle2.body': 'Speed is a feature. Tools open instantly and stay out of the way.',
    'home.principle3.title': 'Respectful of your data',
    'home.principle3.body': 'No tracking, no surprises. Your data stays with you by default.',
    'home.productsTitle': 'Products',
    'home.productsLead': 'Four tools, one perspective.',
    'home.oss.title': 'Built in the open',
    'home.oss.body': 'Soliton Rudder is developed as open source under the Apache License 2.0. Follow the work on GitHub.',
    'products.title': 'Products',
    'products.description': 'Soliton Rudder, Term, Pass and Wiki: focused tools for Kubernetes, terminals, passwords and team knowledge.',
    'products.lead': 'Focused tools that share one perspective. Statuses are shown honestly: only what is marked in development is being built today.',
    'products.status': 'Status',
    'notfound.title': 'Page not found',
    'notfound.body': 'The page you are looking for does not exist or has moved.',
    'notfound.back': 'Back to home',
  },
  tr: {
    'site.tagline': 'Bir DevOps mühendisinin bakış açısıyla şekillenen araçlar.',
    'nav.products': 'Ürünler',
    'nav.about': 'Hakkında',
    'nav.openSource': 'Açık kaynak',
    'nav.github': 'GitHub',
    'nav.menu': 'Menü',
    'nav.skip': 'İçeriğe geç',
    'lang.switch': 'English',
    'lang.label': 'Dili İngilizce olarak değiştir',
    'footer.rights': 'Soliton. Tüm hakları saklıdır.',
    'footer.products': 'Ürünler',
    'footer.company': 'Soliton',
    'footer.legal': 'Yasal',
    'home.title': 'Soliton',
    'home.description': 'Soliton, mühendisler için odaklı araçlar geliştirir: Kubernetes, terminal, sırlar ve ekip bilgisi.',
    'home.heroTitle': 'Daha az temas noktası. Daha hızlı mühendisler.',
    'home.heroLead': 'Soliton bir mühendislik felsefesidir: işin yazılımla buluştuğu noktaları daha hızlı ve daha sakin hâle getirmek için bir DevOps mühendisinin gözünden tasarlanan araçlar.',
    'home.ctaProducts': 'Ürünleri keşfet',
    'home.ctaGithub': 'GitHub’da görüntüle',
    'home.philosophyTitle': 'Bir mühendisin bakış açısı',
    'home.philosophyLead': 'Soliton, bir DevOps mühendisinin günlük temas noktalarından yola çıkar ve oradaki sürtünmeyi azaltır.',
    'home.principle1.title': 'Odaklı',
    'home.principle1.body': 'Her araç tek bir işi iyi yapar; öğrenmeniz gereken bir platforma dönüşmez.',
    'home.principle2.title': 'Hızlı',
    'home.principle2.body': 'Hız bir özelliktir. Araçlar anında açılır ve yolunuzdan çekilir.',
    'home.principle3.title': 'Verinize saygılı',
    'home.principle3.body': 'İzleme yok, sürpriz yok. Verileriniz varsayılan olarak sizde kalır.',
    'home.productsTitle': 'Ürünler',
    'home.productsLead': 'Dört araç, tek bakış açısı.',
    'home.oss.title': 'Açıkta geliştirilir',
    'home.oss.body': 'Soliton Rudder, Apache License 2.0 altında açık kaynak olarak geliştirilir. Çalışmayı GitHub’da takip edin.',
    'products.title': 'Ürünler',
    'products.description': 'Soliton Rudder, Term, Pass ve Wiki: Kubernetes, terminal, parola ve ekip bilgisi için odaklı araçlar.',
    'products.lead': 'Tek bir bakış açısını paylaşan odaklı araçlar. Durumlar dürüstçe gösterilir: bugün yalnızca “geliştiriliyor” olarak işaretlenenler üzerinde çalışılıyor.',
    'products.status': 'Durum',
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
  return localePath(to, stripped);
}

export function localeFromPath(pathname: string): Locale {
  return /^\/tr(\/|$)/.test(pathname) ? 'tr' : 'en';
}
