// Navbar
const burgerMenu = document.querySelector(".fa-bars");
const navList = document.querySelector(".nav-list");
const overlay = document.querySelector(".aside");

function showLinks() {
  overlay.classList.add("overlay-on");
}

burgerMenu.addEventListener("click", showLinks);
