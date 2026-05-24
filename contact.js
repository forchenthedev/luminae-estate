gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  // Header
  gsap.from("#contact-section h2", {
    opacity: 0,
    y: 50,
    duration: 0.9,
    ease: "power3.out"
  });

  gsap.from("#contact-section p", {
    opacity: 0,
    y: 30,
    duration: 0.9,
    delay: 0.2,
    ease: "power3.out"
  });

  // Form slides from left
  gsap.from("#contact-section h3", {
    opacity: 0,
    x: -50,
    duration: 0.9,
    delay: 0.4,
    ease: "power3.out"
  });

  gsap.from("#contact-section input, #contact-section textarea", {
    opacity: 0,
    x: -30,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.1,
    ease: "power3.out"
  });

  gsap.from("#contact-section button", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.9,
    ease: "power3.out"
  });

  // Office info slides from right
  gsap.from("#contact-section .grid > div:last-child", {
    opacity: 0,
    x: 50,
    duration: 0.9,
    delay: 0.4,
    ease: "power3.out"
  });

});