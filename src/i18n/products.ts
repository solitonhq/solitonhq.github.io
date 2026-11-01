import type { ImageMetadata } from 'astro';
import type { Locale } from './ui';
import { rudder, type ShotKey } from './rudder';
import { site } from '../site';
import overview from '../assets/rudder/overview.png';
import assessments from '../assets/rudder/assessments.png';
import topology from '../assets/rudder/topology.png';
import applications from '../assets/rudder/applications.png';
import ingressMap from '../assets/rudder/ingress-map.png';
import pods from '../assets/rudder/pods.png';

/**
 * incoming   : not released yet, shows the "signal incoming" stage
 * prerelease : downloadable, rough edges expected
 * released   : generally available
 */
export type ProductStatus = 'incoming' | 'prerelease' | 'released';

export interface Feature { title: string; body: string }
export interface MetaRow { k: string; v: string; accent?: boolean }
export interface Action { label: Record<Locale, string>; href: string; primary?: boolean; external?: boolean }
export interface Screen {
  image: ImageMetadata;
  copy: Record<Locale, { label: string; alt: string; body: string }>;
}
export interface ProductCopy {
  /** One line, used in the index strip and on the products page. */
  tagline: string;
  /** Chapter heading on the home page. */
  headline: string;
  description: string;
  /** Short bullet list for the products page. */
  points: string[];
  /** Feature cells on the home page. */
  features: Feature[];
  /** Optional trust notes shown under the screenshots. */
  notes?: Feature[];
  /** Rows of the terminal-style details box. */
  meta: MetaRow[];
  /** Text beside the call to action. */
  blurb: string;
}

export interface Product {
  /** Anchor id and URL slug. Add a product here and the whole site picks it up. */
  slug: string;
  /** Full name, e.g. "Soliton Rudder". */
  name: string;
  /** Short name used in the wordmark, e.g. "Rudder". */
  short: string;
  status: ProductStatus;
  /** Its first screenshot is shown in the hero. Only one product should set this. */
  featured?: boolean;
  /** Dedicated site page, when there is one. */
  page?: string;
  /** Public GitHub repository, once it exists. */
  repo?: string;
  screens?: Screen[];
  /** Buttons for products that can be downloaded. Incoming products get a notify button automatically. */
  actions?: Action[];
  copy: Record<Locale, ProductCopy>;
}

export const statusLabel: Record<Locale, Record<ProductStatus, string>> = {
  en: { incoming: 'Incoming', prerelease: 'Pre-release', released: 'Available' },
  tr: { incoming: 'Yolda', prerelease: 'Ön sürüm', released: 'Yayında' },
};

const shot = (image: ImageMetadata, k: ShotKey): Screen => ({
  image,
  copy: {
    en: { label: rudder.en.shots[k].title, alt: rudder.en.shots[k].alt, body: rudder.en.shots[k].body },
    tr: { label: rudder.tr.shots[k].title, alt: rudder.tr.shots[k].alt, body: rudder.tr.shots[k].body },
  },
});

