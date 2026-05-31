import { defineCollection, z } from 'astro:content';

// Shared base schema used by every section. Section-specific schemas extend it.
const baseSchema = z.object({
  title: z.string(),
  section: z.enum([
    'ranks',
    'kata',
    'techniques',
    'bunkai',
    'ridori',
    'training-sessions',
  ]),
  rank: z.string().optional(),
  tags: z.array(z.string()).default([]),
  related: z.array(z.string()).default([]),
  image: z.string().optional(),
  video: z.string().optional(),
  lang: z.enum(['nb', 'en']).default('nb'),
  order: z.number().optional(),
  description: z.string().optional(),
  updated: z.coerce.date().optional(),
});

const ranks = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    section: z.literal('ranks'),
    rank: z.string(),
    requiredKata: z.array(z.string()).default([]),
    techniques: z.array(z.string()).default([]),
    senseiNotes: z.string().optional(),
  }),
});

const kata = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    section: z.literal('kata'),
    keyPoints: z.array(z.string()).default([]),
    origin: z.string().optional(),
  }),
});

const techniques = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    section: z.literal('techniques'),
    category: z
      .enum(['stillinger', 'slag', 'blokkeringer', 'spark', 'annet'])
      .optional(),
  }),
});

const bunkai = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    section: z.literal('bunkai'),
    kata: z.string().optional(),
  }),
});

const ridori = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    section: z.literal('ridori'),
  }),
});

const trainingSessions = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    section: z.literal('training-sessions'),
    duration: z.string().optional(),
    level: z.string().optional(),
    focus: z.string().optional(),
  }),
});

export const collections = {
  ranks,
  kata,
  techniques,
  bunkai,
  ridori,
  'training-sessions': trainingSessions,
};
