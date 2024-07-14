// Select the "Blogs" link and the blogs section
const blogsLink = document.querySelector("#blogs-link");
const blogsSection = document.querySelector("#blogs");

// Add an event listener to the "Blogs" link
blogsLink.addEventListener("click", function(e) {
  e.preventDefault(); // Prevent the default anchor behavior

  // Smooth scroll to the blogs section
  blogsSection.scrollIntoView({
    behavior: "smooth"
  });
});

