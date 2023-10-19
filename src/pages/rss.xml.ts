import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: any }) {
  const posts = (await getCollection("posts")).map((post) => ({
    ...post.data,
    link: post.slug,
  }));
  return rss({
    title: "Uriel spiridione | Blog",
    description: "Personal blog and repository",
    site: context.site,
    items: posts,
    stylesheet: "/rss/styles.xsl",
    customData: `<language>es-ar</language>`,
  });
}
