import type { Locale } from './ui';

export interface VerifyCopy {
  title: string;
  description: string;
  lead: string;
  steps: { title: string; body: string }[];
  commandsTitle: string;
  commandsLead: string;
  releases: string;
}

export const verify: Record<Locale, VerifyCopy> = {
  en: {
    title: 'Verify your download',
    description: 'How to check that a Soliton download is the file we built: SHA-256 checksum, build provenance attestation and SBOM.',
    lead: 'Every Soliton release ships three ways to check that the file you downloaded is the one we built. It takes a minute and works the same for every tool.',
    steps: [
      { title: 'Download the DMG and its checksum', body: 'From the Releases page, download the DMG for your Mac and the matching .sha256 file into the same folder.' },
      { title: 'Check the checksum', body: 'The command should print OK. Anything else means the file changed after it was published: delete it and download it again.' },
      { title: 'Check the build attestation', body: 'This ties the file to the exact commit and workflow that built it. It needs the GitHub CLI (brew install gh) and a one-time gh auth login, even for public repositories. A successful check ends with “Verification succeeded!”.' },
      { title: 'Inspect the SBOM (optional)', body: 'The CycloneDX file lists every component in the build. Open it with any CycloneDX tool, or count the entries with jq.' },
      { title: 'If a check fails', body: 'Do not open the app. Download the file again from the Releases page. If it still fails, report it privately through the security advisory form of that repository, not as a public issue.' },
    ],
    commandsTitle: 'Commands',
    commandsLead: 'Run these in Terminal from the folder that holds the download, usually Downloads.',
    releases: 'Releases',
  },
  tr: {
    title: 'İndirmenizi doğrulayın',
    description: 'Bir Soliton indirmesinin bizim derlediğimiz dosya olduğunu nasıl kontrol edeceğiniz: SHA-256 sağlama toplamı, derleme kaynağı attestation’ı ve SBOM.',
    lead: 'Her Soliton sürümü, indirdiğiniz dosyanın bizim derlediğimiz dosya olduğunu kontrol etmeniz için üç yol sunar. Bir dakika sürer ve her araç için aynı şekilde çalışır.',
    steps: [
      { title: 'DMG’yi ve sağlama toplamı dosyasını indirin', body: 'Releases sayfasından Mac’inize uygun DMG’yi ve ona ait .sha256 dosyasını aynı klasöre indirin.' },
      { title: 'Sağlama toplamını kontrol edin', body: 'Komut OK yazdırmalı. Başka bir sonuç, dosyanın yayınlandıktan sonra değiştiği anlamına gelir: silin ve yeniden indirin.' },
      { title: 'Derleme attestation’ını kontrol edin', body: 'Bu, dosyayı onu derleyen commit ve iş akışına bağlar. GitHub CLI (brew install gh) ve bir kerelik gh auth login gerekir; herkese açık depolar için bile. Başarılı kontrol “Verification succeeded!” ile biter.' },
      { title: 'SBOM’u inceleyin (isteğe bağlı)', body: 'CycloneDX dosyası derlemedeki her bileşeni listeler. Herhangi bir CycloneDX aracıyla açın ya da kayıtları jq ile sayın.' },
      { title: 'Bir kontrol başarısız olursa', body: 'Uygulamayı açmayın. Dosyayı Releases sayfasından yeniden indirin. Yine başarısız olursa herkese açık issue olarak değil, o deponun güvenlik advisory formundan özel olarak bildirin.' },
    ],
    commandsTitle: 'Komutlar',
    commandsLead: 'Bunları Terminal’de, indirmenin bulunduğu klasörden (genellikle Downloads) çalıştırın.',
    releases: 'Releases',
  },
};
