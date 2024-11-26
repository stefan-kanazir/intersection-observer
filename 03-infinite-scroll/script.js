// Determine number of cards needed based on the screen size
function cardsToLoad() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    return 12; // 3 columns
  } else if (window.matchMedia("(min-width: 640px)").matches) {
    return 8; // 2 columns
  } else {
    return 4; // 1 column
  }
}

let itemCount = 0;
const container = document.getElementById("container");
const loader = document.getElementById("loader");

function loadContent() {
  for (let i = 0; i < cardsToLoad(); i++) {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.textContent = `Card ${++itemCount}`;

    container.appendChild(cardElement);
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadContent();
      }
    });
  },
  {
    rootMargin: "100px",
  }
);

observer.observe(loader);

// Initial content load
loadContent();
