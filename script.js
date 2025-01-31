document.addEventListener("DOMContentLoaded", function () {
  const hamButton = document.querySelector(".ham");
  const closeButton = document.querySelector(".icon-close");
  const firstNav = document.querySelector(".navv");

  hamButton.addEventListener("click", () => {
      firstNav.classList.add("active");
  });

  closeButton.addEventListener("click", () => {
      firstNav.classList.remove("active");
  });

  
  const currentPage = window.location.pathname.split("/").pop() || "index.html"; 
  const firstNavLinks = document.querySelectorAll(".navv a");
  const secondNavLinks = document.querySelectorAll(".second-nav a");

  function setActiveNav(links) {
      links.forEach((link) => {
          if (link.getAttribute("href") === currentPage) {
              link.classList.add("active");
          } else {
              link.classList.remove("active");
          }
      });
  }

  setActiveNav(firstNavLinks);

  setActiveNav(secondNavLinks);
});