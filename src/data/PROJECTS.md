# Projects content management

Project entries live exclusively in `src/content/projects/` and are queried through
`src/lib/content/index.ts`. Pages and presentation components must not introduce a competing project
data source.

## Required workflow

1. Add one Markdown or MDX file per project.
2. Store approved project photography in a descriptive folder under `src/assets/images/projects/`.
3. Reference local images from frontmatter so Astro can optimize them.
4. Keep `status: draft`, `verified: false`, and `demo: false` while content is being reviewed.
5. Set `verified: true` only after the project facts and photography are approved.
6. Set `status: published` only after verification. The schema rejects published demo or unverified
   entries.

Published routes use the explicit `slug` field. Slugs must be unique and use lowercase letters,
numbers, and hyphens. Duplicate slugs fail the build.

## Ordering, visibility, and featured projects

- Change `displayOrder` to reorder both the portfolio and next-project navigation.
- Use `status: draft` to hide a real project without deleting it.
- Set `featured: true` to make a verified published project eligible for the Homepage Featured
  Projects section.
- Delete the entry file to remove it permanently.
- Categories are free-text values. Filters are generated automatically, so adding or renaming a
  category requires no component changes.

## Optional information

`location`, `year`, `fullDescription`, `galleryImages`, and `specifications` are optional. Empty
sections are not rendered. `specifications` may only be present when `verified: true`; include only
confirmed area, scope, and services.

## Development-only demos

The files in `src/content/projects/demo/` are fictional visual fixtures. They use temporary Unsplash
imagery already stored in `src/assets/images/editorial-preview/` and documented in that folder's
README. Demo entries must remain `demo: true`, `verified: false`, and `status: draft`.

The content access layer exposes demos only during `astro dev`, and only when no verified published
projects exist. They never generate Project Details routes, never feed the Homepage, and are absent
from production output and sitemaps. Remove the entire `demo/` folder when approved projects arrive.
