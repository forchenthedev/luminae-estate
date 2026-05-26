gsap.registerPlugin(ScrollTrigger);

// Search - runs immediately when script loads
const heroSearchBtn = document.querySelector("#hero-search-btn");
const heroSearchInput = document.querySelector("#search-input");

if (heroSearchBtn) {
  heroSearchBtn.onclick = () => {
    const query = heroSearchInput.value.trim();
    if (query) {
      window.location.href = `listings.html?location=${encodeURIComponent(query)}`;
    } else {
      window.location.href = "listings.html";
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {

  // Hero
  gsap.from("section h1", {
    opacity: 0,
    y: 60,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
  });

  gsap.from("section .flex.items-center.text-center", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.9,
    ease: "power3.out"
  });

  // Featured listing
  gsap.from("#featured span, #featured h2, #featured a", {
    scrollTrigger: { trigger: "#featured", start: "top 80%" },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
  });

  // Cards
  gsap.utils.toArray("#cards-grid .bg-white").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: "top 90%" },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.15,
      ease: "power3.out"
    });
  });

  // List your property
  gsap.from("#list-property h2, #list-property p, #list-property a", {
    scrollTrigger: { trigger: "#list-property", start: "top 80%" },
    opacity: 0,
    x: -60,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });

  gsap.from("#list-property img", {
    scrollTrigger: { trigger: "#list-property", start: "top 80%" },
    opacity: 0,
    x: 60,
    duration: 1,
    ease: "power3.out"
  });

  // Footer
  gsap.from("#footer .grid > div", {
    scrollTrigger: { trigger: "#footer", start: "top 90%" },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
  });

  gsap.from("#footer .border-t", {
    scrollTrigger: { trigger: "#footer .border-t", start: "top 95%" },
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power3.out"
  });

});