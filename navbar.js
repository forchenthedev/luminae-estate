gsap.registerPlugin(ScrollTrigger);

const menuBtn = document.querySelector("#menuBtn");
const mobileMenu = document.querySelector("#mobileMenu");
const icon = document.querySelector("#hamburgerIcon");
let isOpen = false;

menuBtn.addEventListener('click', () => {
  isOpen = !isOpen;
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');

  if (isOpen) {
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`;
  } else {
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10M4 18h16"/>`;
  }
});

document.addEventListener("DOMContentLoaded", () => {

  gsap.from([".text-3xl", "#navbar ul li", "#navbar ul a", "#menuBtn"], {
    opacity: 0,
    y: -20,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  if (document.querySelector("#navbtn")) {
    gsap.fromTo("#navbtn",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.45, ease: "power2.out" }
    );
  }

});

