import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	const origin = new URL(context.site).origin;
	const siteWithBase = new URL(import.meta.env.BASE_URL || '/', origin).toString();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: siteWithBase,
		items: posts.map((post) => ({
			...post.data,
			link: new URL(`blog/${post.id}/`, siteWithBase).toString(),
		})),

	});
}
