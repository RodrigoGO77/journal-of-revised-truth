import { getCollection } from "astro:content";

export async function buildMemoIndex() {
  const memos = await getCollection("memos");

  const index: Record<string, string> = {};

  for (const m of memos) {
    index[m.data.memo_id] = `/memos/${m.slug}`;
  }

  return index;
}