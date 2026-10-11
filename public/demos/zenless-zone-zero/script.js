document.querySelectorAll("nav a").forEach((anchor) => {
  const href = anchor.getAttribute("href");
  if (href && href.startsWith("#")) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
});

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  } else {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  }
});

const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".character-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.5s, transform 0.5s";
  observer.observe(card);
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedLists = document.querySelectorAll(
    ".character-extra ul, .world-extra ul, .about-extra ul"
  );
  animatedLists.forEach((ul, i) => {
    setTimeout(() => {
      ul.classList.add("visible");
    }, 300 + i * 250);
  });
});

let lastScrollY = window.scrollY;
const nav = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY && window.scrollY > 80) {
    nav.style.transform = "translateY(-100%)";
    nav.style.transition = "transform 0.4s cubic-bezier(.77,0,.18,1)";
  } else {
    nav.style.transform = "translateY(0)";
    nav.style.transition = "transform 0.4s cubic-bezier(.77,0,.18,1)";
  }
  lastScrollY = window.scrollY;
});
