gsap.registerPlugin(ScrollTrigger);


  // Declare cards first
  const cards = document.querySelectorAll("#cards-grid .bg-white");

  // Read URL query and filter on load - plain CSS, no GSAP
  const urlParams = new URLSearchParams(window.location.search);
  const locationQuery = urlParams.get("location");

  if (locationQuery) {
  const query = locationQuery.toLowerCase();
  document.querySelectorAll("#listings-grid .bg-white").forEach(card => {
    const locationEl = card.querySelector("p.text-gray-400");
    if (!locationEl) return;
    const location = locationEl.textContent.toLowerCase();
    const match = location.includes(query);
    if (match) {
      card.style.display = "block";
      card.style.opacity = "1";
    } else {
      card.style.display = "none";
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {

  // Heading
  gsap.from("#listings-section h1", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out"
  });

  // Paragraph
  gsap.from("#listings-section p", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: 0.2,
    ease: "power3.out"
  });

  // Filter bar
  gsap.from("#listings-section .flex.gap-4", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.4,
    ease: "power3.out"
  });



  // Footer
  gsap.from("#footer .grid > div", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top 95%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
  });

  gsap.from("#footer .border-t", {
    scrollTrigger: {
      trigger: "#footer .border-t",
      start: "top 95%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power3.out"
  });

  // Filter functionality
  const filterBtn = document.querySelector("#filter-btn");
  const filterType = document.querySelector("#filter-type");
  const filterPrice = document.querySelector("#filter-price");
  const filterBeds = document.querySelector("#filter-beds");

  filterBtn.addEventListener("click", () => {
    const type = filterType.value;
    const price = filterPrice.value;
    const beds = filterBeds.value;

    cards.forEach(card => {
      const cardType = card.dataset.type;
      const cardPrice = card.dataset.price;
      const cardBeds = parseInt(card.dataset.beds);

      const typeMatch = type === "All Properties" || cardType === type.toLowerCase();
      const priceMatch = price === "$1M - $5M" && cardPrice === "1" ||
                         price === "$5M - $10M" && cardPrice === "2" ||
                         price === "$10M+" && cardPrice === "3" ||
                         price === "$1M - $5M";
      const bedsMatch = beds === "2+ Bedrooms" && cardBeds >= 2 ||
                        beds === "3+ Bedrooms" && cardBeds >= 3 ||
                        beds === "4+ Bedrooms" && cardBeds >= 4 ||
                        beds === "5+ Bedrooms" && cardBeds >= 5;

      if (typeMatch && priceMatch && bedsMatch) {
        gsap.to(card, { opacity: 1, scale: 1, duration: 0.4, display: "block" });
      } else {
        gsap.to(card, { opacity: 0, scale: 0.95, duration: 0.4, onComplete: () => {
          card.style.display = "none";
        }});
      }
    });
  });

});