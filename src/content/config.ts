import { defineCollection, z } from 'astro:content';

const photoCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const reading = defineCollection({
  type: 'content', 
  schema: z.object({
    author: z.string(),
    category: z.enum(["articles", "books"]),
    // readwise will return "None" for undefined date
    datePublished: z.date().or(z.string()).optional(),
    date: z.date().optional(),
    link: z.string().url().optional(),
    // coerce because we may have numerical titles
    title: z.coerce.string(),
    titleTranslated: z.string().optional(),
  }),
});

const watching = defineCollection({
  type: 'content', 
  schema: z.object({
    category: z.enum(["Movie", "TV"]),
    date: z.date(),
    link: z.string().optional(),
    title: z.string(),
    titleTranslated: z.string().optional(),
    yearPublished: z.number(),
  }),
});


const writing = defineCollection({
  type: 'content', 
  schema: ({ image }) => z.object({
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
  "reading": reading,
  "photoCollection": photoCollection,
  "writing": writing,
  "watching": watching,
};
