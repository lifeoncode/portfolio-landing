// check if an element is visible in the viewport
const isVisible = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// attach scroll event on window
window.addEventListener("scroll", (e) => {
  console.log(isVisible(document.querySelector(".image")));
});
