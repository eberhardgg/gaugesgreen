import rss from "@astrojs/rss";
import { HOME } from "@consts";

type Context = {
  site: string
}

export async function GET(context: Context) {
  // No content collections currently - RSS feed is empty but available
  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: [],
  });
}
