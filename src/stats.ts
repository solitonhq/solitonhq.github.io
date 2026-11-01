/**
 * Public GitHub numbers, fetched once at build time so visitors' browsers never talk to a
 * third party. The deploy workflow rebuilds daily to keep them fresh. If GitHub cannot be
 * reached the numbers are simply left out; nothing here may break the build.
 */
export interface RepoStats { stars: number; downloads: number }

const org = 'solitonhq';
const headers: Record<string, string> = { Accept: 'application/vnd.github+json', 'User-Agent': 'solitonhq-site-build' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`https://api.github.com${path}`, { headers, signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return res.json() as Promise<T>;
}

async function load(repo: string): Promise<RepoStats | null> {
  try {
    const [info, releases] = await Promise.all([
      get<{ stargazers_count: number }>(`/repos/${org}/${repo}`),
      get<{ draft: boolean; assets: { name: string; download_count: number }[] }[]>(`/repos/${org}/${repo}/releases?per_page=100`),
    ]);
    // Only the installers count; checksums and SBOMs are fetched by people verifying a download.
    const downloads = releases
      .filter((r) => !r.draft)
      .flatMap((r) => r.assets)
      .filter((a) => /\.(dmg|zip|pkg|exe|msi|AppImage|deb|rpm)$/i.test(a.name))
      .reduce((sum, a) => sum + a.download_count, 0);
    return { stars: info.stargazers_count, downloads };
  } catch (e) {
    console.warn(`[stats] ${repo}: ${(e as Error).message}`);
    return null;
  }
}

const cache = new Map<string, Promise<RepoStats | null>>();
/** `soliton-rudder` style repo name, or null when unavailable. */
export function repoStats(repo: string | undefined): Promise<RepoStats | null> {
  if (!repo) return Promise.resolve(null);
  const name = repo.split('/').pop()!;
  if (!cache.has(name)) cache.set(name, load(name));
  return cache.get(name)!;
}
