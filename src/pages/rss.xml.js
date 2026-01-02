import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import siteConfig from "../site.json";

export async function GET(context) {
  const posts = await getCollection("blog");
  const origin = new URL(context.site).origin;
  const siteWithBase = new URL(
    import.meta.env.BASE_URL || "/",
    origin,
  ).toString();
  return rss({
    title: siteConfig.TITLE,
    description: siteConfig.DESCRIPTION,
    site: siteWithBase,
    items: posts.map((post) => ({
      ...post.data,
      link: new URL(`blog/${post.id}/`, siteWithBase).toString(),
    })),
  });
}
