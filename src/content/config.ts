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
});

export const blogSchema = mainShema.extend({
  tags: z.array(z.string()),
  pubDate: z.date(),
});

export const docSchema = mainShema.extend({
  order: z.number().optional(),
  prev: z.string().optional(),
  next: z.string().optional(),
});

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