export const products: Product[] = [
  {
    slug: 'term',
    name: 'Soliton Term',
    short: 'Term',
    status: 'incoming',
    copy: {
      en: {
        tagline: 'SSH and terminal, organised.',
        headline: 'Your terminal, finally organised.',
        description: 'An SSH session manager and local terminal that takes the friction out of daily server work. Your hosts, your snippets and your secrets, one keystroke away.',
        points: ['Snippets and a secure vault', 'Alias injection for every host', 'Fast, keyboard-first workflow'],
        features: [
          { title: 'Session manager', body: 'Keep every SSH host and session in one place, next to a local terminal.' },
          { title: 'Snippets', body: 'The commands you reach for daily, one keystroke away.' },
          { title: 'Secure vault', body: 'Credentials stored securely, right where you connect.' },
          { title: 'Alias injection', body: 'Your aliases follow you onto every host you connect to.' },
        ],
        meta: [
          { k: 'status', v: 'incoming', accent: true },
          { k: 'category', v: 'ssh manager · local terminal' },
          { k: 'workflow', v: 'keyboard-first' },
          { k: 'notify', v: 'on release', accent: true },
        ],
        blurb: 'Soliton Term is in final preparation. Watch the repository on GitHub and you will hear the moment it lands.',
      },
      tr: {
        tagline: 'SSH ve terminal, düzenli.',
        headline: 'Terminaliniz, nihayet düzenli.',
        description: 'Günlük sunucu işlerindeki sürtünmeyi azaltan bir SSH oturum yöneticisi ve yerel terminal. Sunucularınız, snippet’leriniz ve sırlarınız tek tuş uzağınızda.',
        points: ['Snippet’ler ve güvenli kasa', 'Her sunucu için alias enjeksiyonu', 'Hızlı, klavye odaklı akış'],
        features: [
          { title: 'Oturum yöneticisi', body: 'Tüm SSH sunucularınızı ve oturumlarınızı yerel terminalin yanında tek yerde tutun.' },
          { title: 'Snippet’ler', body: 'Her gün kullandığınız komutlar tek tuş uzağınızda.' },
          { title: 'Güvenli kasa', body: 'Kimlik bilgileri, bağlandığınız yerde güvenle saklanır.' },
          { title: 'Alias enjeksiyonu', body: 'Alias’larınız bağlandığınız her sunucuya sizinle gelir.' },
        ],
        meta: [
          { k: 'durum', v: 'yolda', accent: true },
          { k: 'kategori', v: 'ssh yöneticisi · yerel terminal' },
          { k: 'akış', v: 'klavye odaklı' },
          { k: 'bildirim', v: 'çıkışta', accent: true },
        ],
        blurb: 'Soliton Term son hazırlıklarda. GitHub’da repoyu izleyin, çıktığı anda haberiniz olsun.',
      },
    },
  },
  {
    slug: 'rudder',
    name: 'Soliton Rudder',
    short: 'Rudder',
    status: 'prerelease',
    featured: true,
    page: '/products/soliton-rudder/',
    repo: site.rudderRepo,
    screens: [
      shot(overview, 'overview'),
      shot(assessments, 'assessments'),
      shot(topology, 'topology'),
      shot(applications, 'applications'),
      shot(ingressMap, 'ingress-map'),
      shot(pods, 'pods'),
    ],
    actions: [
      { label: { en: 'Download DMG for macOS', tr: 'macOS için DMG indir' }, href: site.rudderReleases, primary: true, external: true },
      { label: { en: 'Opening an unsigned build', tr: 'İmzasız sürümü açma' }, href: site.rudderInstallGuide, external: true },
      { label: { en: 'All features', tr: 'Tüm özellikler' }, href: '/products/soliton-rudder/' },
      { label: { en: 'GitHub', tr: 'GitHub' }, href: site.rudderRepo, external: true },
    ],
    copy: {
      en: {
        tagline: 'Kubernetes, steered with confidence.',
        headline: 'Kubernetes, steered with confidence.',
        description: 'A fast desktop IDE for Kubernetes. Troubleshoot faster, check cluster health and catch problems before they become incidents. Screens below come from a local demo cluster.',
        points: ['Cluster health checks and feasibility reports', 'Faster troubleshooting across workloads and networking', 'Cost analysis, read-only by default, data stays local'],
        features: [
          { title: 'Troubleshoot faster', body: 'Health summaries, runbooks, multi-pod logs, pod shells and debug containers.' },
          { title: 'Cluster health', body: '30+ read-only checks, a cluster score, fix guidance and trends.' },
          { title: 'Feasibility & what-if', body: 'Check reachability against NetworkPolicies and preview node drains.' },
          { title: 'Cost analysis', body: 'Requests versus real usage to find waste. Data stays local.' },
          { title: 'Compare & promote', body: 'Field-level drift between clusters, selective promotion, dry-run first.' },
          { title: 'Blackbox recorder', body: 'An opt-in flight recorder with a time slider for reviewing failures.' },
          { title: 'Self-healing forwards', body: 'Port forwarding that rebinds to a healthy replica after restarts.' },
          { title: 'GitOps & monitoring', body: 'Argo CD, Flux, Helm and Prometheus views, plus plugins.' },
        ],
        notes: [
          { title: 'Read-only by default', body: 'Changes are previewed with a dry run and need confirmation.' },
          { title: 'Private by design', body: 'No telemetry, no account. Credentials stay in your kubeconfig or Keychain.' },
          { title: 'Open source', body: 'Apache 2.0. Releases ship a checksum, SBOM and attestation.' },
        ],
        meta: [
          { k: 'version', v: '0.1.0 · pre-release', accent: true },
          { k: 'macos', v: 'universal DMG · 12+' },
          { k: 'linux', v: 'coming soon' },
          { k: 'requires', v: 'a kubeconfig' },
          { k: 'verify', v: 'sha-256 · sbom · attestation' },
        ],
        blurb: 'Pre-release: expect rough edges and fast iteration. The current build is not yet signed with an Apple Developer ID, so macOS will ask you to confirm the first launch.',
      },
      tr: {
        tagline: 'Kubernetes, güvenle yönlendirilir.',
        headline: 'Kubernetes, güvenle yönlendirilir.',
        description: 'Kubernetes için hızlı bir masaüstü IDE. Sorunları daha hızlı çözün, cluster sağlığını kontrol edin ve sorunları olaya dönüşmeden yakalayın. Aşağıdaki ekranlar yerel bir demo cluster’dan alınmıştır.',
        points: ['Cluster sağlık kontrolleri ve uygunluk raporları', 'İş yükleri ve ağ genelinde daha hızlı sorun giderme', 'Maliyet analizi, varsayılan olarak salt okunur, veriler yerelde kalır'],
        features: [
          { title: 'Daha hızlı sorun giderme', body: 'Sağlık özetleri, runbook’lar, çoklu pod logları, pod shell’leri ve debug container’ları.' },
          { title: 'Cluster sağlığı', body: '30’dan fazla salt okunur kontrol, cluster skoru, çözüm rehberi ve trendler.' },
          { title: 'Uygunluk ve what-if', body: 'NetworkPolicy’lere karşı erişilebilirliği kontrol edin, node drain’i önceden görün.' },
          { title: 'Maliyet analizi', body: 'İstekleri gerçek kullanımla karşılaştırıp israfı bulun. Veriler yerelde kalır.' },
          { title: 'Karşılaştır ve taşı', body: 'Cluster’lar arasında alan düzeyinde sapma, seçerek taşıma, önce dry-run.' },
          { title: 'Blackbox kaydedici', body: 'Hataları sonradan incelemek için zaman çubuklu, isteğe bağlı uçuş kaydedici.' },
          { title: 'Kendini onaran yönlendirme', body: 'Yeniden başlatmalardan sonra sağlıklı bir replika’ya yeniden bağlanan port yönlendirme.' },
          { title: 'GitOps ve izleme', body: 'Argo CD, Flux, Helm ve Prometheus görünümleri, ayrıca eklentiler.' },
        ],
        notes: [
          { title: 'Varsayılan olarak salt okunur', body: 'Değişiklikler dry-run ile önizlenir ve onay ister.' },
          { title: 'Tasarımdan gizli', body: 'Telemetri yok, hesap yok. Kimlik bilgileri kubeconfig’inizde veya Keychain’de kalır.' },
          { title: 'Açık kaynak', body: 'Apache 2.0. Sürümler sağlama toplamı, SBOM ve attestation ile gelir.' },
        ],
        meta: [
          { k: 'sürüm', v: '0.1.0 · ön sürüm', accent: true },
          { k: 'macos', v: 'universal DMG · 12+' },
          { k: 'linux', v: 'yakında' },
          { k: 'gereksinim', v: 'bir kubeconfig' },
          { k: 'doğrula', v: 'sha-256 · sbom · attestation' },
        ],
        blurb: 'Ön sürüm: pürüzler ve hızlı değişim bekleyin. Mevcut sürüm henüz Apple Developer ID ile imzalı değil, bu yüzden macOS ilk açılışta onay isteyecek.',
      },
    },
  },
  {
    slug: 'pass',
    name: 'Soliton Pass',
    short: 'Pass',
    status: 'incoming',
    copy: {
      en: {
        tagline: 'Passwords for people and teams.',
        headline: 'Passwords for people and teams.',
        description: 'A modern password manager for personal and enterprise use. A fast, practical web interface, with a Chrome extension that keeps your credentials where you work.',
        points: ['Personal and enterprise vaults', 'Web app and Chrome extension', 'Fast and modern by design'],
        features: [
          { title: 'Personal vaults', body: 'Your own credentials, organised and always within reach.' },
          { title: 'Enterprise vaults', body: 'Roll it out to a team with shared, controlled access.' },
          { title: 'Web app', body: 'A fast, practical interface in the browser.' },
          { title: 'Chrome extension', body: 'Credentials right where you sign in.' },
        ],
        meta: [
          { k: 'status', v: 'incoming', accent: true },
          { k: 'category', v: 'password manager' },
          { k: 'surfaces', v: 'web app · chrome extension' },
          { k: 'notify', v: 'on release', accent: true },
        ],
        blurb: 'Soliton Pass is in final preparation. Watch the repository on GitHub and you will hear the moment it lands.',
      },
      tr: {
        tagline: 'Kişiler ve ekipler için parola yönetimi.',
        headline: 'Kişiler ve ekipler için parola yönetimi.',
        description: 'Kişisel ve kurumsal kullanım için modern bir parola yöneticisi. Hızlı ve pratik bir web arayüzü; kimlik bilgilerinizi çalıştığınız yerde tutan bir Chrome eklentisi.',
        points: ['Kişisel ve kurumsal kasalar', 'Web uygulaması ve Chrome eklentisi', 'Tasarımdan hızlı ve modern'],
        features: [
          { title: 'Kişisel kasalar', body: 'Kendi kimlik bilgileriniz, düzenli ve her zaman elinizin altında.' },
          { title: 'Kurumsal kasalar', body: 'Paylaşımlı ve kontrollü erişimle bir ekibe açın.' },
          { title: 'Web uygulaması', body: 'Tarayıcıda hızlı ve pratik bir arayüz.' },
          { title: 'Chrome eklentisi', body: 'Kimlik bilgileri tam giriş yaptığınız yerde.' },
        ],
        meta: [
          { k: 'durum', v: 'yolda', accent: true },
          { k: 'kategori', v: 'parola yöneticisi' },
          { k: 'yüzeyler', v: 'web uygulaması · chrome eklentisi' },
          { k: 'bildirim', v: 'çıkışta', accent: true },
        ],
        blurb: 'Soliton Pass son hazırlıklarda. GitHub’da repoyu izleyin, çıktığı anda haberiniz olsun.',
      },
    },
  },
  {
    slug: 'wiki',
    name: 'Soliton Wiki',
    short: 'Wiki',
    status: 'incoming',
    copy: {
      en: {
        tagline: 'A light, fast wiki for software teams.',
        headline: 'Documentation your team actually opens.',
        description: 'A lightweight wiki for software teams. Team-based permissions, Markdown and PDF support, and a core that stays quick as your knowledge base grows.',
        points: ['Team-based authorization', 'Markdown and PDF support', 'Light and fast'],
        features: [
          { title: 'Team-based access', body: 'Permissions that follow the way your teams are organised.' },
          { title: 'Markdown', body: 'Write the way you already write.' },
          { title: 'PDF support', body: 'Bring documents in without leaving your wiki.' },
          { title: 'Light and fast', body: 'A small core that opens instantly and stays out of the way.' },
        ],
        meta: [
          { k: 'status', v: 'incoming', accent: true },
          { k: 'category', v: 'team wiki' },
          { k: 'formats', v: 'md · pdf' },
          { k: 'notify', v: 'on release', accent: true },
        ],
        blurb: 'Soliton Wiki is in final preparation. Watch the repository on GitHub and you will hear the moment it lands.',
      },
      tr: {
        tagline: 'Yazılım ekipleri için hafif, hızlı wiki.',
        headline: 'Ekibinizin gerçekten açtığı dokümantasyon.',
        description: 'Yazılım ekipleri için hafif bir wiki. Ekip bazlı yetkilendirme, Markdown ve PDF desteği; bilgi tabanınız büyürken hızlı kalan bir çekirdek.',
        points: ['Ekip bazlı yetkilendirme', 'Markdown ve PDF desteği', 'Hafif ve hızlı'],
        features: [
          { title: 'Ekip bazlı erişim', body: 'Ekiplerinizin örgütlenme biçimini izleyen yetkiler.' },
          { title: 'Markdown', body: 'Zaten yazdığınız gibi yazın.' },
          { title: 'PDF desteği', body: 'Wiki’den çıkmadan doküman getirin.' },
          { title: 'Hafif ve hızlı', body: 'Anında açılan ve yolunuzdan çekilen küçük bir çekirdek.' },
        ],
        meta: [
          { k: 'durum', v: 'yolda', accent: true },
          { k: 'kategori', v: 'ekip wiki’si' },
          { k: 'formatlar', v: 'md · pdf' },
          { k: 'bildirim', v: 'çıkışta', accent: true },
        ],
        blurb: 'Soliton Wiki son hazırlıklarda. GitHub’da repoyu izleyin, çıktığı anda haberiniz olsun.',
      },
    },
  },
];

/** Where a product's page lives: its own page when it has one, otherwise its chapter on the home page. */
export function productHref(p: Product, localePath: (path: string) => string): string {
  return p.page ? localePath(p.page) : `${localePath('/')}#${p.slug}`;
}
