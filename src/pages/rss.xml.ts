import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context: { site: any }) {
  return rss({
    title: "Uriel spiridione | Blog",
    description: "Personal blog and repository",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>es-ar</language>`,
  });
}
