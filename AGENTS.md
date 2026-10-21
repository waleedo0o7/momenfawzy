# Momen Fawzy Interior Design — Engineering Rules

## Scope

This repository is an Astro static website for Momen Fawzy Interior Design. Build incrementally and
do not add a database, authentication, dashboard, CMS, framework island, animation library, or
carousel library without an explicit requirement and a documented benefit.

## Architecture

- Keep Astro in static output mode. Pages must render without client-side JavaScript by default.
- Put routes in `src/pages`, shared page shells in `src/layouts`, and reusable presentation in
  `src/components`.
- Query content only through `src/lib/content`. Pages may call that access layer and pass typed data
  to components; presentation components must not call `astro:content` directly.
- Put pure, framework-independent helpers and constants in `src/utils`.
- Put global CSS and design tokens in `src/styles`. Consume semantic tokens instead of scattering
  color, typography, spacing, or motion values through components.
- Prefer Astro-managed local assets in `src/assets`; use `public` only when a stable, unprocessed URL
  is required.
- Keep abstractions proportional. Extract a component after reuse is clear or when it creates a
  meaningful semantic boundary.

## UI and content standards

- Use semantic landmarks and a logical heading hierarchy.
- All interactive controls must be keyboard accessible and have visible focus states.
- Images need useful alternative text, explicit dimensions, and responsive loading behavior.
- Respect `prefers-reduced-motion`; motion must communicate hierarchy or state, not decorate by
  default.
- Preserve the editorial direction: dark charcoal, warm neutrals, spacious rhythm, refined serif
  display type, and restrained motion. Do not introduce obvious 50/50 heroes or overlapping cards.
- Do not fabricate projects, claims, testimonials, awards, clients, statistics, or founder details.
- Keep copy in content collections or page data rather than embedding business content inside low-
  level UI primitives.

## Performance and SEO

- Do not use `client:*` directives unless interaction genuinely requires hydration.
- Prefer native browser behavior and small inline scripts over third-party runtime packages.
- Optimize media before shipping and use Astro image tooling where appropriate.
- Every finished indexable route needs a unique title, description, canonical URL, and suitable
  social metadata. Phase placeholders must remain `noindex`.
- Configure `SITE_URL` before production deployment so canonical URLs and the sitemap are generated.

## Quality gate

Before handing off a change, run:

```sh
npm run validate
```

This performs Astro/TypeScript checking, ESLint, Prettier verification, and a production build. Fix
errors rather than suppressing them. Add targeted tests when behavior becomes non-trivial.

## Change discipline

- Keep dependencies minimal and justify new production packages.
- Never commit secrets or local `.env` files; document new variables in `.env.example`.
- Preserve unrelated user changes and do not run destructive Git commands.
- Stop at the phase requested. Do not anticipate later pages with speculative UI or content.
