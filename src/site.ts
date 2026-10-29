/** Single source of truth for links and contact details used across the site. */
export const site = {
  name: 'Soliton',
  githubOrg: 'https://github.com/solitonhq',
  rudderRepo: 'https://github.com/solitonhq/soliton-rudder',
  rudderReleases: 'https://github.com/solitonhq/soliton-rudder/releases',
  rudderInstallGuide: 'https://github.com/solitonhq/soliton-rudder/blob/main/docs/INSTALL.md#opening-an-unsigned-build',
  /** Dedicated project address. Leave null until it exists; the contact page adapts. */
  email: null as string | null,
  social: {
    linkedin: 'https://www.linkedin.com/in/merthan-telli-915951127',
    bluesky: 'https://bsky.app/profile/davidhayter.bsky.social',
  },
  lastUpdated: '2026-10-29',
} as const;
