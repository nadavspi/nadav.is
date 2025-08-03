import {
  authentication,
  createDirectus,
  readFiles,
  readItems,
  rest,
} from "@directus/sdk";
import type { ApiCollections } from "../types/directus-schema.ts";

const { DIRECTUS_URL, DIRECTUS_USER, DIRECTUS_PASSWORD } = import.meta.env;

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
      fields: ["id", "title", "cover"],
    }),
  );
};
export type PhotoGallery = Awaited<ReturnType<typeof getPhotoGalleries>>;

export const getNotes = async () => {
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
                block_grid: [{ files: ["directus_files_id"], blocks: "*" }],
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
    }),
  );
};
export type Note = Awaited<ReturnType<typeof getNotes>>;

export const getFiles = async () => {
  const directus = await getDirectusClient();
  return await directus.request(readFiles());
};
