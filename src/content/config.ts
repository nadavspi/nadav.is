import { defineCollection, z } from "astro:content";
import {
  getBooks,
  getFiles,
  getNotes,
  getPhotoGalleries,
} from "src/lib/directus";

const photoGalleries = defineCollection({
  loader: async () => {
    return getPhotoGalleries();
  },
});

const books = defineCollection({
  loader: async () => {
    return getBooks();
  },
});

const notes = defineCollection({
  loader: async () =>
    getNotes({
      filter: {
        password: {
          _empty: true,
        },
        status: {
          _eq: "published",
        },
      },
    }),
});

const files = defineCollection({
  loader: async () => getFiles(),
});

const media = defineCollection({
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
  type: "content",
});

const writing = defineCollection({
  schema: ({ image }) =>
    z.object({
      blurb: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      date: z.date(),
      dateUpdated: z.date().optional(),
      subtitle: z.string().optional(),
      tags: z.array(z.string()).optional(),
      title: z.string(),
    }),
  type: "content",
});

export const collections = {
  books,
  files: files,
  media: media,
  notes: notes,
  photoGalleries: photoGalleries,
  writing: writing,
};
