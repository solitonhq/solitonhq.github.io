import type { ImageMetadata } from 'astro';
import type { Locale } from './ui';
import { rudder, shotOrder, type ShotKey } from './rudder';
import { site } from '../site';

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
export interface ExtraLink { label: string; href: string; external?: boolean }
/** Longer, optional sections shown below the feature grid on a product's own page. */
export interface ProductExtras {
  fitsTitle: string;
  /** "When you would reach for it": a situation and what the tool gives you. */
  fits: { situation: string; answer: string }[];
  requirementsTitle: string;
  requirements: string[];
  /** Steps for the first launch, with an optional command to copy. */
  firstLaunch?: { title: string; steps: string[]; command?: string };
  verifyNote: string;
  links: ExtraLink[];
  roadmapTitle: string;
  roadmapLead: string;
  roadmap: string[];
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
  /** A longer feature list for the product's own page, when it differs from the home summary. */
  detailFeatures?: Feature[];
  /** Search-engine description, when longer than the summary. */
  seoDescription?: string;
  /** Optional trust notes shown under the screenshots. */
  notes?: Feature[];
  /** Rows of the terminal-style details box. */
  meta: MetaRow[];
  /** Text beside the call to action. */
  blurb: string;
  extras?: ProductExtras;
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
  /** Facts used for search-engine structured data. */
  seo?: { os?: string; license?: string; version?: string; downloadUrl?: string };
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

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/rudder/*.png', { eager: true });
const shot = (k: ShotKey): Screen => ({
  image: images[`../assets/rudder/${k}.png`]!.default,
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
    status: 'released',
    repo: site.termRepo,
    seo: { os: 'macOS 13 or later', license: 'https://www.apache.org/licenses/LICENSE-2.0', version: site.termVersion, downloadUrl: site.termReleases },
    actions: [
      { label: { en: 'Download for macOS', tr: 'macOS için indir' }, href: site.termReleases, primary: true, external: true },
      { label: { en: 'Roadmap', tr: 'Yol haritası' }, href: site.termRoadmap, external: true },
      { label: { en: 'GitHub', tr: 'GitHub' }, href: site.termRepo, external: true },
    ],
    copy: {
      en: {
        tagline: 'SSH and terminal, organised.',
        headline: 'Your terminal, finally organised.',
        description: 'A native macOS SSH and remote server manager with an encrypted vault, built with Tauri and Rust on top of your system’s own OpenSSH.',
        points: ['Keychain-backed encrypted vault', 'Folders, tabs and multi-exec', 'Snippets and session-only aliases'],
        features: [
          { title: 'Vault in the Keychain', body: 'Passwords and SSH keys are encrypted with AES-256-GCM. The master key lives in the macOS Keychain, not on disk.' },
          { title: 'Folders and tabs', body: 'A drag-and-drop folder tree, multiple terminal tabs and your recent sessions one click away.' },
          { title: 'Quick-copy bar', body: 'Copy the username, password or host:port of the active server in one click.' },
          { title: 'Multi-exec', body: 'Send a command to selected tabs or to a whole folder at once.' },
          { title: 'Parametric snippets', body: 'Reusable scripts with {{variables}} that ask for values before they run.' },
          { title: 'Session-only aliases', body: 'Your aliases are injected in memory. Nothing is written to the remote host.' },
          { title: '⌘K command palette', body: 'Connect, copy secrets, run snippets or switch themes without leaving the keyboard.' },
          { title: 'Themes and palettes', body: 'Three app themes and eleven terminal palettes.' },
        ],
        notes: [
          { title: 'Local-first', body: 'No accounts, no telemetry and no network client of its own.' },
          { title: 'Encrypted at rest', body: 'AES-256-GCM vault with the master key in the macOS Keychain.' },
          { title: 'Open source', body: 'Apache 2.0. Releases ship a checksum, an SBOM and an attestation.' },
          { title: 'Honest about limits', body: 'Decrypted credentials live in the app while it runs, and there is no master password yet.' },
        ],
        meta: [
          { k: 'version', v: site.termVersion, accent: true },
          { k: 'macos', v: 'apple silicon · macos 13+' },
          { k: 'built on', v: 'tauri · rust · openssh' },
          { k: 'signing', v: 'self-signed · not notarized' },
          { k: 'verify', v: 'sha-256 · sbom · attestation' },
        ],
        blurb: `Soliton Term ${site.termVersion} is the first public release. Builds are signed with a self-signed identity and are not notarized, so macOS Gatekeeper warns on first launch. The steps below show how to open it.`,
        extras: {
          fitsTitle: 'Where it fits',
          fits: [
            { situation: 'You manage dozens of servers', answer: 'Folders, tabs and recent sessions keep every host one click away, and the quick-copy bar hands you the credentials.' },
            { situation: 'The same check on many hosts', answer: 'Multi-exec runs one command on selected tabs or a whole folder at once.' },
            { situation: 'Diagnostics you keep repeating', answer: 'Snippets with {{variables}} ask for the values, then run.' },
            { situation: 'Someone else’s server, your habits', answer: 'Session-only aliases are injected in memory, so nothing lands in the remote shell profile or history.' },
          ],
          requirementsTitle: 'Requirements',
          requirements: ['macOS 13 or later on Apple silicon (there is no Intel build)', 'Uses your system’s own OpenSSH'],
          firstLaunch: {
            title: 'First launch',
            steps: [
              'Open the DMG and drag Soliton Term to Applications.',
              'macOS warns because the app is not notarized. Clear the quarantine flag once:',
              'macOS then asks once whether Soliton Term may use its Keychain item. Enter your login password and choose Always Allow.',
            ],
            command: 'xattr -cr "/Applications/Soliton Term.app"',
          },
          verifyNote: 'Every release ships SHA-256 checksums, a build provenance attestation and a CycloneDX SBOM.',
          links: [
            { label: 'Verify your download', href: '/verify/' },
            { label: 'Known limitations', href: site.termLimits, external: true },
            { label: 'All releases', href: site.termReleases, external: true },
          ],
          roadmapTitle: 'What is next',
          roadmapLead: 'Direction, not a promise. The full plan is in the repository.',
          roadmap: [
            'Keep decrypted secrets out of the WebView, with an optional master password and lock screen',
            'One-click reconnect for dropped sessions',
            '~/.ssh/config import and jump hosts (ProxyJump)',
            'SFTP browser, port forwarding and split panes',
            'Notarized builds once an Apple Developer ID is available',
          ],
        },
      },
      tr: {
        tagline: 'SSH ve terminal, düzenli.',
        headline: 'Terminaliniz, nihayet düzenli.',
        description: 'Şifreli bir kasası olan, Tauri ve Rust ile sistemin kendi OpenSSH’ı üzerine kurulmuş yerel bir macOS SSH ve uzak sunucu yöneticisi.',
        points: ['Keychain destekli şifreli kasa', 'Klasörler, sekmeler ve çoklu çalıştırma', 'Snippet’ler ve yalnızca oturuma özel alias’lar'],
        features: [
          { title: 'Keychain’de kasa', body: 'Parolalar ve SSH anahtarları AES-256-GCM ile şifrelenir. Ana anahtar diskte değil, macOS Keychain’de durur.' },
          { title: 'Klasörler ve sekmeler', body: 'Sürükle-bırak klasör ağacı, birden çok terminal sekmesi ve son oturumlarınız tek tık uzağınızda.' },
          { title: 'Hızlı kopyalama çubuğu', body: 'Aktif sunucunun kullanıcı adını, parolasını veya host:port bilgisini tek tıkla kopyalayın.' },
          { title: 'Çoklu çalıştırma', body: 'Bir komutu seçili sekmelere ya da bir klasörün tamamına aynı anda gönderin.' },
          { title: 'Parametreli snippet’ler', body: '{{değişkenler}} içeren, çalışmadan önce değerleri soran yeniden kullanılabilir betikler.' },
          { title: 'Oturuma özel alias’lar', body: 'Alias’larınız bellekte enjekte edilir. Uzak sunucuya hiçbir şey yazılmaz.' },
          { title: '⌘K komut paleti', body: 'Klavyeden çıkmadan bağlanın, sırları kopyalayın, snippet çalıştırın veya tema değiştirin.' },
          { title: 'Temalar ve paletler', body: 'Üç uygulama teması ve on bir terminal paleti.' },
        ],
        notes: [
          { title: 'Önce yerel', body: 'Hesap yok, telemetri yok, kendi ağ istemcisi yok.' },
          { title: 'Diskte şifreli', body: 'AES-256-GCM kasa; ana anahtar macOS Keychain’de.' },
          { title: 'Açık kaynak', body: 'Apache 2.0. Sürümler sağlama toplamı, SBOM ve attestation ile gelir.' },
          { title: 'Sınırları konusunda dürüst', body: 'Çözülmüş kimlik bilgileri uygulama çalışırken bellekte durur ve henüz ana parola yok.' },
        ],
        meta: [
          { k: 'sürüm', v: site.termVersion, accent: true },
          { k: 'macos', v: 'apple silicon · macos 13+' },
          { k: 'altyapı', v: 'tauri · rust · openssh' },
          { k: 'imza', v: 'kendinden imzalı · notarize değil' },
          { k: 'doğrula', v: 'sha-256 · sbom · attestation' },
        ],
        blurb: `Soliton Term ${site.termVersion} ilk herkese açık sürümdür. Sürümler kendinden imzalı bir kimlikle imzalıdır ve notarize edilmemiştir; bu yüzden macOS Gatekeeper ilk açılışta uyarır. Aşağıdaki adımlar nasıl açacağınızı gösterir.`,
        extras: {
          fitsTitle: 'Nerede işe yarar',
          fits: [
            { situation: 'Onlarca sunucu yönetiyorsunuz', answer: 'Klasörler, sekmeler ve son oturumlar her sunucuyu tek tık uzağınızda tutar; hızlı kopyalama çubuğu kimlik bilgilerini verir.' },
            { situation: 'Aynı kontrol birçok sunucuda', answer: 'Çoklu çalıştırma tek komutu seçili sekmelerde ya da bir klasörün tamamında aynı anda çalıştırır.' },
            { situation: 'Sürekli tekrarladığınız tanılar', answer: '{{değişkenli}} snippet’ler değerleri sorar, sonra çalışır.' },
            { situation: 'Başkasının sunucusu, sizin alışkanlıklarınız', answer: 'Oturuma özel alias’lar bellekte enjekte edilir; uzak kabuk profiline ya da geçmişe hiçbir şey yazılmaz.' },
          ],
          requirementsTitle: 'Gereksinimler',
          requirements: ['Apple silicon üzerinde macOS 13 veya üstü (Intel sürümü yok)', 'Sistemin kendi OpenSSH’ını kullanır'],
          firstLaunch: {
            title: 'İlk açılış',
            steps: [
              'DMG’yi açın ve Soliton Term’ü Applications’a sürükleyin.',
              'Uygulama notarize edilmediği için macOS uyarır. Karantina bayrağını bir kez temizleyin:',
              'macOS ardından Soliton Term’ün Keychain öğesini kullanıp kullanamayacağını bir kez sorar. Oturum parolanızı girin ve Always Allow’u seçin.',
            ],
            command: 'xattr -cr "/Applications/Soliton Term.app"',
          },
          verifyNote: 'Her sürüm SHA-256 sağlama toplamları, bir derleme kaynağı attestation’ı ve CycloneDX SBOM ile gelir.',
          links: [
            { label: 'İndirmeyi doğrulayın', href: '/verify/' },
            { label: 'Bilinen kısıtlar', href: site.termLimits, external: true },
            { label: 'Tüm sürümler', href: site.termReleases, external: true },
          ],
          roadmapTitle: 'Sırada ne var',
          roadmapLead: 'Söz değil, yön. Tam plan depoda.',
          roadmap: [
            'Çözülmüş sırları WebView’dan uzak tutmak; isteğe bağlı ana parola ve kilit ekranı',
            'Kopan oturumlar için tek tıkla yeniden bağlanma',
            '~/.ssh/config içe aktarma ve jump host’lar (ProxyJump)',
            'SFTP tarayıcısı, port yönlendirme ve bölünmüş paneller',
            'Apple Developer ID alındığında notarize edilmiş sürümler',
          ],
        },
      },
    },
  },
  {
    slug: 'rudder',
    name: 'Soliton Rudder',
    short: 'Rudder',
    status: 'prerelease',
    featured: true,
    seo: { os: 'macOS 12 or later', license: 'https://www.apache.org/licenses/LICENSE-2.0', version: site.rudderVersion, downloadUrl: site.rudderReleases },
    repo: site.rudderRepo,
    screens: shotOrder.map(shot),
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
        description: rudder.en.lead,
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
        notes: rudder.en.principles,
        meta: [
          { k: 'version', v: `${site.rudderVersion} · pre-release`, accent: true },
          { k: 'macos', v: 'universal DMG · 12+' },
          { k: 'linux', v: 'coming soon' },
          { k: 'requires', v: 'a kubeconfig' },
          { k: 'verify', v: 'sha-256 · sbom · attestation' },
        ],
        blurb: rudder.en.installBody,
        detailFeatures: rudder.en.features,
        seoDescription: rudder.en.description,
        extras: {
          fitsTitle: 'Where it fits',
          fits: [
            { situation: 'A rollout is failing', answer: 'Events follow ownership, so a Deployment shows the events of the pods it owns. Runbooks and multi-pod logs take you to the cause.' },
            { situation: 'You inherit a cluster', answer: 'An assessment runs 30+ read-only checks and scores the cluster with fix guidance, so you start from findings instead of guesses.' },
            { situation: 'Before you change something', answer: 'The what-if simulator answers whether A can reach B under your NetworkPolicies and previews a node drain. Changes are dry-run first.' },
            { situation: 'Reviewing the cloud bill', answer: 'Cost analysis compares requests with real usage to spot waste per workload.' },
          ],
          requirementsTitle: rudder.en.requirementsTitle,
          requirements: rudder.en.requirements,
          verifyNote: rudder.en.verifyNote,
          links: [
            { label: 'Verify your download', href: '/verify/' },
            { label: rudder.en.installGuide, href: site.rudderInstallGuide, external: true },
            { label: rudder.en.allReleases, href: site.rudderReleases, external: true },
          ],
          roadmapTitle: rudder.en.roadmapTitle,
          roadmapLead: rudder.en.roadmapLead,
          roadmap: rudder.en.roadmap,
        },
      },
      tr: {
        tagline: 'Kubernetes, güvenle yönlendirilir.',
        headline: 'Kubernetes, güvenle yönlendirilir.',
        description: rudder.tr.lead,
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
        notes: rudder.tr.principles,
        meta: [
          { k: 'sürüm', v: `${site.rudderVersion} · ön sürüm`, accent: true },
          { k: 'macos', v: 'universal DMG · 12+' },
          { k: 'linux', v: 'yakında' },
          { k: 'gereksinim', v: 'bir kubeconfig' },
          { k: 'doğrula', v: 'sha-256 · sbom · attestation' },
        ],
        blurb: rudder.tr.installBody,
        detailFeatures: rudder.tr.features,
        seoDescription: rudder.tr.description,
        extras: {
          fitsTitle: 'Nerede işe yarar',
          fits: [
            { situation: 'Bir dağıtım başarısız oluyor', answer: 'Olaylar sahipliği izler: bir Deployment, sahip olduğu pod’ların olaylarını gösterir. Runbook’lar ve çoklu pod logları sizi nedene götürür.' },
            { situation: 'Bir cluster devraldınız', answer: 'Bir değerlendirme 30’dan fazla salt okunur kontrol çalıştırır ve cluster’ı çözüm rehberiyle puanlar; tahminle değil bulgularla başlarsınız.' },
            { situation: 'Bir şeyi değiştirmeden önce', answer: 'What-if simülatörü, NetworkPolicy’lerinize göre A’nın B’ye erişip erişemeyeceğini yanıtlar ve node drain’i önceden gösterir. Değişiklikler önce dry-run ile çalışır.' },
            { situation: 'Bulut faturasını gözden geçirirken', answer: 'Maliyet analizi, iş yükü başına israfı bulmak için istekleri gerçek kullanımla karşılaştırır.' },
          ],
          requirementsTitle: rudder.tr.requirementsTitle,
          requirements: rudder.tr.requirements,
          verifyNote: rudder.tr.verifyNote,
          links: [
            { label: 'İndirmeyi doğrulayın', href: '/verify/' },
            { label: rudder.tr.installGuide, href: site.rudderInstallGuide, external: true },
            { label: rudder.tr.allReleases, href: site.rudderReleases, external: true },
          ],
          roadmapTitle: rudder.tr.roadmapTitle,
          roadmapLead: rudder.tr.roadmapLead,
          roadmap: rudder.tr.roadmap,
        },
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
          { k: 'notify', v: 'github · watch releases', accent: true },
        ],
        blurb: 'Soliton Pass is in final preparation. Follow Soliton on GitHub: its repository appears there at launch, and Watch → Releases will notify you.',
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
          { k: 'bildirim', v: 'github · releases izle', accent: true },
        ],
        blurb: 'Soliton Pass son hazırlıklarda. GitHub’da Soliton’u takip edin: depo çıkışta orada belirir ve Watch → Releases size haber verir.',
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
          { k: 'notify', v: 'github · watch releases', accent: true },
        ],
        blurb: 'Soliton Wiki is in final preparation. Follow Soliton on GitHub: its repository appears there at launch, and Watch → Releases will notify you.',
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
          { k: 'bildirim', v: 'github · releases izle', accent: true },
        ],
        blurb: 'Soliton Wiki son hazırlıklarda. GitHub’da Soliton’u takip edin: depo çıkışta orada belirir ve Watch → Releases size haber verir.',
      },
    },
  },
];

/** Detail page of a product. Generated for every product. */
export function productPath(p: Product): string {
  return `/products/soliton-${p.slug}/`;
}
