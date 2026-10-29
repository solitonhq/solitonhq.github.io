/** Single source of truth for links and contact details used across the site. */
export const site = {
  name: 'Soliton',
  githubOrg: 'https://github.com/solitonhq',
  /** Dedicated project address. Leave null until it exists; the contact page adapts. */
  email: null as string | null,
  social: {
    linkedin: 'https://www.linkedin.com/in/merthan-telli-915951127',
    bluesky: 'https://bsky.app/profile/davidhayter.bsky.social',
  },
  lastUpdated: '2026-10-29',
} as const;
