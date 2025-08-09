/** * Generated TypeScript types for Directus Schema * Generated on: 2025-08-09T04:05:18.272Z */
export interface Block {
  id: string;
}

export interface Content {
  id: string;
}

export interface Ignore {
  id: string;
}

export interface Metadatum {
  id: string;
}

export interface LitestreamLock {
  id: string;
}

export interface LitestreamSeq {
  id: number;
  seq: number;
}

export interface BlockGrid {
  id: string;
  columns: number;
  blocks: unknown;
  files: number[] | BlockGridFile[];
  options: Record<string, unknown>;
}

export interface BlockGridBlock {
  id: number;
  block_grid_id: string | BlockGrid;
  item: string;
  collection: string;
  sort: number;
}

export interface BlockGridFile {
  id: number;
  block_grid_id: string | BlockGrid;
  directus_files_id: string | DirectusFile;
  sort: number;
}

export interface BlockMarkdown {
  id: string;
  content: string;
}

export interface BlockPhoto {
  id: string;
  image: string | DirectusFile;
}

export interface BlockRichtext {
  id: number;
  content: string;
}

export interface Note {
  id: string;
  title: string;
  subtitle: string;
  date: 'datetime';
  cover: string | DirectusFile;
  blocks: unknown;
  slug: string;
  tags: number[] | NotesTag[];
}

export interface NotesBlock {
  id: number;
  notes_id: string | Note;
  item: string;
  collection: string;
  sort: number;
}

export interface NotesTag {
  id: number;
  notes_id: string | Note;
  tags_id: string | Tag;
}

export interface PhotoGallery {
  id: string;
  title: string;
  subtitle: string;
  date: 'datetime';
  cover: string | DirectusFile;
  blocks: unknown;
  private: boolean;
  password: string;
}

export interface PhotoGalleriesBlock {
  id: number;
  photo_galleries_id: string | PhotoGallery;
  item: string;
  sort: number;
  collection: string;
}

export interface Tag {
  id: string;
  title: string;
  slug: string;
}

export interface DirectusFile {
  id: string;
  storage: string;
  filename_disk: string;
  filename_download: string;
  title: string;
  type: string;
  folder: string;
  uploaded_by: string;
  uploaded_on: string;
  modified_by: string;
  modified_on: string;
  charset: string;
  filesize: number;
  width: number;
  height: number;
  duration: number;
  embed: string;
  description: string;
  location: string;
  tags: string;
  metadata: string;
  created_on: string;
  focal_point_x: string;
  focal_point_y: string;
  tus_id: string;
  tus_data: string;
}

export interface DirectusUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  location: string;
  title: string;
  description: string;
  tags: string;
  avatar: string;
  language: string;
  tfa_secret: boolean;
  status: string;
  role: string;
  token: string;
  last_access: string;
  last_page: string;
  provider: string;
  external_identifier: string;
  auth_data: string;
  email_notifications: boolean;
  appearance: string;
  theme_dark: string;
  theme_light: string;
  theme_light_overrides: string;
  theme_dark_overrides: string;
  policies: string;
}

export interface DirectusFolder {
  id: string;
  name: string;
  parent: string;
}

export interface DirectusRole {
  id: string;
  name: string;
  icon: string;
  description: string;
  admin_access: boolean;
  app_access: boolean;
  children: string;
  users: string;
  parent: string;
  policies: string;
}

export interface ApiCollections {
  Blocks: Block[];
  Content: Content[];
  Ignore: Ignore[];
  Metadata: Metadatum[];
  _litestream_lock: LitestreamLock[];
  _litestream_seq: LitestreamSeq[];
  block_grid: BlockGrid[];
  block_grid_blocks: BlockGridBlock[];
  block_grid_files: BlockGridFile[];
  block_markdown: BlockMarkdown[];
  block_photo: BlockPhoto[];
  block_richtext: BlockRichtext[];
  notes: Note[];
  notes_blocks: NotesBlock[];
  notes_tags: NotesTag[];
  photo_galleries: PhotoGallery[];
  photo_galleries_blocks: PhotoGalleriesBlock[];
  tags: Tag[];
  directus_files: DirectusFile[];
}

