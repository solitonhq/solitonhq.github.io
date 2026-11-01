import type { Locale } from './ui';

export type PageKey = 'about' | 'open-source' | 'security' | 'brand' | 'privacy' | 'contact';

export interface Section {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}
export interface PageCopy {
  title: string;
  description: string;
  lead: string;
  sections: Section[];
}

export const pageKeys: PageKey[] = ['about', 'open-source', 'security', 'brand', 'privacy', 'contact'];

export const pages: Record<Locale, Record<PageKey, PageCopy>> = {
  en: {
    about: {
      title: 'About',
      description: 'Soliton is an engineering philosophy: tools built from a DevOps engineer’s point of view to make daily touchpoints faster and calmer.',
      lead: 'Soliton is an engineering philosophy. Look at the daily touchpoints of a DevOps engineer, and make each one faster and calmer.',
      sections: [
        { heading: 'Where it comes from', paragraphs: ['DevOps work is a chain of small touchpoints: a terminal, a cluster, a password, a page of documentation. Each one is small. Together they decide how a day feels.', 'Soliton starts from that chain and builds tools for it, one touchpoint at a time.'] },
        { heading: 'How we build', items: ['Focused: each tool does one job well instead of becoming a platform you have to learn.', 'Fast: speed is a feature. Tools open instantly and stay out of the way.', 'Respectful: no tracking, and your data stays yours by default.', 'Honest: we show the real status of every product and announce nothing before it exists.'] },
        { heading: 'Who is behind it', paragraphs: ['Soliton is an independent project created by a DevOps engineer and developed in the open. You can reach us through the contact page.'] },
      ],
    },
    'open-source': {
      title: 'Open source',
      description: 'How Soliton develops software in the open: licence, contribution rules, security practices and trademark.',
      lead: 'Soliton Rudder is developed in the open under the Apache License 2.0.',
      sections: [
        { heading: 'Licences', paragraphs: ['Soliton Rudder uses the Apache License 2.0. Every other product will state its licence when it is announced; that has not been decided for all of them yet.'] },
        { heading: 'How we work', items: ['Conventional Commits and a Developer Certificate of Origin sign-off on every commit.', 'Automated checks on every change: tests, linting, vulnerability scanning and dependency review.', 'Releases that ship with checksums, a software bill of materials and build provenance.', 'A public security policy, governance notes and a code of conduct.'] },
        { heading: 'Contributing', paragraphs: ['Issues and pull requests are welcome once a repository is public. Each repository explains how to contribute in its CONTRIBUTING file. Follow the organisation on GitHub to see new repositories as they open.'] },
        { heading: 'Names and logos', paragraphs: ['The Soliton name and logo are not covered by the open-source licences. Soliton is an independent project and is not affiliated with or endorsed by the Cloud Native Computing Foundation or the Kubernetes project. See the brand page for usage guidance.'] },
      ],
    },
    security: {
      title: 'Security',
      description: 'How to report a security vulnerability in a Soliton product, what to expect, and what is in scope.',
      lead: 'If you find a security problem in a Soliton product, please tell us privately so we can fix it before it is public.',
      sections: [
        { heading: 'Reporting a vulnerability', paragraphs: ['Please do not open a public issue. Use GitHub’s private vulnerability reporting on the affected repository: Security tab, then “Report a vulnerability”. Include the affected version, the impact, and steps to reproduce.'] },
        { heading: 'What to expect', items: ['Acknowledgement within 5 working days and a first assessment within 10 working days.', 'A fix or mitigation for confirmed high-severity issues within 30 days where technically possible.', 'Coordinated disclosure: an advisory is published together with the fixed release, and we ask for at most 90 days before disclosure.', 'Credit in the advisory unless you prefer to stay anonymous.'] },
        { heading: 'Good faith', paragraphs: ['Research that follows this policy, without accessing other people’s data, disrupting services or disclosing before a fix, will not be met with legal action.'] },
        { heading: 'Supported versions', paragraphs: ['While a product is before version 1.0, security fixes are provided for the latest release only.'] },
      ],
    },
    brand: {
      title: 'Brand',
      description: 'The Soliton logo, colours and usage guidance for press and community.',
      lead: 'Use these assets to write about Soliton or to link to it.',
      sections: [
        { heading: 'Logo', paragraphs: ['The Soliton mark is a white geometric serpent head on a near-black square. Download it with the links above. A vector version will be added.'] },
        { heading: 'Colours', items: ['Near-black: #050506', 'White: #FAFAFA', 'Signal (accent): #5CC8FF'] },
        { heading: 'Please do', items: ['Keep clear space around the mark and use it at 32 px or larger.', 'Write the name as “Soliton”, and products as “Soliton Rudder”, “Soliton Term”, “Soliton Pass” and “Soliton Wiki”.'] },
        { heading: 'Please do not', items: ['Recolour, stretch, rotate or add effects to the mark.', 'Use the name or logo in a way that suggests endorsement or affiliation.', 'Use them for a different product or company name.'] },
      ],
    },
    privacy: {
      title: 'Privacy',
      description: 'What data the Soliton website and products collect. Short version: none by us.',
      lead: 'Short version: we do not collect personal data through this website or through Soliton Rudder.',
      sections: [
        { heading: 'This website', paragraphs: ['This site sets no cookies and uses no analytics, advertising, third-party scripts, fonts or trackers.', 'It is hosted on GitHub Pages, so GitHub processes standard server logs such as IP addresses when you load a page, as described in GitHub’s own privacy statement. We do not receive that data.'] },
        { heading: 'Our products', paragraphs: ['Soliton Rudder has no telemetry and requires no account. Credentials stay in your kubeconfig or in the macOS Keychain. Each future product will publish its own privacy statement before release.'] },
        { heading: 'If you contact us', paragraphs: ['Anything you send us is used only to reply and to improve the project. We do not sell or share it. Public issues and discussions on GitHub are public by nature.'] },
        { heading: 'Changes', paragraphs: ['We will update this page if our practices change.'] },
      ],
    },
    contact: {
      title: 'Contact',
      description: 'How to reach Soliton: GitHub for questions and bugs, private reporting for security, and social links.',
      lead: 'Pick the channel that fits, so the right person sees it quickly.',
      sections: [
        { heading: 'Bugs, questions and ideas', paragraphs: ['Open an issue or start a discussion on the relevant repository on GitHub. It is public, searchable and helps others with the same question.'] },
        { heading: 'Security', paragraphs: ['Please report vulnerabilities privately, following the security page. Do not post them publicly.'] },
        { heading: 'General, press and partnerships', paragraphs: ['A dedicated project address will be published here soon. Until then, reach us through GitHub or the profiles below.'] },
      ],
    },
  },
  tr: {
    about: {
      title: 'Hakkında',
      description: 'Soliton bir mühendislik felsefesidir: günlük temas noktalarını daha hızlı ve sakin hâle getirmek için bir DevOps mühendisinin bakış açısıyla geliştirilen araçlar.',
      lead: 'Soliton bir mühendislik felsefesidir. Bir DevOps mühendisinin günlük temas noktalarına bakın ve her birini daha hızlı, daha sakin hâle getirin.',
      sections: [
        { heading: 'Nereden çıktı', paragraphs: ['DevOps işi küçük temas noktalarından oluşan bir zincirdir: bir terminal, bir cluster, bir parola, bir sayfa dokümantasyon. Her biri küçüktür. Birlikte bir günün nasıl geçeceğini belirlerler.', 'Soliton bu zincirden yola çıkar ve her seferinde bir temas noktası için araç geliştirir.'] },
        { heading: 'Nasıl geliştiriyoruz', items: ['Odaklı: her araç, öğrenmeniz gereken bir platforma dönüşmek yerine tek bir işi iyi yapar.', 'Hızlı: hız bir özelliktir. Araçlar anında açılır ve yolunuzdan çekilir.', 'Saygılı: izleme yok, verileriniz varsayılan olarak sizde kalır.', 'Dürüst: her ürünün gerçek durumunu gösteririz ve var olmayan hiçbir şeyi duyurmayız.'] },
        { heading: 'Arkasında kim var', paragraphs: ['Soliton, bir DevOps mühendisi tarafından oluşturulan ve açıkta geliştirilen bağımsız bir projedir. Bize iletişim sayfasından ulaşabilirsiniz.'] },
      ],
    },
    'open-source': {
      title: 'Açık kaynak',
      description: 'Soliton’ın yazılımı açıkta nasıl geliştirdiği: lisans, katkı kuralları, güvenlik uygulamaları ve marka.',
      lead: 'Soliton Rudder, Apache License 2.0 altında açıkta geliştirilir.',
      sections: [
        { heading: 'Lisanslar', paragraphs: ['Soliton Rudder, Apache License 2.0 kullanır. Diğer her ürün duyurulduğunda lisansını belirtecek; bu henüz hepsi için kararlaştırılmadı.'] },
        { heading: 'Nasıl çalışıyoruz', items: ['Her commit’te Conventional Commits ve Developer Certificate of Origin imzası.', 'Her değişiklikte otomatik kontroller: testler, lint, güvenlik açığı taraması ve bağımlılık incelemesi.', 'Sağlama toplamları, yazılım malzeme listesi ve derleme kanıtıyla yayımlanan sürümler.', 'Herkese açık bir güvenlik politikası, yönetişim notları ve davranış kuralları.'] },
        { heading: 'Katkı', paragraphs: ['Bir repo herkese açık olduğunda issue’lar ve pull request’ler memnuniyetle karşılanır. Her repo, CONTRIBUTING dosyasında nasıl katkı verileceğini anlatır. Yeni repoları açıldıkça görmek için organizasyonu GitHub’da takip edin.'] },
        { heading: 'İsimler ve logolar', paragraphs: ['Soliton adı ve logosu açık kaynak lisanslarının kapsamında değildir. Soliton bağımsız bir projedir; Cloud Native Computing Foundation ya da Kubernetes projesiyle bağlantılı değildir ve onlar tarafından onaylanmamıştır. Kullanım rehberi için marka sayfasına bakın.'] },
      ],
    },
    security: {
      title: 'Güvenlik',
      description: 'Bir Soliton ürününde güvenlik açığı nasıl bildirilir, ne beklenmeli ve kapsam nedir.',
      lead: 'Bir Soliton ürününde güvenlik sorunu bulursanız, kamuya açılmadan düzeltebilmemiz için lütfen bize özel olarak bildirin.',
      sections: [
        { heading: 'Açık nasıl bildirilir', paragraphs: ['Lütfen herkese açık bir issue açmayın. Etkilenen repoda GitHub’ın özel güvenlik açığı bildirimini kullanın: Security sekmesi, ardından “Report a vulnerability”. Etkilenen sürümü, etkisini ve yeniden üretme adımlarını ekleyin.'] },
        { heading: 'Ne beklemelisiniz', items: ['5 iş günü içinde alındı bilgisi, 10 iş günü içinde ilk değerlendirme.', 'Doğrulanmış yüksek önemdeki sorunlar için teknik olarak mümkünse 30 gün içinde düzeltme ya da hafifletme.', 'Koordineli ifşa: düzeltilmiş sürümle birlikte bir advisory yayımlanır ve ifşadan önce en fazla 90 gün bekleme rica ederiz.', 'İsimsiz kalmayı tercih etmiyorsanız advisory’de teşekkür.'] },
        { heading: 'İyi niyet', paragraphs: ['Bu politikaya uyan araştırmalar (başkalarının verisine erişmeden, hizmeti aksatmadan ve düzeltme öncesi ifşa etmeden) hukuki işlemle karşılanmaz.'] },
        { heading: 'Desteklenen sürümler', paragraphs: ['Bir ürün 1.0 sürümünden önceyken güvenlik düzeltmeleri yalnızca en son sürüm için sağlanır.'] },
      ],
    },
    brand: {
      title: 'Marka',
      description: 'Soliton logosu, renkleri ve basın ile topluluk için kullanım rehberi.',
      lead: 'Soliton hakkında yazmak ya da bağlantı vermek için bu varlıkları kullanabilirsiniz.',
      sections: [
        { heading: 'Logo', paragraphs: ['Soliton işareti, siyaha yakın bir kare üzerinde beyaz, geometrik bir yılan başıdır. Yukarıdaki bağlantılardan indirebilirsiniz. Vektör sürümü eklenecek.'] },
        { heading: 'Renkler', items: ['Siyaha yakın: #050506', 'Beyaz: #FAFAFA', 'Sinyal (vurgu): #5CC8FF'] },
        { heading: 'Lütfen yapın', items: ['İşaretin etrafında boşluk bırakın ve 32 px veya daha büyük kullanın.', 'Adı “Soliton”, ürünleri “Soliton Rudder”, “Soliton Term”, “Soliton Pass” ve “Soliton Wiki” olarak yazın.'] },
        { heading: 'Lütfen yapmayın', items: ['İşaretin rengini değiştirmeyin, esnetmeyin, döndürmeyin, efekt eklemeyin.', 'Adı ya da logoyu onay veya bağlantı izlenimi verecek şekilde kullanmayın.', 'Bunları farklı bir ürün ya da şirket adı için kullanmayın.'] },
      ],
    },
    privacy: {
      title: 'Gizlilik',
      description: 'Soliton web sitesi ve ürünlerinin hangi verileri topladığı. Kısaca: bizim tarafımızdan hiçbiri.',
      lead: 'Kısaca: bu web sitesi ve Soliton Rudder aracılığıyla kişisel veri toplamıyoruz.',
      sections: [
        { heading: 'Bu web sitesi', paragraphs: ['Bu site çerez bırakmaz; analitik, reklam, üçüncü taraf script, font veya izleyici kullanmaz.', 'GitHub Pages üzerinde barındırılır; bu nedenle bir sayfayı yüklediğinizde IP adresi gibi standart sunucu kayıtlarını GitHub, kendi gizlilik bildiriminde anlatıldığı şekilde işler. Bu verileri biz almayız.'] },
        { heading: 'Ürünlerimiz', paragraphs: ['Soliton Rudder’da telemetri yoktur ve hesap gerekmez. Kimlik bilgileri kubeconfig’inizde ya da macOS Keychain’de kalır. Gelecekteki her ürün, yayımlanmadan önce kendi gizlilik bildirimini yayımlayacak.'] },
        { heading: 'Bize ulaşırsanız', paragraphs: ['Bize gönderdiğiniz her şey yalnızca yanıt vermek ve projeyi geliştirmek için kullanılır. Satılmaz ya da paylaşılmaz. GitHub’daki herkese açık issue ve tartışmalar doğaları gereği herkese açıktır.'] },
        { heading: 'Değişiklikler', paragraphs: ['Uygulamalarımız değişirse bu sayfayı güncelleriz.'] },
      ],
    },
    contact: {
      title: 'İletişim',
      description: 'Soliton’a nasıl ulaşılır: sorular ve hatalar için GitHub, güvenlik için özel bildirim ve sosyal bağlantılar.',
      lead: 'Doğru kişinin hızlıca görmesi için size uygun kanalı seçin.',
      sections: [
        { heading: 'Hatalar, sorular ve fikirler', paragraphs: ['GitHub’da ilgili repoda bir issue açın ya da tartışma başlatın. Herkese açıktır, aranabilir ve aynı soruyu soran diğer kişilere de yardımcı olur.'] },
        { heading: 'Güvenlik', paragraphs: ['Güvenlik açıklarını lütfen güvenlik sayfasındaki adımlarla özel olarak bildirin. Herkese açık paylaşmayın.'] },
        { heading: 'Genel, basın ve ortaklıklar', paragraphs: ['Yakında burada özel bir proje adresi yayımlanacak. O zamana kadar bize GitHub ya da aşağıdaki profiller üzerinden ulaşabilirsiniz.'] },
      ],
    },
  },
};

