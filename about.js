gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  // Hero
  gsap.from("#about-hero h1", {
    opacity: 0,
    y: 60,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
  });

  gsap.from("#about-hero p", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.8,
    ease: "power3.out"
  });

  // Our Story - text slides from left
  gsap.from("#about-content .flex-1:first-child p, #about-content .flex-1:first-child h2", {
    scrollTrigger: { trigger: "#about-content", start: "top 80%" },
    opacity: 0,
    x: -60,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });

  // Our Story - image slides from right
  gsap.from("#about-content .flex-1:last-child img", {
    scrollTrigger: { trigger: "#about-content", start: "top 80%" },
    opacity: 0,
    x: 60,
    duration: 1,
    ease: "power3.out"
  });

  // Estate Philosophy heading
  gsap.from("#about-content .text-center h1", {
    scrollTrigger: { trigger: "#about-content .text-center", start: "top 85%" },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out"
  });

  // Philosophy cards
  gsap.utils.toArray("#about-content .grid .bg-white, #about-content .grid .bg-\\[\\#1B263B\\]").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: "top 90%" },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.15,
      ease: "power3.out"
    });
  });

  // Visionary Leadership
  gsap.from("#about-content h1.font-bold.text-3xl", {
    scrollTrigger: { trigger: "#about-content h1.font-bold.text-3xl", start: "top 85%" },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out"
  });

  // Team cards
  gsap.utils.toArray("#about-content .grid .overflow-hidden").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: "top 90%" },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.15,
      ease: "power3.out"
    });
  });

  // Footer
  gsap.from("#footer .grid > div", {
    scrollTrigger: { trigger: "#footer", start: "top 95%" },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
  });

});