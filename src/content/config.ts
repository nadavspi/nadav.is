import { defineCollection, z } from "astro:content";
import { getFiles, getNotes, getPhotoGalleries } from "src/lib/directus";

const photoGalleries = defineCollection({
  loader: async () => {
    return getPhotoGalleries();
  },
});

const notes = defineCollection({
  loader: async () => getNotes(),
});

const files = defineCollection({
  loader: async () => getFiles(),
});

const media = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      category: z.enum(["Movie", "TV"]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      date: z.date(),
      link: z.string().optional(),
      title: z.string(),
      titleTranslated: z.string().optional(),
      yearPublished: z.number(),
    }),
});

const writing = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      blurb: z.string().optional(),
      date: z.date(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      dateUpdated: z.date().optional(),
      tags: z.array(z.string()).optional(),
      title: z.string(),
      subtitle: z.string().optional(),
    }),
});

export const collections = {
  files: files,
  media: media,
  notes: notes,
  photoGalleries: photoGalleries,
  writing: writing,
};
