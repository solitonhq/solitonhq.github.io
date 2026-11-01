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
    notifyCta: string;
    followGithub: string;
    teaserLabel: string;
    teaserFoot: string;
    teaserFootHint: string;
    screensLabel: string;
    detailsLabel: string;
    incomingWord: string;
  };
  approach: { eyebrow: string; title: string; lead: string; pillars: { title: string; body: string }[]; diagramAlt: string };
  brand: {
    eyebrow: string;
    title: string;
    lead: string;
    colour: string;
    downloads: string;
    near: string;
    white: string;
    signal: string;
    proposed: string;
    svgPlanned: string;
    logoAlt: string;
    doTitle: string;
    dontTitle: string;
    dos: string[];
    donts: string[];
    full: string;
  };
  notify: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: { title: string; body: string }[];
    follow: string;
    watch: string;
    note: string;
  };
  oss: { eyebrow: string; title: string; body: string };
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
      notifyCta: 'Notify me when it lands',
      followGithub: 'Follow on GitHub',
      teaserLabel: 'is not released yet',
      teaserFoot: 'signal',
      teaserFootHint: 'notify me when it lands',
      screensLabel: 'screens',
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
    brand: {
      eyebrow: 'Brand',
      title: 'Quiet, sharp, unmistakable.',
      lead: 'Everything you need to write about Soliton or link to it.',
      colour: 'Colour',
      downloads: 'Downloads',
      near: 'Near-black',
      white: 'White',
      signal: 'Signal',
      proposed: 'accent',
      svgPlanned: 'SVG · planned',
      logoAlt: 'Soliton logo: a white geometric serpent head on near-black',
      doTitle: 'Do',
      dontTitle: 'Don’t',
      dos: ['Leave clear space; keep it above 32 px', 'Write “Soliton”, and “Soliton Rudder”, “Soliton Term”…'],
      donts: ['Recolour, stretch, rotate or add effects', 'Imply endorsement or affiliation'],
      full: 'Full brand guidelines',
    },
    notify: {
      eyebrow: 'Stay on the wave',
      title: 'Be the first to know when a tool lands.',
      lead: 'GitHub does the notifying: no newsletter, no tracking, no account with us.',
      steps: [
        { title: 'Open the repository', body: 'Go to the tool’s page on GitHub.' },
        { title: 'Choose Watch → Custom', body: 'Use the Watch menu at the top right.' },
        { title: 'Tick Releases', body: 'You will be notified the moment a release is published.' },
      ],
      follow: 'Follow Soliton on GitHub',
      watch: 'Watch',
      note: 'New tools get their own repository when they launch. Follow the organisation to see them appear.',
    },
    oss: {
      eyebrow: 'Built in the open',
      title: 'Read it. Run it. Fix it.',
      body: 'Soliton is developed publicly. Issues and pull requests are welcome.',
    },
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
      notifyCta: 'Çıkınca haber ver',
      followGithub: 'GitHub’da takip et',
      teaserLabel: 'henüz yayında değil',
      teaserFoot: 'sinyal',
      teaserFootHint: 'çıkınca haber ver',
      screensLabel: 'ekranlar',
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
    brand: {
      eyebrow: 'Marka',
      title: 'Sakin, keskin, ayırt edilebilir.',
      lead: 'Soliton hakkında yazmak ya da link vermek için ihtiyacınız olan her şey.',
      colour: 'Renk',
      downloads: 'İndirmeler',
      near: 'Siyaha yakın',
      white: 'Beyaz',
      signal: 'Sinyal',
      proposed: 'vurgu',
      svgPlanned: 'SVG · planlanıyor',
      logoAlt: 'Soliton logosu: siyaha yakın zeminde beyaz geometrik bir yılan başı',
      doTitle: 'Yapın',
      dontTitle: 'Yapmayın',
      dos: ['Etrafında boşluk bırakın; 32 px’in altına indirmeyin', '“Soliton”, “Soliton Rudder”, “Soliton Term” şeklinde yazın'],
      donts: ['Yeniden renklendirmeyin, esnetmeyin, döndürmeyin, efekt eklemeyin', 'Onay ya da bağlantı izlenimi vermeyin'],
      full: 'Marka rehberinin tamamı',
    },
    notify: {
      eyebrow: 'Dalgada kal',
      title: 'Bir araç çıktığında ilk siz öğrenin.',
      lead: 'Bildirimi GitHub yapar: bülten yok, izleme yok, bizde hesap yok.',
      steps: [
        { title: 'Repoyu açın', body: 'Aracın GitHub sayfasına gidin.' },
        { title: 'Watch → Custom seçin', body: 'Sağ üstteki Watch menüsünü kullanın.' },
        { title: 'Releases’i işaretleyin', body: 'Bir sürüm yayınlandığı anda bildirim alırsınız.' },
      ],
      follow: 'Soliton’u GitHub’da takip et',
      watch: 'İzle',
      note: 'Yeni araçlar çıktıklarında kendi repolarıyla gelir. Organizasyonu takip edin, ortaya çıktıklarını görün.',
    },
    oss: {
      eyebrow: 'Açıkta geliştirilir',
      title: 'Oku. Çalıştır. Düzelt.',
      body: 'Soliton herkesin gözü önünde geliştirilir. Issue ve pull request’ler memnuniyetle karşılanır.',
    },
  },
};
