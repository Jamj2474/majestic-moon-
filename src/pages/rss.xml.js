import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Jamie James | Blog',
    description: 'My Astro Learning Blog',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}