import { createDirectus, readItems, rest } from "@directus/sdk";
import type { ApiCollections } from "../types/directus-schema.ts";

export const initDirectus = () => {
  return createDirectus<ApiCollections>(import.meta.env.DIRECTUS_URL).with(
    rest(),
  );
};

export const getPhotoGalleries = async () => {
  return await initDirectus().request(
    readItems("photo_galleries", {
      fields: ["id", "title", "cover"],
    }),
  );
};
export type PhotoGallery = Awaited<ReturnType<typeof getPhotoGalleries>>;

export const getNotes = async () => {
  return await initDirectus().request(
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
