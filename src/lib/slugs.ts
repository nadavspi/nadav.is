export const slugs = {
  photoGalleries: 'photography',
  notes: 'notes',
  books: 'reading',
}

export const makeHref = (type: keyof typeof slugs, slug?: string) => {
  return '/' + [slugs[type], slug].filter(Boolean).join('/');
}
