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
