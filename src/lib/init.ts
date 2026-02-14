export const init = (func: () => void) => {
  func();
  document.addEventListener("astro:after-swap", func);
};

export default init;
