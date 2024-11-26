const animationContainers = document.querySelectorAll(".animation-container");

const observer = new IntersectionObserver((entries) =>
  entries.forEach((entry) => console.log(entry))
);

animationContainers.forEach((animationContainer) =>
  observer.observe(animationContainer)
);
