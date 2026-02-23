export const maybeOpen = (mediaQuery: string, selector: string) => {
  let shouldOpen = window.matchMedia(mediaQuery);
  shouldOpen.addEventListener("change", () => maybeOpen(mediaQuery, selector));

  const element = document.querySelector(selector);
  if (!element) {
    return;
  }

  if (shouldOpen.matches) {
    element.setAttribute("open", "true");
  } else {
    element.removeAttribute("open");
  }
};

export default maybeOpen;
