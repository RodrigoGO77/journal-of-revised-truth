import { defineCollection, z } from "astro:content";

const memos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    division: z.string(),
    series: z.string().optional(),
    memo_id: z.string(), // e.g., "0-A"
    stage: z.string(),   // e.g., "Initial Circulation"
    status: z.string(),  // e.g., "Foundational (Implementation Incomplete)"
    theme: z.array(z.string()).default([]),
    provenance: z.string().optional(),
    published_at: z.string(), // ISO date, e.g., "2026-02-25"
    has_source: z.boolean().default(false),
  }),
});

export const collections = { memos };