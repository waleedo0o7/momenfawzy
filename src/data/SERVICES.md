# Provisional services content

`services.ts` is the single editable source for the Services page. The current service names,
descriptions, capabilities, workflow, and imagery are development drafts and are not approved
contractual commitments.

## Editing services

- Edit a service's copy directly in its object.
- Add a service by adding another object that satisfies the `Service` interface.
- Hide a service by setting `isActive` to `false`.
- Reorder services by changing `displayOrder` values.
- Remove a service by removing its object; no presentation component changes are required.
- Keep `id` and `slug` unique, lowercase, and stable.
- Keep images as local Astro imports and update `imageAlt`, `imageStatus`, and `imageSource` together.

## Image status

All current Services page images reuse the existing files in `src/assets/images/editorial-preview/`.
They are Unsplash-sourced, temporary art-direction references for the private, noindex preview and
must be replaced with verified, commercially cleared client photography before launch. They are
not represented as Momen Fawzy projects.

## Workflow

The `serviceWorkflow` array is illustrative. Edit, hide, reorder, add, or remove its entries using
the same `isActive` and `displayOrder` fields.
