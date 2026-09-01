document.getElementById("year").textContent = String(new Date().getFullYear());

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.removeAttribute("src");
  document.body.style.overflow = "";
}

document.querySelectorAll("#gallery img").forEach((img) => {
  img.addEventListener("click", () => openLightbox(img.src, img.alt));
});

lightbox.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
});

const video = document.getElementById("intro-video");
const videoToggle = document.getElementById("video-toggle");

function syncVideoToggle() {
  const paused = video.paused;
  videoToggle.querySelector("span").textContent = paused ? "▶" : "❚❚";
  videoToggle.setAttribute("aria-label", paused ? "Play video" : "Pause video");
  videoToggle.classList.toggle("is-paused", paused);
}

function toggleVideo() {
  if (video.paused) video.play();
  else video.pause();
}

videoToggle.addEventListener("click", toggleVideo);
video.addEventListener("click", toggleVideo);
video.addEventListener("play", syncVideoToggle);
video.addEventListener("pause", syncVideoToggle);
syncVideoToggle();

const navLinks = new Map();
document.querySelectorAll(".site-header nav a").forEach((link) => {
  const section = document.querySelector(link.getAttribute("href"));
  if (section) navLinks.set(section, link);
});

const header = document.querySelector(".site-header");

function highlightNav() {
  const line = header.getBoundingClientRect().height + 24;
  let current = null;
  navLinks.forEach((_link, section) => {
    if (section.getBoundingClientRect().top <= line) current = section;
  });

  const atBottom =
    window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
  if (atBottom) current = [...navLinks.keys()].pop();

  navLinks.forEach((link, section) => {
    link.classList.toggle("is-active", section === current);
  });
}

highlightNav();
window.addEventListener("scroll", highlightNav, { passive: true });
window.addEventListener("resize", highlightNav);
