const images = document.querySelectorAll("img[data-src]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img); // Stop observing, once the image is loaded
      }
    });
  },
  {
    // Adjust root margin - Start loading 50px before the image enters viewport
    rootMargin: "50px",
  }
);

// Observe each image
images.forEach((img) => observer.observe(img));
