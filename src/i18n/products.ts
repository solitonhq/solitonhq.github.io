import type { Locale } from './ui';

export type ProductStatus = 'development' | 'planned';

export interface Product {
  slug: 'rudder' | 'term' | 'pass' | 'wiki';
  name: string;
  status: ProductStatus;
  copy: Record<Locale, { tagline: string; description: string; points: string[] }>;
}

export const statusLabel: Record<Locale, Record<ProductStatus, string>> = {
  en: { development: 'In development', planned: 'Planned' },
  tr: { development: 'Geliştiriliyor', planned: 'Planlanıyor' },
};

export const products: Product[] = [
  {
    slug: 'rudder',
    name: 'Soliton Rudder',
    status: 'development',
    copy: {
      en: {
        tagline: 'Kubernetes, steered with confidence.',
        description: 'A fast desktop IDE for Kubernetes: browse and manage clusters, troubleshoot faster, and know the state of your cluster before it becomes an incident.',
        points: ['Cluster health checks and feasibility reports', 'Faster troubleshooting across workloads and networking', 'Cost analysis, read-only by default, data stays local'],
      },
      tr: {
        tagline: 'Kubernetes, güvenle yönlendirilir.',
        description: 'Kubernetes için hızlı bir masaüstü IDE: cluster’ları gezin ve yönetin, sorunları daha hızlı çözün, cluster’ın durumunu olay çıkmadan önce bilin.',
        points: ['Cluster sağlık kontrolleri ve uygunluk raporları', 'İş yükleri ve ağ genelinde daha hızlı sorun giderme', 'Maliyet analizi, varsayılan olarak salt okunur, veriler yerelde kalır'],
      },
    },
  },
  {
    slug: 'term',
    name: 'Soliton Term',
    status: 'planned',
    copy: {
      en: {
        tagline: 'SSH and terminal, organised.',
        description: 'An SSH manager and local terminal built around how engineers actually work.',
        points: ['Snippets and a secure vault', 'Alias injection for every host', 'Fast, keyboard-first workflow'],
      },
      tr: {
        tagline: 'SSH ve terminal, düzenli.',
        description: 'Mühendislerin gerçekte nasıl çalıştığı düşünülerek tasarlanmış bir SSH yöneticisi ve yerel terminal.',
        points: ['Snippet’ler ve güvenli kasa', 'Her sunucu için alias enjeksiyonu', 'Hızlı, klavye odaklı akış'],
      },
    },
  },
  {
    slug: 'pass',
    name: 'Soliton Pass',
    status: 'planned',
    copy: {
      en: {
        tagline: 'Passwords for people and teams.',
        description: 'A fast, modern password manager for personal and enterprise use, with a web app and a Chrome extension.',
        points: ['Personal and enterprise vaults', 'Web app and Chrome extension', 'Fast and modern by design'],
      },
      tr: {
        tagline: 'Kişiler ve ekipler için parola yönetimi.',
        description: 'Kişisel ve kurumsal kullanım için hızlı, modern bir parola yöneticisi; web uygulaması ve Chrome eklentisi ile.',
        points: ['Kişisel ve kurumsal kasalar', 'Web uygulaması ve Chrome eklentisi', 'Tasarımdan hızlı ve modern'],
      },
    },
  },
  {
    slug: 'wiki',
    name: 'Soliton Wiki',
    status: 'planned',
    copy: {
      en: {
        tagline: 'A light, fast wiki for software teams.',
        description: 'Team knowledge without the weight: quick to open, quick to search, and permissioned per team.',
        points: ['Team-based authorization', 'Markdown and PDF support', 'Light and fast'],
      },
      tr: {
        tagline: 'Yazılım ekipleri için hafif, hızlı wiki.',
        description: 'Yük olmadan ekip bilgisi: hızlı açılır, hızlı aranır, ekip bazlı yetkilendirilir.',
        points: ['Ekip bazlı yetkilendirme', 'Markdown ve PDF desteği', 'Hafif ve hızlı'],
      },
    },
  },
];
