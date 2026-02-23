import { makeHref } from "src/lib/slugs";

export default [
  { href: "/", text: "Home" },
  { href: makeHref("photoGalleries"), text: "Photography" },
  { href: makeHref("notes"), text: "Writing" },
  { href: makeHref("books"), text: "Reading" },
]
