var ham = document.querySelector(".ham");
var checker = true;
var nav1 = document.querySelector(".navv");
var nav2 = document.querySelector(".second-nav");

ham.addEventListener("click", () => {
  if (checker) {
    // Show both nav bars
    nav1.style.display = "flex";
    nav2.style.display = "flex";
    checker = false;
  } else {
    // Hide both nav bars
    nav1.style.display = "none";
    nav2.style.display = "none";
    checker = true;
  }
});
