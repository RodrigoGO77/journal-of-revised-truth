import { defineCollection, z } from "astro:content";

const memos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),

    division: z.string(),
    division_slug: z.string(),

    series: z.string().optional(),
    series_slug: z.string().optional(),

    memo_id: z.string(),
    document_id: z.string().optional(),
    stage: z.string(),
    status: z.string(),

    // Revision mechanics (optional)
    amends: z.string().optional(),
    retracts: z.string().optional(),
    superseded_by: z.string().optional(),

    // Cross-references between memoranda
    references: z.array(z.string()).optional(),

    theme: z.array(z.string()).default([]),
    provenance: z.string().optional(),
    published_at: z.string(),
    has_source: z.boolean().default(false),

    stamp: z.string().optional(),
  }),
});

const letters = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    from: z.string(),
    topic: z.string(),
    published_at: z.string(),
    status: z.string().optional(),
  }),
});

export const collections = {
  memos,
  letters,
};