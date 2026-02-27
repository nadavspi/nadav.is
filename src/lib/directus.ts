import {
  authentication,
  createDirectus,
  readFiles,
  readItems,
  rest,
} from "@directus/sdk";

import type { ApiCollections } from "../types/directus-schema.ts";

const { DIRECTUS_PASSWORD, DIRECTUS_URL, DIRECTUS_USER } = import.meta.env;

const published = process.env.NODE_ENV === "development" ? {} : {
  status: {
    _eq: "published",
  },
};

const initDirectus = async () => {
  const directus = createDirectus<ApiCollections>(DIRECTUS_URL)
    .with(authentication())
    .with(rest());
  await directus.login(DIRECTUS_USER, DIRECTUS_PASSWORD);
  return directus;
};

let directusClient: Awaited<ReturnType<typeof initDirectus>> | null = null;
export const getDirectusClient = async () => {
  if (!directusClient) {
    directusClient = await initDirectus();
  }
  return directusClient;
};

export const getPhotoGalleries = async () => {
  const directus = await getDirectusClient();
  return await directus.request(
    readItems("photo_galleries", {
      fields: [
        "date",
        "description",
        "id",
        "options",
        "slug",
        "title",
        "status",
        { files: ["directus_files_id"] },
      ],
      filter: {
        ...published,
      },
    }),
  );
};
export type PhotoGallery = Awaited<ReturnType<typeof getPhotoGalleries>>;

export const getBooks = async () => {
  const directus = await getDirectusClient();
  return await directus.request(
    readItems("books", {
      fields: [
        "author",
        "cover",
        "date_created",
        "date_updated",
        "id",
        "slug",
        "title",
        { highlights: ["id", "content", "note"] },
      ],
      filter: {
        ...published,
      },
      limit: -1,
    }),
  );
};
export type Book = Awaited<ReturnType<typeof getBooks>>;

export const getNotes = async (params?: {}) => {
  const directus = await getDirectusClient();
  return await directus.request(
    readItems("notes", {
      fields: [
        "*",
        {
          blocks: [
            "collection",
            {
              item: {
                block_grid: [
                  { files: ["directus_files_id"] },
                  "options",
                  "columns",
                ],
                block_markdown: ["*"],
                block_photo: ["image"],
                block_richtext: ["*"],
              },
            },
          ],
          cover: ["id", "width", "height", "description"], //
          tags: [
            "id",
            {
              tags_id: ["id", "title", "slug"],
            },
          ],
        },
      ],
      filter: {
        ...published,
      },
      ...params,
    }),
  );
};
export type Note = Awaited<ReturnType<typeof getNotes>>;

export const getFiles = async () => {
  const directus = await getDirectusClient();
  return await directus.request(readFiles({ limit: -1 }));
};
