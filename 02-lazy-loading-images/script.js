const imageContainers = document.querySelectorAll(".img-container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const img = container.querySelector("img[data-src]");
        const loader = container.querySelector(".loader");

        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        // Remove loader element, once the image is loaded
        img.onload = () => container.removeChild(loader);

        observer.unobserve(container);
      }
    });
  },
  {
    // Adjust root margin - Start loading 50px before the image enters viewport
    rootMargin: "50px",
  }
);

// Observe each image container
imageContainers.forEach((container) => observer.observe(container));
