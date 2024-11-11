const mainSection = document.getElementById("main-section");
const target = document.getElementById("target");
const box = document.getElementById("box");
const boxText = document.querySelector("#box span");

const options = {
  root: mainSection,
  threshold: 1.0,
};

// Docs - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
const observer = new IntersectionObserver((entries) => {
  box.setAttribute("data-is-target-visible", entries[0].isIntersecting);

  boxText.textContent = entries[0].isIntersecting ? "Yes 🎉" : "No 🙅‍♂️";
});

observer.observe(target);
