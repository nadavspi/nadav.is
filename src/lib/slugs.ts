export const slugs = {
  photoGalleries: 'gallery',
  notes: 'notes',
}

export const makeHref = (type: keyof typeof slugs, slug?: string) => {
  return '/' + [slugs[type], slug].join('/');
}
