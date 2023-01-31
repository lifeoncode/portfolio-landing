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
  // hero section parallax effect
  const heroSection = document.querySelector(".hero");
  let scrollSpeed = heroSection.dataset.scrollspeed;
  let scrollPosition = window.pageYOffset;
  let scrollValue = scrollPosition * scrollSpeed;
  heroSection.setAttribute("style", `transform: translateY(${scrollValue}px)`);

  // every image reveals with animation when in full view
  const images = document.querySelectorAll(".image");
  images.forEach((img) => {
    if (isVisible(img)) {
      img.querySelector(".overlay").classList.add("open");
    }
  });
  // when user scrolls all the way to the top
  // re-apply image overlays
  if (window.pageYOffset === 0) {
    images.forEach((img) => {
      img.querySelector(".overlay").classList.remove("open");
    });
  }
});
