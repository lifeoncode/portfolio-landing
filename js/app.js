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

// function for all element animations
const elementAnimations = () => {
  // every image reveals with animation when in full view
  const images = document.querySelectorAll(".image");
  images.forEach((img) => {
    if (isVisible(img)) {
      img.querySelector(".overlay").classList.add("open");
    }
  });

  // heading text animation
  const headings = document.querySelectorAll(".heading");
  headings.forEach((heading) => {
    if (isVisible(heading)) {
      heading.querySelector("span").classList.add("show");
    }
  });

  // paragraph text animaiton
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((paragraph) => {
    if (isVisible(paragraph)) {
      paragraph.querySelector("span").classList.add("show");
    }
  });
};

// run animations on content load
window.addEventListener("load", (e) => {
  elementAnimations();
});

// attach scroll event on window
window.addEventListener("scroll", (e) => {
  // hero section parallax effect
  const heroSection = document.querySelector(".hero");
  let scrollSpeed = heroSection.dataset.scrollspeed;
  let scrollPosition = window.pageYOffset;
  let scrollValue = scrollPosition * scrollSpeed;
  heroSection.setAttribute("style", `transform: translateY(${scrollValue}px)`);

  // keep calling the element animations function on user scroll
  elementAnimations();

  // when user scrolls all the way to the top
  // re-apply image overlays
  if (window.pageYOffset === 0) {
    images.forEach((img) => {
      img.querySelector(".overlay").classList.remove("open");
    });
  }
});

// menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuLinks = menu.querySelectorAll("a");

menuToggle.addEventListener("click", openMenu);
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function openMenu() {
  menuToggle.removeEventListener("click", openMenu);
  menuToggle.addEventListener("click", closeMenu);
  menu.classList.add("open");
}

function closeMenu() {
  menuToggle.removeEventListener("click", closeMenu);
  menuToggle.addEventListener("click", openMenu);
  menu.classList.remove("open");
}
