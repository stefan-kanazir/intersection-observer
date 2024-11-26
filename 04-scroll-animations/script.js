const animationContainers = document.querySelectorAll(".animation-container");

const observer = new IntersectionObserver((entries) =>
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.setAttribute("data-is-viewed", true);

      // Run the animation only one time
      observer.unobserve(entry.target);
    }
  })
);

animationContainers.forEach((animationContainer) =>
  observer.observe(animationContainer)
);
