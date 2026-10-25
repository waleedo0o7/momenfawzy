# Momen Fawzy Interior Design

Production-ready static website for Momen Fawzy Interior Design, including the homepage, studio
profile, services, verified project portfolio, YouTube media gallery, contact page, and QR contact
tree.

## Requirements

- Node.js 22.22.3+, 24.16.0+, or 26.3.0+ (use an active LTS line)
- npm 10 or newer

## Commands

| Command                | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| `npm install`          | Install locked dependencies                    |
| `npm run dev`          | Start the local development server             |
| `npm run typecheck`    | Validate Astro templates and strict TypeScript |
| `npm run lint`         | Run ESLint                                     |
| `npm run format`       | Format supported files                         |
| `npm run format:check` | Verify formatting without changing files       |
| `npm run build`        | Generate the static production build in `dist` |
| `npm run preview`      | Preview the production build locally           |
| `npm run validate`     | Run the complete quality gate                  |

## Production URL

The approved production origin is `https://momenfawzy.com`. Canonical URLs and the sitemap use this
origin by default. `SITE_URL` can override it for a different deployment.

## Content boundary

Projects and media use typed Astro content collections under `src/content`. Application code should
read them through `src/lib/content`, keeping presentation independent from the storage mechanism and
reducing the cost of a future CMS migration.

## Routes

- `/`
- `/about/`
- `/services/`
- `/projects/`
- `/media-center/`
- `/contact/`
- `/contact-tree/` (QR utility page, intentionally excluded from search indexing)
- `/projects/[slug]/` for non-draft entries in the Projects collection

Public marketing pages are indexable. Project detail routes are generated only for verified,
published projects.

## Homepage content

The homepage reads verified featured projects and published media through `src/lib/content`. All
production-facing architectural imagery is sourced from the approved project asset library. The
founder portrait is processed by Astro from the local source asset.

## Deployment

Run `npm run validate`, then upload the contents of `dist/` to the hosting document root (commonly
`public_html/`). The production output is fully static and does not require Node.js on the server.
The generated `.htaccess` assigns one-year immutable caching to Astro's fingerprinted `/_astro/`
assets, revalidates HTML on every visit, and enables text compression when the corresponding Apache
modules are available. Upload hidden files so this configuration reaches the document root.

## Typography

The provisional display and body families are self-hosted variable builds of Cormorant Garamond and
Manrope. Both are OFL-licensed and limited to their Latin subsets. Their semantic family tokens can
be replaced centrally in `src/styles/tokens.css` after final brand approval.
