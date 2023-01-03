// Hamburger button and mobile Nav
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

// Sections Scroll Animation
const featuresSection = document.getElementById("features");
const testimonialSection = document.getElementById("testimonials");
const sections = [featuresSection, testimonialSection];

window.addEventListener("scroll", checkSections);
checkSections();

function checkSections() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  for (let section of sections) {
    const sectionTopPoint = section.getBoundingClientRect().top;
    if (sectionTopPoint < triggerBottom) {
      section.classList.add("show");
    }
  }
}
