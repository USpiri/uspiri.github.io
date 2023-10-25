import { z, defineCollection } from "astro:content";

const mainShema = z.object({
  title: z.string(),
  description: z.string(),
  draft: z.boolean().default(true).optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
  pubDate: z.date().optional(),
});

export const blogSchema = mainShema.extend({
  tags: z.array(z.string()),
});

export const docSchema = mainShema;

const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: blogSchema,
});

const docCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: docSchema,
});

export const collections = {
  posts: blogCollection,
  docs: docCollection,
};
