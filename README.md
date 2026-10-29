# solitonhq.github.io

Source of the Soliton website, published at <https://solitonhq.github.io>.

Static site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), in English (`/`) and Turkish (`/tr/`).

## Development

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev       # http://localhost:4321
npm run check     # type-check
npm run build     # static output in dist/
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/i18n/ui.ts` | UI strings for both languages and locale helpers |
| `src/pages/` | English pages; Turkish pages mirror them under `src/pages/tr/` |
| `src/components/`, `src/layouts/` | Shared building blocks |
| `public/` | Static assets served as-is |
| `assets/brand/` | Brand source files |

Every page must exist in both languages. The site loads no third-party scripts, fonts or trackers.

## Contributing

Use [Conventional Commits](https://www.conventionalcommits.org) and sign off every commit (`git commit -s`).

## License

Code is released under the Apache License 2.0 (see `LICENSE`). The Soliton name and logo are not covered by that license.
