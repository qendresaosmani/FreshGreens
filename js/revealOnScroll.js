// Select elements to be revealed
const hiddenElements = document.querySelectorAll('.hidden');

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

// Observe each hidden element
hiddenElements.forEach(el => {
  observer.observe(el);
});

// const allSections = document.querySelectorAll(".section");

// const revealSection = function(entries, observer) {
//     const [entry] = entries;

//     entry.target.classList.remove("section-hidden");
// }

// const sectionObserver = new IntersectionObserver(revealSection, {
//     root: null,
//     threshold: 0.15,
// });

// allSections.forEach(function(section) {
//     sectionObserver.observe(section);
//     section.classList.add("section-hidden");
// });