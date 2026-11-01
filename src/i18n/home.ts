import type { Locale } from './ui';

export interface HomeCopy {
  eyebrow: string;
  lead: string;
  ctaTools: string;
  ctaGithub: string;
  shotLabel: string;
  toolsLabel: string;
  chapter: {
    getIt: string;
    stayOnWave: string;
    howNotify: string;
    watchGithub: string;
    followGithub: string;
    teaserLabel: string;
    teaserFoot: string;
    teaserFootHint: string;
    screensLabel: string;
    demoNote: string;
    swipe: string;
    detailsLabel: string;
    incomingWord: string;
  };
  approach: { eyebrow: string; title: string; lead: string; pillars: { title: string; body: string }[]; diagramAlt: string };
  notify: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: { title: string; body: string }[];
    follow: string;
    watch: string;
    note: string;
  };
  incoming: { eyebrow: string; title: string; lead: string };
  oss: { body: string };
  product: { back: string; moreTools: string; viewDetails: string; allProducts: string };
}

export const home: Record<Locale, HomeCopy> = {
  en: {
    eyebrow: 'A DevOps engineer’s toolkit',
    lead: 'Soliton is a set of focused tools for the places where DevOps work meets software: your terminal, your clusters, your secrets and your team’s knowledge.',
    ctaTools: 'Explore the tools',
    ctaGithub: 'View on GitHub',
    shotLabel: 'Now shipping',
    toolsLabel: 'Soliton tools',
    chapter: {
      getIt: 'Get it',
      stayOnWave: 'Stay on the wave',
      howNotify: 'How notifications work',
      watchGithub: 'Watch on GitHub',
      followGithub: 'Follow Soliton on GitHub',
      teaserLabel: 'is not released yet',
      teaserFoot: 'signal',
      teaserFootHint: 'follow on GitHub for launch news',
      screensLabel: 'screens',
      swipe: 'Swipe sideways to explore',
      demoNote: 'Screens come from a local demo cluster with sample workloads. No real data is shown.',
      detailsLabel: 'Details',
      incomingWord: 'incoming',
    },
    approach: {
      eyebrow: 'Approach',
      title: 'A wave that keeps its shape.',
      lead: 'In physics, a soliton is a single wave that travels without fading or spreading. That is the standard we hold every tool to: stay focused, stay fast, and arrive intact.',
      pillars: [
        { title: 'Focused', body: 'Each tool does one job, instead of becoming a platform you have to learn.' },
        { title: 'Fast', body: 'Speed is a feature. Tools open instantly and stay out of the way.' },
        { title: 'Respectful of your data', body: 'No tracking, no surprises. Your data stays with you by default.' },
      ],
      diagramAlt: 'A single pulse travelling along a flat line',
    },
    notify: {
      eyebrow: 'Stay on the wave',
      title: 'Be the first to know when a tool lands.',
      lead: 'GitHub does the notifying: no newsletter, no tracking, no account with us.',
      steps: [
        { title: 'Open the repository', body: 'Soliton Rudder has one today. New tools get theirs at launch.' },
        { title: 'Choose Watch → Custom', body: 'Use the Watch menu at the top right.' },
        { title: 'Tick Releases', body: 'You will be notified the moment a release is published.' },
      ],
      follow: 'Follow Soliton on GitHub',
      watch: 'Watch',
      note: 'New tools get their own repository when they launch. Follow the organisation to see them appear.',
    },
    incoming: {
      eyebrow: 'Incoming',
      title: 'More tools are on the way.',
      lead: 'Each does one job. Follow Soliton on GitHub to hear when one lands.',
    },
    oss: { body: 'Soliton is developed publicly. Issues and pull requests are welcome.' },
    product: { back: 'All products', moreTools: 'More Soliton tools', viewDetails: 'View details', allProducts: 'All products' },
  },
  tr: {
    eyebrow: 'Bir DevOps mühendisinin araç seti',
    lead: 'Soliton, DevOps işinin yazılımla buluştuğu noktalar için odaklı araçlar bütünüdür: terminaliniz, cluster’larınız, sırlarınız ve ekibinizin bilgisi.',
    ctaTools: 'Araçları keşfet',
    ctaGithub: 'GitHub’da görüntüle',
    shotLabel: 'Şimdi yayında',
    toolsLabel: 'Soliton araçları',
    chapter: {
      getIt: 'İndir',
      stayOnWave: 'Dalgada kal',
      howNotify: 'Bildirimler nasıl çalışır',
      watchGithub: 'GitHub’da izle',
      followGithub: 'Soliton’u GitHub’da takip et',
      teaserLabel: 'henüz yayında değil',
      teaserFoot: 'sinyal',
      teaserFootHint: 'duyurular için GitHub’da takip edin',
      screensLabel: 'ekranlar',
      swipe: 'Kaydırarak inceleyin',
      demoNote: 'Ekranlar, örnek iş yükleri olan yerel bir demo cluster’dan alınmıştır. Gerçek veri gösterilmez.',
      detailsLabel: 'Ayrıntılar',
      incomingWord: 'yolda',
    },
    approach: {
      eyebrow: 'Yaklaşım',
      title: 'Şeklini koruyan bir dalga.',
      lead: 'Fizikte soliton, sönmeden ve yayılmadan ilerleyen tek bir dalgadır. Her araçtan beklediğimiz standart bu: odaklı kal, hızlı kal ve bozulmadan ulaş.',
      pillars: [
        { title: 'Odaklı', body: 'Her araç tek bir iş yapar; öğrenmeniz gereken bir platforma dönüşmez.' },
        { title: 'Hızlı', body: 'Hız bir özelliktir. Araçlar anında açılır ve yolunuzdan çekilir.' },
        { title: 'Verinize saygılı', body: 'İzleme yok, sürpriz yok. Verileriniz varsayılan olarak sizde kalır.' },
      ],
      diagramAlt: 'Düz bir çizgi boyunca ilerleyen tek bir darbe',
    },
    notify: {
      eyebrow: 'Dalgada kal',
      title: 'Bir araç çıktığında ilk siz öğrenin.',
      lead: 'Bildirimi GitHub yapar: bülten yok, izleme yok, bizde hesap yok.',
      steps: [
        { title: 'Repoyu açın', body: 'Bugün Soliton Rudder’ın var. Yeni araçların repoları çıkışta açılır.' },
        { title: 'Watch → Custom seçin', body: 'Sağ üstteki Watch menüsünü kullanın.' },
        { title: 'Releases’i işaretleyin', body: 'Bir sürüm yayınlandığı anda bildirim alırsınız.' },
      ],
      follow: 'Soliton’u GitHub’da takip et',
      watch: 'İzle',
      note: 'Yeni araçlar çıktıklarında kendi repolarıyla gelir. Organizasyonu takip edin, ortaya çıktıklarını görün.',
    },
    incoming: {
      eyebrow: 'Yolda',
      title: 'Daha fazla araç yolda.',
      lead: 'Her biri tek bir iş yapar. Biri çıktığında haberdar olmak için Soliton’u GitHub’da takip edin.',
    },
    oss: { body: 'Soliton herkesin gözü önünde geliştirilir. Issue ve pull request’ler memnuniyetle karşılanır.' },
    product: { back: 'Tüm ürünler', moreTools: 'Diğer Soliton araçları', viewDetails: 'Ayrıntıları gör', allProducts: 'Tüm ürünler' },
  },
};
