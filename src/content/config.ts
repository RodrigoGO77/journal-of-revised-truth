import { defineCollection, z } from "astro:content";

const memos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),

    division: z.string(),
    division_slug: z.string(), // e.g., "continuity-risk"

    series: z.string().optional(),
    series_slug: z.string().optional(),

    memo_id: z.string(), // e.g., "0-A"
    stage: z.string(),
    status: z.string(),

    // Revision mechanics (optional)
    amends: z.string().optional(),
    retracts: z.string().optional(),
    superseded_by: z.string().optional(),

    theme: z.array(z.string()).default([]),
    provenance: z.string().optional(),
    published_at: z.string(), // ISO date
    has_source: z.boolean().default(false),
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