const menuBtn = document.querySelector(".menu-btn");
const nav_links = document.querySelector(".nav-links");

//init menu-btn
let isMenuOpen = false;

//add event listerner
menuBtn.addEventListener("click", () => {
  if (!isMenuOpen) {
    menuBtn.classList.add("open");
    isMenuOpen = true;
    addRemoveLinks();
  } else {
    menuBtn.classList.remove("open");
    isMenuOpen = false;
    addRemoveLinks();
  }
});

//function to add/remove show-links based on menuBtn classList
function addRemoveLinks() {
  if (nav_links.classList.contains("show-links")) {
    nav_links.classList.remove("show-links");
  } else {
    nav_links.classList.add("show-links");
  }
}
