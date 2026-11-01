import type { Locale } from './ui';

export interface FaqLink { label: string; href: string }
export interface FaqItem { q: string; a: string; links?: FaqLink[] }
export interface FaqCopy { eyebrow: string; title: string; lead: string; items: FaqItem[] }

/** Answers come from the tools' own documentation (install guides, SECURITY.md, privacy notes). Links are site-relative. */
export const faq: Record<Locale, FaqCopy> = {
  en: {
    eyebrow: 'FAQ',
    title: 'Before you install.',
    lead: 'The questions we would ask first.',
    items: [
      {
        q: 'Why does macOS warn me the first time I open a tool?',
        a: 'Neither tool is signed with an Apple Developer ID or notarized yet, so macOS Gatekeeper asks you to confirm the first launch. This is expected and does not mean the file is damaged. Each product page shows how to open the app, and you can verify the download first. Notarized builds are on both roadmaps.',
        links: [{ label: 'Verify your download', href: '/verify/' }],
      },
      {
        q: 'Do the tools send my data anywhere?',
        a: 'Soliton Rudder has no telemetry, no analytics, no account and no cloud service; it talks to your clusters, and a plugin can use the network only if you grant it. Soliton Term has no accounts, no telemetry and no network client of its own; connections go through your system’s OpenSSH. This website sets no cookies and uses no analytics or third-party scripts.',
        links: [{ label: 'Privacy', href: '/privacy/' }],
      },
      {
        q: 'How do I know a download is genuine?',
        a: 'Every release ships a SHA-256 checksum, a build provenance attestation and a software bill of materials. The guide walks through all three with copy-paste commands.',
        links: [{ label: 'Verify your download', href: '/verify/' }],
      },
      {
        q: 'Which platforms are supported?',
        a: 'Both tools run on macOS 12 or later, on Apple silicon and Intel. There are no Linux or Windows builds yet; Linux is planned for Soliton Rudder.',
      },
      {
        q: 'Are the tools free and open source?',
        a: 'Soliton Rudder and Soliton Term are open source under the Apache License 2.0 and developed in the open. The Soliton name and logo are not covered by that license.',
        links: [{ label: 'Open source', href: '/open-source/' }],
      },
      {
        q: 'Where do I report a bug or a security problem?',
        a: 'Open an issue or start a discussion on the tool’s GitHub repository. For security problems use the private advisory form of that repository instead of a public issue.',
        links: [{ label: 'Security', href: '/security/' }, { label: 'Contact', href: '/contact/' }],
      },
    ],
  },
  tr: {
    eyebrow: 'SSS',
    title: 'Kurmadan önce.',
    lead: 'İlk bizim soracağımız sorular.',
    items: [
      {
        q: 'macOS bir aracı ilk açışımda neden uyarıyor?',
        a: 'İki araç da henüz Apple Developer ID ile imzalı ya da notarize edilmiş değil; bu yüzden macOS Gatekeeper ilk açılışı onaylamanızı ister. Bu beklenen bir durumdur ve dosyanın bozuk olduğu anlamına gelmez. Her ürün sayfası uygulamayı nasıl açacağınızı gösterir, indirmeyi önce doğrulayabilirsiniz. Notarize edilmiş sürümler iki aracın yol haritasında da var.',
        links: [{ label: 'İndirmenizi doğrulayın', href: '/verify/' }],
      },
      {
        q: 'Araçlar verimi bir yere gönderiyor mu?',
        a: 'Soliton Rudder’da telemetri, analitik, hesap ve bulut servisi yok; cluster’larınızla konuşur ve bir eklenti ağı ancak siz izin verirseniz kullanabilir. Soliton Term’de hesap, telemetri ve kendi ağ istemcisi yok; bağlantılar sistemin OpenSSH’ından geçer. Bu web sitesi çerez bırakmaz, analitik ya da üçüncü taraf script kullanmaz.',
        links: [{ label: 'Gizlilik', href: '/privacy/' }],
      },
      {
        q: 'Bir indirmenin gerçek olduğunu nasıl anlarım?',
        a: 'Her sürüm bir SHA-256 sağlama toplamı, bir derleme kaynağı attestation’ı ve bir yazılım malzeme listesi (SBOM) ile gelir. Rehber üçünü de kopyala-yapıştır komutlarla anlatır.',
        links: [{ label: 'İndirmenizi doğrulayın', href: '/verify/' }],
      },
      {
        q: 'Hangi platformlar destekleniyor?',
        a: 'İki araç da macOS 12 veya üstünde, Apple silicon ve Intel’de çalışır. Henüz Linux ya da Windows sürümü yok; Linux, Soliton Rudder için planlanıyor.',
      },
      {
        q: 'Araçlar ücretsiz ve açık kaynak mı?',
        a: 'Soliton Rudder ve Soliton Term, Apache License 2.0 altında açık kaynaktır ve herkesin gözü önünde geliştirilir. Soliton adı ve logosu bu lisansın kapsamında değildir.',
        links: [{ label: 'Açık kaynak', href: '/open-source/' }],
      },
      {
        q: 'Bir hatayı ya da güvenlik sorununu nereye bildiririm?',
        a: 'Aracın GitHub deposunda bir issue açın ya da tartışma başlatın. Güvenlik sorunları için herkese açık issue yerine o deponun özel advisory formunu kullanın.',
        links: [{ label: 'Güvenlik', href: '/security/' }, { label: 'İletişim', href: '/contact/' }],
      },
    ],
  },
};