export const pageUi: Record<Locale, Record<string, string>> = {
  en: {
    download: 'Download',
    logoAlt: 'Soliton logo: a white geometric serpent head on a dark square',
    emailLabel: 'Email',
    github: 'GitHub organisation',
    linkedin: 'LinkedIn',
    bluesky: 'Bluesky',
    profiles: 'Profiles',
    updated: 'Last updated',
    sizeOriginal: 'PNG, original (868 px)',
    size512: 'PNG, 512 px',
    size256: 'PNG, 256 px',
    colour: 'Colour',
    downloads: 'Downloads',
    near: 'Near-black',
    white: 'White',
    signal: 'Signal',
    accent: 'accent',
    svgPlanned: 'SVG · planned',
  },
  tr: {
    download: 'İndir',
    logoAlt: 'Soliton logosu: koyu bir kare üzerinde beyaz geometrik bir yılan başı',
    emailLabel: 'E-posta',
    github: 'GitHub organizasyonu',
    linkedin: 'LinkedIn',
    bluesky: 'Bluesky',
    profiles: 'Profiller',
    updated: 'Son güncelleme',
    sizeOriginal: 'PNG, orijinal (868 px)',
    size512: 'PNG, 512 px',
    size256: 'PNG, 256 px',
    colour: 'Renk',
    downloads: 'İndirmeler',
    near: 'Siyaha yakın',
    white: 'Beyaz',
    signal: 'Sinyal',
    accent: 'vurgu',
    svgPlanned: 'SVG · planlanıyor',
  },
};
