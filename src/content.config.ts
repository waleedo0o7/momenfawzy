import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baseEntrySchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  draft: z.boolean().default(false),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().min(1),
        slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        category: z.string().min(1),
        projectStage: z.enum(['3D Visualization', 'Completed Project']).optional(),
        location: z.string().min(1).optional(),
        year: z.number().int().min(1900).max(2100).optional(),
        shortDescription: z.string().min(1),
        fullDescription: z.string().min(1).optional(),
        coverImage: image(),
        galleryImages: z
          .array(
            z.object({
              image: image(),
              alt: z.string().min(1),
              caption: z.string().min(1).optional(),
            }),
          )
          .default([]),
        featured: z.boolean().default(false),
        displayOrder: z.number().int().nonnegative().default(0),
        status: z.enum(['draft', 'published']).default('draft'),
        imageAlt: z.string().min(1),
        verified: z.boolean().default(false),
        demo: z.boolean().default(false),
        specifications: z
          .object({
            area: z.string().min(1).optional(),
            scope: z.string().min(1).optional(),
            services: z.array(z.string().min(1)).min(1).optional(),
          })
          .optional(),
      })
      .superRefine((project, context) => {
        if (project.status === 'published' && (!project.verified || project.demo)) {
          context.addIssue({
            code: 'custom',
            message: 'Published projects must be verified and cannot be demo entries.',
            path: ['status'],
          });
        }

        if (project.specifications && !project.verified) {
          context.addIssue({
            code: 'custom',
            message: 'Project specifications may only be added to verified projects.',
            path: ['specifications'],
          });
        }
      }),
});

const media = defineCollection({
  loader: glob({ base: './src/content/media', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    baseEntrySchema.extend({
      platform: z.enum(['youtube']).default('youtube'),
      youtubeId: z.string().regex(/^[A-Za-z0-9_-]{11}$/),
      format: z.enum(['short', 'video']).default('short'),
      category: z.string().min(1),
      language: z.enum(['ar', 'en']).default('ar'),
      displayOrder: z.number().int().nonnegative().default(0),
      publishedAt: z.coerce.date().optional(),
      externalUrl: z.url(),
      thumbnail: image(),
      thumbnailAlt: z.string().min(1),
    }),
});

export const collections = { projects, media };
