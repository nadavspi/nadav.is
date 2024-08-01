import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const writing = await getCollection("writing");
	const media = await getCollection("media");
	const reading = await getCollection("reading");
	const items = [...writing, ...reading, ...media].sort(
		(a, b) => b.data.date - a.data.date,
	);

	return rss({
		title: "Nadav Spiegelman",
		description: "Photos, musings, etc.",
		site: context.site,
		items: items.map((item) => {
			const href = (() => {
				const { collection, slug } = item;
				if (collection === "writing") {
					return `/notes/${slug}`;
				}
				if (collection === "media") {
					return `/notes/media/${slug}`;
				}
				if (collection === "reading") {
					return `/notes/reading/${slug}`;
				}

				throw new Error(`Missing href logic for collection \`${collection}\``);
			})();

			return {
				title: item.data.title,
				pubDate: item.data.date,
				description: item.data.subtitle || item.data.titleTranslated,
				link: href,
			};
		}),
	});
}
