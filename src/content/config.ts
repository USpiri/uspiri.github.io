import { z, defineCollection } from "astro:content";

const mainShema = z.object({
  title: z.string(),
  tags: z.array(z.string()).optional(),
  date: z.date(),
  draft: z.boolean().default(true),
  published: z.boolean().default(true),
  serie: z.string().optional(),
  category: z
    .enum(["Programación", "Economía", "Fotografía", "Desarrollo personal"])
    .optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
  description: z
    .string()
    .max(
      160,
      "For best SEO results, please keep the description under 160 characters."
    ),
});

const shortShema = z.object({
  title: z.string(),
  draft: z.boolean().default(true),
  description: z
    .string()
    .max(
      160,
      "For best SEO results, please keep the description under 160 characters."
    ),
});

const snippetShema = shortShema.extend({
  lang: z.string(),
});

const dailyShema = shortShema.extend({
  date: z.date(),
});

const blogCollection = defineCollection({
  type: "content",
  schema: mainShema,
});

const snippetCollection = defineCollection({
  type: "content",
  schema: snippetShema,
});

const dailyCollection = defineCollection({
  type: "content",
  schema: dailyShema,
});

export const collections = {
  blog: blogCollection,
  snippet: snippetCollection,
  daily: dailyCollection,
};
