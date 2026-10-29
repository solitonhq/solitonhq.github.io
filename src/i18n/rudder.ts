import type { Locale } from './ui';

export type ShotKey = 'overview' | 'assessments' | 'topology' | 'applications' | 'ingress-map' | 'pods';

export interface RudderCopy {
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  status: string;
  statusNote: string;
  shotsTitle: string;
  shotsLead: string;
  shots: Record<ShotKey, { title: string; alt: string; body: string }>;
  featuresTitle: string;
  features: { title: string; body: string }[];
  principlesTitle: string;
  principles: { title: string; body: string }[];
  installTitle: string;
  installBody: string;
  requirementsTitle: string;
  requirements: string[];
  roadmapTitle: string;
  roadmapLead: string;
  roadmap: string[];
  demoNote: string;
  ctaGithub: string;
  back: string;
}

export const shotOrder: ShotKey[] = ['overview', 'assessments', 'topology', 'applications', 'ingress-map', 'pods'];

export const rudder: Record<Locale, RudderCopy> = {
  en: {
    title: 'Soliton Rudder',
    description: 'Soliton Rudder is a fast desktop IDE for Kubernetes: live tables, troubleshooting, cluster assessments, topology, and cost analysis. Open source, private by design.',
    eyebrow: 'Soliton Rudder',
    lead: 'A fast desktop IDE for Kubernetes. Troubleshoot faster, check cluster health, and see what needs attention before it becomes an incident.',
    status: 'In development',
    statusNote: 'Early 0.x. macOS first. Public releases are coming.',
    shotsTitle: 'See your cluster clearly',
    shotsLead: 'Everything below is a real Soliton Rudder window connected to a local demo cluster.',
    shots: {
      overview: { title: 'Cluster overview', alt: 'Soliton Rudder cluster overview showing node, pod and workload health, capacity and items that need attention', body: 'The first page of every cluster: health, capacity, what needs attention with runbooks, and recent warnings.' },
      assessments: { title: 'Assessments', alt: 'Cluster assessment with a score, category breakdown and findings with fix guidance', body: 'Read-only checks across resources, reliability, security and maintenance, with a score, fix guidance and history.' },
      topology: { title: 'Topology', alt: 'Topology graph from ingress to services, workloads and pods with failing workloads highlighted', body: 'A live Ingress → Service → Workload → Pod → Node graph with health colours and a problems-only mode.' },
      applications: { title: 'Applications', alt: 'Applications view grouping workloads by label and Helm release with health and version', body: 'Applications found from Helm releases and labels, with health, versions, URLs and history.' },
      'ingress-map': { title: 'Ingress map', alt: 'Ingress map showing host, path, service and ready pods with warnings', body: 'Host → path → Service → pods, with broken backends, missing addresses and TLS called out.' },
      pods: { title: 'Live tables', alt: 'Live pods table with status, restarts and age', body: 'Virtualised, searchable live tables for every resource kind, including custom resources.' },
    },
    featuresTitle: 'What it does',
    features: [
      { title: 'Troubleshoot faster', body: 'Plain-language health for pods, workloads and nodes, step-by-step runbooks, multi-pod logs, pod shells and debug containers.' },
      { title: 'Know the health of your cluster', body: 'Assessments run 30+ read-only checks, score the cluster, explain how to fix findings and track the trend over time.' },
      { title: 'Feasibility and what-if', body: 'A read-only simulator answers “can A reach B?” against your NetworkPolicies and “what happens if I drain this node?”.' },
      { title: 'Cost analysis', body: 'Compare requests with real usage to spot waste and estimate potential savings per workload.' },
      { title: 'Compare and promote', body: 'See field-level drift between two clusters or namespaces and selectively promote changes, with a dry-run first. Secrets are never read.' },
      { title: 'Blackbox recorder', body: 'An opt-in flight recorder with a time slider to see what was failing at the moment something broke.' },
      { title: 'Self-healing port forwarding', body: 'One-click forwarding that rebinds to a healthy replica when pods restart or roll out.' },
      { title: 'GitOps and monitoring', body: 'Argo CD, Flux, Helm and Prometheus views built in, plus plugins for your own panels and checks.' },
    ],
    principlesTitle: 'Built to be trusted',
    principles: [
      { title: 'Read-only by default', body: 'Changes are explicit, previewed with a server-side dry-run, and confirmed by you.' },
      { title: 'Private by design', body: 'No telemetry and no account. Credentials stay in your kubeconfig or the macOS Keychain.' },
      { title: 'Works with limited access', body: 'If your credentials only cover some namespaces, pages adapt instead of failing.' },
      { title: 'Open source', body: 'Licensed under the Apache License 2.0 and developed in the open.' },
    ],
    installTitle: 'Get it',
    installBody: 'There is no public release yet. When the first version ships, the macOS download and install guide will be linked here and published on GitHub Releases, with checksums and a software bill of materials.',
    requirementsTitle: 'Requirements',
    requirements: ['macOS 12 or newer (Apple silicon and Intel)', 'A kubeconfig for the cluster you want to manage', 'Windows and Linux are not available yet'],
    roadmapTitle: 'What is next',
    roadmapLead: 'The plan is public once the repository opens. Highlights:',
    roadmap: ['Applications for Argo CD and Flux, next to Helm and labels', 'Better behaviour on very large clusters', 'Signed and notarised macOS builds', 'More platforms'],
    demoNote: 'Screenshots use a local demo cluster with sample workloads; no real clusters or data are shown.',
    ctaGithub: 'Follow on GitHub',
    back: 'All products',
  },
  tr: {
    title: 'Soliton Rudder',
    description: 'Soliton Rudder, Kubernetes için hızlı bir masaüstü IDE: canlı tablolar, sorun giderme, cluster değerlendirmeleri, topoloji ve maliyet analizi. Açık kaynak, tasarımdan gizlilik odaklı.',
    eyebrow: 'Soliton Rudder',
    lead: 'Kubernetes için hızlı bir masaüstü IDE. Sorunları daha hızlı giderin, cluster sağlığını kontrol edin ve olay çıkmadan önce neyin ilgi beklediğini görün.',
    status: 'Geliştiriliyor',
    statusNote: 'Erken 0.x sürüm. Önce macOS. Herkese açık sürümler yolda.',
    shotsTitle: 'Cluster’ınızı net görün',
    shotsLead: 'Aşağıdakilerin hepsi, yerel bir demo cluster’a bağlı gerçek Soliton Rudder pencereleridir.',
    shots: {
      overview: { title: 'Cluster genel bakışı', alt: 'Node, pod ve iş yükü sağlığını, kapasiteyi ve ilgi bekleyen öğeleri gösteren Soliton Rudder cluster genel bakışı', body: 'Her cluster’ın ilk sayfası: sağlık, kapasite, runbook’larla birlikte ilgi bekleyenler ve son uyarılar.' },
      assessments: { title: 'Değerlendirmeler', alt: 'Puan, kategori dağılımı ve çözüm önerili bulgular içeren cluster değerlendirmesi', body: 'Kaynak, güvenilirlik, güvenlik ve bakım alanlarında salt okunur kontroller; puan, çözüm önerileri ve geçmişle birlikte.' },
      topology: { title: 'Topoloji', alt: 'Ingress’ten servislere, iş yüklerine ve pod’lara uzanan, hatalı iş yüklerinin vurgulandığı topoloji grafiği', body: 'Sağlık renkleriyle canlı Ingress → Service → Workload → Pod → Node grafiği ve yalnızca sorunları gösteren mod.' },
      applications: { title: 'Uygulamalar', alt: 'İş yüklerini label ve Helm release’e göre gruplayan, sağlık ve sürüm gösteren uygulamalar görünümü', body: 'Helm release’lerinden ve label’lardan bulunan uygulamalar; sağlık, sürüm, URL ve geçmişle birlikte.' },
      'ingress-map': { title: 'Ingress haritası', alt: 'Host, path, servis ve hazır pod’ları uyarılarla gösteren ingress haritası', body: 'Host → path → Service → pod’lar; bozuk backend’ler, eksik adresler ve TLS durumu öne çıkarılır.' },
      pods: { title: 'Canlı tablolar', alt: 'Durum, yeniden başlatma ve yaş bilgisiyle canlı pod tablosu', body: 'Özel kaynaklar dahil her kaynak türü için sanallaştırılmış, aranabilir canlı tablolar.' },
    },
    featuresTitle: 'Neler yapar',
    features: [
      { title: 'Daha hızlı sorun giderme', body: 'Pod, iş yükü ve node’lar için sade dille sağlık özeti, adım adım runbook’lar, çoklu pod logları, pod shell’leri ve debug container’lar.' },
      { title: 'Cluster sağlığını bilin', body: 'Değerlendirmeler 30’dan fazla salt okunur kontrol çalıştırır, cluster’ı puanlar, bulguların nasıl düzeltileceğini anlatır ve trendi zaman içinde izler.' },
      { title: 'Uygunluk ve “ya olursa”', body: 'Salt okunur simülatör, NetworkPolicy’lerinize göre “A, B’ye ulaşabilir mi?” ve “bu node’u drain edersem ne olur?” sorularını yanıtlar.' },
      { title: 'Maliyet analizi', body: 'İstekleri gerçek kullanımla karşılaştırarak israfı bulun ve iş yükü başına olası tasarrufu tahmin edin.' },
      { title: 'Karşılaştır ve taşı', body: 'İki cluster ya da namespace arasındaki alan bazlı farkı görün, değişiklikleri seçerek taşıyın; önce dry-run yapılır. Secret’lar asla okunmaz.' },
      { title: 'Blackbox kaydedici', body: 'İsteğe bağlı bir uçuş kaydedicisi: bir şey bozulduğu anda nelerin hata verdiğini zaman çubuğuyla görün.' },
      { title: 'Kendini onaran port forward', body: 'Pod’lar yeniden başladığında ya da güncellendiğinde sağlıklı bir replica’ya yeniden bağlanan tek tıkla yönlendirme.' },
      { title: 'GitOps ve izleme', body: 'Argo CD, Flux, Helm ve Prometheus görünümleri dahili; ayrıca kendi panel ve kontrollerinizi ekleyen eklentiler.' },
    ],
    principlesTitle: 'Güvenilmek için tasarlandı',
    principles: [
      { title: 'Varsayılan olarak salt okunur', body: 'Değişiklikler açıktır, sunucu tarafı dry-run ile önizlenir ve sizin onayınızla uygulanır.' },
      { title: 'Tasarımdan gizlilik', body: 'Telemetri ve hesap yok. Kimlik bilgileri kubeconfig’inizde ya da macOS Keychain’de kalır.' },
      { title: 'Kısıtlı yetkiyle çalışır', body: 'Kimlik bilgileriniz yalnızca bazı namespace’leri kapsıyorsa sayfalar hata vermek yerine uyum sağlar.' },
      { title: 'Açık kaynak', body: 'Apache License 2.0 ile lisanslıdır ve açıkta geliştirilir.' },
    ],
    installTitle: 'Edinin',
    installBody: 'Henüz herkese açık bir sürüm yok. İlk sürüm yayımlandığında macOS indirme bağlantısı ve kurulum rehberi burada yer alacak; GitHub Releases’te sağlama toplamları ve yazılım malzeme listesiyle birlikte yayımlanacak.',
    requirementsTitle: 'Gereksinimler',
    requirements: ['macOS 12 veya üstü (Apple silicon ve Intel)', 'Yönetmek istediğiniz cluster için bir kubeconfig', 'Windows ve Linux henüz mevcut değil'],
    roadmapTitle: 'Sırada ne var',
    roadmapLead: 'Repo açıldığında plan herkese açık olacak. Öne çıkanlar:',
    roadmap: ['Helm ve label’ların yanında Argo CD ve Flux için Uygulamalar', 'Çok büyük cluster’larda daha iyi davranış', 'İmzalı ve noter onaylı (notarized) macOS sürümleri', 'Daha fazla platform'],
    demoNote: 'Ekran görüntüleri örnek iş yüklerine sahip yerel bir demo cluster kullanır; gerçek cluster ya da veri gösterilmez.',
    ctaGithub: 'GitHub’da takip edin',
    back: 'Tüm ürünler',
  },
};
